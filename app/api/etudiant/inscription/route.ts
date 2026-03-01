import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function POST(req: Request) {
  try {
    const { nom, prenom, email, telephone, niveauAnglais, pays, quartier } = await req.json();

    // Vérification des champs obligatoires
    if (!nom || !prenom || !email || !telephone || !quartier) {
      return NextResponse.json(
        { message: "Champs obligatoires manquants" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("inscription")
      .insert([{ nom, prenom, email, telephone, niveauAnglais, pays, quartier }]);

    if (error) {
      // Gestion des doublons (PostgreSQL code 23505 = violation unique constraint)
      if (error.code === "23505") {
        return NextResponse.json(
          { message: "Email déjà utilisé" },
          { status: 409 }
        );
      }
      throw error;
    }

    return NextResponse.json(
      { message: "Inscription enregistrée", data },
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