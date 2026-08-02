import { motion } from 'motion/react';
import { PhoneCall, MessageCircle, Sparkles, UserCheck } from 'lucide-react';
import { WEDDING_DATA } from '../config/weddingData';

export default function ContactSection() {
  const openWhatsApp = (phoneRaw: string) => {
    const cleanNum = phoneRaw.replace('+', '').replace(/\s/g, '');
    const url = `https://wa.me/${cleanNum}?text=${encodeURIComponent('Bonjour, je me permets de vous contacter au sujet du mariage d\'Aboubakar Sidik & Zenab Sylviane.')}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contacts" className="relative py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold tracking-[0.2em] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Assistance & Info</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-light text-slate-900 tracking-tight">
            Comité D'Organisation
          </h2>
          <p className="font-serif-luxury text-lg text-slate-600 italic">
            Une question ou besoin d'assistance ? N'hésitez pas à nous contacter.
          </p>
        </div>

        {/* 4 Premium Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WEDDING_DATA.contacts.map((contact, index) => (
            <motion.div
              key={contact.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card glass-card-hover rounded-3xl p-6 flex flex-col justify-between border border-blue-100/60 text-center relative group"
            >
              <div>
                {/* Avatar Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 via-sky-500 to-blue-400 p-0.5 shadow-md shadow-blue-500/20 mx-auto mb-4">
                  <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-blue-600">
                    <UserCheck className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="font-serif-luxury text-lg font-semibold text-slate-900 mb-2">
                  {contact.name}
                </h3>

                <p className="font-mono text-lg font-bold text-slate-800 tracking-wide mb-6">
                  {contact.phoneDisplay}
                </p>
              </div>

              {/* Action Buttons: Appeler & WhatsApp */}
              <div className="grid grid-cols-2 gap-2 pt-4 border-t border-slate-100">
                <a
                  href={`tel:${contact.phoneRaw}`}
                  className="inline-flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-blue-600" />
                  <span>Appeler</span>
                </a>

                <button
                  onClick={() => openWhatsApp(contact.phoneRaw)}
                  className="inline-flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
