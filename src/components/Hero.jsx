import Script from "next/script"
import Image from "next/image"
import Link from "next/link"
import Typed from "typed.js"
import { useRef, useEffect } from "react"

import headshot from "/public/static/headshot.png"

// Threejs
import { Canvas } from "@react-three/fiber"
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei"

export default function Hero() {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Full-Stack Web Developer", "Professional Voice Actor"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      startDelay: 500,
      backDelay: 1000,
      showCursor: true,
      cursorChar: "|",
      autoInsertCss: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);


  return (
    <div className="h-[85vh] w-full">
      <div className="h-full w-full">
        {/* Left Side */}
        <section className="absolute top-0 left-0 h-full w-[50%] flex flex-row justify-center items-center">
          <Canvas className="absolute top-0 left-0 w-full h-full animate-bounceSlow">
            <OrbitControls enableZoom={false} enableRotate={false}/>
            <ambientLight intensity={1} />
            <directionalLight position={[1, 2, 0]} />
            <Sphere args={[1,100, 200]} scale={2}>
              <MeshDistortMaterial
                color='#333366'
                attach="material"
                distort={0.5}
                speed={0.9}
              />
            </Sphere>
          </Canvas>
          <Image src={headshot} alt='Lex Van-Nugent' priority={true} className="absolute h-[50vh] flex flex-row justify-center items-center w-auto object-contain rounded-full animate-bounceSlow" />
        </section>
        {/* Right Side */}
        <section className="absolute top-0 right-0 h-full w-[50%] flex grow flex-col justify-center items-center space-y-4">
          <h1 className="flex flex-col w-full h-auto">
            <span className="text-5xl pb-2">Hello, I'm</span>
            <strong className="text-7xl">Lex Van-Nugent</strong>
          </h1>
          <div className="w-full h-auto">
            <span className="text-6xl">A </span>
            <span className="typer text-secondary text-6xl font-extrabold" ref={el}/>
          </div>
          <div className="flex flex-row h-auto w-full justify-start space-x-12">
            <div className="w-auto h-auto">
              <Link href='/contact' className="p-2 bg-secondary/80 rounded-lg shadow-md shadow-black text-xl">Hire Me</Link>
            </div>
            <div className="w-auto h-auto">
              <Link href='/portfolio' className="p-2 bg-secondary/80 rounded-lg shadow-md shadow-black text-xl">View Portfolio</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}