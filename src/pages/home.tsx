import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Services from "@/components/services";

export function Home() {
  return (
    <>
      <Hero />
      <About />
      {/* <ImageCards /> */}
      <Services />
      <Contact />
    </>
  );
}
