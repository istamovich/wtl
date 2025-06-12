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
import { HelmetProvider } from "react-helmet-async";


function App() {

  return (
    <>
      <HelmetProvider>

        <Navbar />
        <div className="bg-gray-50">
          <Hero />
          <Advantages />
          <Services />
          <Consolidated />
          <div id="about">
            <About />
          </div>
          <div id="skills">
            <Skills />
          </div>
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
      </HelmetProvider>
    </>
  );
}

export default App;
