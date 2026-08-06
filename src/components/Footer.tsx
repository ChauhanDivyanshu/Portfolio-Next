'use client';

import Link from 'next/link';
import { Mail, MapPin, Heart } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personal } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-50 relative z-10">
      <div className="container-custom py-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-slate-900 mb-3 font-display">
              {personal.name}
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-4 max-w-md">
              {personal.bio}
            </p>
            <div className="flex items-center gap-3">
              <a
                href={personal.social.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 bg-white border border-slate-200 text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 rounded-xl flex items-center justify-center transition-all"
              >
                <FaGithub size={16} />
              </a>
              <a
                href={personal.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 bg-white border border-slate-200 text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 rounded-xl flex items-center justify-center transition-all"
              >
                <FaLinkedin size={16} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                aria-label="Email"
                className="w-10 h-10 bg-white border border-slate-200 text-slate-700 hover:bg-red-500 hover:text-white hover:border-red-500 rounded-xl flex items-center justify-center transition-all"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-700">
              <li><Link href="/about" className="hover:text-blue-600 transition-colors">About</Link></li>
              <li><Link href="/skills" className="hover:text-blue-600 transition-colors">Skills</Link></li>
              <li><Link href="/projects" className="hover:text-blue-600 transition-colors">Projects</Link></li>
              <li><Link href="/experience" className="hover:text-blue-600 transition-colors">Experience</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <Mail size={14} className="mt-1 flex-shrink-0 text-blue-600" />
                <a
                  href={`mailto:${personal.email}`}
                  className="hover:text-blue-600 transition-colors break-all"
                >
                  {personal.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-1 flex-shrink-0 text-blue-600" />
                <span>{personal.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-600 flex items-center gap-1.5">
            Built with
            <Heart size={12} className="text-red-500 fill-red-500" />
            using Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}