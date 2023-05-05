// NextJs imports
import Image from 'next/image'
import { Lato } from 'next/font/google'
import dynamic from 'next/dynamic'

// React imports
import { useEffect, useState } from 'react'

// ETC imports
import tw from 'tailwind-styled-components'

// Components
import Loading from '../components/Loading';
import About from '../components/About'

// Lazy load components
const Hero = dynamic(() => import('../components/Hero'))

const lato = Lato({ subsets: ['latin'], weight: ['400'] })

const LoadContainer = tw.div`
  h-[100vh]
  scroll-snap-type-y: mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  bg-primary/80
  flex
  justify-center
  items-center
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
      {loading ? (

        <LoadContainer>
          <Loading loading={loading} />
        </LoadContainer>

      ) : (
      
      <MainContainer id='home' className={`${lato.className} ${loading  ? '' : 'animate-fadeIn bg-primary bg-cubes'}`}>
        <Hero />
      </MainContainer>
      )}
    </>
  );
}
