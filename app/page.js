import Footer from "@/components/Footer";
import Hero from "./(sections)/Hero";
import Features from "./(sections)/Features";
import How from "./(sections)/How";
import Partners from "./(sections)/Partners";
import CTA from "./(sections)/CTA";

export default function Page(){
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Features/>
      <How/>
      <Partners/>
      <CTA/>
      <Footer/>
    </main>
  )
}
