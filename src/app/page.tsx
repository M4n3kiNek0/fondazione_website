import { Nav } from '@/components/nav'
import { Hero } from '@/components/hero'
import { Mission } from '@/components/mission'
import { CoreValues } from '@/components/core-values'
import { Story } from '@/components/story'
import { JoinUs } from '@/components/join-us'
import { Search } from '@/components/search'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main>
        <Hero />
        <Mission />
        <CoreValues />
        <Story />
        <JoinUs />
        <Search />
      </main>
      <Footer />
    </div>
  )
}