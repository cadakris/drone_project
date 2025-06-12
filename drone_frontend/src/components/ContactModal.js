import React from 'react'

function ContactModal({onClose}) {
  return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative bg-white text-black p-8 rounded-xl shadow-xl w-full max-w-md">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-2xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Modal Content */}
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>Send us a message at <a href="mailto:you@example.com" className="text-blue-600 underline">you@example.com</a></p>
      </div>
    </div>
  )
}

export default ContactModal