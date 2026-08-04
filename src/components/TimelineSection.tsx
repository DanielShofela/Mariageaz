import { motion } from 'motion/react';
import { MapPin, Calendar, Clock, ExternalLink, CalendarPlus, Sparkles } from 'lucide-react';
import { WEDDING_DATA, Ceremony } from '../config/weddingData';
import CountdownCard from './CountdownCard';

export default function TimelineSection() {
  const handleAddToCalendar = (ceremony: Ceremony) => {
    // Generate Google Calendar Link
    const startTime = ceremony.date.replace(/-|:|\.\d\d\d/g, '');
    // End time 3 hours later
    const end = new Date(new Date(ceremony.date).getTime() + 3 * 60 * 60 * 1000);
    const endTime = end.toISOString().replace(/-|:|\.\d\d\d/g, '');

    const title = encodeURIComponent(`Mariage Aboubakar & Zenab - ${ceremony.title}`);
    const details = encodeURIComponent(`Vous êtes conviés au ${ceremony.title} d'Aboubakar-Sidik & Akadi Zenab .\nLieu: ${ceremony.location} (${ceremony.addressDetail})`);
    const location = encodeURIComponent(`${ceremony.location}, ${ceremony.addressDetail}`);

    const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${details}&location=${location}`;
    window.open(gcalUrl, '_blank');
  };

  return (
    <section id="ceremonies" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold tracking-[0.2em] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Programme Officiel</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-light text-slate-900 tracking-tight">
            Les Cérémonies Du Mariage
          </h2>
          <p className="font-serif-luxury text-lg text-slate-600 italic">
            Trois moments d'exception pour sceller notre amour et partager notre joie.
          </p>
        </div>

        {/* 3 Premium Ceremony Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WEDDING_DATA.ceremonies.map((ceremony, index) => (
            <motion.div
              key={ceremony.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="group relative bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-xl shadow-blue-500/5 hover:shadow-2xl hover:shadow-blue-500/15 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top Accent Icon Badge */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 via-sky-500 to-blue-400 p-0.5 shadow-md shadow-blue-500/20">
                    <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-2xl">
                      {ceremony.icon}
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100 uppercase tracking-wider">
                    {ceremony.type}
                  </span>
                </div>

                <h3 className="font-serif-luxury text-2xl font-semibold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {ceremony.title}
                </h3>

                {/* Details List */}
                <div className="space-y-3 mb-6 text-sm text-slate-600">
                  <div className="flex items-start space-x-3">
                    <Calendar className="w-4 h-4 text-blue-600 mt-1 shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-800 block">
                        {ceremony.displayDate}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-4 h-4 text-blue-600 mt-1 shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-800 block">
                        {ceremony.time}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-blue-600 mt-1 shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-800 block">
                        {ceremony.location}
                      </span>
                      <span className="text-xs text-slate-500">
                        {ceremony.addressDetail}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Individual Realtime Countdown */}
                <div className="mb-6 pt-4 border-t border-slate-100">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2 text-center">
                    Compte à rebours individuel
                  </span>
                  <CountdownCard targetDate={ceremony.date} compact />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-4 border-t border-slate-100">
                <a
                  href={ceremony.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-blue-600 text-white font-medium text-sm shadow-md shadow-blue-500/20 hover:bg-blue-700 transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Voir sur Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>

                <button
                  onClick={() => handleAddToCalendar(ceremony)}
                  className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-blue-50 text-blue-700 font-medium text-xs hover:bg-blue-100 transition-colors border border-blue-200/60"
                >
                  <CalendarPlus className="w-3.5 h-3.5" />
                  <span>Ajouter à mon agenda</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
