'use client';

// NextJs imports
import { Lato } from 'next/font/google'
import dynamic from 'next/dynamic'

// React imports
import { useRef } from 'react'

// ETC imports
import tw from 'tailwind-styled-components'

import { motion, useScroll, useTransform } from "framer-motion"

// Lazy load components
const Nav = dynamic(() => import('../components/Nav'));
const Hero = dynamic(() => import('../components/Hero'));
const About = dynamic(() => import('../components/About'));
const Portfolio = dynamic(() => import('../components/Portfolio'));
const Contact = dynamic(() => import('../components/Contact'));

const lato = Lato({ subsets: ['latin'], weight: ['400'] });

const MainContainer = tw.main`
  scroll-smooth
  snap-y
  h-screen
  w-screen
  flex
  flex-col
  justify-between
  items-center
  animate-fadeIn
  overflow-x-hidden
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
          <About ref={aboutRef} />
          <Portfolio ref={portfolioRef} />
          <Contact ref={contactRef} />
        </MainContainer>
    </>
  );
}
