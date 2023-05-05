// NextJs imports
import Image from 'next/image'
import dynamic from 'next/dynamic'

// React imports
import { useEffect, useState } from 'react'

// ETC imports
import tw from 'tailwind-styled-components'

// Lazy components
const ContactInfo = dynamic(() => import('../../components/ContactInfo'))



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
  bg-primary
  bg-cubes
  animate-fadeIn
`

export default function Contact() {
  return (
    <MainContainer>
      <ContactInfo/>
    </MainContainer>
  )
}