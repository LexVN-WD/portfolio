import Script from "next/script"
import Image from "next/image"
import Link from "next/link"

import headshot from "/public/static/headshot.png"

// Threejs
import { Canvas } from "@react-three/fiber"
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei"

export default function Hero() {
  return (
    <div className="h-[80vh] w-full flex flex-col justify-center items-center px-[10%]">
      <div className="relative flex flex-row justify-between h-full w-full space-x-[10%]">
        {/* Left Side */}
        <section className="absolute top-0 left-0 h-full w-[50%] flex flex-row justify-center items-center">
          <Canvas className="absolute top-0 left-0 w-full h-full">
            <OrbitControls enableZoom={false} enableRotate={false}/>
            <ambientLight intensity={1} />
            <directionalLight position={[1, 2, 1]} />
            <Sphere args={[1,100, 200]} scale={2.6}>
              <MeshDistortMaterial
                color='#333366'
                attach="material"
                distort={0.4}
                speed={1.2}
              />
            </Sphere>
          </Canvas>
          <Image src={headshot} alt='Lex Van-Nugent' className="absolute h-[50vh] flex flex-row justify-center items-center w-auto object-contain rounded-full animate-bounceSlow" />
        </section>
        {/* Right Side */}
        <section className="absolute top-0 right-0 h-[80%] w-[50%] flex grow flex-col justify-center items-center space-y-4">
          <h1 className="flex flex-col w-full">
            <span className="text-3xl">Hello, I'm</span>
            <strong className="text-6xl">Lex Van-Nugent</strong>
          </h1>
          <div className="w-full">
            <span className="text-5xl">A </span>
            <span className="typer text-white text-5xl font-bold" data-words='Full-Stack Web Developer, Professional Voice Actor' data-delay='60' data-deleteddelay='1300' data-colors='#ff6699' />
            <Script src="https://unpkg.com/typer-dot-js@0.1.0/typer.js" />
          </div>
          <div className="flex flex-row h-auto w-full justify-start pt-2">
            <div className="w-[30%]">
              <Link href='/contact' className="p-2 bg-secondary/80 rounded-lg shadow-md shadow-black">Hire Me</Link>
            </div>
            <div className="w-[30%]">
              <Link href='/portfolio' className="p-2 bg-secondary/80 rounded-lg shadow-md shadow-black">View Portfolio</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}