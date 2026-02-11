import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export const PUT: any = async (request: NextRequest, context: any) => {
  const id = Number(context.params.id);
  if (isNaN(id)) return NextResponse.json({ message: "ID invalide" });

  const body = await request.json();
  const { nom, prenom, email, telephone, niveauAnglais, quartier } = body;

  const [result]: any = await db.execute(
    `UPDATE inscription SET nom=?, prenom=?, email=?, telephone=?, niveauAnglais=?, quartier=? WHERE id=?`,
    [nom, prenom, email, telephone, niveauAnglais, quartier, id]
  );

  return NextResponse.json({ message: "Étudiant modifié", affectedRows: result.affectedRows });
};

export const DELETE: any = async (request: NextRequest, context: any) => {
  const id = Number(context.params.id);
  if (isNaN(id)) return NextResponse.json({ message: "ID invalide" });

  const [result]: any = await db.execute("DELETE FROM inscription WHERE id = ?", [id]);

  if (result.affectedRows === 0) return NextResponse.json({ message: "Aucun étudiant trouvé" }, { status: 404 });

  return NextResponse.json({ message: "Étudiant supprimé", affectedRows: result.affectedRows });
};
