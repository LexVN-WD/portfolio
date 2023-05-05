import Image from "next/image"
import logo from "/public/static/logo.png"
import Link from "next/link"
import tw from "tailwind-styled-components"
import { Lato } from 'next/font/google'

const lato = Lato({ subsets: ['latin'], weight: ['400'] })

const Section = tw.div`
  flex
  justify-center
  items-center
  w-[70vw]
  h-[15vh]
`;

const Container = tw.div`
  w-1400
  py-4
  h-full
  w-full
`;

const Links = tw.div`
  flex
  flex-row
  justify-between
  items-center
  h-full
  w-full
`;

const Logo = tw.div`
  h-[10vh]
  p-3
`;

const List = tw.ul`
  flex
  text-2xl
  gap-10
  list-none
  font-semibold
`;


export default function Nav() {
   return (
    <Section className={`${lato.className}`}>
      <Container>
        <Links>
          <Logo>
            <Image src={logo} contain="true" alt='logo' className="h-full w-auto"/>
          </Logo>
          <List>
            <Link href="/" className="hover:border-b-4 hover:border-black">Home</Link>
            <Link href="/about" className="hover:border-b-4 hover:border-black">About</Link>
            <Link href="/portfolio" className="hover:border-b-4 hover:border-black">Portfolio</Link>
            <Link href="/contact" className="hover:border-b-4 hover:border-black">Contact</Link>
          </List>
        </Links>
      </Container>
    </Section>
  );
}