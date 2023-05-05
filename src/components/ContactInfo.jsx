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
  h-screen
  w-screen
  scroll-snap-align-center
  flex
  flex-col
  items-center
  justify-between

`;

const Container = tw.div`
  h-full
  scroll-snap-align-center
  w-[90vw]
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


export default function ContactInfo() {
  return (
    <Section className={`${lato.className}`}>
      <Nav />
      <Container>
        <Top>
          <Titles>
            Contact Placeholder
          </Titles>
          <Details>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt ab doloremque numquam vero minus quos est dolorum odit itaque officiis sint magni enim, consequatur, fuga accusamus voluptatem quaerat. Natus, possimus.
          </Details>
        </Top>
      </Container>
    </Section>
  );
}