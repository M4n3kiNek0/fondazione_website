import { Button } from '@/components/ui/button'

export function Story() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-[#102fd8] text-[32px] font-bold mb-2">
              La Nostra Storia:
            </h2>
            <h3 className="text-[#1e293b] text-[32px] font-bold mb-6">
              Da Una Difficoltà a Una Speranza
            </h3>
            <div className="space-y-4 text-[#475569] mb-8">
              <p>La Fondazione Laura e Alberto Genovese nasce da un'esperienza di vita.</p>
              <p>Una storia di crisi e rinascita, che ci ha insegnato quanto sia fondamentale non affrontare le difficoltà da soli.</p>
              <p>Da questa consapevolezza è nato il nostro impegno: aiutare le famiglie a ritrovare speranza, forza e serenità.</p>
            </div>
            <Button 
              className="w-full md:w-auto bg-[#102fd8] text-white hover:bg-[#102fd8]/90 rounded-full px-8 py-3 text-sm"
            >
              Scopri di più sulla nostra storia | Un Racconto di Speranza e Rinascita
            </Button>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-[#102fd8] text-xl font-bold mb-2">Importanza della famiglia:</h3>
              <p className="text-[#475569]">Crediamo che il benessere familiare sia essenziale per affrontare ogni sfida.</p>
            </div>
            <div>
              <h3 className="text-[#102fd8] text-xl font-bold mb-2">Solidarietà:</h3>
              <p className="text-[#475569]">Ci impegniamo a creare una rete di supporto per chi si trova in difficoltà.</p>
            </div>
            <div>
              <h3 className="text-[#102fd8] text-xl font-bold mb-2">Diritto alla salute:</h3>
              <p className="text-[#475569]">Ogni individuo ha il diritto di accedere a cure e supporto adeguati.</p>
            </div>
            <Button 
              className="w-full md:w-auto bg-[#e91e63] text-white hover:bg-[#e91e63]/90 rounded-full px-8 py-3 text-sm mt-6"
            >
              La Nostra Dedizione per le Famiglie | Una Missione Dedicata a Te e alla Tua Famiglia
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}