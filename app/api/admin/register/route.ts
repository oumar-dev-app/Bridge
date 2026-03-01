import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email et mot de passe requis" },
        { status: 400 }
      );
    }

    const hash = await bcrypt.hash(password, 10);

    const { data, error } = await supabase
      .from("admin")
      .insert([{ email, password: hash }]);

    if (error) {
      // Gestion du doublon : PostgreSQL code 23505 = unique_violation
      if (error.code === "23505") {
        return NextResponse.json(
          { message: "Admin déjà existant" },
          { status: 409 }
        );
      }
      throw error;
    }

    return NextResponse.json(
      { message: "Admin créé", data },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Erreur Supabase:", error);
    return NextResponse.json(
      { message: "Erreur serveur" },
      { status: 500 }
    );
  }
}