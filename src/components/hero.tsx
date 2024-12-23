import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpeg"
          alt="Stepping stones path leading across calm water towards the horizon"
          fill
          priority
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" />
      </div>
      <div className="container relative z-10 mx-auto px-8 pt-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white mb-6 leading-tight">
            Sosteniamo le famiglie nel superare dipendenze e disagi socio-sanitari, per un nuovo orizzonte di serenità
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
            Siamo al tuo fianco per aiutarti a comprendere, affrontare e superare le sfide legate alla dipendenza. Offriamo supporto psicologico, ascolto e percorsi di prevenzione dedicati alle famiglie.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              asChild
              className="bg-[#102fd8] text-white hover:bg-[#102fd8]/90 rounded-full px-8 py-3 text-sm font-medium"
            >
              <Link href="/contatti">
                Siamo al tuo fianco contattaci
              </Link>
            </Button>
            <Button 
              asChild
              variant="secondary"
              className="bg-white text-[#1e293b] hover:bg-white/90 rounded-full px-8 py-3 text-sm font-medium"
            >
              <Link href="/chi-siamo">
                Scopri chi siamo
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}