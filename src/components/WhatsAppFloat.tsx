import { MessageCircle } from "lucide-react";
import { whatsapp } from "@/lib/site";

/** Botão flutuante de WhatsApp: o único elemento que flutua, por isso a sombra. */
export function WhatsAppFloat() {
  return (
    <a
      href={whatsapp()}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed right-4 bottom-4 z-50 grid size-14 place-items-center rounded-full bg-[#1f8f4e] text-white shadow-lg transition-transform hover:scale-105 active:scale-95 sm:right-6 sm:bottom-6"
    >
      <MessageCircle size={26} aria-hidden />
    </a>
  );
}
