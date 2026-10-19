"use client";

import { motion } from "motion/react";
import { FaWhatsapp } from "react-icons/fa6";
import { CUBIC } from "@/lib/motion/tokens";
import { buildWhatsAppLink } from "@/lib/utils/whatsapp";

export function WhatsAppFloat() {
  return (
    <motion.a
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0.6, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: CUBIC.outExpo, delay: 0.8 }}
      className="group fixed right-6 bottom-6 z-40 hidden h-12 items-center overflow-hidden rounded-full bg-[#25d366] px-3 text-white shadow-lg shadow-black/25 transition-colors duration-300 hover:bg-[#1ebe5a] md:flex"
    >
      <FaWhatsapp className="size-6 shrink-0" />
      <span className="max-w-0 overflow-hidden text-sm font-medium whitespace-nowrap transition-[max-width,margin] duration-500 ease-out-expo group-hover:ml-2 group-hover:max-w-44">
        Chat on WhatsApp
      </span>
    </motion.a>
  );
}
