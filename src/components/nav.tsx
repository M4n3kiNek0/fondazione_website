import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Nav() {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50">
      <div className="flex items-center gap-6 max-w-[1440px] mx-auto px-8 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-[#1e293b] font-medium">Fondazione</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 ml-auto">
          <Link 
            href="/fondazione" 
            className="text-[#1e293b] hover:text-[#102fd8] transition-colors text-sm font-medium"
          >
            La Fondazione
          </Link>
          <Link 
            href="/impegno" 
            className="text-[#1e293b] hover:text-[#102fd8] transition-colors text-sm font-medium"
          >
            Il Nostro Impegno
          </Link>
          <Link 
            href="/testimonianze" 
            className="text-[#1e293b] hover:text-[#102fd8] transition-colors text-sm font-medium"
          >
            Testimonianze
          </Link>
          <Link 
            href="/sostieni" 
            className="text-[#1e293b] hover:text-[#102fd8] transition-colors text-sm font-medium"
          >
            Sostieni la Fondazione
          </Link>
          <Button 
            className="bg-[#102fd8] text-white hover:bg-[#102fd8]/90 rounded-full px-6"
          >
            Chiedi Aiuto
          </Button>
        </div>
      </div>
    </nav>
  )
}