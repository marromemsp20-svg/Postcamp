"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/postcamp-logo.jpg"
              alt="POSTCAMP Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-xl font-bold tracking-tight">POSTCAMP</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#metodo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Método
            </Link>
            <Link href="#niveis" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Níveis
            </Link>
            <Link href="#planos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Planos
            </Link>
            <Link href="#dietas" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Dietas
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button className="text-sm font-semibold" asChild>
              <a href="https://wa.me/5512988101210?text=Vim%20pelo%20site%20e%20gostaria%20de%20come%C3%A7ar%20a%20treinar%20com%20a%20Postcamp!%20" target="_blank" rel="noopener noreferrer">
                Começar Agora
              </a>
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="flex flex-col px-4 py-4 gap-4">
            <Link href="#metodo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Método
            </Link>
            <Link href="#planos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Planos
            </Link>
            <Link href="#dietas" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Dietas
            </Link>
            <Link href="#niveis" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Níveis
            </Link>
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <Button className="text-sm font-semibold" asChild>
                <a href="https://wa.me/5512988101210?text=Vim%20pelo%20site%20e%20gostaria%20de%20come%C3%A7ar%20a%20treinar%20com%20a%20Postcamp!%20" target="_blank" rel="noopener noreferrer">
                  Começar Agora
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
