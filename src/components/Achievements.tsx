'use client';

import { motion } from 'framer-motion';
import { Trophy, Award, Rocket, Shield, Zap, Briefcase, Star } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { achievements } from '@/data/portfolio';

const iconMap: Record<string, LucideIcon> = {
  Rocket: Rocket,
  Shield: Shield,
  Zap: Zap,
  Trophy: Trophy,
  Briefcase: Briefcase,
  Star: Star,
  Award: Award,
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-8">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center">
              <Trophy size={18} className="text-slate-700" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-display">
              Key <span className="gradient-text">Achievements</span>
            </h2>
          </div>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-3xl">
            Notable recognitions and career highlights that showcase my impact and dedication.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {achievements.map(({ icon, title, description }, i) => {
            const IconComponent = iconMap[icon] || Award;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -3 }}
                className="bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-md hover:border-slate-300 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mb-3">
                  <IconComponent size={20} className="text-slate-700" strokeWidth={2} />
                </div>
                <h3 className="text-slate-900 font-bold text-base mb-1.5">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}