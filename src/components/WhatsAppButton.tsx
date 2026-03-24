import { MessageCircle } from "lucide-react";

const PHONE = "919642278752";

const WhatsAppButton = () => (
  <a
    href={`https://wa.me/${PHONE}?text=Hi%2C%20I%20am%20interested%20in%20your%20solar%20products.%20Please%20share%20details.`}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[hsl(142,70%,40%)] text-white px-4 py-3 rounded-full shadow-xl hover:scale-105 transition-transform"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={22} />
    <span className="hidden sm:inline font-medium text-sm">WhatsApp</span>
  </a>
);

export default WhatsAppButton;
