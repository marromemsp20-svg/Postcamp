import { Flame, Award, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const diets = [
  {
    name: "Dieta Viral",
    icon: Flame,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
    description: "Para quem quer explodir o alcance e viralizar.",
    items: [
      "1 vídeo por dia",
      "2 ganchos agressivos",
      "1 trend adaptada ao negócio",
    ],
    bestFor: "Quem está começando e quer ganhar visibilidade rápido",
  },
  {
    name: "Dieta Autoridade",
    icon: Award,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
    description: "Para quem quer se posicionar como referência no nicho.",
    items: [
      "3 carrosséis por semana",
      "2 conteúdos profundos",
      "1 prova social",
    ],
    bestFor: "Quem já tem audiência e quer converter em vendas",
  },
  {
    name: "Dieta Crescimento",
    icon: TrendingUp,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    description: "O combo completo para crescimento acelerado.",
    items: [
      "1 vídeo + 1 carrossel por dia",
      "CTA em todos os posts",
      "Engajamento ativo diário",
    ],
    bestFor: "Quem quer resultado máximo e está disposto a executar",
  },
]

export function DietsSection() {
  return (
    <section id="dietas" className="py-24 sm:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Dietas de Conteúdo
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Sua receita de posts para a semana
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-balance">
            Planejamos sua "dieta" de posts. Escolha o que combina com seu objetivo e execute.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {diets.map((diet) => (
            <div
              key={diet.name}
              className={`relative p-6 lg:p-8 rounded-2xl bg-background border ${diet.borderColor} hover:border-opacity-60 transition-all duration-300`}
            >
              <div className={`w-14 h-14 rounded-2xl ${diet.bgColor} flex items-center justify-center mb-6`}>
                <diet.icon className={`h-7 w-7 ${diet.color}`} />
              </div>

              <h3 className="text-2xl font-bold mb-2">{diet.name}</h3>
              <p className="text-muted-foreground mb-6">{diet.description}</p>

              <div className="space-y-3 mb-6">
                {diet.items.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-3 rounded-lg ${diet.bgColor}`}
                  >
                    <div className={`w-6 h-6 rounded-full bg-background flex items-center justify-center text-xs font-bold ${diet.color}`}>
                      {index + 1}
                    </div>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Ideal para</p>
                <p className="text-sm">{diet.bestFor}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-base font-semibold px-8 py-6"
            asChild
          >
            <a href="https://www.postcamp.app.br/quiz" target="_blank" rel="noopener noreferrer">
              Faça o Quiz
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
