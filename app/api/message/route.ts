import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function POST(req: Request) {
  try {
    const { email, message } = await req.json();

    const { data, error } = await supabase
      .from("Message")
      .insert([{ email, message }]);

    if (error) {
      // Gestion de l'erreur de doublon (unique constraint)
      if (error.code === "23505") { // PostgreSQL code pour "unique_violation"
        return NextResponse.json(
          { message: "Email déjà utilisé" },
          { status: 409 }
        );
      }
      throw error;
    }

    return NextResponse.json(
      { message: "Message envoyé avec succès", data },
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