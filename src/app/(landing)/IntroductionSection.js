import HR from '@/components/HR';
import FeatherIcon from 'feather-icons-react';

const IntroductionSection = () => {
  return (
    <>
      <section className="mt-[50px] md:mt-[100px] px-[15px] md:px-[35px]">
        <p className="text-[30px] md:text-[50px] md:text-left lg:text-justify font-medium tracking-normal leading-none">
        Hello there, my name's Jechel Sanchez, web programmer currently based in Cavite, Philippines. And if you're wondering how to pronounce my name, it's <span className="text-hover">Jiselle</span>.
        </p>
        <p className="font-light text-[25px] md:text-[35px] my-[80px]">Welcome to my personal website.</p>
        <FeatherIcon icon="arrow-down" />
      </section>
      <HR />
    </>
  );
}
 
export default IntroductionSection;