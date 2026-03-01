import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params; // 🔑 OBLIGATOIRE
  const messageId = Number(id);

  if (isNaN(messageId)) {
    return NextResponse.json({ message: "ID invalide" }, { status: 400 });
  }

  try {
    // Ajout de .select() pour récupérer les lignes supprimées
    const { data, error } = await supabase
      .from("Message")
      .delete()
      .eq("id", messageId)
      .select(); // <-- indispensable pour que data soit un tableau

    if (error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }

    if (!data || data.length === 0) {
      return NextResponse.json({ message: "Message introuvable" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Message supprimé avec succès", data },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Erreur suppression Supabase:", error);
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
  }
}