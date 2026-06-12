import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import TechStack from "@/components/TechStack";
import Demo from "@/components/Demo";
import Results from "@/components/Results";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <TechStack />
        <Demo />
        <Results />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
