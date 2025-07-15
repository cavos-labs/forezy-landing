import Header from '../components/landing/Header';
import Hero from '../components/landing/Hero';
import WhyChoose from '../components/landing/WhyChoose';
import HowItWorks from '../components/landing/HowItWorks';
import Roadmap from '../components/landing/Roadmap';
import CallToAction from '../components/landing/CallToAction';
import Footer from '../components/landing/Footer';

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">
      <Header />
      
      {/* Hero Section */}
      <div className="section-container">
        <Hero />
      </div>
      
      {/* Why Choose Section */}
      <div className="section-container py-12 md:py-20">
        <WhyChoose />
      </div>
      
      {/* How It Works Section */}
      <div className="section-container py-12 md:py-20 section-transition">
        <HowItWorks />
      </div>
      
      {/* Roadmap Section */}
      <div className="section-container py-12 md:py-20 section-transition">
        <Roadmap />
      </div>
      
      {/* Call To Action Section - Reduced padding to be closer to footer */}
      <div className="py-6 md:py-10 section-transition">
        <CallToAction />
      </div>
      
      <Footer />
    </main>
  );
}