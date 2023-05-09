import Image from 'next/image'
import tw from 'tailwind-styled-components';
import { motion, useScroll, useTransform, Variants } from "framer-motion"
import { useRef } from 'react';

//Media
import studio from 'public/static/studio.jpg'
import studio2 from 'public/static/studio2.jpg'


const Container = tw.div`
  scroll-smooth
  snap-end
  min-h-[85vh]
  w-[80vw]
  mt-[15vh]
  flex
  flex-row
  justify-between
  items-center
  order-3
  gap-20
`;

const Left = tw.div`
  flex
  flex-col
  justify-around
  items-center
  w-[40%]
  h-full
`;

const Right = tw.div`
  flex
  flex-col
  justify-around
  items-center
  w-[60%]
  h-full
`;


const Titles = tw.p`
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


export default function About() {

  return (
      <Container id="about">
          <Left>
            <Titles>
              Junior Web Developer, Professional Voice Actor, BA in Sociology/Psychology and a Lighthouse Labs Alumni.
            </Titles>
            <Details>
              Passionate, driven, and always looking to learn. As a Web Developer, my goal is to continually add to my knowledge base and harness it to create products that are not only modern, but have the user-experience as a focal point in its design. Throughout my life I have always tried to understand the inner machinations of technology and society. I firmly believe that by understanding how the modern world impacts the self, it can provide a deeper sense of appreciation and connection in this digital era. My background in entertainment and social sciences provides me with a unique perspective on how to approach problems and find solutions.
            </Details>
          </Left>
          <Right>
            <Photos>
              <StudioPics>
                <Image src={studio} alt='studio' className='h-full rounded-full shadow-md hover:shadow-xl hover:shadow-black shadow-black'/>
                <Image src={studio2} alt='studio2' className='h-full object-cover rounded-full shadow-md hover:shadow-xl hover:shadow-black shadow-black'/>
              </StudioPics>
            </Photos>
          </Right>
        </Container>
  );
}