"use client"

import React from 'react'

export default function DietaAutoridade() {
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
        .hero-badge { display: inline-block; font-size: .65rem; font-weight: 500; letter-spacing: .1em; text-transform: uppercase; padding: 5px 14px; border-radius: 999px; background: #0d3320; color: #1DB954; border: .5px solid #1a4a28; margin-bottom: 1.5rem; }
        .hero h1 { font-family: 'Syne', sans-serif; font-size: clamp(2.2rem, 6vw, 3.8rem); font-weight: 800; line-height: 1.05; letter-spacing: -.03em; margin-bottom: 1.25rem; }
        .hero h1 em { color: #1DB954; font-style: normal; }
        .hero-sub { font-size: 1.05rem; color: #777; max-width: 560px; margin-bottom: 2.5rem; line-height: 1.8; }
        .cta-primary { display: inline-block; background: #1DB954; color: #0A0A0A; font-family: 'Syne', sans-serif; font-size: .95rem; font-weight: 700; padding: 16px 36px; border-radius: 10px; transition: opacity .15s; cursor: pointer; border: none; }
        .cta-primary:hover { opacity: .88; }
        .hero-proof { margin-top: 1.5rem; font-size: .78rem; color: #333; display: flex; align-items: center; gap: 8px; }
        .hero-proof span { color: #555; }

        /* DIVIDER */
        .divider { border: none; border-top: .5px solid #1a1a1a; margin: 3rem 0; }

        /* SECTION LABEL */
        .sec-label { font-size: .65rem; font-weight: 500; letter-spacing: .12em; text-transform: uppercase; color: #1DB954; margin-bottom: .75rem; }

        /* PROBLEM */
        .problem-block { padding: 3rem 0; }
        .problem-block h2 { font-family: 'Syne', sans-serif; font-size: 1.8rem; font-weight: 800; margin-bottom: 1.25rem; line-height: 1.2; }
        .problem-list { display: flex; flex-direction: column; gap: .75rem; }
        .problem-item { display: flex; align-items: flex-start; gap: 12px; padding: .9rem 1rem; background: #111; border-radius: 10px; border: .5px solid #1e1e1e; }
        .problem-dot { width: 6px; height: 6px; border-radius: 50%; background: #E24B4A; flex-shrink: 0; margin-top: 8px; }
        .problem-item p { font-size: .88rem; color: #888; line-height: 1.6; }

        /* SOLUTION */
        .solution-block { padding: 3rem 0; }
        .solution-block h2 { font-family: 'Syne', sans-serif; font-size: 1.8rem; font-weight: 800; margin-bottom: .75rem; line-height: 1.2; }
        .solution-block .lead { font-size: .95rem; color: #666; margin-bottom: 2rem; line-height: 1.8; }
        .includes-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        @media(max-width:500px){ .includes-grid { grid-template-columns: 1fr; } }
        .inc-item { display: flex; align-items: flex-start; gap: 10px; padding: .9rem 1rem; background: #111; border-radius: 10px; border: .5px solid #1e1e1e; }
        .inc-check { width: 18px; height: 18px; border-radius: 50%; background: #1DB954; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px; }
        .inc-check svg { width: 10px; height: 10px; }
        .inc-text { font-size: .82rem; color: #aaa; line-height: 1.5; }
        .inc-text strong { color: #fff; font-weight: 500; display: block; margin-bottom: 2px; }

        /* DIETA */
        .dieta-block { background: #111; border: .5px solid #1e1e1e; border-radius: 14px; padding: 2rem; margin: 2rem 0; }
        .dieta-title { font-family: 'Syne', sans-serif; font-size: 1.1rem; font-weight: 800; color: #1DB954; margin-bottom: 1.25rem; }
        .dieta-items { display: flex; flex-direction: column; gap: .75rem; }
        .dieta-item { display: flex; align-items: flex-start; gap: 10px; font-size: .85rem; color: #888; line-height: 1.5; }
        .dieta-arrow { color: #1DB954; font-weight: 700; flex-shrink: 0; }
        .dieta-item strong { color: #fff; font-weight: 500; }

        /* RESULTADO */
        .result-block { padding: 3rem 0; }
        .result-block h2 { font-family: 'Syne', sans-serif; font-size: 1.8rem; font-weight: 800; margin-bottom: 2rem; line-height: 1.2; }
        .result-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; }
        @media(max-width:500px){ .result-grid { grid-template-columns: 1fr; } }
        .result-card { background: #111; border-radius: 10px; padding: 1.25rem; border: .5px solid #1e1e1e; text-align: center; }
        .result-num { font-family: 'Syne', sans-serif; font-size: 2rem; font-weight: 800; color: #1DB954; line-height: 1; }
        .result-label { font-size: .72rem; color: #555; margin-top: 6px; line-height: 1.4; }

        /* PARA QUEM */
        .forwho-block { padding: 3rem 0; }
        .forwho-block h2 { font-family: 'Syne', sans-serif; font-size: 1.8rem; font-weight: 800; margin-bottom: 1.5rem; line-height: 1.2; }
        .forwho-list { display: flex; flex-direction: column; gap: .6rem; }
        .forwho-item { display: flex; align-items: center; gap: 10px; font-size: .88rem; color: #888; padding: .6rem 0; border-bottom: .5px solid #111; }
        .forwho-dot { width: 5px; height: 5px; border-radius: 50%; background: #1DB954; flex-shrink: 0; }

        /* PREÇO */
        .price-block { padding: 3rem 0; text-align: center; }
        .price-block h2 { font-family: 'Syne', sans-serif; font-size: 1.6rem; font-weight: 800; margin-bottom: .5rem; }
        .price-sub { font-size: .85rem; color: #555; margin-bottom: 2rem; }
        .price-card { background: #111; border: 1.5px solid #1DB954; border-radius: 16px; padding: 2.5rem; max-width: 400px; margin: 0 auto; }
        .price-name { font-size: .65rem; letter-spacing: .12em; text-transform: uppercase; color: #1DB954; margin-bottom: .75rem; }
        .price-val { font-family: 'Syne', sans-serif; font-size: 3.5rem; font-weight: 800; color: #fff; line-height: 1; }
        .price-val sup { font-size: 1.2rem; vertical-align: super; font-weight: 500; color: #888; }
        .price-val .per { font-family: 'DM Sans', sans-serif; font-size: .85rem; font-weight: 400; color: #555; }
        .price-desc { font-size: .78rem; color: #555; margin: .75rem 0 1.5rem; }
        .cta-block { display: flex; flex-direction: column; align-items: center; gap: .75rem; margin-top: 1.5rem; }
        .cta-secondary { font-size: .72rem; color: #333; }

        /* FAQ */
        .faq-block { padding: 3rem 0; }
        .faq-block h2 { font-family: 'Syne', sans-serif; font-size: 1.6rem; font-weight: 800; margin-bottom: 1.5rem; }
        .faq-item { border-bottom: .5px solid #1a1a1a; padding: 1rem 0; text-align: left; }
        .faq-q { font-size: .88rem; font-weight: 500; color: #888; margin-bottom: .4rem; }
        .faq-a { font-size: .82rem; color: #555; line-height: 1.7; }

        /* FOOTER */
        footer { padding: 2rem 0; border-top: .5px solid #1a1a1a; text-align: center; }
        footer .brand { font-size: 1rem; margin-bottom: .4rem; }
        footer p { font-size: .7rem; color: #2a2a2a; }

        /* POSTCAMP LINK */
        .brand-link { color: inherit; text-decoration: none; }
        .brand-link:hover { opacity: .8; }
      `}</style>

      <nav>
        <div className="container inner">
          <a href="https://postcamp.app.br" className="brand-link">
            <div className="brand">POST<span>CAMP</span></div>
          </a>
          <div className="nav-tag">Academia de Conteúdo</div>
        </div>
      </nav>

      <div className="container">
        {/* HERO */}
        <section className="hero">
          <div className="hero-badge">Dieta Autoridade</div>
          <h1>Você posta.<br />Mas ninguém <em>compra.</em></h1>
          <p className="hero-sub">O método para lojistas que já postam mas não convertem — e querem ser vistos como referência no seu nicho.</p>
          <a href="https://pay.hotmart.com/I105275622A" className="cta-primary">Quero a Dieta Autoridade →</a>
          <div className="hero-proof">
            <span>R$ 97/mês · Cancele quando quiser · Acesso imediato</span>
          </div>
        </section>

        <hr className="divider" />

        {/* PROBLEMA */}
        <section className="problem-block">
          <div className="sec-label">O problema</div>
          <h2>Você reconhece algum desses momentos?</h2>
          <div className="problem-list">
            <div className="problem-item"><div className="problem-dot"></div><p>Você abre o Instagram, fica 10 minutos olhando para a tela e fecha sem postar nada.</p></div>
            <div className="problem-item"><div className="problem-dot"></div><p>Sabe que precisa estar nas redes, mas não sabe o que postar — e vai empurrando com a barriga.</p></div>
            <div className="problem-item"><div className="problem-dot"></div><p>Já tentou postar mais, mas a consistência dura 3 dias e some.</p></div>
            <div className="problem-item"><div className="problem-dot"></div><p>Vê concorrentes crescendo e não entende o que eles fazem que você não faz.</p></div>
          </div>
        </section>

        <hr className="divider" />

        {/* SOLUÇÃO */}
        <section className="solution-block">
          <div className="sec-label">A solução</div>
          <h2>Não é falta de criatividade.<br />É falta de método.</h2>
          <p className="lead">A Dieta Autoridade é um sistema de conteúdo mensal para lojistas e pequenos empresários. Funciona como uma dieta alimentar — você não precisa inventar o que fazer. Só seguir.</p>
          <div className="includes-grid">
            <div className="inc-item"><div className="inc-check"><svg viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div><div className="inc-text"><strong>30 roteiros prontos</strong>Vídeos para adaptar ao seu negócio e postar hoje</div></div>
            <div className="inc-item"><div className="inc-check"><svg viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div><div className="inc-text"><strong>Ganchos do mês</strong>Os melhores inícios de vídeo para parar o scroll</div></div>
            <div className="inc-item"><div className="inc-check"><svg viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div><div className="inc-text"><strong>Trends selecionadas</strong>Adaptadas para loja física e e-commerce</div></div>
            <div className="inc-item"><div className="inc-check"><svg viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div><div className="inc-text"><strong>Calendário de conteúdo</strong>O mês inteiro organizado. Só executar.</div></div>
            <div className="inc-item"><div className="inc-check"><svg viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div><div className="inc-text"><strong>Missões semanais</strong>Uma tarefa por semana para manter o ritmo</div></div>
            <div className="inc-item"><div className="inc-check"><svg viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div><div className="inc-text"><strong>Conteúdo novo todo mês</strong>Atualizado com as tendências do mês</div></div>
          </div>
        </section>

        {/* DIETA */}
        <div className="dieta-block">
          <div className="dieta-title">Sua prescrição mensal</div>
          <div className="dieta-items">
            <div className="dieta-item"><div className="dieta-arrow">→</div><p><strong>1 vídeo por dia</strong> — curto, direto, com gancho nos primeiros 3 segundos</p></div>
            <div className="dieta-item"><div className="dieta-arrow">→</div><p><strong>2 ganchos agressivos por semana</strong> — perguntas ou afirmações que param o scroll</p></div>
            <div className="dieta-item"><div className="dieta-arrow">→</div><p><strong>1 trend adaptada ao seu negócio</strong> — não copie, adapte para o seu produto</p></div>
          </div>
        </div>

        <hr className="divider" />

        {/* RESULTADO */}
        <section className="result-block">
          <div className="sec-label">Em 30 dias</div>
          <h2>O que muda no seu perfil</h2>
          <div className="result-grid">
            <div className="result-card"><div className="result-num">30</div><div className="result-label">Posts publicados sem travar uma vez sequer</div></div>
            <div className="result-card"><div className="result-num">+</div><div className="result-label">Audiência nova chegando todo dia</div></div>
            <div className="result-card"><div className="result-num">1</div><div className="result-label">Método instalado na sua rotina para sempre</div></div>
          </div>
        </section>

        <hr className="divider" />

        {/* PARA QUEM */}
        <section className="forwho-block">
          <div className="sec-label">Para quem é</div>
          <h2>A Dieta Autoridade foi feita para você se...</h2>
          <div className="forwho-list">
            <div className="forwho-item"><div className="forwho-dot"></div><p>Você tem loja física ou e-commerce e não sabe o que postar</p></div>
            <div className="forwho-item"><div className="forwho-dot"></div><p>Seu Instagram está parado há semanas ou meses</p></div>
            <div className="forwho-item"><div className="forwho-dot"></div><p>Você quer crescer a audiência rápido sem depender de criatividade no dia a dia</p></div>
            <div className="forwho-item"><div className="forwho-dot"></div><p>Você já tentou postar mais vezes mas a consistência nunca durou</p></div>
            <div className="forwho-item"><div className="forwho-dot"></div><p>Você quer um sistema — não mais uma dica solta</p></div>
          </div>
        </section>

        <hr className="divider" />

        {/* PREÇO */}
        <section className="price-block">
          <div className="sec-label">Investimento</div>
          <h2>Simples. Sem enrolação.</h2>
          <p className="price-sub">Menos do que um jantar por mês. Com resultado que dura anos.</p>
          <div className="price-card">
            <div className="price-name">
              Dieta Autoridade — <a href="https://postcamp.app.br" className="brand-link" style={{ color: '#1DB954' }}>POSTCAMP</a>
            </div>
            <div className="price-val"><sup>R$</sup>97<span className="per">/mês</span></div>
            <p className="price-desc">Assinatura mensal · Acesso imediato · Cancele quando quiser</p>
            <div className="includes-grid" style={{ marginBottom: '1.5rem' }}>
              <div className="dieta-item"><div className="dieta-arrow">✓</div><p>30 roteiros prontos</p></div>
              <div className="dieta-item"><div className="dieta-arrow">✓</div><p>Ganchos do mês</p></div>
              <div className="dieta-item"><div className="dieta-arrow">✓</div><p>Trends adaptadas</p></div>
              <div className="dieta-item"><div className="dieta-arrow">✓</div><p>Calendário mensal</p></div>
            </div>
            <div className="cta-block">
              <a href="https://pay.hotmart.com/I105275622A" className="cta-primary" style={{ width: '100%', textAlign: 'center' }}>Quero a Dieta Autoridade →</a>
              <p className="cta-secondary">Pagamento seguro via Hotmart · Cartão, Pix ou Boleto</p>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* FAQ */}
        <section className="faq-block">
          <div className="sec-label">Dúvidas</div>
          <h2>Perguntas frequentes</h2>
          <div className="faq-item"><p className="faq-q">Funciona para qualquer tipo de loja?</p><p className="faq-a">Sim. Os roteiros e ganchos são adaptáveis para qualquer produto — roupa, calçado, acessório, serviço ou produto físico em geral.</p></div>
          <div className="faq-item"><p className="faq-q">Preciso aparecer no vídeo?</p><p className="faq-a">Não necessariamente. Os roteiros funcionam com o dono da loja, funcionários ou até só com os produtos. Você escolhe o formato.</p></div>
          <div className="faq-item"><p className="faq-q">Quanto tempo por dia preciso dedicar?</p><p className="faq-a">Em média 30 a 45 minutos por dia para gravar e editar. Se gravar em lote (5 vídeos de uma vez), dá para resolver a semana em 1 hora.</p></div>
          <div className="faq-item"><p className="faq-q">Como funciona o cancelamento?</p><p className="faq-a">Você cancela quando quiser direto pelo Hotmart. Sem multa, sem burocracia. O acesso continua até o fim do período pago.</p></div>
          <div className="faq-item"><p className="faq-q">Como acesso o conteúdo?</p><p className="faq-a">Após o pagamento você recebe acesso imediato à área de membros no Hotmart Club. Todo o conteúdo fica disponível lá.</p></div>
        </section>

        {/* CTA FINAL */}
        <section style={{ padding: '3rem 0', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.8rem', fontWeight: 800, marginBottom: '.75rem' }}>Sua loja merece ser vista.<br />Bora treinar.</h2>
          <p style={{ color: '#555', marginBottom: '2rem', fontSize: '.9rem' }}>Método. Dieta. Resultado.</p>
          <a href="https://pay.hotmart.com/I105275622A" className="cta-primary">Quero a Dieta Autoridade — R$ 97/mês →</a>
          <p style={{ fontSize: '.72rem', color: '#2a2a2a', marginTop: '1rem' }}>Cancele quando quiser · Acesso imediato · Pagamento seguro</p>
        </section>
      </div>

      <footer>
        <div className="container">
          <a href="https://postcamp.app.br" className="brand-link">
            <div className="brand">POST<span style={{ color: '#1DB954' }}>CAMP</span></div>
          </a>
          <p>Academia de Conteúdo para lojistas · <a href="mailto:contato@postcamp.com.br" style={{ color: 'inherit' }}>contato@postcamp.com.br</a></p>
        </div>
      </footer>
    </>
  )
}
