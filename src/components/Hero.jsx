import Script from "next/script"
import Image from "next/image"
import Link from "next/link"

import headshot from "/public/static/headshot.jpg"

export default function Hero() {
  return (
    <div className="relative h-[85vh] w-full flex flex-col justify-center items-center px-[15%]">
      <div className="flex flex-row justify-between h-full w-full space-x-24">
        <section className="h-full w-[50%] flex flex-row justify-center items-center">
          <Image src={headshot} alt='Lex Van-Nugent' className=" h-[70%] w-auto object-scale-down rounded-full relative top-0 left-0 animate-bounceSlow" />
        </section>
        <section className="h-[80%] w-[50%] flex flex-col justify-center items-center space-y-4">
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
              <Link href='/contact' className="p-2 bg-secondary rounded-lg">Hire Me</Link>
            </div>
            <div className="w-[30%]">
              <Link href='/portfolio' className="p-2 bg-secondary rounded-lg">View Portfolio</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}