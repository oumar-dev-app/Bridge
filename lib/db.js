import mysql from "mysql2/promise";

// Crée un pool de connexions
export const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Vérification facultative
async function checkConnection() {
  try {
    const connection = await db.getConnection();
    console.log("Database connected successfully!");
    connection.release();
  } catch (err) {
    console.error("Database connection failed:", err);
    process.exit(1);
  }
}

// Tester la connexion uniquement si ce fichier est exécuté directement
if (require.main === module) {
  checkConnection();
}
