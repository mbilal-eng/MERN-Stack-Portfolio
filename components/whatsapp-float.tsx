"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppFloat() {
  const whatsappNumber = "923208211254"
  const whatsappMessage = "Hi Muhammad, I'd like to connect with you!"
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  )
}
