import { Button } from "@/components/ui/button"
import { ArrowRight, Dumbbell } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 sm:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary p-8 sm:p-12 lg:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,var(--tw-gradient-stops))] from-black/20 via-transparent to-transparent" />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <Dumbbell className="h-8 w-8 text-primary-foreground" />
                <span className="text-sm font-semibold text-primary-foreground/80 uppercase tracking-wider">
                  Pronto para treinar?
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground tracking-tight text-balance">
                Bora treinar.
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80 max-w-xl text-balance">
                Menos dica. Mais resultado. Entre para a Academia e transforme seu conteúdo em vendas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-base font-semibold px-8 py-6 gap-2"
                asChild
              >
                <a href="https://wa.me/5512988101210?text=Vim%20pelo%20site%20e%20gostaria%20de%20come%C3%A7ar%20a%20treinar%20com%20a%20Postcamp!%20" target="_blank" rel="noopener noreferrer">
                  Começar Agora
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-black border-black text-primary hover:bg-black/90 hover:text-primary text-base font-semibold px-8 py-6"
                asChild
              >
                <a href="#planos">Ver Planos</a>
              </Button>
            </div>
          </div>

          <div className="relative mt-12 pt-8 border-t border-primary-foreground/20">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {[
                { label: "Sem contrato", description: "Cancele quando quiser" },
                { label: "Acesso imediato", description: "Comece a treinar hoje" },
                { label: "Garantia de 7 dias", description: "Seu dinheiro de volta" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-semibold text-primary-foreground">{item.label}</p>
                  <p className="text-sm text-primary-foreground/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
