"use client"

import React, { useState, useEffect } from 'react'

/* =============================================
   CONFIGURAÇÕES & DADOS
   ============================================= */
const CONFIG = {
  whatsapp: "5512996487375",
  whatsappMsg: "Olá! Fiz o quiz do POSTCAMP e quero saber mais.",
};

const QUESTIONS = [
  {
    q: "Qual é sua maior dor com o Instagram hoje?",
    opts: [
      { l: "A", t: "Não sei o que postar. Trava toda vez que abre o app.", v: "viral" },
      { l: "B", t: "Posto, mas ninguém engaja. Parece que falo no vazio.", v: "autoridade" },
      { l: "C", t: "Posto de vez em quando, mas não tenho consistência.", v: "crescimento" },
      { l: "D", t: "Quero crescer rápido. Preciso de volume e alcance.", v: "viral" }
    ]
  },
  {
    q: "Como é sua rotina hoje com conteúdo?",
    opts: [
      { l: "A", t: "Zero. Não posto nada ou posto raramente.", v: "crescimento" },
      { l: "B", t: "Posto quando lembro ou quando tenho algo pra vender.", v: "viral" },
      { l: "C", t: "Tento postar, mas o conteúdo não gera resultado.", v: "autoridade" },
      { l: "D", t: "Já posto com frequência, quero escalar de vez.", v: "crescimento" }
    ]
  },
  {
    q: "Qual resultado você quer em 30 dias?",
    opts: [
      { l: "A", t: "Ser conhecido. Mais seguidores, mais alcance.", v: "viral" },
      { l: "B", t: "Ser referência. Que me vejam como especialista.", v: "autoridade" },
      { l: "C", t: "Consistência. Quero postar todo dia de forma organizada.", v: "crescimento" },
      { l: "D", t: "Vendas. Quero que o conteúdo traga clientes.", v: "autoridade" }
    ]
  }
];

const DIETAS: Record<string, any> = {
  viral: {
    name: "Dieta Viral",
    url: "https://www.postcamp.app.br/dieta-viral",
    desc: "Você precisa aparecer para pessoas novas todos os dias. Sem alcance, nenhuma outra estratégia funciona. Essa dieta coloca sua loja no mapa.",
    items: [
      { s: "1 vídeo por dia", r: " — curto, direto, gancho nos primeiros 3 segundos." },
      { s: "2 ganchos agressivos por semana", r: " — perguntas ou afirmações que param o scroll." },
      { s: "1 trend adaptada", r: " — adapte ao seu negócio, não copie igual." }
    ],
    cta: "Quero começar a Dieta Viral →",
    preview: "Dieta Viral desbloqueada — veja sua prescrição completa"
  },
  autoridade: {
    name: "Dieta Autoridade",
    url: "https://www.postcamp.app.br/dieta-autoridade",
    desc: "Você já aparece, mas não converte. As pessoas precisam te ver como referência antes de comprar. Essa dieta constrói esse posicionamento.",
    items: [
      { s: "3 carrosséis por semana", r: " — conteúdo profundo que educa e gera salvamentos." },
      { s: "2 conteúdos de bastidor", r: " — mostre o processo, o negócio, o humano por trás." },
      { s: "1 prova social por semana", r: " — depoimento, resultado, antes e depois." }
    ],
    cta: "Quero começar a Dieta Autoridade →",
    preview: "Dieta Autoridade desbloqueada — veja sua prescrição completa"
  },
  crescimento: {
    name: "Dieta Crescimento",
    url: "https://www.postcamp.app.br/dieta-crescimento",
    desc: "Você está pronto para escalar. Tem noção do que funciona, mas falta estrutura e volume. Essa dieta te coloca em modo de expansão real.",
    items: [
      { s: "1 vídeo + 1 carrossel por dia", r: " — um para alcance, outro para profundidade." },
      { s: "CTA em todos os posts", r: " — todo conteúdo tem uma próxima ação clara." },
      { s: "Engajamento ativo diário", r: " — responder, comentar, aparecer. 20 min por dia." }
    ],
    cta: "Quero começar a Dieta Crescimento →",
    preview: "Dieta Crescimento desbloqueada — veja sua prescrição completa"
  }
};

/* =============================================
   COMPONENTE PRINCIPAL
   ============================================= */
export default function QuizDiagnostico() {
  const [step, setStep] = useState<'quiz' | 'gate' | 'result'>('quiz');
  const [curIdx, setCurIdx] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  // FIX: selectedOpt agora armazena a LETRA (l), que é única por pergunta
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  const [winner, setWinner] = useState<string | null>(null);
  const [lead, setLead] = useState({ name: '', email: '' });
  const [emailError, setEmailError] = useState(false);

  useEffect(() => {
    if (step === 'gate') {
      const counts: Record<string, number> = { viral: 0, autoridade: 0, crescimento: 0 };
      answers.forEach(a => counts[a]++);
      const win = Object.keys(counts).reduce((a, b) => counts[a] >= counts[b] ? a : b);
      setWinner(win);
    }
  }, [step, answers]);

  const handleNext = () => {
    if (!selectedLetter) return;

    // Recupera o valor (v) da opção selecionada pela letra
    const selectedOpt = QUESTIONS[curIdx].opts.find(o => o.l === selectedLetter);
    if (!selectedOpt) return;

    const newAnswers = [...answers, selectedOpt.v];
    setAnswers(newAnswers);
    setSelectedLetter(null); // limpa seleção para a próxima pergunta

    if (curIdx < QUESTIONS.length - 1) {
      setCurIdx(curIdx + 1);
    } else {
      setStep('gate');
    }
  };

  const handleReveal = async () => {
    if (!lead.email || !lead.email.includes('@')) {
      setEmailError(true);
      return;
    }

    try {
      await fetch('https://formspree.io/f/xykboooy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: lead.name,
          email: lead.email,
          dieta_recebida: winner ? DIETAS[winner].name : 'N/A'
        })
      });
    } catch (e) { console.error("Erro ao capturar lead"); }

    setStep('result');
  };

  const restart = () => {
    setStep('quiz');
    setCurIdx(0);
    setAnswers([]);
    setSelectedLetter(null);
    setWinner(null);
    setLead({ name: '', email: '' });
    setEmailError(false);
  };

  return (
    <main className="main-wrapper">
      <style jsx global>{`
        .main-wrapper {
          background: #0f0f0f; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 2rem 1rem; font-family: 'DM Sans', sans-serif; color: #fff;
        }
        .qz { background: #0A0A0A; border: 0.5px solid #1e1e1e; border-radius: 20px; padding: 2.5rem 2rem; width: 100%; max-width: 520px; }
        .brand { font-size: 11px; letter-spacing: .12em; text-transform: uppercase; color: #1DB954; font-weight: 500; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 8px; }
        .brand-dot { width: 6px; height: 6px; border-radius: 50%; background: #1DB954; }
        .prog-wrap { height: 3px; background: #1a1a1a; border-radius: 99px; margin-bottom: 2rem; overflow: hidden; }
        .prog-fill { height: 100%; background: #1DB954; transition: width .4s ease; }

        .q-num { font-size: 11px; letter-spacing: .08em; text-transform: uppercase; color: #444; margin-bottom: .5rem; }
        .q-title { font-family: 'Syne', sans-serif; font-size: 1.25rem; font-weight: 800; line-height: 1.3; margin-bottom: 1.5rem; }

        .opts { display: flex; flex-direction: column; gap: 9px; }
        .opt { background: #111; border: 1px solid #1e1e1e; border-radius: 10px; padding: .85rem 1rem; cursor: pointer; transition: all .15s; display: flex; align-items: center; gap: 12px; }
        .opt:hover { border-color: #1DB954; background: #0d1f13; }
        .opt.sel { border-color: #1DB954; background: #0d1f13; }
        .opt-l { width: 26px; height: 26px; border-radius: 6px; background: #1a1a1a; display: flex; align-items: center; justify-content: center; font-size: .7rem; font-weight: 500; color: #444; flex-shrink: 0; }
        .opt.sel .opt-l { background: #1DB954; color: #0A0A0A; }
        .opt-t { font-size: .82rem; color: #888; line-height: 1.4; }
        .opt.sel .opt-t { color: #fff; }

        .btn-next { background: #1DB954; color: #0A0A0A; border: none; border-radius: 8px; padding: 10px 22px; font-weight: 500; cursor: pointer; opacity: 0.35; transition: opacity .2s; }
        .btn-next.active { opacity: 1; }
        .nav { display: flex; justify-content: space-between; align-items: center; margin-top: 1.5rem; }
        .nav-info { font-size: .75rem; color: #333; }

        .gate, .result { display: flex; flex-direction: column; gap: 1rem; }
        .gate-title { font-family: 'Syne', sans-serif; font-size: 1.3rem; font-weight: 800; line-height: 1.25; }
        .gate-sub { font-size: .82rem; color: #666; line-height: 1.6; }
        .gate-input { background: #111; border: 1px solid #222; border-radius: 8px; padding: 12px 14px; font-size: .85rem; color: #fff; outline: none; transition: border-color .15s; }
        .gate-input:focus { border-color: #1DB954; }
        .gate-input.error { border-color: #ff4444; }
        .btn-reveal, .btn-cta { background: #1DB954; color: #0A0A0A; padding: 13px; border-radius: 8px; border: none; font-family: 'Syne', sans-serif; font-weight: 700; cursor: pointer; }
        .btn-wpp { background: transparent; color: #25D366; border: 1px solid #1a3a20; padding: 11px; border-radius: 8px; cursor: pointer; }
        .btn-restart { background: transparent; border: 1px solid #1a1a1a; color: #333; padding: 10px; border-radius: 8px; cursor: pointer; font-size: .78rem; }

        .ri { display: flex; align-items: flex-start; gap: 10px; padding: .75rem; background: #111; border-radius: 8px; border: .5px solid #1e1e1e; }
        .ri-dot { width: 6px; height: 6px; border-radius: 50%; background: #1DB954; margin-top: 6px; }
        .ri-text { font-size: .8rem; color: #888; }
        .ri-text strong { color: #fff; }

        @media (max-width: 480px) { .qz { padding: 1.75rem 1.25rem; } }
      `}</style>

      <div className="qz">
        <div className="brand"><div className="brand-dot"></div>POSTCAMP · Diagnóstico</div>

        <div className="prog-wrap">
          <div
            className="prog-fill"
            style={{ width: step === 'quiz' ? `${(curIdx / QUESTIONS.length) * 100}%` : step === 'gate' ? '85%' : '100%' }}
          ></div>
        </div>

        {/* PASSO 1: PERGUNTAS */}
        {step === 'quiz' && (
          <div id="sq">
            <div className="q-num">Pergunta {curIdx + 1} de {QUESTIONS.length}</div>
            <div className="q-title">{QUESTIONS[curIdx].q}</div>
            <div className="opts">
              {QUESTIONS[curIdx].opts.map((o) => (
                <div
                  key={o.l}
                  // FIX: compara pela letra, que é única em cada pergunta
                  className={`opt ${selectedLetter === o.l ? 'sel' : ''}`}
                  onClick={() => setSelectedLetter(o.l)}
                >
                  <div className="opt-l">{o.l}</div>
                  <div className="opt-t">{o.t}</div>
                </div>
              ))}
            </div>
            <div className="nav">
              <div className="nav-info">{curIdx + 1} / {QUESTIONS.length}</div>
              <button
                className={`btn-next ${selectedLetter ? 'active' : ''}`}
                onClick={handleNext}
                disabled={!selectedLetter}
              >
                Próximo →
              </button>
            </div>
          </div>
        )}

        {/* PASSO 2: CAPTURA */}
        {step === 'gate' && (
          <div className="gate">
            <div style={{ fontSize: '.7rem', color: '#1DB954', textTransform: 'uppercase' }}>Sua dieta está pronta</div>
            <div className="gate-title">Qual email você usa<br />no seu negócio?</div>
            <p className="gate-sub">Vamos enviar sua dieta personalizada + um bônus exclusivo para você começar hoje.</p>

            <div style={{ background: '#111', padding: '1rem', borderRadius: '10px', display: 'flex', gap: '12px', alignItems: 'center' }}>
              <div style={{ width: '36px', height: '36px', background: '#1a1a1a', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="3" y="7" width="10" height="7" rx="2" stroke="#1DB954" strokeWidth="1.2"/>
                  <path d="M5 7V5a3 3 0 016 0v2" stroke="#1DB954" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </div>
              <div style={{ fontSize: '.8rem', color: '#444', fontStyle: 'italic' }}>
                {winner ? DIETAS[winner].preview : "Processando sua dieta..."}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <input
                className="gate-input"
                placeholder="Seu nome"
                value={lead.name}
                onChange={e => setLead({...lead, name: e.target.value})}
              />
              <input
                className={`gate-input ${emailError ? 'error' : ''}`}
                placeholder="Seu melhor email"
                value={lead.email}
                onChange={e => { setLead({...lead, email: e.target.value}); setEmailError(false); }}
              />
              <button className="btn-reveal" onClick={handleReveal}>Revelar minha dieta →</button>
              <div style={{ fontSize: '.65rem', color: '#333', textAlign: 'center' }}>Sem spam. Só conteúdo que vale o seu tempo.</div>
            </div>
          </div>
        )}

        {/* PASSO 3: RESULTADO */}
        {step === 'result' && winner && (
          <div className="result">
            <div style={{ fontSize: '.7rem', color: '#1DB954', textTransform: 'uppercase' }}>Sua dieta ideal · POSTCAMP</div>
            <div style={{ fontFamily: 'Syne', fontSize: '1.9rem', fontWeight: 800 }}>{DIETAS[winner].name}</div>
            <p style={{ fontSize: '.85rem', color: '#777', lineHeight: 1.7 }}>{DIETAS[winner].desc}</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {DIETAS[winner].items.map((item: any, i: number) => (
                <div key={i} className="ri">
                  <div className="ri-dot"></div>
                  <div className="ri-text"><strong>{item.s}</strong>{item.r}</div>
                </div>
              ))}
            </div>

            <hr style={{ border: 'none', borderTop: '.5px solid #1a1a1a', margin: '.5rem 0' }} />

            {/* FIX: usa a URL específica de cada dieta */}
            <button className="btn-cta" onClick={() => window.open(DIETAS[winner].url, '_blank')}>
              {DIETAS[winner].cta}
            </button>
            <button className="btn-wpp" onClick={() => window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.whatsappMsg)}`, '_blank')}>
              Falar com a equipe pelo WhatsApp →
            </button>
            <button className="btn-restart" onClick={restart}>Refazer diagnóstico</button>
          </div>
        )}
      </div>
    </main>
  )
}
