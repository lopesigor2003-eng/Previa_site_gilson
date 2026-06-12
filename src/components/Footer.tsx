/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MapPin, PhoneCall, HelpCircle, Landmark, Compass, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrolltoTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 font-sans border-t border-slate-800">
      
      {/* Top Footer: Map representation and Quick Action highlights */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Logo & Narrative Branding Column (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 bg-white w-fit px-3 py-2 rounded shadow-sm select-none">
                <img 
                  src="https://i.postimg.cc/25psSkYF/Whats-App-Image-2026-06-11-at-16-11-28.jpg" 
                  alt="Logotipo de Gilson Luiz Rujanowsky Consultoria Imobiliária"
                  className="h-10 w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <h3 className="text-white font-display font-semibold text-lg uppercase tracking-wider mb-2">
                Gilson Luiz Rujanowsky
              </h3>
              
              <span className="text-brand-gold text-xs font-semibold tracking-widest block mb-4">
                CONSULTOR IMOBILIÁRIO • CRECI SC 28586 F
              </span>
              
              <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed mb-6">
                Especialista regional em compra, venda e gestão de patrimônio físico de alto padrão e investimentos de alta rentabilidade nas praias do litoral de Santa Catarina.
              </p>
            </div>

            {/* Direct Coordinates badge */}
            <div className="border border-slate-800 bg-slate-950 p-4 rounded-xl flex items-start gap-3">
              <Compass className="text-brand-gold shrink-0 mt-0.5" size={18} />
              <div>
                <span className="text-xs text-white uppercase tracking-wider font-semibold block">Região de Atuação</span>
                <p className="text-[11px] text-slate-400 font-sans mt-0.5">Barra Velha • Penha • Balneário Piçarras • Navegantes</p>
              </div>
            </div>
          </div>

          {/* Quick Anchor Navigation Links Menu (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-start lg:pl-10">
            <h4 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-6 pb-2 border-b border-slate-800">
              Navegação
            </h4>
            
            <nav className="grid grid-cols-2 gap-3">
              {[
                { name: 'Início', href: '#inicio', label: 'Voltar ao topo' },
                { name: 'Sobre', href: '#sobre', label: 'Conhecer Gilson' },
                { name: 'Oportunidades', href: '#oportunidades', label: 'Análise de Oportunidades' },
                { name: 'Investimento', href: '#investimento', label: 'Regiões e Rentabilidade' },
                { name: 'Empreendimentos', href: '#empreendimentos', label: 'Catálogo de PDF' },
                { name: 'Contato', href: '#contato', label: 'Formulário de Contato' }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  aria-label={link.label}
                  className="text-slate-400 hover:text-brand-gold text-sm transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="mt-8">
              <h4 className="text-white font-display font-semibold text-xs uppercase tracking-wider mb-3">
                Informações de Contato
              </h4>
              <ul className="space-y-3.5 text-xs text-slate-400">
                <li className="flex items-start gap-2.5">
                  <MapPin size={14} className="text-brand-gold" />
                  <span>Atuação: Barra Velha, Penha, Piçarras e Navegantes (SC).</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <PhoneCall size={14} className="text-brand-gold" />
                  <a 
                    href="https://wa.me/5547997321808" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-brand-gold hover:underline transition-all"
                  >
                    +55 (47) 99732-1808 (WhatsApp)
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Landmark size={14} className="text-brand-gold" />
                  <span>CRECI SC: 28586 F</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Location Map Image Card Layout (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <h4 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-6 pb-2 border-b border-slate-800">
              Área Metropolitana de Foco
            </h4>
            
            {/* Image Link Frame representing geography */}
            <div className="relative rounded-xl overflow-hidden border border-slate-800 group shadow-sm bg-slate-950">
              <img 
                src="https://i.postimg.cc/6pRvvcsK/Whats-App-Image-2026-06-10-at-08-54-21-(1).jpg" 
                alt="Mapa demonstrativo mostrando as praias de atuação de Gilson no Litoral Norte Catarinense"
                className="w-full h-auto aspect-[16/10] object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
              
              {/* Cover text showing direct operations */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-4 flex flex-col justify-end">
                <span className="text-xs text-brand-gold font-bold font-display uppercase tracking-widest block">Geolocalização Ativa</span>
                <p className="text-[10px] text-slate-300 font-sans mt-0.5">Mais de 13 anos desbravando o potencial de valorização do litoral de SC.</p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-[11px] text-slate-500">
              <span>Santa Catarina, Brasil</span>
              <a 
                href="#inicio" 
                onClick={scrolltoTop} 
                aria-label="Voltar para o topo do portal"
                className="flex items-center gap-1 hover:text-brand-gold transition-colors"
              >
                <span>Voltar ao início</span>
                <ArrowUp size={12} />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal Copyright Bar */}
      <div className="bg-slate-950 py-6 border-t border-slate-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <span>
            © 2026 Gilson Luiz Rujanowsky. Todos os direitos reservados.
          </span>
          <div className="flex gap-4 font-sans text-slate-500 font-light">
            <span>Desenvolvido com Alto Padrão de Engenharia</span>
            <span>•</span>
            <span>CRECI SC nº 28586 F</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
