'use client';

import { motion } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';
import { certifications } from '@/data/portfolio';

export default function Certifications() {
  return (
    <section className="py-8 relative">
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
              <Award size={18} className="text-slate-700" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-display">
              Certifications
            </h2>
          </div>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-3xl">
            Professional certifications from leading tech companies validating expertise across AI, cloud, and DevOps.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -3 }}
              className="bg-white border border-slate-200 rounded-xl p-4 flex items-start gap-3 hover:shadow-md hover:border-slate-300 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                <Award size={18} className="text-slate-700" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-slate-900 mb-1 leading-snug">
                  {cert.name}
                </h3>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-green-600 flex-shrink-0" />
                  <p className="text-xs text-slate-600 font-medium">{cert.issuer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}