'use client';

import { motion } from 'framer-motion';
import { User, MapPin, Mail, Phone, Briefcase, GraduationCap, Heart, Target, Rocket, Users, BookOpen, Code2, Server, Sparkles } from 'lucide-react';
import { personal } from '@/data/portfolio';

const info = [
  { icon: MapPin, label: 'Location', value: 'Noida, India' },
  { icon: Mail, label: 'Email', value: 'divyanshuchauhan1200@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 9548022166' },
  { icon: Briefcase, label: 'Experience', value: '2+ Years' },
  { icon: GraduationCap, label: 'Education', value: 'MCA · CGPA 8.62' },
  { icon: Heart, label: 'Available', value: 'Full-time · Freelance' },
];

const values = [
  { icon: Target, title: 'Precision', description: 'Attention to detail in every line of code' },
  { icon: Rocket, title: 'Innovation', description: 'Always exploring cutting-edge technologies' },
  { icon: Users, title: 'Collaboration', description: 'Believe in teamwork and open communication' },
  { icon: BookOpen, title: 'Learning', description: 'Continuous learning is my superpower' },
];

const currentFocus = [
  {
    icon: Sparkles,
    title: 'AI Engineering',
    tech: 'RAG · LangChain · OpenAI · pgvector',
  },
  {
    icon: Server,
    title: 'Backend Systems',
    tech: 'FastAPI · Flask · PostgreSQL · Redis',
  },
  {
    icon: Code2,
    title: 'Full Stack Development',
    tech: 'Next.js · React · TypeScript · Tailwind',
  },
];

export default function About() {
  return (
    <section className="pt-20 pb-16 relative">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full mb-5 shadow-sm">
            <User size={14} className="text-blue-600" />
            <span className="text-xs font-semibold text-slate-700">About Me</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 leading-tight font-display">
            Full Stack AI Engineer
            <br />
            <span className="gradient-text">Based in India</span>
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </motion.div>

        {/* Bio Cards - Clean Minimal */}
        <div className="grid md:grid-cols-1 gap-4 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-blue-50/50 border-l-4 border-blue-500 rounded-r-2xl p-6"
          >
            <p className="text-slate-700 text-base md:text-lg leading-relaxed">
              I am currently working as <strong className="text-slate-900">Full Stack AI Engineer at Infosware Pvt. Ltd.</strong>, where I focus on building scalable AI-driven applications, RAG systems, and enterprise backend platforms. I have contributed to defence-sector projects and delivered high-performance solutions across multiple domains.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-slate-50 border-l-4 border-slate-400 rounded-r-2xl p-6"
          >
            <p className="text-slate-700 text-base md:text-lg leading-relaxed">
              As <strong className="text-slate-900">Founder of VerifyLayer AI</strong>, I am building India&apos;s AI-powered scam protection platform serving 50,000+ users. I am passionate about leveraging modern AI technologies to solve real-world problems and always eager to learn and grow in the ever-evolving tech landscape.
            </p>
          </motion.div>
        </div>

        {/* Current Focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex items-center gap-2 mb-5">
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
              <Sparkles size={16} className="text-blue-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-display">
              Current Focus
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-3">
            {currentFocus.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-300 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mb-3">
                    <Icon size={18} className="text-slate-700" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-500 font-mono">{item.tech}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Quick Info Grid - Minimal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex items-center gap-2 mb-5">
            <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center">
              <User size={16} className="text-purple-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-display">
              Quick Info
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {info.map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white border border-slate-200 rounded-xl p-4 hover:border-slate-300 hover:shadow-sm transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-slate-700" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs text-slate-500 font-medium mb-0.5">{label}</div>
                    <div className="text-sm font-bold text-slate-900 truncate">{value}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values - Clean Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-5">
            <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center">
              <Heart size={16} className="text-green-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-display">
              What I Value
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-300 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mb-3">
                    <Icon size={18} className="text-slate-700" />
                  </div>
                  <div className="font-bold text-slate-900 mb-1">{v.title}</div>
                  <div className="text-xs text-slate-600 leading-snug">{v.description}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}