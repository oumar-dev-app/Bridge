import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const {
      email,
      message
    } = await req.json();

    const sql = `
      INSERT INTO Message
      (email, message)
      VALUES (?, ?)
    `;

    await db.execute(sql, [
      email,
      message
    ]);

  

    return NextResponse.json(
      { message: "Message envoyer avec succè" },
      { status: 201 }
    );
  } catch (error: any) {
    if (error.code === "ER_DUP_ENTRY") {
      return NextResponse.json(
        { message: "Email déjà utilisé" },
        { status: 409 }
      );
    }
  }
}
