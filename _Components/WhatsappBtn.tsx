import { SiWhatsapp } from 'react-icons/si'

function WhatsappBtn() {
  const phoneNumber = "+223-78-90-23-89";
  const message = "Bonjour, je souhaite avoir plus d'informations.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm font-bold border-2 mx-auto border-green-500 
      rounded-lg p-2 w-50 hover:bg-green-700 hoverEffect shadow-2xl 
      flex items-center gap-3 cursor-pointer"
    >
      <SiWhatsapp size={30} className="text-green-500" />
      Contactez-nous
    </a>
  );
}

export default WhatsappBtn;
