import { SiWhatsapp } from 'react-icons/si';

function WhatsappBtn() {
  const whatsappLink = `https://wa.me/message/77EK6DIZCRHWH1`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6
        z-50
        flex items-center gap-2
        bg-green-600 text-white
        px-4 py-3 rounded-full
        shadow-lg
        hover:bg-green-700
        transition
      "
    >
      <SiWhatsapp size={24} />
      <span className="text-sm font-semibold">WhatsApp</span>
    </a>
  );
}

export default WhatsappBtn;