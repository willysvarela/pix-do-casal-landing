import Image from "next/image"
import Link from "next/link"
import { Instagram, InstagramIcon as TiktokIcon } from "lucide-react"
import { WaitlistForm } from "./components/waitlist-form"
import { StepGuide } from "./components/step-guide"
import { Carousel } from "./components/carousel"
import { FAB } from "./components/fab"
import { ThemeToggle } from "./components/theme-toggle"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo-pix.png" alt="Pix do Casal" width={32} height={32} className="rounded-lg" />
            <span className="font-bold">Pix do Casal</span>
          </Link>
          <nav className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="https://instagram.com/pixdocasal" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://tiktok.com/@pixdocasal" target="_blank" rel="noopener noreferrer">
              <TiktokIcon className="h-5 w-5" />
              <span className="sr-only">TikTok</span>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container space-y-6 py-12 text-center md:py-24 lg:py-32 animate-fade-up">
          <div className="mx-auto flex max-w-[64rem] flex-col items-center gap-6">
            <h1 className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
              Sua lista de presentes
              <span className="text-primary"> direto no Pix</span>
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Crie sua página personalizada de presentes e receba as transferências diretamente na sua conta. Sem
              intermediários, sem complicação.
            </p>
            <div className="w-full max-w-md mt-4 p-4 rounded-lg border bg-card shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Entre na lista de espera</h3>
              <WaitlistForm />
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="container py-12 animate-fade-up animate-delay-200">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-bold text-primary">0% de taxa</h3>
              <p className="text-muted-foreground">
                Receba 100% do valor dos presentes diretamente na sua conta via Pix
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-bold">Personalização total</h3>
              <p className="text-muted-foreground">Escolha os produtos ou crie sua própria lista de presentes</p>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-bold">Compartilhe facilmente</h3>
              <p className="text-muted-foreground">
                Envie o link para seus convidados por WhatsApp, email ou redes sociais
              </p>
            </div>
          </div>
        </section>

        {/* Step Guide */}
        <StepGuide />

        {/* No Taxes Section */}
        <section className="container py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/10 -skew-y-6 transform" />
          <div className="relative">
            <div className="mx-auto max-w-[58rem] text-center">
              <h2 className="font-bold text-3xl leading-tight sm:text-4xl md:text-5xl">
                Sem taxas. Sem intermediários.
                <span className="text-primary block mt-1">100% do valor vai direto para sua chave Pix</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
                Diferente de outras plataformas que cobram até 15% de taxa, no Pix do Casal você recebe o valor integral
                de cada presente. O dinheiro cai direto na sua conta!
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4">
                <div className="flex items-center gap-2 text-2xl font-bold">
                  <span className="text-destructive line-through">15% de taxa</span>
                  <span className="text-primary">0% de taxa</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Em um presente de R$ 1.000, você economiza R$ 150 usando o Pix do Casal
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Carousel Section */}
        <section className="container py-12 md:py-24 lg:py-32">
          <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Veja como ficará sua página
          </h2>
          <div className="mt-12">
            <Carousel />
          </div>
        </section>

        {/* Final Waitlist Section */}
        <section id="waitlist" className="container py-12 md:py-24 lg:py-32 bg-muted">
          <div className="mx-auto max-w-[58rem] text-center space-y-6">
            <h2 className="font-bold text-3xl leading-tight sm:text-4xl md:text-5xl">
              Quer ser um dos primeiros a usar?
            </h2>
            <p className="text-lg text-muted-foreground sm:text-xl">
              Entre na nossa lista de espera e receba acesso antecipado assim que lançarmos!
            </p>
            <div className="flex justify-center">
              <WaitlistForm />
            </div>
          </div>
        </section>

        <FAB />
      </main>
      <footer className="border-t">
        <div className="container flex h-14 items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Pix do Casal. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://instagram.com/pixdocasal" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://tiktok.com/@pixdocasal" target="_blank" rel="noopener noreferrer">
              <TiktokIcon className="h-5 w-5" />
              <span className="sr-only">TikTok</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

