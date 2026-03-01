import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export const PUT = async (request: NextRequest, context: any) => {
  // Récupère l'id depuis le context.params ou le body
  const id = Number(context.params?.id ?? (await request.json()).id);
  if (isNaN(id)) {
    return NextResponse.json({ message: "ID invalide" }, { status: 400 });
  }

  const { nom, prenom, email, telephone, niveauAnglais, quartier, pays } = await request.json();

  try {
    // Ajout de .select() pour récupérer les lignes mises à jour
    const { data, error } = await supabase
      .from("etudiants")
      .update({ nom, prenom, email, telephone, niveauAnglais, quartier, pays })
      .eq("id", id)
      .select(); // <-- indispensable pour que data soit un tableau

    if (error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }

    // Vérification si aucune ligne n'a été trouvée
    if (!data || data.length === 0) {
      return NextResponse.json({ message: "Étudiant non trouvé" }, { status: 404 });
    }

    return NextResponse.json({ message: "Modifié", data });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
  }
};