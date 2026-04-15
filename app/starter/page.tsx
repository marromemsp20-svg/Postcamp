"use client"

import React from 'react'

export default function StarterGratuito() {
  return (
    <>
      <style jsx global>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0A0A0A; color: #fff; font-family: 'DM Sans', sans-serif; line-height: 1.7; }
        .container { max-width: 720px; margin: 0 auto; padding: 0 1.5rem; }
        a { text-decoration: none; }

        /* NAV */
        nav { padding: 1.25rem 0; border-bottom: .5px solid #1a1a1a; }
        nav .inner { display: flex; align-items: center; justify-content: space-between; }
        .brand { font-family: 'Syne', sans-serif; font-size: 1.1rem; font-weight: 800; color: #fff; }
        .brand span { color: #1DB954; }
        .nav-tag { font-size: .65rem; letter-spacing: .1em; text-transform: uppercase; color: #444; }

        /* HERO */
        .hero { padding: 5rem 0 4rem; }
        .hero-badge { display: inline-flex; align-items: center; gap: 8px; font-size: .65rem; font-weight: 500; letter-spacing: .1em; text-transform: uppercase; padding: 5px 14px; border-radius: 999px; background: #1DB954; color: #0A0A0A; margin-bottom: 1.5rem; }
        .hero h1 { font-family: 'Syne', sans-serif; font-size: clamp(2.2rem, 6vw, 3.8rem); font-weight: 800; line-height: 1.05; letter-spacing: -.03em; margin-bottom: 1.25rem; }
        .hero h1 em { color: #1DB954; font-style: normal; }
        .hero-sub { font-size: 1.05rem; color: #777; max-width: 560px; margin-bottom: 2.5rem; line-height: 1.8; }
        .cta-primary { display: inline-block; background: #1DB954; color: #0A0A0A; font-family: 'Syne', sans-serif; font-size: .95rem; font-weight: 700; padding: 16px 36px; border-radius: 10px; transition: opacity .15s; border: none; cursor: pointer; text-align: center; }
        .cta-primary:hover { opacity: .88; }
        .hero-proof { margin-top: 1.25rem; font-size: .78rem; color: #333; }

        /* DIVIDER */
        .divider { border: none; border-top: .5px solid #1a1a1a; margin: 3rem 0; }

        /* SECTIONS */
        .sec-label { font-size: .65rem; font-weight: 500; letter-spacing: .12em; text-transform: uppercase; color: #1DB954; margin-bottom: .75rem; }
        .section { padding: 3rem 0; }
        .section h2 { font-family: 'Syne', sans-serif; font-size: 1.8rem; font-weight: 800; margin-bottom: 1.25rem; line-height: 1.2; }
        .section p { font-size: .92rem; color: #666; line-height: 1.8; margin-bottom: 1rem; }

        /* DAYS GRID */
        .days-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 8px; margin: 2rem 0; }
        .day-card { background: #111; border: .5px solid #1e1e1e; border-radius: 10px; padding: .9rem .5rem; text-align: center; }
        .day-card.active { background: #0d3320; border-color: #1DB954; }
        .day-num { font-family: 'Syne', sans-serif; font-size: 1.2rem; font-weight: 800; color: #1DB954; }
        .day-label { font-size: .6rem; color: #555; margin-top: 3px; letter-spacing: .04em; text-transform: uppercase; }
        .day-card.active .day-label { color: #1DB954; opacity: .7; }

        /* INCLUDES */
        .includes-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 1.5rem; }
        @media(max-width:500px) {
          .includes-grid { grid-template-columns: 1fr; }
          .days-grid { grid-template-columns: repeat(4, 1fr); }
        }
        .inc-item { display: flex; align-items: flex-start; gap: 10px; padding: .9rem 1rem; background: #111; border-radius: 10px; border: .5px solid #1e1e1e; }
        .inc-dot { width: 6px; height: 6px; border-radius: 50%; background: #1DB954; flex-shrink: 0; margin-top: 8px; }
        .inc-text { font-size: .82rem; color: #aaa; line-height: 1.5; }
        .inc-text strong { color: #fff; font-weight: 500; display: block; margin-bottom: 2px; }

        /* CTA BLOCK */
        .cta-block { text-align: center; padding: 3rem 0; }
        .cta-block h2 { font-family: 'Syne', sans-serif; font-size: 1.8rem; font-weight: 800; margin-bottom: .75rem; }
        .cta-block p { color: #555; margin-bottom: 2rem; font-size: .9rem; }
        .price-free { font-family: 'Syne', sans-serif; font-size: 3rem; font-weight: 800; color: #1DB954; margin-bottom: .5rem; }
        .cta-note { font-size: .72rem; color: #2a2a2a; margin-top: .75rem; }

        .upsell-note { background: #111; border: .5px solid #1e1e1e; border-radius: 10px; padding: 1.25rem; margin-top: 2rem; font-size: .82rem; color: #555; line-height: 1.7; text-align: left; }
        .upsell-note strong { color: #888; font-weight: 500; }

        /* FOOTER */
        footer { padding: 2rem 0; border-top: .5px solid #1a1a1a; text-align: center; }
        footer p { font-size: .7rem; color: #2a2a2a; margin-top: .3rem; }
      `}</style>

      <nav>
        <div className="container inner">
          <div className="brand">POST<span>CAMP</span></div>
          <div className="nav-tag">Academia de Conteúdo</div>
        </div>
      </nav>

      <div className="container">
        {/* HERO */}
        <section className="hero">
          <div className="hero-badge">Totalmente Gratuito</div>
          <h1>Seu primeiro<br />treino de conteúdo.<br /><em>Começa hoje.</em></h1>
          <p className="hero-sub">7 dias. 7 missões. 7 posts publicados. Sem cartão. Sem compromisso. Só você e o método.</p>
          <a href="https://pay.hotmart.com/C105277697M" className="cta-primary">Começar grátis agora →</a>
          <p className="hero-proof">Gratuito · Sem cartão · Acesso imediato</p>
        </section>

        <hr className="divider" />

        {/* O DESAFIO */}
        <section className="section">
          <div className="sec-label">O desafio</div>
          <h2>7 dias. Uma missão por dia.</h2>
          <p>Cada dia você recebe uma missão simples e direta para executar naquele mesmo dia. Sem enrolação. Sem teoria. Só prática.</p>
          
          <div className="days-grid">
            {['Gancho', 'Produto', 'Bastidor', 'Trend', 'Prova', 'CTA', 'Método'].map((label, i) => (
              <div key={i} className="day-card active">
                <div className="day-num">D{i + 1}</div>
                <div className="day-label">{label}</div>
              </div>
            ))}
          </div>
          
          <p>Quem completa os 7 dias sai com <strong style={{ color: '#fff' }}>7 posts publicados</strong> e o método instalado na cabeça.</p>
        </section>

        <hr className="divider" />

        {/* INCLUSO */}
        <section className="section">
          <div className="sec-label">O que está incluso</div>
          <h2>Tudo que você precisa para começar</h2>
          <div className="includes-grid">
            <div className="inc-item">
              <div className="inc-dot"></div>
              <div className="inc-text"><strong>Missão diária</strong>Uma tarefa por dia para executar no mesmo dia</div>
            </div>
            <div className="inc-item">
              <div className="inc-dot"></div>
              <div className="inc-text"><strong>Roteiros prontos</strong>Texto base para adaptar ao seu produto</div>
            </div>
            <div className="inc-item">
              <div className="inc-dot"></div>
              <div className="inc-text"><strong>Checklist semanal</strong>Para você não perder o ritmo</div>
            </div>
            <div className="inc-item">
              <div className="inc-dot"></div>
              <div className="inc-text"><strong>Quiz da dieta</strong>Descubra qual dieta de conteúdo é ideal para você</div>
            </div>
            <div className="inc-item">
              <div className="inc-dot"></div>
              <div className="inc-text"><strong>Acesso à área de membros</strong>Tudo organizado no Hotmart Club</div>
            </div>
            <div className="inc-item">
              <div className="inc-dot"></div>
              <div className="inc-text"><strong>Convite especial</strong>Condição exclusiva para o plano Growth no dia 7</div>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* CTA FINAL */}
        <section className="cta-block">
          <div className="sec-label">Investimento</div>
          <div className="price-free">R$ 0</div>
          <h2>Começa agora.<br />É de graça.</h2>
          <p>Sem cartão. Sem mensalidade. Sem compromisso.<br />Só você e 7 dias de treino real.</p>
          <a href="https://pay.hotmart.com/C105277697M" className="cta-primary">Quero meu acesso gratuito →</a>
          <p className="cta-note">Acesso imediato via Hotmart · 100% gratuito</p>
          
          <div className="upsell-note">
            <strong>O que acontece depois dos 7 dias?</strong><br />
            Ao completar o desafio você recebe um convite para o plano Growth com condição especial. Sem pressão — só uma porta aberta para quem quiser continuar treinando com o método completo.
          </div>
        </section>
      </div>

      <footer>
        <div className="container">
          <div className="brand">POST<span style={{ color: '#1DB954' }}>CAMP</span></div>
          <p>Academia de Conteúdo para lojistas · contato@postcamp.com.br</p>
        </div>
      </footer>
    </>
  )
}