import HR from '@/components/HR';
import FeatherIcon from 'feather-icons-react';

const IntroductionSection = () => {
  return (
    <>
      <section className="py-[30px] md:py-[100px] px-[15px] md:px-[35px] h-screen snap-start scroll-mt-14" id="introduction">
        <p className="text-[25px] md:text-[50px] md:text-left lg:text-justify font-medium tracking-normal leading-none mb-20 md:mb-36">Hello there, my name's Jechel Sanchez, web programmer currently based in Cavite, Philippines. And if you're wondering how to pronounce my name, it's <span className="text-hover">Jiselle</span>.</p>
        <p className="font-light text-[20px] md:text-[35px] mb-16">Welcome to my personal website.</p>
        <FeatherIcon icon="arrow-down" className="animate-bounce" />
      </section>
      <HR />
    </>
  );
}
 
export default IntroductionSection;