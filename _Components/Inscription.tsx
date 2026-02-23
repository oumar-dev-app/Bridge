"use client";

import { useState } from "react";
import Container from "./Container";

function Inscription() {


  const [formData, setFormData] = useState({

    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    niveauAnglais: "Debutant",
    pays: "",
    quartier: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/etudiant/inscription", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Inscription envoyée avec succès");
      setFormData({
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        niveauAnglais: "Debutant",
        pays: "",
        quartier: "",

      });



    } else {
      alert("Erreur lors de l'inscription");
    }
  };

  return (
    <Container>
      <div className="bg-blue-950 mb-8 rounded-lg text-white p-10 mt-6 m-5">
        <h1 className="text-center font-semibold text-3xl">
          FORMULAIRE D'INSCRIPTION
        </h1>

        <div className="w-3/4 mt-10 m-auto">
          <form onSubmit={handleSubmit} className="space-y-8">

            <div className="flex flex-col space-y-2">
              <label className="text-sm font-semibold">Nom  <span className="text-red-600">*</span></label>
              <input
                type="text"
                name="nom"
                value={formData.nom}
                placeholder="Votre nom"
                required
                className="bg-white rounded-lg p-3 text-black outline"
                onChange={handleChange}
              />

            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-sm font-semibold">Prénom <span className="text-red-600">*</span></label>
              <input
                type="text"
                name="prenom"
                value={formData.prenom}
                placeholder="Votre prénom"
                required
                className="bg-white rounded-lg p-3 text-black outline"
                onChange={handleChange}
              />

            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-sm font-semibold">Email <span className="text-red-600">*</span></label>
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Votre adresse email"
                required
                className="bg-white rounded-lg p-3 text-black outline"
                onChange={handleChange}
              />

            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-sm font-semibold">Téléphone <span className="text-red-600">*</span></label>
              <input
                type="tel"
                name="telephone"
                value={formData.telephone}
                placeholder="Votre numéro de téléphone"
                required
                className="bg-white rounded-lg p-3 text-black outline"
                onChange={handleChange}
              />

            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-semibold">Niveau <span className="text-red-600">*</span></label>
              <select
                name="niveauAnglais"
                value={formData.niveauAnglais}
                className="bg-white text-black w-full p-3 rounded-lg"
                onChange={handleChange}
              >
                <option value="Debutant">Débutant</option>
                <option value="Excellent">Excellent (e)</option>
              </select>

            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-sm font-semibold">Pays <span className="text-red-600">*</span></label>
              <input
                type="text"
                name="pays"
                value={formData.pays}
                placeholder="Votre pays"
                required
                className="bg-white rounded-lg p-3 text-black outline"
                onChange={handleChange}
              />

            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-sm font-semibold">Quartier <span className="text-red-600">*</span></label>
              <input
                type="text"
                name="quartier"
                value={formData.quartier}
                placeholder="Votre quartier"
                required
                className="bg-white rounded-lg p-3 text-black outline"
                onChange={handleChange}
              />

            </div>

            <button
              type="submit"
              className="w-full bg-green-700 p-3 hover:bg-green-500 rounded-lg text-sm font-semibold"
            >
              Envoyer
            </button>

          </form>
        </div>
      </div>
    </Container>
  );
}

export default Inscription;
