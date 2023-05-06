// NextJs imports
import Image from 'next/image'
import { Lato } from 'next/font/google'
import dynamic from 'next/dynamic'

import { GetServerSideProps } from 'next'

// React imports
import { useEffect, useState, useRef } from 'react'

// ETC imports
import tw from 'tailwind-styled-components'

// Lazy load components
const Hero = dynamic(() => import('../components/Hero'));
const AboutInfo = dynamic(() => import('../components/AboutInfo'));
const PortfolioInfo = dynamic(() => import('../components/PortfolioInfo'));
const ContactInfo = dynamic(() => import('../components/ContactInfo'));
const Nav = dynamic(() => import('../components/Nav'));


const lato = Lato({ subsets: ['latin'], weight: ['400'] });

const MainContainer = tw.main`
  h-screen
  w-screen
  scroll-snap-type-y-mandatory
  scroll-behavior-smooth
  overflow-y-auto
  -ms-overflow-style-none
  scrollbar-none
  flex
  flex-col
  justify-between
  items-center
  animate-fadeIn
  bg-primary
  bg-cubes
`;

export default function Home() {


  const homeRef = useRef();
  const aboutRef = useRef();
  const portfolioRef = useRef();
  const contactRef = useRef();

  return (
    <>
      <MainContainer className={`${lato.className}`} >
        <div ref={homeRef} id='home'/>
        <Nav />
        <Hero />
        <AboutInfo ref={aboutRef} />
        <PortfolioInfo ref={portfolioRef} />
        <ContactInfo ref={contactRef} />
      </MainContainer>
    </>
  );
}
