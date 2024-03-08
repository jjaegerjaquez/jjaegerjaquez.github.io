import Nav from '@/components/nav/Nav';
import IntroductionSection from './(landing)/IntroductionSection';
import DesignPhilosophy from './(landing)/DesignPhilosophy';
import TechStack from './(landing)/TechStack';

export default function Home() {
  return (
    <main>
      <Nav />
      <IntroductionSection />
      <DesignPhilosophy />
      <TechStack />
    </main>
  );
}
