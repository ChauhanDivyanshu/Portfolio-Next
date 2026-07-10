'use client';

import { motion } from 'framer-motion';
import { User, Sparkles, MapPin, Mail, Phone, Briefcase, GraduationCap, Heart, Code } from 'lucide-react';
import { personal } from '@/data/portfolio';

const info = [
  { icon: MapPin, label: 'Location', value: 'Noida, India', color: 'blue' },
  { icon: Mail, label: 'Email', value: 'divyanshuchauhan1200@gmail.com', color: 'purple' },
  { icon: Phone, label: 'Phone', value: '+91 9548022166', color: 'green' },
  { icon: Briefcase, label: 'Experience', value: '2+ Years', color: 'orange' },
  { icon: GraduationCap, label: 'Education', value: 'MCA · CGPA 8.62', color: 'pink' },
  { icon: Heart, label: 'Available', value: 'Full-time · Freelance', color: 'red' },
];

const values = [
  { icon: '🎯', title: 'Precision', description: 'Attention to detail in every line of code' },
  { icon: '🚀', title: 'Innovation', description: 'Always exploring cutting-edge technologies' },
  { icon: '🤝', title: 'Collaboration', description: 'Believe in teamwork and open communication' },
  { icon: '📚', title: 'Learning', description: 'Continuous learning is my superpower' },
];

const colorMap: Record<string, string> = {
  blue: 'from-blue-500 to-cyan-500',
  purple: 'from-purple-500 to-pink-500',
  green: 'from-green-500 to-emerald-500',
  orange: 'from-orange-500 to-red-500',
  pink: 'from-pink-500 to-rose-500',
  red: 'from-red-500 to-orange-500',
};

export default function About() {
  return (
    <section className="pt-28 pb-16 relative">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full mb-4 shadow-sm">
            <User size={14} className="text-blue-600" />
            <span className="text-xs font-semibold text-slate-700">About Me</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 leading-tight" style={{ fontFamily: 'Space Grotesk' }}>
            Crafting <span className="gradient-text">Digital Experiences</span>
            <br />
            with AI & Engineering
          </h1>

          <p className="text-slate-600 text-base md:text-lg max-w-3xl leading-relaxed">
            {personal.bio}
          </p>
        </motion.div>

        {/* Story Cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-6 md:p-8 text-white"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20" />
            <div className="relative">
              <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center mb-4">
                <Briefcase size={22} />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Space Grotesk' }}>Current Role</h3>
              <p className="text-white/90 leading-relaxed text-sm">
                Working as <strong>Full Stack AI Engineer</strong> at <strong>Infosware Pvt. Ltd.</strong>, building scalable AI-driven applications. Contributing to <strong>RAG systems</strong>, <strong>NFC/RFID platforms</strong>, and <strong>defence-sector inventory systems</strong>.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl p-6 md:p-8 text-white"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20" />
            <div className="relative">
              <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center mb-4">
                <Sparkles size={22} />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Space Grotesk' }}>Founder Journey</h3>
              <p className="text-white/90 leading-relaxed text-sm">
                Founder of <strong>VerifyLayer AI</strong> — an AI-powered scam detection & identity protection platform protecting <strong>50,000+ Indians</strong> daily. Combining AI intelligence with real-world engineering.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Info Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5" style={{ fontFamily: 'Space Grotesk' }}>
            Quick Info
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {info.map(({ icon: Icon, label, value, color }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -3 }}
                className="bg-white border border-slate-200 rounded-2xl p-4 hover:shadow-lg transition-all"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colorMap[color]} flex items-center justify-center mb-3`}>
                  <Icon size={18} className="text-white" />
                </div>
                <div className="text-xs text-slate-500 font-medium mb-1">{label}</div>
                <div className="text-sm font-bold text-slate-900 truncate">{value}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5" style={{ fontFamily: 'Space Grotesk' }}>
            What I Value
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -3 }}
                className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl p-5 text-center hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-2">{v.icon}</div>
                <div className="font-bold text-slate-900 mb-1">{v.title}</div>
                <div className="text-xs text-slate-600 leading-snug">{v.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}