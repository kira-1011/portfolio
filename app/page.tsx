import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import CareerSection from '@/components/CareerSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <div className="flex flex-col gap-16 sm:gap-24 lg:gap-32">
      <AboutSection />
      <CareerSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
