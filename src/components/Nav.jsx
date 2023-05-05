import Image from "next/image"
import logo from "/public/static/logo.png"
import Link from "next/link"

export default function Nav() {
  return (
    <nav className="h-[15vh] w-full flex flex-row justify-between items-center px-[15%] z-20">
      <Image src={logo} contain="true" alt='logo' className="h-[50%] w-auto flex justify-center items-center"/>
      <ul className="flex flex-row justify-center items-center space-x-12 text-2xl font-semibold">
          <Link href="#home">Home</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="#about">About</Link>
          <Link href="/contact">Contact</Link>
      </ul>
    </nav>
  )
}