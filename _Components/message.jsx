'use client';
import { useState } from "react";



function Message() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // empêche l'envoi classique du formulaire
    setErrorMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message, }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.message || "Erreur lors de la connexion");
        return;
      }

      // vider les champs après soumission réussie
      setEmail("");
      setMessage("");
      alert("Message envoyer avec succè !")

    } catch (err) {
      console.error(err);
      setErrorMessage("Erreur serveur, réessayez plus tard");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className='mt-2 space-y-4'>
      <h1 className='font-semibold'>Envoyer nous un message</h1>
      <p className='text-sm'>Dit nous comment nous pouvons vous aidez. Bridge fera de son possible pour vous répondrez à temps. </p>
      <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>



        <input type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          id="email"
          required placeholder='Votre address email'
          className='border  p-2 text-black rounded-lg outline-0  bg-gray-400 border-white'
        />

        <textarea
          id='message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          name='message'
          placeholder='Votre message ici...'
          required
          className='border p-2 text-black rounded-lg outline-0 border-white bg-gray-400'
        />

        {errorMessage && <p className="text-red-600 text-sm">{errorMessage}</p>}

        <button
          type='submit'
          className='w-full bg-white text-black p-2 hover:bg-gray-200 cursor-pointer rounded-lg text-sm font-semibold'
        >
          {loading ? "Envoyer..." : "Envoyer le message"}
        </button>

      </form>
    </div>
  )
}

export default Message;