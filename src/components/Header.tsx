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
          ? 'bg-brand-navy/95 shadow-lg py-2 border-b border-white/10 backdrop-blur-md' 
          : 'bg-brand-navy/95 py-3 md:py-4 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center relative">
          
          {/* Top level row: Branding & Side Action */}
          <div className="w-full flex items-center justify-between lg:grid lg:grid-cols-3">
            {/* Left Column - Brand Name and Title */}
            <div className="hidden md:flex flex-col select-none text-left justify-center">
              <span className="text-xs lg:text-sm font-display font-bold tracking-wider text-white uppercase">
                Gilson Rujanowsky
              </span>
              <span className="text-[9px] lg:text-[10px] font-sans font-medium tracking-widest text-brand-gold mt-0.5 uppercase">
                Consultor Imobiliário • CRECI 28586 F
              </span>
            </div>

            {/* Center Column - Brand Logo */}
            <div className="flex justify-center items-center w-full lg:w-auto">
              <a 
                href="#inicio" 
                aria-label="Ir para o topo da página do portal de Gilson Rujanowsky"
                className="flex items-center justify-center focus:outline-2 focus:outline-brand-gold focus:outline-offset-4 rounded-md"
              >
                <img 
                  src="https://i.postimg.cc/2jsRdSzz/12313.png" 
                  alt="Logotipo de Gilson Luis Rujanowsky Consultoria Imobiliária"
                  className="h-11 sm:h-13 md:h-15 lg:h-17 w-auto object-contain transition-transform duration-300 hover:scale-102"
                  referrerPolicy="no-referrer"
                  decoding="async"
                />
              </a>
            </div>

            {/* Right Column - CTA Button (Desktop only) */}
            <div className="hidden lg:flex justify-end items-center">
              <a
                href="https://wa.me/5547997321808?text=Ol%C3%A1%20Gilson!%20Vim%20pelo%20site%20e%20tenho%20interesse%20em%20um%20im%C3%B3vel%20no%20litoral%20norte%20catarinense.%20Poderiam%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Iniciar consulta direta com Gilson no WhatsApp"
                className="inline-flex items-center gap-2 bg-brand-rust hover:bg-brand-rust/90 text-white font-sans font-semibold text-[11px] px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 uppercase tracking-widest"
              >
                <PhoneCall size={12} />
                <span>Fale Conosco</span>
              </a>
            </div>

            {/* Mobile menu button toggle on the right */}
            <div className="lg:hidden absolute right-0 top-1/2 -translate-y-1/2 flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-label="Abrir ou fechar menu de navegação responsivo"
                className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold text-white hover:text-brand-rust transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Bottom level row: Navigation links list (Desktop only) */}
          <nav className="hidden lg:flex items-center gap-8 mt-3 pt-3 border-t border-white/10 w-full justify-center text-[11px] font-bold uppercase tracking-[0.2em]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                aria-label={link.label}
                className="text-slate-200 hover:text-brand-rust transition-colors duration-200 focus:outline-2 focus:outline-brand-gold focus:outline-offset-4 rounded"
              >
                {link.name}
              </a>
            ))}
          </nav>

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
            className="lg:hidden glass-panel-dark border-b border-white/15 shadow-2xl absolute top-full left-0 right-0 overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2 bg-brand-navy/98 backdrop-blur-lg">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  aria-label={link.label}
                  className="block text-base font-sans font-medium text-slate-100 hover:text-brand-rust py-2.5 px-3 rounded-lg hover:bg-white/5 transition-all"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-3">
                <a
                  href="https://wa.me/5547997321808?text=Ol%C3%A1%20Gilson!%20Vim%20pelo%20site%20e%20tenho%20interesse%20em%20um%20im%C3%B3vel%20no%20litoral%20norte%20catarinense.%20Poderiam%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Iniciar conversa com Gilson no WhatsApp"
                  className="w-full flex items-center justify-center gap-2 bg-brand-rust hover:bg-brand-rust/90 text-white font-medium py-3 rounded-xl shadow-md transition-all active:scale-95"
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
