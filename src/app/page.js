import Nav from '@/components/nav/Nav';
import IntroductionSection from './(landing)/IntroductionSection';
import DesignPhilosophy from './(landing)/DesignPhilosophy';
import TechStack from './(landing)/TechStack';
import ProjectSection from './(landing)/ProjectSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Nav />
      <div className="px-[15px] md:px-[35px] 12xl:px-[60px]">
        <IntroductionSection />
        <DesignPhilosophy />
        <TechStack />
        <ProjectSection />
        <Footer />
      </div>
    </main>
  );
}
