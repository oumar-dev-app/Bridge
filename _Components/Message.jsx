'use client';
import { useState } from "react";

function Message() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.message || "Erreur lors de l'envoi");
        return;
      }

      // Reset formulaire
      setEmail("");
      setMessage("");
      alert("Message envoyé avec succès !");
      
    } catch (err) {
      console.error(err);
      setErrorMessage("Erreur serveur, réessayez plus tard");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='mt-2 space-y-4'>
      <h1 className='font-semibold'>Envoyez-nous un message</h1>
      <p className='text-sm'>
        Dis-nous comment nous pouvons vous aider et nous ferons de notre mieux pour répondre rapidement.
      </p>

      <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          id="email"
          required
          placeholder='Votre adresse email'
          className='border p-2 text-black rounded-lg outline-none bg-white border-gray-300'
        />

        <textarea
          id='message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          name='message'
          placeholder='Votre message ici...'
          required
          className='border p-2 text-black rounded-lg outline-none border-gray-300 bg-white min-h-[120px]'
        />

        {errorMessage && (
          <p className="text-red-600 text-sm">{errorMessage}</p>
        )}

        <button
          type='submit'
          disabled={loading}
          className='w-full bg-white text-black p-2 hover:bg-gray-200 disabled:bg-gray-300 cursor-pointer rounded-lg text-sm font-semibold'
        >
          {loading ? "Envoi..." : "Envoyer le message"}
        </button>

      </form>
    </div>
  );
}

export default Message;