"use client";
import { useState } from "react";
import Container from "./Container";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // empêche l'envoi classique du formulaire
    setErrorMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.message || "Erreur lors de la connexion");
        return;
      }
      setEmail("");
      setPassword("");
      // Redirection après succès
      window.location.href = "/dashboard";

    } catch (err) {
      console.error(err);
      setErrorMessage("Erreur serveur, réessayez plus tard");
    } finally {
      setLoading(false);
    }
  };


  return (
    <Container>
      <div>
        <form onSubmit={handleSubmit} className="space-y-10">
          <h2 className="text-xl font-semibold text-white  text-center">VEILLEZ VOUS IDENTIFIER</h2>

          <input
            type="email"
            placeholder="Adresse e-mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded-lg bg-white"
          />

          <input
            type="password"
            placeholder="Mot de passe"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded-lg bg-white"
          />

          {errorMessage && <p className="text-red-600 text-sm">{errorMessage}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-sm font-semibold hover:bg-blue-500 text-white p-2 rounded-lg disabled:opacity-50"
          >
            {loading ? "Connexion..." : "Connexion"}
          </button>
        </form>
      </div>
    </Container>


  );
}
