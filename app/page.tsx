import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Ticker from '@/components/Ticker';
import NordicRiverBanner from '@/components/NordicRiverBanner';
import About from '@/components/About';
import Produkter from '@/components/Produkter';
import Smaking from '@/components/Smaking';
import Eventer from '@/components/Eventer';
import Smuget from '@/components/Smuget';
import Location from '@/components/Location';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Nav />
      <Hero />
      <Ticker />
      <NordicRiverBanner />
      <About />
      <Produkter />
      <Smaking />
      <Eventer />
      <Smuget />
      <Location />
      <Footer />
    </>
  );
}
