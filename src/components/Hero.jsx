import Script from "next/script"
import Image from "next/image"

export default function Hero() {
  return (
    <div className="h-[85vh] w-full flex flex-col justify-center items-center">
      <div className="flex flex-col h-[50%] w-[50%]">
        <section>
          <h1 className="flex flex-col">
            <span className="text-3xl">Hello, I'm</span>
            <strong className="text-6xl">Lex Van-Nugent</strong>
          </h1>
          <div>
            <span className="text-5xl">A </span>
            <span className="typer text-white text-5xl font-bold" data-words='Full-Stack Web Developer, Professional Voice Actor' data-delay='90' data-deleteddelay='1200' data-colors='#ff6699'></span>
            <Script src="https://unpkg.com/typer-dot-js@0.1.0/typer.js" />
          </div>
        </section>
        <section>

        </section>
      </div>
    </div>
  )
}