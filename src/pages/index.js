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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading && (
        <div className={`absolute top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center bg-primary/80  ${loading ? '' : `transition-opacity opacity-0`}`}>
          <Loading loading={loading} />
        </div>
      )}
      <main className={`flex min-h-screen min-w-screen flex-col items-center justify-between bg-primary bg-cubes ${lato.className} opacity-0 ${loading  ? '' : 'transition opacity-100 ease-in duration-1000'}`}>
        <Nav />
        <Hero />
      </main>
    </>
  );
}
