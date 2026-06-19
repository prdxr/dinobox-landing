import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import Benefits from '../components/Benefits';
import Products from '../components/Products';
import Tabs from '../components/Tabs';
import Faq from '../components/Faq';
import Partners from '../components/Partners';
import Contact from '../components/Contact';
import Calculator from '../components/Calculator';
import SensorWidget from '../components/SensorWidget';
import LeadForm from '../components/LeadForm';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Benefits />
      <Products />
      <Tabs />
      <Faq />
      <Partners />
      <Contact />
      <Calculator />
      <SensorWidget />
      <LeadForm />
    </>
  );
}