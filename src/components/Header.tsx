/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, PhoneCall } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll to style the glass header dynamically
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio', label: 'Ir para seção Início' },
    { name: 'Sobre', href: '#sobre', label: 'Conheça o especialista Gilson Rujanowsky' },
    { name: 'Oportunidades', href: '#oportunidades', label: 'Estratégia de Oportunidades do Litoral' },
    { name: 'Investimento', href: '#investimento', label: 'Por que investir no Litoral Catarinense' },
    { name: 'Empreendimentos', href: '#empreendimentos', label: 'Veja os empreendimentos em destaque' },
    { name: 'Contato', href: '#contato', label: 'Falar com Gilson no WhatsApp' }
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-panel shadow-md py-3 border-b border-white/20' 
          : 'bg-brand-navy/90 md:bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand Section */}
          <a 
            href="#inicio" 
            aria-label="Ir para o topo da página do portal de Gilson Rujanowsky"
            className="flex items-center gap-3 group focus:outline-2 focus:outline-brand-gold focus:outline-offset-4 rounded-md"
          >
            <div className="relative h-12 w-auto bg-white/95 rounded px-2.5 py-1.5 shadow-sm overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <img 
                src="https://i.postimg.cc/25psSkYF/Whats-App-Image-2026-06-11-at-16-11-28.jpg" 
                alt="Logotipo de Gilson Luiz Rujanowsky Consultoria Imobiliária"
                className="h-full object-contain"
                decoding="async"
              />
            </div>
            <div className="hidden md:flex flex-col select-none">
              <span className={`text-sm font-display font-semibold tracking-wider transition-colors duration-300 ${isScrolled ? 'text-brand-navy' : 'text-slate-100 md:text-white'}`}>
                GILSON RUJANOWSKY
              </span>
              <span className="text-[10px] font-sans font-medium tracking-widest text-brand-gold">
                CONSULTOR IMOBILIÁRIO • CRECI 28586 F
              </span>
            </div>
          </a>

          {/* Desktop Navigation Link Items */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                aria-label={link.label}
                className={`text-sm font-sans font-medium transition-colors duration-200 hover:text-brand-gold focus:outline-2 focus:outline-brand-gold focus:outline-offset-4 rounded ${
                  isScrolled 
                    ? 'text-slate-700 hover:text-brand-navy' 
                    : 'text-slate-200 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Call To Action Rightside Button */}
          <div className="hidden sm:block">
            <a
              href="https://wa.me/5547997321808"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Iniciar consulta direta com Gilson no WhatsApp"
              className="inline-flex items-center gap-2 bg-brand-rust hover:bg-brand-rust/90 text-white font-sans font-medium text-sm px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 active:scale-95 focus:ring-2 focus:ring-brand-gold focus:ring-offset-2"
            >
              <PhoneCall size={16} />
              <span>Fale Conosco</span>
            </a>
          </div>

          {/* Mobile menu button toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Abrir ou fechar menu de navegação responsivo"
              className={`p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold ${isScrolled ? 'text-brand-navy' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Slide-in View */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden glass-panel border-b border-slate-200 mt-2 shadow-xl absolute top-full left-0 right-0 overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  aria-label={link.label}
                  className="block text-base font-sans font-medium text-brand-navy hover:text-brand-gold py-2.5 px-3 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-3">
                <a
                  href="https://wa.me/5547997321808"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Iniciar conversa com Gilson no WhatsApp"
                  className="w-full flex items-center justify-center gap-2 bg-brand-rust hover:bg-opacity-95 text-white font-medium py-3 rounded-xl shadow-md transition-all active:scale-95"
                >
                  <PhoneCall size={18} />
                  <span>Consultoria Comercial no WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
