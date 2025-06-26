import Header from '../components/landing/Header';
import Hero from '../components/landing/Hero';
import WhyChoose from '../components/landing/WhyChoose';
import HowItWorks from '../components/landing/HowItWorks';
import Roadmap from '../components/landing/Roadmap';
import CallToAction from '../components/landing/CallToAction';
import Footer from '../components/landing/Footer';

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Header />
      <Hero />
      <WhyChoose />
      <HowItWorks />
      <Roadmap />
      <CallToAction />
      <Footer />
    </main>
  );
}