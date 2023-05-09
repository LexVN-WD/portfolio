import tw from "tailwind-styled-components"
import Image from "next/image"
import Link from "next/link"
import Typed from "typed.js"
import { FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaReact} from 'react-icons/fa'
import { SiNextdotjs, SiPostgresql, SiTailwindcss, SiThreedotjs } from 'react-icons/si'


import { useRef, useEffect, Suspense } from "react"

import headshot from "public/static/headshot.png"

// Threejs
import { Canvas } from "@react-three/fiber"
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei"

const Section = tw.div`
  min-h-[85vh]
  w-[80vw]
  flex
  flex-col
  items-center
  justify-center
  order-2
  mt-[15vh]
`;

const Container = tw.div`
  h-full
  w-full
  flex
  justify-around
  align-start
  gap-52
`;

const Left = tw.div`
  flex-3
  relative
  w-[40vw]
`

const Right = tw.div`
  flex-2
  flex
  flex-col
  justify-center
  items-start
  gap-2
  w-[40vw]
  h-full
`;

const NameContainer = tw.h1`
  flex flex-col w-full h-auto 
`;

const Greet = tw.span`
  text-5xl pb-2
`;

const Name = tw.strong`
  text-6xl
`;

const TypedContainer = tw.div`
  w-full h-auto
`;


const Details = tw.p`
  text-2xl
  text-center
  flex
  flex-row
  gap-4
  pt-4
`;



export default function Hero({ homeRef}) {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Full-Stack Web Developer", "Professional Voice Actor"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      startDelay: 1000,
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
    <Section id='home'>
      <Container>
        <Left>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} enableRotate={false}/>
              <ambientLight intensity={1} />
              <directionalLight position={[4, 3, 2]} />
              <Sphere args={[1, 100, 200]} scale={2.2}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.4}
                  speed={1.2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Image src={headshot} alt='Lex Van-Nugent' priority={true} className="w-[60%] object-contain absolute top-0 bottom-0 left-0 right-0 m-auto animate-bounceSlow rounded-full hover:shadow-lg hover:shadow-black"/>
        </Left>
        <Right>
         <NameContainer>
            <Greet>Hello, I'm</Greet>
            <Name>Lex Van-Nugent</Name>
          </NameContainer>
          <TypedContainer>
            <span className="typer text-secondary text-5xl font-bold" ref={el}/>
          </TypedContainer>
          <div className="flex flex-row h-auto w-full justify-start space-x-12">
            <div className="w-auto h-auto">
              <Link href='#contact' className="p-2 bg-secondary/80 rounded-lg shadow-md shadow-black hover:shadow-lg hover:shadow-black text-xl">Hire Me</Link>
            </div>
            <div className="w-auto h-auto">
              <Link href='#portfolio' className="p-2 bg-secondary/80 rounded-lg shadow-md shadow-black hover:shadow-lg hover:shadow-black text-xl">View Portfolio</Link>
            </div>
          </div>
          <Details>
            <FaHtml5 className="text-[#e54d26] bg-white rounded-xl hover:shadow-lg hover:shadow-black" size={50}/>
            <FaCss3Alt className="text-[#264de4] bg-white rounded-xl hover:shadow-lg hover:shadow-black" size={50}/>
            <FaJsSquare className="text-[#e6c72d] bg-white rounded-xl hover:shadow-lg hover:shadow-black" size={50}/>
            <FaNodeJs className="text-[#5fa04e] bg-white rounded-xl hover:shadow-lg hover:shadow-black" size={50}/>
            <FaReact className="text-[#0fccf7] bg-white rounded-xl hover:shadow-lg hover:shadow-black" size={50}/>
            <SiNextdotjs className="text-[#000000] bg-white rounded-xl hover:shadow-lg hover:shadow-black" size={50}/>
            <SiPostgresql className="text-[#31648c] bg-white rounded-xl hover:shadow-lg hover:shadow-black" size={50}/>
            <SiTailwindcss className="text-[#06adc9] bg-white rounded-xl hover:shadow-lg hover:shadow-black" size={50}/>
            <SiThreedotjs className="text-[#000000] bg-white rounded-xl hover:shadow-lg hover:shadow-black" size={50}/>
          </Details>
        </Right>
      </Container>
    </Section>
  );
}