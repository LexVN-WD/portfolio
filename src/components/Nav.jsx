import Image from "next/image"
import logo from "/public/static/logo.png"

export default function Nav() {
  return (
    <nav className="h-[15vh] w-full flex flex-row justify-between items-center px-[15%]">
      <Image src={logo} contain="true" className="h-[50%] w-auto flex justify-center items-center"/>
      <ul className="flex flex-row justify-center items-center space-x-12 text-xl">
        <li><a href="/">Home</a></li>
        <li><a href="/portfolio">Portfolio</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  )
}