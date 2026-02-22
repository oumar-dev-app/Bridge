import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const {
      nom,
      prenom,
      email,
      telephone,
      niveauAnglais,
      pays,
      quartier,
    } = await req.json();

    if (!nom || !prenom || !email || !telephone || !quartier) {
      return NextResponse.json(
        { message: "Champs obligatoires manquants" },
        { status: 400 }
      );
    }

    const sql = `
      INSERT INTO inscription
      (nom, prenom, email, telephone, niveauAnglais, pays, quartier)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    await db.execute(sql, [
      nom,
      prenom,
      email,
      telephone,
      niveauAnglais,
      pays,
      quartier,
    ]);

    return NextResponse.json(
      { message: "Inscription enregistrée" },
      { status: 201 }
    );
  } catch (error: any) {
    if (error.code === "ER_DUP_ENTRY") {
      return NextResponse.json(
        { message: "Email déjà utilisé" },
        { status: 409 }
      );
    }

    console.error(error);
    return NextResponse.json(
      { message: "Erreur serveur" },
      { status: 500 }
    );
  }
}
