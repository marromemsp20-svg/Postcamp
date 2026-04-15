"use client"

import React from 'react'

export default function PlanoElite() {
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
        .vagas-bar { display: flex; align-items: center; gap: 10px; margin-bottom: 1.5rem; }
        .vagas-pill { display: inline-block; font-size: .65rem; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; padding: 5px 14px; border-radius: 999px; background: #111; color: #1DB954; border: 1px solid #1DB954; }
        .vagas-text { font-size: .75rem; color: #555; }
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

        /* INCLUDES */
        .includes-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 1rem; }
        @media(max-width:500px){.includes-grid{grid-template-columns: 1fr}}
        .inc-item { display: flex; align-items: flex-start; gap: 10px; padding: .9rem 1rem; background: #111; border-radius: 10px; border: .5px solid #1e1e1e; }
        .inc-check { width: 18px; height: 18px; border-radius: 50%; background: #1DB954; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px; }
        .inc-check svg { width: 10px; height: 10px; }
        .inc-text { font-size: .82rem; color: #aaa; line-height: 1.5; }
        .inc-text strong { color: #fff; font-weight: 500; display: block; margin-bottom: 2px; }

        /* DIFFERENTIAL */
        .diff-block { background: #111; border: 1px solid #1DB954; border-radius: 14px; padding: 2rem; margin: 2rem 0; }
        .diff-title { font-family: 'Syne', sans-serif; font-size: .9rem; font-weight: 700; color: #1DB954; margin-bottom: 1.25rem; }
        .diff-items { display: flex; flex-direction: column; gap: .75rem; }
        .diff-item { display: flex; gap: 12px; align-items: flex-start; font-size: .85rem; color: #888; line-height: 1.5; }
        .diff-arrow { color: #1DB954; font-weight: 700; flex-shrink: 0; margin-top: 2px; }

        /* PRICE CARD */
        .price-card { background: #111; border: 1.5px solid #1DB954; border-radius: 16px; padding: 2.5rem; max-width: 440px; margin: 0 auto; text-align: center; }
        .price-name { font-size: .65rem; letter-spacing: .12em; text-transform: uppercase; color: #1DB954; margin-bottom: .75rem; }
        .price-val { font-family: 'Syne', sans-serif; font-size: 3.5rem; font-weight: 800; color: #fff; line-height: 1; }
        .price-val sup { font-size: 1.2rem; vertical-align: super; font-weight: 500; color: #888; }
        .price-val .per { font-family: 'DM Sans', sans-serif; font-size: .85rem; font-weight: 400; color: #555; }
        .price-desc { font-size: .78rem; color: #555; margin: .75rem 0 1.5rem; }
        .cta-block { display: flex; flex-direction: column; align-items: center; gap: .75rem; margin-top: 1.5rem; }
        .cta-note { font-size: .72rem; color: #333; }

        /* FAQ */
        .faq-item { border-bottom: .5px solid #1a1a1a; padding: 1rem 0; text-align: left; }
        .faq-q { font-size: .88rem; font-weight: 500; color: #888; margin-bottom: .4rem; }
        .faq-a { font-size: .82rem; color: #555; line-height: 1.7; }

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
          <div className="vagas-bar">
            <div className="vagas-pill">Apenas 20 vagas</div>
            <div className="vagas-text">Turma limitada para garantir qualidade</div>
          </div>
          <h1>Estratégia personalizada.<br />Mentoria real.<br /><em>Resultado acelerado.</em></h1>
          <p className="hero-sub">O nível avançado do POSTCAMP — para lojistas que já criam conteúdo e querem escalar com acompanhamento próximo e estratégia construída para o seu negócio.</p>
          <a href="https://pay.hotmart.com/R105277506P" className="cta-primary">Quero uma vaga no Elite →</a>
          <p className="hero-proof">R$ 497/mês · Vagas limitadas · Cancele quando quiser</p>
        </section>

        <hr className="divider" />

        {/* O QUE ESTÁ INCLUSO */}
        <section className="section">
          <div className="sec-label">O que está incluso</div>
          <h2>Tudo do Growth.<br />Mais o que muda tudo.</h2>
          <div className="includes-grid">
            <div className="inc-item"><div className="inc-check"><svg viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div><div className="inc-text"><strong>Tudo do plano Growth</strong>Aulas, calendário, missões, dieta e curso 1</div></div>
            <div className="inc-item"><div className="inc-check"><svg viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div><div className="inc-text"><strong>Mentoria em grupo semanal</strong>Ao vivo toda semana — análise e estratégia</div></div>
            <div className="inc-item"><div className="inc-check"><svg viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div><div className="inc-text"><strong>Análise do seu perfil</strong>Diagnóstico completo do seu Instagram</div></div>
            <div className="inc-item"><div className="inc-check"><svg viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div><div className="inc-text"><strong>Estratégia personalizada</strong>Plano construído para o seu negócio</div></div>
            <div className="inc-item"><div className="inc-check"><svg viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div><div className="inc-text"><strong>Correção de conteúdos</strong>Feedback direto no que você publicou</div></div>
            <div className="inc-item"><div className="inc-check"><svg viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div><div className="inc-text"><strong>Curso 2 — Dietas na Prática</strong>Aprofundamento no método</div></div>
            <div className="inc-item"><div className="inc-check"><svg viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div><div className="inc-text"><strong>Curso 3 — Estratégia de Crescimento</strong>Escala com dados e método</div></div>
            <div className="inc-item"><div className="inc-check"><svg viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div><div className="inc-text"><strong>Grupo exclusivo Elite</strong>Comunidade de alto nível no WhatsApp</div></div>
          </div>
        </section>

        <hr className="divider" />

        {/* O DIFERENCIAL */}
        <section className="section">
          <div className="sec-label">O diferencial</div>
          <h2>O que muda no Elite em relação ao Growth</h2>
          <div className="diff-block">
            <div className="diff-title">Acompanhamento que o Growth não entrega</div>
            <div className="diff-items">
              <div className="diff-item"><div className="diff-arrow">→</div><p>Você recebe <strong style={{ color: '#fff' }}>análise completa do seu perfil</strong> — o que está funcionando, o que está travando e o que mudar</p></div>
              <div className="diff-item"><div className="diff-arrow">→</div><p><strong style={{ color: '#fff' }}>Estratégia construída para o seu negócio específico</strong> — não um template genérico</p></div>
              <div className="diff-item"><div className="diff-arrow">→</div><p>Seus conteúdos são <strong style={{ color: '#fff' }}>revisados e corrigidos</strong> toda semana com feedback direto</p></div>
              <div className="diff-item"><div className="diff-arrow">→</div><p>Mentoria em grupo semanal onde <strong style={{ color: '#fff' }}>você traz os seus desafios reais</strong> e sai com solução</p></div>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* PREÇO */}
        <section className="section" style={{ textAlign: 'center' }}>
          <div className="sec-label">Investimento</div>
          <h2 style={{ marginBottom: '1.5rem' }}>20 vagas. Sem exceção.</h2>
          <div className="price-card">
            <div className="price-name">Plano Elite — POSTCAMP</div>
            <div className="price-val"><sup>R$</sup>497<span className="per">/mês</span></div>
            <p className="price-desc">Assinatura mensal · Vagas limitadas a 20 alunos · Cancele quando quiser</p>
            <div className="cta-block">
              <a href="https://pay.hotmart.com/R105277506P" className="cta-primary" style={{ width: '100%' }}>Quero uma vaga no Elite →</a>
              <p className="cta-note">Pagamento seguro via Hotmart · Cartão, Pix ou Boleto</p>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* FAQ */}
        <section className="section">
          <div className="sec-label">Dúvidas</div>
          <h2>Perguntas frequentes</h2>
          <div className="faq-item"><p className="faq-q">Por que apenas 20 vagas?</p><p className="faq-a">O Elite tem acompanhamento próximo. Com mais de 20 alunos a qualidade do feedback e da mentoria cai. O limite é real e garante que você recebe atenção de verdade.</p></div>
          <div className="faq-item"><p className="faq-q">Preciso ter experiência criando conteúdo?</p><p className="faq-a">Não precisa ser expert, mas o Elite é mais aproveitado por quem já tem alguma consistência. Se está começando do zero, o plano Growth é o ponto de entrada mais recomendado.</p></div>
          <div className="faq-item"><p className="faq-q">Como é a análise de perfil?</p><p className="faq-a">Na primeira semana você passa pelo diagnóstico completo do seu Instagram — métricas, posicionamento, conteúdo e oportunidades. A análise é individual e fica salva na sua área de membros.</p></div>
          <div className="faq-item"><p className="faq-q">Posso cancelar quando quiser?</p><p className="faq-a">Sim. Cancele pelo Hotmart a qualquer momento sem multa. O acesso continua até o fim do período pago.</p></div>
        </section>

        {/* CTA FINAL */}
        <section style={{ padding: '3rem 0', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.8rem', fontWeight: 800, marginBottom: '.75rem' }}>20 vagas. Sua pode ser a próxima.</h2>
          <p style={{ color: '#555', marginBottom: '2rem', fontSize: '.9rem' }}>Estratégia. Mentoria. Resultado acelerado.</p>
          <a href="https://pay.hotmart.com/R105277506P" className="cta-primary">Quero uma vaga no Elite — R$ 497/mês →</a>
          <p style={{ fontSize: '.72rem', color: '#2a2a2a', marginTop: '1rem' }}>Vagas limitadas · Cancele quando quiser · Pagamento seguro</p>
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