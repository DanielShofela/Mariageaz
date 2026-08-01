import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, Sparkles, User, Phone, Users, MessageSquare, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { WEDDING_DATA } from '../config/weddingData';

export default function RSVPSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '1',
    status: 'Présent',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#1565FF', '#6CB8FF', '#FFFFFF', '#D4AF37'],
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    triggerConfetti();
    setSubmitted(true);

    const generatedMsg = `Bonjour,\n\nJe confirme ma présence au mariage.\n\nNom : ${formData.name || 'Non spécifié'}\nTéléphone : ${formData.phone || 'Non spécifié'}\nNombre de personnes : ${formData.guests}\nPrésent / Absent : ${formData.status}\nMessage : ${formData.message || 'Aucun message'}\n\nMerci.`;

    const encodedMsg = encodeURIComponent(generatedMsg);
    const whatsappUrl = `https://wa.me/${WEDDING_DATA.whatsappMain.replace('+', '')}?text=${encodedMsg}`;

    // Open WhatsApp
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 400);
  };

  return (
    <section id="rsvp" className="relative py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-white/95 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-2xl shadow-blue-500/10 overflow-hidden"
        >
          {/* Top Decorative Header */}
          <div className="text-center max-w-xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold tracking-[0.2em] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Réponse Souhaitée</span>
            </div>
            
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-light text-slate-900 tracking-tight">
              Confirmez Votre Présence
            </h2>

            <p className="font-serif-luxury text-base sm:text-lg text-slate-600 italic">
              Merci de bien vouloir répondre avant le 15 août 2026 afin de nous aider à tout orchestrer pour votre accueil.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Nom */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 flex items-center space-x-1.5">
                  <User className="w-3.5 h-3.5 text-blue-600" />
                  <span>Nom & Prénom *</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Koffi Emmanuel"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none text-slate-800 text-sm transition-all"
                />
              </div>

              {/* Téléphone */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 flex items-center space-x-1.5">
                  <Phone className="w-3.5 h-3.5 text-blue-600" />
                  <span>Numéro de Téléphone *</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Ex: 07 00 00 00 00"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none text-slate-800 text-sm transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Nombre de personnes */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 flex items-center space-x-1.5">
                  <Users className="w-3.5 h-3.5 text-blue-600" />
                  <span>Nombre de Personnes *</span>
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none text-slate-800 text-sm transition-all"
                >
                  <option value="1">1 Personne (Seul)</option>
                  <option value="2">2 Personnes (Couple)</option>
                  <option value="3">3 Personnes</option>
                  <option value="4">4 Personnes et plus</option>
                </select>
              </div>

              {/* Statut (Présent / Absent) */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>Présence *</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, status: 'Présent' })}
                    className={`py-3.5 px-4 rounded-2xl text-xs font-semibold transition-all border ${
                      formData.status === 'Présent'
                        ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20'
                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    ✨ Je serai Présent(e)
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, status: 'Absent' })}
                    className={`py-3.5 px-4 rounded-2xl text-xs font-semibold transition-all border ${
                      formData.status === 'Absent'
                        ? 'bg-slate-800 text-white border-slate-800 shadow-md'
                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    🙏 Désolé, Absent(e)
                  </button>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 flex items-center space-x-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
                <span>Message ou vœux pour les mariés (Optionnel)</span>
              </label>
              <textarea
                rows={3}
                placeholder="Écrivez un petit mot pour Aboubakar et Zenab..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none text-slate-800 text-sm transition-all"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center space-x-3 py-4 px-8 rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 text-white font-semibold text-base shadow-xl shadow-blue-600/30 hover:shadow-2xl hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Send className="w-5 h-5" />
                <span>Confirmer via WhatsApp</span>
              </button>
            </div>

            <p className="text-center text-xs text-slate-400 font-medium">
              🔒 Votre réponse ouvrira directement l'application WhatsApp au numéro officiel ({WEDDING_DATA.whatsappDisplay}).
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
