import tw from "tailwind-styled-components"
import Image from "next/image"
import Link from "next/link"
import Typed from "typed.js"
import Nav from "./Nav"
import Loading from "./Loading"


import { useRef, useEffect, Suspense } from "react"

import headshot from "public/static/headshot.png"

// Threejs
import { Canvas } from "@react-three/fiber"
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei"

const Section = tw.div`
  h-screen
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
  justify-around
  align-start
  gap-30
`;

const Left = tw.div`
  flex-2
  flex
  flex-col
  justify-center
  items-end
  gap-5
  w-[60%]
`;

const NameContainer = tw.h1`
  flex flex-col w-full h-auto
`;

const Greet = tw.span`
  text-6xl pb-2
`;

const Name = tw.strong`
  text-7xl
`;

const TypedContainer = tw.div`
  w-full h-auto
`;

const Right = tw.div`
  flex-3
  relative
  w-[50%]

`;


export default function HeroBody() {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Full-Stack Web Developer", "Professional Voice Actor"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      startDelay: 600,
      backDelay: 1200,
      showCursor: true,
      cursorChar: "|",
      autoInsertCss: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

 return (
    <Section>
      <Nav />
      <Container>
        <Right>
          <Canvas>
            <Suspense fallback={<Loading/>}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.3}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.4}
                  speed={1.2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Image src={headshot} alt='Lex Van-Nugent' priority={true} className="w-[60%] h-auto object-contain absolute top-0 bottom-0 left-0 right-0 m-auto animate-bounceSlow rounded-full"/>
        </Right>
        <Left>
         <NameContainer>
            <Greet>Hello, I'm</Greet>
            <Name>Lex Van-Nugent</Name>
          </NameContainer>
          <TypedContainer>
            <span className="text-6xl">A </span>
            <span className="typer text-secondary text-6xl font-extrabold" ref={el}/>
          </TypedContainer>
          <div className="flex flex-row h-auto w-full justify-start space-x-12">
            <div className="w-auto h-auto">
              <Link href='/contact' className="p-2 bg-secondary/80 rounded-lg shadow-md shadow-black text-xl">Hire Me</Link>
            </div>
            <div className="w-auto h-auto">
              <Link href='/portfolio' className="p-2 bg-secondary/80 rounded-lg shadow-md shadow-black text-xl">View Portfolio</Link>
            </div>
          </div>
        </Left>
      </Container>
    </Section>
  );
}