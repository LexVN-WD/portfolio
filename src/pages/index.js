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
const Loading = dynamic(() => import('../components/Loading'))

const lato = Lato({ subsets: ['latin'], weight: ['400'] })

const LoadContainer = tw.div`
  h-screen
  w-screen
  bg-primary
  overflow-y-hidden
  flex
  justify-center
  items-center
  absolute
  top-0
  left-0
  z-20
`

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
  const [showMore, setShowMore] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading && (

        <LoadContainer className={`${loading ? '' : `transition-opacity opacity-0`}`} >
          <Loading loading={loading} />
        </LoadContainer>

      )}
      <MainContainer id='home' className={`${lato.className} ${loading  ? '' : 'animate-fadeIn bg-primary bg-cubes'}`}>
        <Hero />
      </MainContainer>
    </>
  );
}
