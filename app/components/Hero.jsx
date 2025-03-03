"use client";
import '../styles/hero.css';
// import banner from "../../public/images/public/images/IMG_9603.JPEG";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-900 text-white hero">
      <div className="hero-overlay"></div>
      <div className="text-center z-10">
        <h1 className="text-5xl font-bold">Εργολάβος οικοδομών</h1>
        <p className="mt-4 text-lg">Κατασκευαστικά έργα</p>
        <a href="#contact" className="mt-6 inline-block px-6 py-3 bg-white text-gray-900 hover:bg-yellow-500 hover:text-white font-semibold rounded-lg"> 
          Επικοινωνία
        </a>
      </div>
    </section>
  );
}
