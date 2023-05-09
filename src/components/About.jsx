'use client';
import Image from 'next/image'
import tw from 'tailwind-styled-components';
import { MotionDiv } from '../pages/index';
import { BsTerminalFill } from 'react-icons/bs'
import { IoIosMicrophone } from 'react-icons/io'
import { FaGraduationCap } from 'react-icons/fa'
import { SiLighthouse } from 'react-icons/si'


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
  justify-center
  items-center
  w-[45%]
  h-full

`;

const Right = tw.div`
  flex
  flex-col
  justify-around
  items-center
  w-[55%]
  h-full
`;


const Titles = tw.p`
  text-5xl
  font-bold
  text-center
  w-[95%]
  h-[30%]
  flex
  flex-col
  justify-end
  gap-5
`;


const Details = tw.p`
  text-2xl
  w-full
  h-[40%]
  text-center
  font-bold
  flex
  flex-col
  justify-center
  items-center
  gap-2
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
              <MotionDiv className='flex flex-row justify-between w-full'>Junior Web Developer <BsTerminalFill/></MotionDiv>
              <MotionDiv className='flex flex-row justify-between w-full'>Professional Voice Actor <IoIosMicrophone/></MotionDiv>
              <MotionDiv className='flex flex-row justify-between w-full'>BA Sociology/Psychology <FaGraduationCap /></MotionDiv>
              <MotionDiv className='flex flex-row justify-between w-full'>Lighthouse Labs Alumni <SiLighthouse /></MotionDiv>
            </Titles>
            <Details>
              <p className='text-3xl'>Passionate, driven, and always looking to learn</p>
              <p>As a Web Developer, my goal is to continually add to my knowledge base and harness it to create products that are not only modern, but have the user-experience the focal point.</p> 
              <p>My background in entertainment and social sciences provides me with a unique perspective on how to approach problems and find solutions.</p>
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