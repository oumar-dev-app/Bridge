import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

type Params = {
  id: string;
};

/* ========================= PUT ========================= */
export const PUT = async (
  request: NextRequest,
  { params }: { params: Promise<Params> }
) => {
  const { id } = await params;
  const etudiantId = Number(id);

  if (isNaN(etudiantId)) {
    return NextResponse.json(
      { message: "ID invalide" },
      { status: 400 }
    );
  }

  const body = await request.json();
  const { nom, prenom, email, telephone, niveauAnglais, quartier } = body;

  const [result]: any = await db.execute(
    `UPDATE inscription
     SET nom=?, prenom=?, email=?, telephone=?, niveauAnglais=?, quartier=?
     WHERE id=?`,
    [nom, prenom, email, telephone, niveauAnglais, quartier, etudiantId]
  );

  return NextResponse.json({
    message: "Étudiant modifié",
    affectedRows: result.affectedRows,
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
    return NextResponse.json(
      { message: "ID invalide" },
      { status: 400 }
    );
  }

  const [result]: any = await db.execute(
    "DELETE FROM inscription WHERE id = ?",
    [etudiantId]
  );

  if (result.affectedRows === 0) {
    return NextResponse.json(
      { message: "Aucun étudiant trouvé" },
      { status: 404 }
    );
  }

  return NextResponse.json({
    message: "Étudiant supprimé",
    affectedRows: result.affectedRows,
  });
};
