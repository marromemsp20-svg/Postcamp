"use client"

import React from 'react'

export default function PersonalTrainerConteudo() {
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
        .vagas-text { font-size: .75rem; color: #444; }
        .hero h1 { font-family: 'Syne', sans-serif; font-size: clamp(2rem, 6vw, 3.5rem); font-weight: 800; line-height: 1.05; letter-spacing: -.03em; margin-bottom: 1.25rem; }
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

        /* PROCESS */
        .process-block { display: flex; flex-direction: column; gap: 0; margin: 2rem 0; }
        .proc-step { display: flex; gap: 0; align-items: stretch; }
        .proc-left { display: flex; flex-direction: column; align-items: center; width: 40px; flex-shrink: 0; }
        .proc-circle { width: 28px; height: 28px; border-radius: 50%; background: #1DB954; color: #0A0A0A; font-family: 'Syne', sans-serif; font-size: .72rem; font-weight: 800; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .proc-line { width: 1.5px; background: #1a1a1a; flex: 1; margin: 0 auto; }
        .proc-right { flex: 1; padding: 0 0 1.5rem 1rem; }
        .proc-title { font-family: 'Syne', sans-serif; font-size: .88rem; font-weight: 700; color: #fff; margin-bottom: .3rem; }
        .proc-desc { font-size: .78rem; color: #666; line-height: 1.6; }

        /* PRICE CARDS */
        .price-cards { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin: 2rem 0; }
        @media(max-width:500px){.price-cards{grid-template-columns: 1fr}}
        .price-opt { background: #111; border: .5px solid #1e1e1e; border-radius: 12px; padding: 1.25rem; text-align: center; }
        .price-opt.rec { border-color: #1DB954; }
        .price-opt-val { font-family: 'Syne', sans-serif; font-size: 1.5rem; font-weight: 800; color: #fff; }
        .price-opt.rec .price-opt-val { color: #1DB954; }
        .price-opt-label { font-size: .68rem; color: #555; margin-top: 4px; }

        /* CTA BLOCK */
        .cta-block { text-align: center; padding: 3rem 0; }
        .cta-block h2 { font-family: 'Syne', sans-serif; font-size: 1.8rem; font-weight: 800; margin-bottom: .75rem; }
        .cta-block p { color: #555; margin-bottom: 2rem; font-size: .9rem; }
        .cta-note { font-size: .72rem; color: #333; margin-top: .75rem; }

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
            <div className="vagas-pill">Apenas 5 vagas simultâneas</div>
            <div className="vagas-text">Acompanhamento individual real</div>
          </div>
          <h1>O mais próximo de ter<br />um sócio de conteúdo<br /><em>no seu negócio.</em></h1>
          <p className="hero-sub">Planejamento individual, roteiros personalizados e feedback direto toda semana. Você foca no negócio. Eu cuido da estratégia de conteúdo.</p>
          <a href="https://pay.hotmart.com/A105278066Y" className="cta-primary">Quero uma vaga →</a>
          <p className="hero-proof">A partir de R$ 1.500/mês · Máximo 5 clientes · Vaga sujeita a disponibilidade</p>
        </section>

        <hr className="divider" />

        {/* PARA QUEM */}
        <section className="section">
          <div className="sec-label">Para quem é</div>
          <h2>O Personal é para você se...</h2>
          <p>Você não quer aprender a criar conteúdo — você quer delegar essa parte para alguém que entende do assunto e entende do seu tipo de negócio.</p>
          <p>Você sabe que presença digital é fundamental, mas não tem tempo, paciência ou interesse em aprender mais um método. Você quer resultado direto, com alguém do seu lado.</p>
        </section>

        <hr className="divider" />

        {/* O QUE ESTÁ INCLUSO */}
        <section className="section">
          <div className="sec-label">O que está incluso</div>
          <h2>Acompanhamento completo.</h2>
          <div className="includes-grid">
            <div className="inc-item"><div className="inc-check"><svg viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div><div className="inc-text"><strong>Planejamento individual</strong>Estratégia 100% construída para o seu negócio</div></div>
            <div className="inc-item"><div className="inc-check"><svg viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div><div className="inc-text"><strong>Roteiros personalizados</strong>Scripts adaptados ao seu produto e público</div></div>
            <div className="inc-item"><div className="inc-check"><svg viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div><div className="inc-text"><strong>Feedback semanal direto</strong>Por áudio, vídeo ou texto toda semana</div></div>
            <div className="inc-item"><div className="inc-check"><svg viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div><div className="inc-text"><strong>Ajustes em tempo real</strong>Recalibração conforme os resultados aparecem</div></div>
            <div className="inc-item"><div className="inc-check"><svg viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div><div className="inc-text"><strong>Acesso direto via WhatsApp</strong>Resposta em até 24h úteis</div></div>
            <div className="inc-item"><div className="inc-check"><svg viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div><div className="inc-text"><strong>Reunião quinzenal ao vivo</strong>Análise de métricas e próximos passos</div></div>
            <div className="inc-item"><div className="inc-check"><svg viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div><div className="inc-text"><strong>Tudo do Growth + Elite</strong>Acesso completo à academia incluso</div></div>
            <div className="inc-item"><div className="inc-check"><svg viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div><div className="inc-text"><strong>Relatório mensal</strong>Crescimento, alcance e conversões documentados</div></div>
          </div>
        </section>

        <hr className="divider" />

        {/* COMO FUNCIONA */}
        <section className="section">
          <div className="sec-label">Como funciona</div>
          <h2>Do primeiro contato ao resultado.</h2>
          <div className="process-block">
            <div className="proc-step">
              <div className="proc-left"><div className="proc-circle">1</div><div className="proc-line"></div></div>
              <div className="proc-right"><div className="proc-title">Conversa de alinhamento</div><div className="proc-desc">Antes de qualquer pagamento, conversamos pelo WhatsApp para entender seu negócio e confirmar que o Personal é o fit certo para o seu momento.</div></div>
            </div>
            <div className="proc-step">
              <div className="proc-left"><div className="proc-circle">2</div><div className="proc-line"></div></div>
              <div className="proc-right"><div className="proc-title">Pagamento e acesso</div><div className="proc-desc">Você recebe o link de pagamento. Após a confirmação, iniciamos imediatamente.</div></div>
            </div>
            <div className="proc-step">
              <div className="proc-left"><div className="proc-circle">3</div><div className="proc-line"></div></div>
              <div className="proc-right"><div className="proc-title">Briefing completo — semana 1</div><div className="proc-desc">Reunião de 1h para mapear o negócio, o público, o posicionamento e os objetivos. Você sai da reunião com o plano do primeiro mês.</div></div>
            </div>
            <div className="proc-step">
              <div className="proc-left"><div className="proc-circle">4</div><div className="proc-line"></div></div>
              <div className="proc-right"><div className="proc-title">Acompanhamento semanal</div><div className="proc-desc">Roteiros na segunda, feedback na quarta, ajustes na sexta. Acesso direto via WhatsApp durante toda a semana.</div></div>
            </div>
            <div className="proc-step">
              <div className="proc-left"><div className="proc-circle">5</div></div>
              <div className="proc-right"><div className="proc-title">Relatório e renovação</div><div className="proc-desc">Ao fim de cada mês, você recebe um relatório completo com crescimento e conversões. Resultado visível a cada ciclo.</div></div>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* INVESTIMENTO */}
        <section className="section" style={{ textAlign: 'center' }}>
          <div className="sec-label">Investimento</div>
          <h2 style={{ marginBottom: '1rem' }}>Conforme o escopo do projeto</h2>
          <p style={{ color: '#555', marginBottom: '1.5rem', fontSize: '.85rem' }}>Definido na conversa de alinhamento — antes de qualquer compromisso.</p>
          <div className="price-cards">
            <div className="price-opt"><div className="price-opt-val">R$ 1.500</div><div className="price-opt-label">Escopo básico</div></div>
            <div className="price-opt rec"><div className="price-opt-val">R$ 2.000</div><div className="price-opt-label">Escopo completo</div></div>
            <div className="price-opt"><div className="price-opt-val">R$ 3.000</div><div className="price-opt-label">Escopo premium</div></div>
          </div>
        </section>

        {/* CTA BLOCK */}
        <section className="cta-block">
          <div className="sec-label">Próximo passo</div>
          <h2>Primeiro a gente conversa.<br />Depois você decide.</h2>
          <p>Clique abaixo, faça o pagamento e entraremos em contato em até 2h para agendar a conversa de alinhamento.</p>
          <a href="https://pay.hotmart.com/A105278066Y" className="cta-primary">Quero uma vaga no Personal →</a>
          <p className="cta-note">Máximo 5 clientes simultâneos · Pagamento seguro via Hotmart</p>
        </section>

        <hr className="divider" />

        {/* FAQ */}
        <section className="section">
          <div className="sec-label">Dúvidas</div>
          <h2>Perguntas frequentes</h2>
          <div className="faq-item"><p className="faq-q">Por que apenas 5 vagas?</p><p className="faq-a">O Personal exige atenção individual real. Com mais de 5 clientes simultâneos a qualidade do acompanhamento cai. Esse limite é o que garante que cada cliente receba resultado.</p></div>
          <div className="faq-item"><p className="faq-q">Preciso aparecer nos vídeos?</p><p className="faq-a">Não necessariamente. Os roteiros são adaptados ao formato que funciona para você e para o seu negócio — com ou sem o dono na câmera.</p></div>
          <div className="faq-item"><p className="faq-q">Qual o período mínimo?</p><p className="faq-a">Recomendamos pelo menos 3 meses para ver resultado consistente. Mas não há contrato mínimo obrigatório — você cancela quando quiser pelo Hotmart.</p></div>
          <div className="faq-item"><p className="faq-q">O que acontece se não tiver vaga?</p><p className="faq-a">Você entra para a lista de espera. Assim que uma vaga abrir, você é o primeiro a ser avisado com condição especial.</p></div>
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