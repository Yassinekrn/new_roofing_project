import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { StatBar } from '@/components/StatBar';
import { Services } from '@/components/Services';
import { Portfolio } from '@/components/Portfolio';
import { QuoteBanner } from '@/components/QuoteBanner';
import { Materials } from '@/components/Materials';
import { Testimonials } from '@/components/Testimonials';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
import { MobileCtaBar } from '@/components/MobileCtaBar';

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <ScrollProgress />
      <Navbar />
      
      <Hero />
      <StatBar />
      <Services />
      <Portfolio />
      <QuoteBanner />
      <Materials />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
      
      <MobileCtaBar />
    </main>
  );
}
