/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Oportunidades from './components/Oportunidades';
import Investimento from './components/Investimento';
import Empreendimentos from './components/Empreendimentos';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, ArrowUp, ChevronRight, Compass } from 'lucide-react';

export default function App() {
  const [showScrollBtns, setShowScrollBtns] = useState(false);

  // Monitor screen positions to toggle floating utility actions 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollBtns(true);
      } else {
        setShowScrollBtns(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-brand-gold/20 selection:text-brand-navy flex flex-col justify-between overflow-x-hidden">
      
      {/* 1. Header (Navigation & Branding) */}
      <Header />

      {/* Main Structural Layout Content */}
      <main id="main-content">
        
        {/* 2. Hero Segment (Premium Presentation) */}
        <Hero />

        {/* 3. About Gilson Luiz Rujanowsky (Profile narrative and educational background) */}
        <About />

        {/* 4. Strategic Oportunidades Layout (Buying counsel and trust triggers) */}
        <Oportunidades />

        {/* 5. Investimento Litoral (Regional metrics and compound calculator applet) */}
        <Investimento />

        {/* 6. Empreendimentos e Oportunidades showcase (PDF brochures & Drive triggers) */}
        <Empreendimentos />

        {/* 7. Contact Consultation Section (Prefilled direct messaging form helper) */}
        <Contact />

      </main>

      {/* 8. Footer (Secondary nav, location geocards, and details) */}
      <Footer />

      {/* Floating CTA utilities */}
      <AnimatePresence>
        {showScrollBtns && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-40 flex flex-col gap-3"
          >
            {/* Scroll-to-top button */}
            <button
              onClick={scrollToTop}
              title="Voltar ao início"
              aria-label="Voltar para o topo da página do portal de Gilson"
              className="p-3 bg-white hover:bg-slate-50 text-slate-800 rounded-full shadow-lg border border-slate-100 transition-transform active:scale-90 hover:scale-105"
            >
              <ArrowUp size={20} />
            </button>

            {/* Floating Premium WhatsApp Hotlink */}
            <a
              href="https://wa.me/5547997321808?text=Olá%20Gilson,%20estou%20navegando%20em%20seu%20portal%20institucional%20e%20gostaria%20de%20iniciar%20uma%20conversa."
              target="_blank"
              rel="noopener noreferrer"
              title="Fale Conosco no WhatsApp"
              aria-label="Iniciar consulta instantânea no WhatsApp corporativo"
              className="p-4 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl flex items-center justify-center transition-all animate-bounce active:scale-90 hover:scale-110"
            >
              <MessageSquare size={24} className="fill-white font-bold" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
