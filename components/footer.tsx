import { Instagram, Youtube, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/postcamp-logo.jpg"
                alt="POSTCAMP Logo"
                width={36}
                height={36}
                className="rounded-lg"
              />
              <span className="text-lg font-bold">POSTCAMP</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              A academia de conteúdo para quem tem negócio pra cuidar e resultado pra mostrar.
            </p>
            <div className="flex items-center gap-4">
              <Link href="https://www.instagram.com/academiadeconteudo_" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
{/* TODO: Descomentar quando tiver o link do YouTube
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
*/}
              <Link href="mailto:acadeconteudo@gmail.com  ?subject=Gostaria%20de%20conhecer%20os%20planos!" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Planos</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="https://wa.me/5512988101210?text=Ol%C3%A1!%20Quero%20participar%20do%20Plano%20Starter%20gratuito%20do%20POSTCAMP" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Starter (Grátis)</Link></li>
              <li><Link href="https://www.postcamp.app.br/plano-growth" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Growth</Link></li>
              <li><Link href="https://www.postcamp.app.br/plano-elite" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Elite</Link></li>
              <li><Link href="https://www.postcamp.app.br/personal-trainer" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Personal Trainer</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Recursos</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground transition-colors">Dietas de Conteúdo</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Calendário de Posts</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Comunidade</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground transition-colors">Termos de Uso</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Privacidade</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Suporte</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Contato</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} POSTCAMP. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Feito com método e execução.
          </p>
        </div>
      </div>
    </footer>
  )
}
