'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Send, MapPin, Sparkles, Rocket, ArrowUpRight, Shield, Cpu, Code2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personal, roles, stats, highlights } from '@/data/portfolio';
import { withBasePath } from '@/lib/utils';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Sparkles,
  Rocket,
  Shield,
  Cpu,
  Code2,
};

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.substring(0, displayText.length + 1));
        if (displayText === current) setTimeout(() => setIsDeleting(true), 2000);
      } else {
        setDisplayText(current.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setRoleIdx((roleIdx + 1) % roles.length);
        }
      }
    }, isDeleting ? 40 : 80);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIdx]);

  return (
    <section className="min-h-screen pt-20 pb-12 relative overflow-hidden">
      {/* Animated blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style={{ animationDelay: '4s' }} />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md border border-slate-200 rounded-full mb-6 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-xs font-semibold text-slate-700">Available for Opportunities</span>
            </motion.div>

            {/* Greeting */}
            <p className="text-slate-500 text-lg mb-3 font-display">
              Hello, I&apos;m
            </p>

            {/* Name */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-4 leading-[0.95] tracking-tight font-display">
              Divyanshu
              <br />
              <span className="gradient-text">Chauhan</span>
            </h1>

            {/* Role with better structure */}
            <div className="text-xl md:text-2xl text-slate-700 font-medium mb-6 min-h-[3rem] flex flex-wrap items-baseline gap-x-2">
              <span>Building</span>
              <span className="text-blue-600 font-bold inline-block min-w-[280px]">
                {displayText}
                <span className="animate-pulse text-blue-600">|</span>
              </span>
            </div>

            {/* Description */}
            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              {personal.bio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-semibold text-sm hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg shadow-slate-900/20 hover:shadow-xl hover:-translate-y-0.5"
              >
                <Send size={16} />
                Get In Touch
                <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-300 text-slate-900 rounded-xl font-semibold text-sm hover:border-slate-900 hover:-translate-y-0.5 transition-all"
              >
                View Projects
                <ArrowUpRight size={16} />
              </Link>

              <div className="flex items-center gap-2 ml-2">
                <a
                  href={personal.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-900 hover:text-white hover:-translate-y-0.5 transition-all"
                  aria-label="GitHub"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href={personal.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-blue-600 hover:text-white hover:-translate-y-0.5 transition-all"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="text-left"
                >
                  <div className="text-3xl md:text-4xl font-bold text-slate-900 font-display">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-1">
                    {stat.label} {stat.suffix}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT - CIRCULAR PROFILE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full max-w-[380px] mx-auto aspect-square"
          >
            {/* Outer rotating gradient ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500" style={{ padding: '3px' }}>
              <div className="w-full h-full rounded-full bg-white" />
            </div>

            {/* Middle dashed ring */}
            <div className="absolute inset-3 rounded-full border-2 border-dashed border-blue-300/60" />

            {/* Inner Image Container */}
            <div className="absolute inset-6 rounded-full overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 shadow-2xl">
              <Image
                src={withBasePath('/divyanshu.jpg')}
                alt="Divyanshu Chauhan"
                width={400}
                height={400}
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 11%' }}
                priority
                unoptimized
              />
            </div>

            {/* Floating badge - Top Right */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-2 -right-2 md:-right-4 bg-white rounded-xl shadow-xl px-3 py-2 flex items-center gap-2 border border-slate-200 z-10"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Sparkles size={14} className="text-white" />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 leading-tight">AI Engineer</p>
                <p className="text-xs font-bold text-slate-900 leading-tight">2+ Years</p>
              </div>
            </motion.div>

            {/* Floating badge - Bottom Right */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute bottom-6 -right-2 md:-right-4 bg-white rounded-xl shadow-xl px-3 py-2 flex items-center gap-2 border border-slate-200 z-10"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Rocket size={14} className="text-white" />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 leading-tight">Founder</p>
                <p className="text-xs font-bold text-slate-900 leading-tight">VerifyLayer</p>
              </div>
            </motion.div>

            {/* Location Badge - Left */}
            <motion.div
              animate={{ x: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-1/2 -left-2 md:-left-4 bg-white rounded-full shadow-xl px-3 py-1.5 flex items-center gap-1.5 border border-slate-200 z-10"
            >
              <MapPin className="text-blue-500" size={12} />
              <span className="text-[11px] font-semibold text-slate-900">Noida, IN</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {highlights.map((item, i) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="group relative bg-white border border-slate-200 rounded-2xl p-4 overflow-hidden hover:shadow-lg transition-all"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-3`}>
                  <Icon size={18} className="text-white" />
                </div>
                <div className="text-sm font-bold text-slate-900 mb-1">{item.title}</div>
                <div className="text-xs text-slate-500 leading-snug">{item.description}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}