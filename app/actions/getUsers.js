import { db } from "@/lib/db";

export const getUsetAction = async () => {
    const [rows] = await db.execute("SELECT nom, prenom, email, telephone, niveauAnglais, quartier, date_creation FROM inscription");
    return rows;
};