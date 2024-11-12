import Image from "next/image";
import Header from "./Sections/Header";
import Hero from "./Sections/Hero";
import LogoTicker from "./Sections/LogoTicker";
import Features from "./Sections/Features";
import { Testimonials } from "./Sections/Testimonials";
import CallToActions from "./Sections/CallToActions";
import Footer from "./Sections/Footer";
import React from 'react';


export default function Home() {
  return (
    <div>
     <Header></Header>
     <Hero/> 
     <LogoTicker/>
     <Features/>
     <Testimonials/>
     <CallToActions/>
     <Footer/>
    </div>
  );
    
}
