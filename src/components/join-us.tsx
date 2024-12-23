import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function JoinUs() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/mountains.jpg"
          alt="Mountain landscape"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/90" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-[#102fd8] mb-4">Unisciti a noi</h2>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Insieme possiamo fare la differenza
          </h3>
          <p className="text-gray-600 mb-8">
            Ogni famiglia merita di essere sostenuta durante i momenti più difficili. Con il tuo aiuto, possiamo continuare a offrire supporto psicologico, programmi di prevenzione e percorsi di speranza per chi affronta la dipendenza di una persona cara. Scopri come puoi contribuire.
          </p>
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#e91e63]">
              Sostieni il nostro impegno per aiutare le famiglie in difficoltà.
            </h3>
            <p className="text-gray-600">
              Con il tuo aiuto possiamo offrire più servizi, raggiungere più persone e fare davvero la differenza.
            </p>
            <Button className="bg-[#102fd8] text-white hover:bg-[#102fd8]/90 rounded-full px-8 py-3">
              Unisciti a Noi
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

