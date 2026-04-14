import { Target, Calendar, TrendingUp, CheckCircle2 } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Método Estruturado",
    description: "Não é só assistir — tem que executar. Cada treino tem objetivo claro e resultado mensurável.",
  },
  {
    icon: Calendar,
    title: "Calendário Pronto",
    description: "Chega de pensar no que postar. Receba seu calendário semanal com todos os conteúdos planejados.",
  },
  {
    icon: TrendingUp,
    title: "Crescimento Real",
    description: "Acompanhe sua evolução com métricas que importam. Seu perfil cresce porque você executa.",
  },
  {
    icon: CheckCircle2,
    title: "Feedback Direto",
    description: "Correção de conteúdos em tempo real. Sem enrolação, com foco no que precisa melhorar.",
  },
]

export function MethodSection() {
  return (
    <section id="metodo" className="py-24 sm:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            O Método
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Postar todo dia não é talento. É método.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-balance">
            Você não precisa de mais dicas. Precisa de um sistema que funciona.
            A Academia entrega execução, não teoria.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative p-6 lg:p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-primary/5 border border-primary/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-2xl font-bold">Sua loja merece ser vista.</p>
              <p className="text-muted-foreground mt-2">Pare de ser invisível nas redes. Comece a treinar hoje.</p>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Sem enrolação</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Resultado rápido</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
