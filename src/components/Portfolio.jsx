import { Lato } from 'next/font/google'
import Image from 'next/image'

import tw from 'tailwind-styled-components';
import Nav from './Nav';

//Media
import onlinestore from 'public/static/onlinestore.png'
import onlinestore2 from 'public/static/onlinestore2.png'
import { FaExternalLinkAlt } from 'react-icons/fa'
import Link from 'next/link';

const lato = Lato({ subsets: ['latin'], weight: ['400'] })

const Section = tw.div`
  scroll-smooth
  snap-end
  min-h-[85vh]
  w-[80vw]
  flex
  flex-col
  items-center
  justify-between
  order-4
  mt-[15vh]
`;

const Container = tw.div`
  h-full
  w-full
  flex
  flex-row
  justify-around
  items-center
  gap-30
`;

const Top = tw.div`
  flex-2
  flex
  flex-col
  justify-around
  items-center
  w-[45%]
  h-[60vh]
`;

const Bottom = tw.div`
  flex-2
  flex
  flex-col
  justify-around
  items-center
  w-[50%]
  h-[60vh]
`;

const Title = tw.h1`
  text-6xl 
  text-center
  w-full
  pt-4
  gap-2
  flex
  flex-row
  justify-center
  hover:text-blue-300
`;

const Titles = tw.p`
  text-3xl
  text-center
  w-full
`;

const Store = tw.a`
  text-6xl
  text-center
  font-bold
  hover:border-b-4
  hover:border-blue-300
  hover:text-blue-300
`;

const Skills = tw.p`
  text-3xl
  text-center
  w-full
`;

const Description = tw.p`
  text-3xl
  text-center
  w-full
`;

const Details = tw.p`
  text-2xl
  text-center
  w-full
  flex
  flex-row
`;

const Photos = tw.div`
  flex
  flex-row
  justify-center
  items-center
  gap-5
  w-full
  h-[80vh]
`;

const StudioPics = tw.div`
  flex
  flex-col
  justify-center
  items-center
  gap-4
  w-auto
  object-fill
  h-full
`;


export default function PortfolioInfo() {
  return (
    <Section className={`${lato.className}`} id='portfolio'>
      <Container>
         <Bottom>
          <Photos>
            <StudioPics>
              <Image src={onlinestore} alt='onlinestore' className='h-[45%] w-auto object-cover rounded-lg shadow-md hover:shadow-xl hover:shadow-black shadow-black'/>
              <Image src={onlinestore2} alt='onlinestore2' className='h-[45%] w-auto object-cover rounded-lg shadow-md hover:shadow-xl hover:shadow-black shadow-black'/>
            </StudioPics>
          </Photos>
        </Bottom>
        <Top>
          <Title>
            <Store target="_blank" href='https://lex-online-store.vercel.app'>Online-Store</Store>
            <FaExternalLinkAlt />
          </Title>
          <Description>Simple E-Commerce store: Built with Nextjs and TailwindCSS</Description>
          <Details> Placeholder Details: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. </Details>
        </Top>
      </Container>
    </Section>
  );
}