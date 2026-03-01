import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

type Params = { id: string };

/* ========================= PUT ========================= */
export const PUT = async (
  request: NextRequest,
  { params }: { params: Promise<Params> }
) => {
  const { id } = await params;
  const etudiantId = Number(id);

  if (isNaN(etudiantId)) {
    return NextResponse.json({ message: "ID invalide" }, { status: 400 });
  }

  const body = await request.json();
  const { nom, prenom, email, telephone, niveauAnglais, quartier, pays } = body;

  const { data, error } = await supabase
    .from("inscription")
    .update({ nom, prenom, email, telephone, niveauAnglais, quartier, pays })
    .eq("id", etudiantId);

  if (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }

  return NextResponse.json({
    message: "Étudiant modifié",
    data,
  });
};

/* ========================= DELETE ========================= */
export const DELETE = async (
  request: NextRequest,
  { params }: { params: Promise<Params> }
) => {
  const { id } = await params;
  const etudiantId = Number(id);

  if (isNaN(etudiantId)) {
    return NextResponse.json({ message: "ID invalide" }, { status: 400 });
  }

  // Ajout de .select() pour récupérer les lignes supprimées
  const { data, error } = await supabase
    .from("inscription")
    .delete()
    .eq("id", etudiantId)
    .select(); // <-- récupère les lignes supprimées

  if (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }

  if (!data || data.length === 0) {
    return NextResponse.json({ message: "Aucun étudiant trouvé" }, { status: 404 });
  }

  return NextResponse.json({
    message: "Étudiant supprimé",
    data,
  });
};