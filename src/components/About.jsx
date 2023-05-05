import { Suspense } from 'react';

import tw from 'tailwind-styled-components';
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";


const Section = tw.div`
  h-screen
  scroll-snap-align-center
  flex
  justify-center
`;

const Container = tw.div`
  h-screen
  scroll-snap-align-center
  w-1400
  flex
  justify-between
`;

const Left = tw.div`
  flex-1

  @media (max-width: 768px) {
    hidden
  }
`;

const Title = tw.h1`
  text-6xl
  md:text-7xl
  lg:text-8xl
  font-bold
  text-center
  pt-20

  @media (max-width: 768px) {
    text-4xl
    md:text-5xl
    lg:text-6xl
  }
`;

const Right = tw.div`
  flex-1
  flex
  flex-col
  justify-center
  gap-5

  @media (max-width: 768px) {
    items-center
    text-center
  }
`;

const WhatWeDo = tw.div`
  flex
  items-center
  gap-10
`;

const Line = tw.img`
  h-5
`;

const Subtitle = tw.h2`
  text-2xl
  md:text-3xl
  lg:text-4xl
  font-bold
  text-pink-500
`;

const Desc = tw.p`
  text-lg
  md:text-xl
  lg:text-2xl
  text-gray-500
  text-center
  mt-5
`;

const Button = tw.button`
  bg-pink-500
  hover:bg-pink-600
  text-white
  font-bold
  py-2
  px-4
  rounded
  focus:outline-none
  focus:shadow-outline
`;

export default function About() {
  return (
    <Section>
      <Title>About Me</Title>
      <Container>
        <Left>
        </Left>
        <Right>
        </Right>
      </Container>
    </Section>
  );
}