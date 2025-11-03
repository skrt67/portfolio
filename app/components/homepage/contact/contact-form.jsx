"use client";
import { isValidEmail } from "@/utils/check-email";
import emailjs from '@emailjs/browser';
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";
import { useLanguage } from "@/contexts/LanguageContext";

function ContactForm() {
  const { t } = useLanguage();
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!userInput.email || !userInput.message || !userInput.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    }

    try {
      setIsLoading(true);
      
      // Configuration EmailJS
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_teclyx8';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_aqbu41b';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'uoLYWA_RX6OzN3C1u';

      console.log('Configuration EmailJS:', { serviceId, templateId, publicKey });

      // Paramètres du template (correspondant à votre configuration EmailJS)
      const templateParams = {
        to_name: 'Altan DEPELI',
        name: userInput.name,           // Correspond à {{name}} dans votre template
        email: userInput.email,         // Correspond à {{email}} dans votre template
        from_name: userInput.name,      // Pour le contenu de l'email
        from_email: userInput.email,    // Pour le contenu de l'email
        message: userInput.message,
        reply_to: userInput.email,
      };

      console.log('Paramètres du template:', templateParams);

      // Envoi de l'email via EmailJS
      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log('EmailJS result:', result);

      toast.success(t('contact.form.success'));
      setUserInput({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error('Erreur EmailJS:', error);
      console.error('Détails de l\'erreur:', {
        status: error.status,
        text: error.text,
        message: error.message
      });
      
      // Message d'erreur plus spécifique
      let errorMessage = t('contact.form.error');
      if (error.status === 400) {
        errorMessage = 'Erreur de configuration EmailJS. Vérifiez le template.';
      } else if (error.status === 401) {
        errorMessage = 'Clé API EmailJS invalide.';
      } else if (error.status === 403) {
        errorMessage = 'Accès refusé. Vérifiez vos permissions EmailJS.';
      }
      
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">{t('contact.subtitle')}</p>
      <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
        <p className="text-sm text-[#d3d8e8]">
          {t('contact.description')}
        </p>
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-base">{t('contact.form.name')}</label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] px-3 py-2"
              type="text"
              maxLength="100"
              required
              value={userInput.name}
              onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
              onBlur={checkRequired}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">{t('contact.form.email')}</label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] px-3 py-2"
              type="email"
              maxLength="100"
              required
              value={userInput.email}
              onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
              onBlur={() => {
                checkRequired();
                setError({ ...error, email: !isValidEmail(userInput.email) });
              }}
            />
            {error.email && (
              <p className="text-sm text-red-400">{t('contact.form.invalidEmail')}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">{t('contact.form.message')}</label>
            <textarea
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] px-3 py-2"
              maxLength="500"
              name="message"
              required
              value={userInput.message}
              onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
              onBlur={checkRequired}
              rows="4"
            />
          </div>

          <div className="flex flex-col items-center gap-3">
            {error.required && (
              <p className="text-sm text-red-400">{t('contact.form.required')}</p>
            )}
            <button
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-xs md:text-sm font-medium uppercase tracking-wider text-white transition-all duration-200"
              onClick={handleSendMail}
              disabled={isLoading}
            >
              {isLoading ? (
                <span>{t('contact.form.sending')}</span>
              ) : (
                <span className="flex items-center gap-1">
                  {t('contact.form.send')}
                  <TbMailForward size={20} />
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
