import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = ({ t }) => {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("");

    try {
      await emailjs.sendForm(
        "service_yi9xh99",
        "template_z6asd5b",
        formRef.current,
        {

          publicKey: "mqQKJS92zHx_O0Ngd",
        },
      );

      setStatusMessage(t?.contactSuccess || "Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS full error:", error);

      // Mensagem amigável pro usuário + debug no console
      const msg =
        error?.text ||
        error?.message ||
        t?.contactError ||
        "Failed to send message. Please try again.";

      setStatusMessage(`${t?.contactErrorPrefix || "Error"}: ${msg}`);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div
      className="mx-auto w-full min-h-[50vh] px-4 sm:px-6 lg:px-8"
      id="contact"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-4xl mx-auto mt-16 flex items-center justify-center flex-col gap-8 sm:gap-12"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 text-center"
        >
          {t?.contactTitle || "Contact Me"}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-gray-300 text-lg text-center max-w-2xl leading-relaxed"
        >
          {t?.contactTextLine1 ||
            "Have an exciting mobile or web project in mind?"}
          <br />
          {t?.contactTextLine2 ||
            "Let's bring it to life with cutting-edge technology."}
        </motion.p>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full max-w-2xl flex flex-col gap-4"
        >
          <input
            type="text"
            name="user_name"
            placeholder={t?.contactPlaceholderName || "Your name"}
            required
            className="w-full rounded-2xl bg-white/5 border border-gray-700 px-5 py-4 text-white placeholder-gray-400 outline-none focus:border-sky-500"
          />

          <input
            type="email"
            name="user_email"
            placeholder={t?.contactPlaceholderEmail || "Your email"}
            required
            className="w-full rounded-2xl bg-white/5 border border-gray-700 px-5 py-4 text-white placeholder-gray-400 outline-none focus:border-sky-500"
          />

          <input
            type="text"
            name="subject"
            placeholder={t?.contactPlaceholderSubject || "Subject"}
            required
            className="w-full rounded-2xl bg-white/5 border border-gray-700 px-5 py-4 text-white placeholder-gray-400 outline-none focus:border-sky-500"
          />

          <textarea
            name="message"
            placeholder={t?.contactPlaceholderMessage || "Your message"}
            rows="6"
            required
            className="w-full rounded-2xl bg-white/5 border border-gray-700 px-5 py-4 text-white placeholder-gray-400 outline-none focus:border-sky-500 resize-none"
          />

          <button
            type="submit"
            disabled={isSending}
            className="relative overflow-hidden group bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 px-8 py-4 md:text-lg rounded-full font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 text-white disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <span className="relative z-10">
              {isSending
                ? t?.contactSending || "Sending..."
                : t?.contactBtn || "Get in Touch"}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          {statusMessage && (
            <p className="text-center text-sm text-gray-300 mt-2">
              {statusMessage}
            </p>
          )}
        </motion.form>

        <footer className="w-full mt-16 border-t border-gray-800/30 p-10">
          <div className="text-gray-400 text-center text-sm sm:text-base hover:text-gray-300 transition-colors">
            {t?.footerText || "© 2026 Alfredo Mello | All rights reserved."}
          </div>
        </footer>
      </motion.div>
    </div>
  );
};

export default Contact;
