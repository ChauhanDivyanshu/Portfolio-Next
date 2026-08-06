'use client';

import { motion } from 'framer-motion';
import { Trophy, Award, Rocket, Shield, Zap, Briefcase, Star, LucideIcon } from 'lucide-react';
import { achievements } from '@/data/portfolio';

const iconMap: Record<string, LucideIcon> = {
  Rocket,
  Shield,
  Zap,
  Trophy,
  Briefcase,
  Star,
  Award,
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-6">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full mb-4 shadow-sm">
            <Trophy size={14} className="text-orange-500" />
            <span className="text-xs font-semibold text-slate-700">Milestones</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-2 font-display">
            Key <span className="gradient-text">Achievements</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </motion.div>

        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
          Notable recognitions and career highlights that showcase my impact and dedication.
        </p>

        <div className="grid md:grid-cols-2 gap-3">
          {achievements.map(({ icon, title, description }, i) => {
            const Icon = iconMap[icon] || Award;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -3 }}
                className="bg-white border border-slate-200 rounded-2xl p-5 flex gap-4 items-start hover:shadow-lg hover:border-blue-300 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Icon size={20} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-slate-900 font-bold text-base mb-1">{title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}