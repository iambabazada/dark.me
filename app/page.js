import About from "@/components/About";
import Contact from "@/components/Contact";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Feature />
      <Portfolio />
      <Contact />
    </main>
  );
}
