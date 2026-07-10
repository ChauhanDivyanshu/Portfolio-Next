'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, User, Sparkles, Layers, Briefcase, Mail } from 'lucide-react';

const navItems = [
  { path: '/', icon: Home, label: 'Home' },
  { path: '/about', icon: User, label: 'About' },
  { path: '/skills', icon: Sparkles, label: 'Skills' },
  { path: '/projects', icon: Layers, label: 'Projects' },
  { path: '/experience', icon: Briefcase, label: 'Experience' },
  { path: '/contact', icon: Mail, label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-white border border-black rounded-full px-4 py-2 flex items-center gap-2 shadow-md transition-all duration-300 ${
        showNavbar
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-24 pointer-events-none'
      }`}
    >
      {navItems.map(({ path, icon: Icon, label }) => {
        const isActive = pathname === path;
        return (
          <Link
            key={path}
            href={path}
            className={`group relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
              isActive
                ? 'bg-blue-50 text-blue-500'
                : 'text-zinc-800 hover:bg-zinc-100 hover:text-blue-500'
            }`}
            aria-label={label}
          >
            <Icon size={20} strokeWidth={2} />
            <span className="absolute top-12 left-1/2 -translate-x-1/2 bg-zinc-900 text-white px-2.5 py-1 rounded text-[11px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
              {label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}