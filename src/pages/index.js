// NextJs imports
import Image from 'next/image'
import { Lato } from 'next/font/google'

// React imports
import { useEffect, useState } from 'react'

// ETC imports


// Components
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Loading from '../components/Loading';

const lato = Lato({ subsets: ['latin'], weight: ['400'] })

export default function Home() {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])


  return (
    <>
      { 
        loading ? 
      
          <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-primary/80'>
            <Loading loading={loading} className='w-[100vw] h-[100vh] flex justify-center items-center'/>
          </div>
        
        :

        <main className={`flex min-h-screen min-w-screen flex-col items-center justify-between bg-primary bg-cubes ${lato.className}`}>
          <Nav />
          <Hero />
        </main>
      }
    </>
  )
}
