import { Lato } from 'next/font/google'
import Image from 'next/image'

import tw from 'tailwind-styled-components';
import Nav from './Nav';

//Media
import studio from 'public/static/studio.jpg'
import studio2 from 'public/static/studio2.jpg'
import fishing from 'public/static/fishing.jpg'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaReact} from 'react-icons/fa'
import { SiNextdotjs, SiPostgresql, SiTailwindcss, SiThreedotjs } from 'react-icons/si'

const lato = Lato({ subsets: ['latin'], weight: ['400'] })

const Section = tw.div`
  min-h-screen
  w-[80vw]
  scroll-snap-align-center
  flex
  flex-col
  items-center
  justify-between
  text-white
  order-3
`;

const Container = tw.div`
  h-full
  scroll-snap-align-center
  w-full
  flex
  flex-row
  justify-around
  items-center
  gap-40
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
`;

const Titles = tw.p`
  text-3xl
  text-center
  w-full
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
`;

const StudioPics = tw.div`
  flex
  flex-row
  justify-center
  items-center
  gap-5
  w-full
  object-contain
  h-[50vh]
`;


export default function AboutInfo() {
  return (
    <Section className={`${lato.className}`} id='about'>
      <Container>
        <Top>
          <Titles>
            Junior Web Developer, Professional Voice Actor, BA in Sociology/Psychology and a Lighthouse Labs Alumni.
          </Titles>
          <Details>
            Passionate, driven, and always looking to learn. As a Web Developer, my goal is to continually add to my knowledge base and harness it to create products that are not only modern, but have the user-experience as a focal point in its design. Throughout my life I have always tried to understand the inner machinations of technology and society. I firmly believe that by understanding how the modern world impacts the self, it can provide a deeper sense of appreciation and connection in this digital era. My background in entertainment and social sciences provides me with a unique perspective on how to approach problems and find solutions.
          </Details>
        </Top>
        <Bottom>
          <Photos>
            <StudioPics>
              <Image src={studio} alt='studio' className='h-full rounded-full shadow-md hover:shadow-xl hover:shadow-black shadow-black'/>
              <Image src={studio2} alt='studio2' className='h-full object-cover rounded-full shadow-md hover:shadow-xl hover:shadow-black shadow-black'/>
            </StudioPics>
          </Photos>
        </Bottom>
      </Container>
    </Section>
  );
}