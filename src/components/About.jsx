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
import studio3 from 'public/static/studio3.jpg'
import studio4 from 'public/static/studio4.jpg'
import studio5 from 'public/static/studio5.jpg'


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
  w-[50%]
  h-full

`;

const Right = tw.div`
  flex
  flex-col
  justify-around
  items-center
  w-[50%]
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
  h-full
  w-[90%]
`;

const StudioPics = tw.div`
  flex
  flex-col
  justify-center
  items-center
  w-full
  object-contain
  h-[80%]
`;


export default function About() {

  const titleVariants1 = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const titleVariants2 = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const titleVariants3 = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const titleVariants4 = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const detailVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const picVariants1 = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const picVariants2 = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const picVariants3 = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  

  return (
      <Container id="about">
        
          <Left>
            <Titles>
              <MotionDiv 
                className='flex flex-row justify-between w-full'
                initial="hidden"
                whileInView="visible"
                variants={titleVariants1}
                transition={{ duration: 0.4}}
              
              >
                Junior Web Developer
                <BsTerminalFill/>
              </MotionDiv>
              
              <MotionDiv 
                className='flex flex-row justify-between w-full'
                initial="hidden"
                whileInView="visible"
                variants={titleVariants2}
                transition={{ duration: 0.6}}
                
              >
                Professional Voice Actor 
                <IoIosMicrophone/>
              </MotionDiv>
              
              <MotionDiv 
                className='flex flex-row justify-between w-full'
                initial="hidden"
                whileInView="visible"
                variants={titleVariants3}
                transition={{ duration: 0.8}}
                
              >
                BA Sociology/Psychology 
                <FaGraduationCap />
              </MotionDiv>
              
              <MotionDiv 
                className='flex flex-row justify-between w-full'
                initial="hidden"
                whileInView="visible"
                variants={titleVariants4}
                transition={{ duration: 1.0}}
                
              >
                Lighthouse Labs Alumni 
                <SiLighthouse />
              </MotionDiv>
            </Titles>
            <Details>
              <MotionDiv 
                className='text-3xl'
                initial="hidden"
                whileInView="visible"
                variants={detailVariants}
                transition={{ duration: 1.1}}
              >Passionate, driven, and always looking to learn</MotionDiv>
              
              <MotionDiv
                initial="hidden"
                whileInView="visible"
                variants={detailVariants}
                transition={{ duration: 1.2}}
                >As a Web Developer, my goal is to continually add to my knowledge base and harness it to create products that are not only modern, but have the user-experience the focal point.</MotionDiv> 
             
              <MotionDiv
                initial="hidden"
                whileInView="visible"
                variants={detailVariants}
                transition={{ duration: 1.3}}
                >My background in entertainment and social sciences provides me with a unique perspective on how to approach problems and find solutions.</MotionDiv>
            </Details>
          </Left>
          <Right>
            <Photos>
              <StudioPics>
                <MotionDiv className='h-[50%] w-full flex flex-row'>
                  <MotionDiv
                    className='h-full w-[50%]'
                    initial="hidden"
                    whileInView="visible"
                    variants={picVariants1}
                    transition={{ duration: 1.0}}
                  >
                    <Image src={studio5} alt='studio2' className='h-full w-full object-cover rounded-sm shadow-md hover:shadow-xl hover:shadow-black shadow-black'/>
                  </MotionDiv>
                  <MotionDiv
                    className='h-full w-[50%]'
                    initial="hidden"
                    whileInView="visible"
                    variants={picVariants2}
                    transition={{ duration: 1.1}}
                  >
                    <Image src={studio3} alt='studio2' className='h-full w-full object-cover rounded-sm shadow-md hover:shadow-xl hover:shadow-black shadow-black'/>
                  </MotionDiv>
                </MotionDiv>
                <MotionDiv 
                  className='h-[50%] w-full flex justify-center'
                  initial="hidden"
                  whileInView="visible"
                  variants={picVariants3}
                  transition={{ duration: 1.2}}
                >
                  <Image src={studio2} alt='studio2' className='h-full w-[50%] object-cover rounded-sm shadow-md hover:shadow-xl hover:shadow-black shadow-black'/>
                </MotionDiv>
              </StudioPics>
            </Photos>
          </Right>
        </Container>
  );
}