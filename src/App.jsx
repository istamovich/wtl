import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Advantages from "./components/Advantages";
import Services from "./components/Services";
import Consolidated from "./components/Consolidated";
import About from "./components/About";
import Skills from "./components/Skills";
import ShippingServices from "./components/ShippingServices";
import TariffsSection from "./components/TariffsSection";
import TariffRequestSection from "./components/TariffRequestSection";
import RoutesSlider from "./components/RoutesSlider";
import StatsSection from "./components/StatsSection";
import PartnersSection from "./components/PartnersSection";
import ProcessSteps from "./components/ProcessSteps";
import ContactForm from "./components/ContactForm";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import FloatingCallButton from "./components/FloatingCallButton";
import '.././i18n'; 


function App() {

  return (
    <>
      <Navbar />
      <div className="bg-[#F8F9FA]">
        <Hero />
        <Advantages />
        <Services />
        <Consolidated />
        <About />
        <Skills />
        <ShippingServices />
        <TariffsSection />
        <TariffRequestSection />
        <RoutesSlider />
        <StatsSection />
        <PartnersSection />
        <ProcessSteps />
        <ContactForm />
        <ContactSection />
      </div>
      <Footer />
      <FloatingCallButton />
    </>
  );
}

export default App;
