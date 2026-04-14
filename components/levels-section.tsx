"use client"

import { useState } from "react"

const levels = [
  {
    level: 1,
    name: "Iniciante",
    description: "Posta pouco, sem estratégia. Ainda não entende o que funciona.",
    characteristics: [
      "Posts esporádicos",
      "Sem planejamento",
      "Baixo engajamento",
      "Não sabe o que postar",
    ],
    color: "from-gray-500 to-gray-600",
  },
  {
    level: 2,
    name: "Consistente",
    description: "Posta todo dia com método. Já entende a importância da frequência.",
    characteristics: [
      "Posta diariamente",
      "Segue um calendário",
      "Engajamento crescendo",
      "Começando a ter resultados",
    ],
    color: "from-blue-500 to-blue-600",
  },
  {
    level: 3,
    name: "Estrategista",
    description: "Entende o que funciona e por quê. Sabe adaptar e otimizar.",
    characteristics: [
      "Analisa métricas",
      "Testa formatos",
      "Engajamento alto",
      "Converte seguidores em clientes",
    ],
    color: "from-primary to-green-600",
  },
  {
    level: 4,
    name: "Autoridade",
    description: "Cresce, vende e é referência no nicho. Domina o jogo.",
    characteristics: [
      "Referência no nicho",
      "Vendas constantes pelo perfil",
      "Comunidade engajada",
      "Cria tendências",
    ],
    color: "from-yellow-500 to-orange-500",
  },
]

export function LevelsSection() {
  const [activeLevel, setActiveLevel] = useState(0)

  return (
    <section id="niveis" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Sua Evolução
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Em qual nível você está?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-balance">
            O seguidor vira aluno. O aluno sobe de nível. Descubra onde você está e para onde vai.
          </p>
        </div>

        <div className="relative">
          {/* Progress Bar */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-1 bg-border rounded-full">
            <div
              className="h-full bg-primary rounded-full transition-all duration-500"
              style={{ width: `${((activeLevel + 1) / levels.length) * 100}%` }}
            />
          </div>

          {/* Level Buttons */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {levels.map((level, index) => (
              <button
                key={level.level}
                onClick={() => setActiveLevel(index)}
                className={`relative p-4 lg:p-6 rounded-2xl border transition-all duration-300 text-left ${activeLevel === index
                    ? "bg-primary/10 border-primary"
                    : "bg-card border-border hover:border-primary/50"
                  }`}
              >
                <div className={`w-10 h-10 rounded-full bg-linear-to-br ${level.color} flex items-center justify-center text-white font-bold mb-3`}>
                  {level.level}
                </div>
                <h3 className="font-bold text-lg">{level.name}</h3>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{level.description}</p>
              </button>
            ))}
          </div>

          {/* Active Level Details */}
          <div className="bg-card border border-border rounded-2xl p-6 lg:p-10">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/3">
                <div className={`w-20 h-20 rounded-2xl bg-linear-to-br ${levels[activeLevel].color} flex items-center justify-center text-white text-3xl font-bold mb-4`}>
                  {levels[activeLevel].level}
                </div>
                <h3 className="text-3xl font-bold mb-2">Nível {levels[activeLevel].name}</h3>
                <p className="text-muted-foreground">{levels[activeLevel].description}</p>
              </div>

              <div className="lg:w-2/3">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  Características deste nível
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {levels[activeLevel].characteristics.map((char, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border"
                    >
                      <div className={`w-8 h-8 rounded-full bg-linear-to-br ${levels[activeLevel].color} flex items-center justify-center text-white text-sm font-bold`}>
                        {index + 1}
                      </div>
                      <span>{char}</span>
                    </div>
                  ))}
                </div>

                {activeLevel < levels.length - 1 && (
                  <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
                    <p className="text-sm">
                      <span className="text-primary font-semibold">Próximo passo:</span>{" "}
                      Avançar para o nível {levels[activeLevel + 1].name}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
