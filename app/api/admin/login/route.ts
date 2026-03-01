import { supabase } from "@/lib/supabaseClient";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email et mot de passe requis" },
        { status: 400 }
      );
    }

    // Récupération de l'admin depuis Supabase
    const { data: admins, error } = await supabase
      .from("admin")
      .select("*")
      .eq("email", email)
      .single(); // on récupère un seul admin

    if (error) {
      return NextResponse.json(
        { message: "Erreur serveur" },
        { status: 500 }
      );
    }

    if (!admins) {
      return NextResponse.json(
        { message: "Identifiants incorrects" },
        { status: 401 }
      );
    }

    const isValid = await bcrypt.compare(password, admins.password);

    if (!isValid) {
      return NextResponse.json(
        { message: "Mot de passe incorrect" },
        { status: 401 }
      );
    }

    // Création du token JWT
    const token = jwt.sign(
      { adminId: admins.id, username: admins.username },
      process.env.JWT_SECRET as string,
      { expiresIn: "1d" }
    );

    // Réponse avec le cookie
    const response = NextResponse.json({ message: "Connexion réussie" });
    response.cookies.set("admin_token", token, {
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24,
    });

    return response;
  } catch (err: any) {
    console.error("Erreur Supabase:", err);
    return NextResponse.json(
      { message: "Erreur serveur" },
      { status: 500 }
    );
  }
}