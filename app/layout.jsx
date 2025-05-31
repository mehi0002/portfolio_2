import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Link href="#siteContent">Skip to main content</Link>

        <header id="siteHeader"> 
          <Link href="/">
            <Image
              src="/Logo - Transparent.png"
              alt="Logo of an uppercase M curving to the right"
              width={100}
              height={50}
            />
          </Link>

          <nav>
            <ul>
              <li> <Link href="/about">About</Link></li>
              <li> <Link href="/projects">Portfolio</Link></li>
              <li> <Link href="https://linqapp.com/maddy_mehi?r=link">Contact</Link></li>
            </ul>
          </nav>
        </header>

        <main id="siteContent"> {children} </main>
        
        <footer id="siteFooter">
          <ul id="socials">
            <li> <Link href="https://www.instagram.com/mythril_dreams/">Instagram</Link></li>
            <li> <Link href="https://www.linkedin.com/in/maddymehi/">LinkdIn</Link></li>
            <li> <Link href="https://github.com/mehi0002">Github</Link></li>
          </ul>

          <p>Copyright Maddy Mehi 2025</p>
        </footer>
      </body>
    </html>
  );
}
