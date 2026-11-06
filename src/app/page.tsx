import { AnnounceBar } from '@/components/layout/AnnounceBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { RitualFinder } from '@/components/sections/RitualFinder';
import { SeasonEdit } from '@/components/sections/SeasonEdit';
import { TheStandard } from '@/components/sections/TheStandard';
import { CareRepair } from '@/components/sections/CareRepair';
import { Journal } from '@/components/sections/Journal';
import { Newsletter } from '@/components/sections/Newsletter';

export default function HomePage() {
  return (
    <>
      <AnnounceBar />
      <Navbar />
      <main>
        <Hero />
        <RitualFinder />
        <SeasonEdit />
        <TheStandard />
        <CareRepair />
        <Journal />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
