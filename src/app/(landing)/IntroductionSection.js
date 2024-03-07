import HR from '@/components/HR';
import FeatherIcon from 'feather-icons-react';

const IntroductionSection = () => {
  return (
    <>
      <section className="h-screen mt-[50px] md:mt-[200px] px-[15px] md:px-[35px]">
        <p className="text-[30px] md:text-[50px] md:text-left lg:text-justify font-medium tracking-normal leading-none md:mb-44">
        Hello there, my name's Jechel Sanchez, web programmer currently based in Cavite, Philippines. And if you're wondering how to pronounce my name, it's <span className="text-hover">Jiselle</span>.
        </p>
        <p className="font-light text-[25px] md:text-[35px] my-[80px]">Welcome to my personal website.</p>
        <FeatherIcon icon="arrow-down" className="animate-bounce" />
      </section>
      <HR />
    </>
  );
}
 
export default IntroductionSection;