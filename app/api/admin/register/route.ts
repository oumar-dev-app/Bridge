import { NextResponse } from "next/server";
import { db } from "@/lib/db";
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

    await db.execute(
      "INSERT INTO admin (email, password) VALUES (?, ?)",
      [email, hash]
    );

    return NextResponse.json(
      { message: "Admin créé" },
      { status: 201 }
    );
  } catch (error: any) {
    if (error.code === "ER_DUP_ENTRY") {
      return NextResponse.json(
        { message: "Admin déjà existant" },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { message: "Erreur serveur" },
      { status: 500 }
    );
  }
}
