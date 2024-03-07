import Nav from '@/components/nav/Nav';
import IntroductionSection from './(landing)/IntroductionSection';
import DesignPhilosophy from './(landing)/DesignPhilosophy';

export default function Home() {
  return (
    <main>
      <Nav />
      <IntroductionSection />
      <DesignPhilosophy />
    </main>
  );
}
