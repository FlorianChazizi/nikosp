'use client';
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import ContactUs from "./components/ContactUs";
export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Portfolio />
      <ContactUs />
    </div>
  );
}
