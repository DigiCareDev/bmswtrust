import Image from "next/image";
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Gallary from '../components/Gallary';
import Contact from '../components/contact';
import Footer from '../components/Footer'
import About from "../components/About";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Header />
      <About/>
      <Hero />
      <Gallary />
      <Contact />
      <Footer />
    </div>
  );
}
