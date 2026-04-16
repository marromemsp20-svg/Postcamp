import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
            <Play className="h-4 w-4 fill-current" />
            <span>O mercado vende dica. O POSTCAMP vende execução.</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            A academia de conteúdo para quem tem{" "}
            <span className="text-primary">negócio pra cuidar</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            O cliente não sai sabendo mais teoria — sai com conteúdo feito, perfil crescendo e método na cabeça.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="text-base font-semibold px-8 py-6 gap-2" asChild>
              <a href="https://wa.me/5512988101210?text=Vim%20pelo%20site%20e%20gostaria%20de%20come%C3%A7ar%20a%20treinar%20com%20a%20Postcamp!%20" target="_blank" rel="noopener noreferrer">
                Bora Treinar
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 py-6" asChild>
              <a href="#planos">Ver Planos</a>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { value: "500+", label: "Alunos Treinando" },
              { value: "10k+", label: "Conteúdos Criados" },
              { value: "98%", label: "Taxa de Execução" },
              { value: "4.9", label: "Avaliação Média" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />
    </section>
  )
}
