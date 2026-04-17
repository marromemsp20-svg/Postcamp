import { Button } from "@/components/ui/button"
import { Check, Star, Zap, Crown, Users } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "Grátis",
    period: "",
    description: "Entrada e prova de valor. Veja o método funcionando antes de qualquer venda.",
    icon: Zap,
    features: [
      "Conteúdo diário",
      "Treinos guiados",
      "Desafios semanais",
      "Checklists de execução",
      "Comunidade de alunos",
    ],
    cta: "Começar Grátis",
    highlight: false,
    link: "https://www.postcamp.app.br/starter",
  },
  {
    name: "Growth",
    price: "R$ 97",
    period: "/mês",
    description: "A experiência real começa aqui. Não é só assistir — tem que executar.",
    icon: Star,
    features: [
      "Tudo do Starter",
      "Aulas semanais ao vivo",
      "Método passo a passo",
      "Calendário de conteúdo pronto",
      "Missões semanais com feedback",
      "Dieta de conteúdo personalizada",
    ],
    cta: "Assinar Growth",
    highlight: true,
    link: "https://www.postcamp.app.br/plano-growth",
  },
  {
    name: "Elite",
    price: "R$ 297",
    period: "/mês",
    description: "Transformação com acompanhamento real. Para quem quer crescer de verdade.",
    icon: Crown,
    features: [
      "Tudo do Growth",
      "Análise e correção de perfil",
      "Estratégia personalizada",
      "Mentoria semanal em grupo",
      "Correção de conteúdos",
      "Suporte prioritário",
    ],
    cta: "Entrar para Elite",
    highlight: false,
    link: "https://www.postcamp.app.br/plano-elite",
  },
  {
    name: "Personal Trainer",
    price: "Sob consulta",
    period: "",
    description: "Acompanhamento individual completo. O produto de maior transformação.",
    icon: Users,
    features: [
      "Planejamento 100% personalizado",
      "Roteiros sob medida",
      "Feedback direto toda semana",
      "Ajustes em tempo real",
      "Acesso direto ao treinador",
      "Resultados garantidos",
    ],
    cta: "Falar com Consultor",
    highlight: false,
    link: "https://www.postcamp.app.br/personal-trainer",
  },
]

export function PlansSection() {
  return (
    <section id="planos" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Planos
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Escolha seu nível de treino
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-balance">
            Do iniciante ao atleta de conteúdo. Cada plano é um passo na sua evolução.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col p-6 rounded-2xl border ${
                plan.highlight
                  ? "bg-primary/5 border-primary"
                  : "bg-card border-border"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  Mais Popular
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  plan.highlight ? "bg-primary" : "bg-primary/10"
                }`}>
                  <plan.icon className={`h-5 w-5 ${plan.highlight ? "text-primary-foreground" : "text-primary"}`} />
                </div>
                <h3 className="text-xl font-bold">{plan.name}</h3>
              </div>

              <div className="mb-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8 grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${plan.highlight ? "" : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"}`}
                variant={plan.highlight ? "default" : "secondary"}
                asChild
              >
                <a href={plan.link} target="_blank" rel="noopener noreferrer">
                  {plan.cta}
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
