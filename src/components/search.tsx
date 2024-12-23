import { Button } from '@/components/ui/button'
import { SearchIcon } from 'lucide-react'

export function Search() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-[#1e293b] text-2xl font-semibold text-center mb-8">
          Cerchi qualcosa di più specifico?
        </h2>
        <div className="max-w-xl mx-auto flex gap-2">
          <select className="flex-none w-24 rounded-lg border border-gray-300 bg-white px-3 py-2 text-[#1e293b] text-sm">
            <option>All</option>
            <option>Articoli</option>
            <option>Servizi</option>
            <option>Eventi</option>
          </select>
          <div className="flex-1 relative">
            <input
              type="search"
              placeholder="Cerca"
              className="w-full rounded-lg border border-gray-300 pl-4 pr-10 py-2 text-sm"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              <SearchIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}