// NextJs imports
import Image from 'next/image'
import { Lato } from 'next/font/google'
import dynamic from 'next/dynamic'

// React imports
import { useEffect, useState } from 'react'

// ETC imports
import tw from 'tailwind-styled-components'

// Lazy load components
const Hero = dynamic(() => import('../components/Hero'))

const lato = Lato({ subsets: ['latin'], weight: ['400'] })

const MainContainer = tw.main`
  h-[100vh]
  scroll-snap-type-y-mandatory
  scroll-behavior-smooth
  overflow-y-auto
  -ms-overflow-style-none
  scrollbar-none
  flex
  flex-col
  justify-between
  items-center
`



export default function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <MainContainer className={`${lato.className} ${loading  ? '' : 'animate-fadeIn bg-primary bg-cubes'}`}>
        <Hero />
      </MainContainer>
    </>
  );
}
