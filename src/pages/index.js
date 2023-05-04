import Image from 'next/image'
import { Lato } from 'next/font/google'

// Components
import Nav from '../components/Nav'
import Hero from '../components/Hero'

const lato = Lato({ subsets: ['latin'], weight: ['400'] })

export default function Home() {
  return (
    <main className={`flex min-h-screen min-w-screen flex-col items-center justify-between bg-primary ${lato.className}`}>
      <Nav />
      <Hero />
    </main>
  )
}
