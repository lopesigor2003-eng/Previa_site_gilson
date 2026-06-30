/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, PhoneCall, Mail, Sparkles, Building, Landmark, Check } from 'lucide-react';

export default function Contact() {
  // Local form state
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('investir'); // 'investir' | 'morar' | 'construir'
  const [city, setCity] = useState('Barra Velha');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form handle submits directly to prefilled WhatsApp link
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const baseMessage = `Olá Gilson! Vim pelo site e tenho interesse em um imóvel no litoral norte catarinense. Poderiam me passar mais informações? Meu nome é ${name}.`;
    const goalText = goal === 'investir' ? 'Investimento com Valorização' : goal === 'morar' ? 'Moradia/Residência' : 'Construção Exclusiva';
    const cityText = `Minha cidade de preferência é ${city}.`;
    const customMessage = message.trim() ? `\n\nMensagem Adicional: "${message}"` : '';

    const finalMessage = encodeURIComponent(`${baseMessage}\n\n• Objetivo: ${goalText}\n• Cidade de Interesse: ${cityText}${customMessage}`);
    const whatsappUrl = `https://wa.me/5547997321808?text=${finalMessage}`;

    // Mark as submitted and open deep link in new tab safely
    setIsSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setIsSubmitted(false);
    }, 1000);
  };

  return (
    <section 
      id="contato"
      className="py-20 lg:py-28 bg-brand-navy text-white relative overflow-hidden"
    >
      {/* Decorative colored glow orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-rust/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Editorial Text */}
          <motion.div 
            className="lg:col-span-6 flex flex-col justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.4em] uppercase text-slate-400 mb-4 italic block">
              Consultoria Personalizada
            </span>
            
            {/* Header h2 exact match requested */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-[1.1]">
              O próximo grande investimento pode estar mais perto do que você imagina.
            </h2>

            {/* Paragraph exact match requested */}
            <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
              Entre em contato e receba uma consultoria personalizada para encontrar o imóvel ideal para morar, investir ou construir patrimônio no litoral norte catarinense.
            </p>

            {/* Micro-indicators of contact for trust */}
            <div className="space-y-4">
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/5 border border-white/10 text-brand-gold rounded-xl">
                  <PhoneCall size={20} />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-sans">Especialista Direto (WhatsApp)</span>
                  <a 
                    href="https://wa.me/5547997321808?text=Ol%C3%A1%20Gilson!%20Vim%20pelo%20site%20e%20tenho%20interesse%20em%20um%20im%C3%B3vel%20no%20litoral%20norte%20catarinense.%20Poderiam%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F" 
                    className="text-white hover:text-brand-gold font-sans font-medium transition-colors text-sm sm:text-base"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +55 (47) 99732-1808
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/5 border border-white/10 text-brand-gold rounded-xl">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-sans">Contato Corporativo</span>
                  <span className="text-white font-sans text-sm sm:text-base">
                    gilsonrujanowsky@gmail.com
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/5 border border-white/10 text-brand-gold rounded-xl">
                  <Landmark size={20} />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-sans">Registro Profissional Certificado</span>
                  <span className="text-white font-sans text-xs sm:text-sm font-semibold tracking-wider text-brand-gold">
                    CRECI SC 28586 F
                  </span>
                </div>
              </div>

            </div>

            {/* Direct immediate WhatsApp button as exact match alternative */}
            <div className="mt-10">
              <a
                href="https://wa.me/5547997321808?text=Ol%C3%A1%20Gilson!%20Vim%20pelo%20site%20e%20tenho%20interesse%20em%20um%20im%C3%B3vel%20no%20litoral%20norte%20catarinense.%20Poderiam%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fale com Gilson no WhatsApp"
                className="inline-flex items-center gap-3 bg-brand-gold hover:bg-brand-gold-dark text-brand-navy font-display font-medium px-6 py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95"
              >
                <span>Fale com Gilson no WhatsApp</span>
                <Send size={16} />
              </a>
            </div>

          </motion.div>

          {/* Right Side: Interactive prefill-generator Card Form */}
          <motion.div 
            className="lg:col-span-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-brand-blue/40 border border-white/10 p-6 sm:p-8 rounded-3xl shadow-xl">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-brand-gold/10 text-brand-gold rounded-lg">
                  <Sparkles size={16} />
                </div>
                <h3 className="font-display font-medium text-base text-white">Prefira um contato assistido?</h3>
              </div>
              
              <p className="text-xs text-slate-300 font-sans mb-6">
                Selecione suas preferências. Nosso sistema estruturado gerará uma mensagem inteligente para seu atendimento no WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name */}
                <div>
                  <label htmlFor="user-name" className="block text-xs font-sans text-slate-300 mb-2 font-medium">
                    Seu Nome Completo *
                  </label>
                  <input 
                    id="user-name"
                    type="text" 
                    required
                    placeholder="Ex: João da Silva"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-800/60 border border-white/10 rounded-xl px-4 py-3 font-sans text-sm focus:outline-none focus:border-brand-gold text-white placeholder-slate-500 transition-colors"
                  />
                </div>

                {/* Main objective */}
                <div>
                  <label className="block text-xs font-sans text-slate-300 mb-2 font-medium">
                    Qual seu objetivo imobiliário principal?
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { key: 'investir', label: 'Investir' },
                      { key: 'morar', label: 'Morar' },
                      { key: 'construir', label: 'Construir' }
                    ].map((opt) => (
                      <button
                        key={opt.key}
                        type="button"
                        onClick={() => setGoal(opt.key)}
                        className={`py-2 px-3 rounded-lg text-xs font-sans font-medium transition-all ${
                          goal === opt.key 
                            ? 'bg-brand-gold text-brand-navy font-bold' 
                            : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Cities preference */}
                <div>
                  <label htmlFor="user-city" className="block text-xs font-sans text-slate-300 mb-2 font-medium">
                    Cidade de Maior Interesse
                  </label>
                  <select
                    id="user-city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-slate-800/60 border border-white/10 rounded-xl px-4 py-3 font-sans text-sm focus:outline-none focus:border-brand-gold text-white transition-colors"
                  >
                    <option value="Barra Velha" className="bg-brand-navy">Barra Velha</option>
                    <option value="Balneário Piçarras" className="bg-brand-navy">Balneário Piçarras</option>
                    <option value="Penha" className="bg-brand-navy">Penha</option>
                    <option value="Navegantes" className="bg-brand-navy">Navegantes</option>
                  </select>
                </div>

                {/* Custom additional message */}
                <div>
                  <label htmlFor="user-message" className="block text-xs font-sans text-slate-300 mb-2 font-medium">
                    Descreva o imóvel dos seus sonhos (Opcional)
                  </label>
                  <textarea
                    id="user-message"
                    rows={3}
                    placeholder="Ex: Procuro apartamento de 3 suítes frente mar..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-slate-800/60 border border-white/10 rounded-xl px-4 py-3 font-sans text-sm focus:outline-none focus:border-brand-gold text-white placeholder-slate-500 transition-colors resize-none"
                  />
                </div>

                {/* Dynamic Submit Trigger */}
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand-rust hover:bg-brand-rust/90 text-white font-sans font-semibold text-sm py-4 px-6 rounded-xl shadow-lg active:scale-98 transition-all disabled:opacity-50"
                >
                  {isSubmitted ? (
                    <span className="flex items-center gap-2">
                      <Check size={16} className="text-white" />
                      <span>Mensagem Estruturada! Redirecionando...</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <span>Gerar Atendimento WhatsApp</span>
                      <Send size={14} className="text-white/80" />
                    </span>
                  )}
                </button>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
