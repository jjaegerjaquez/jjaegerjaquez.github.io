import FeatherIcon from 'feather-icons-react';

import HR from '@/components/HR';

const IntroductionSection = () => {
  return (
    <>
      <section className="py-[30px] sm:py-[50px] md:py-[100px] 12xl:py-[120px] h-screen snap-start scroll-mt-14" id="introduction">
        <p className="text-[30px] md:text-[50px] 12xl:text-[100px] md:text-left lg:text-justify font-medium tracking-normal leading-none mb-28 md:mb-36 12xl:mb-80">Hello there, my name's Jechel Sanchez, web programmer currently based in Cavite, Philippines. And if you're wondering how to pronounce my name, it's <span className="font-semibold text-transparent bg-clip-text bg-[linear-gradient(to_right,theme(colors.purple.500),theme(colors.pink.500),theme(colors.yellow.500),theme(colors.purple.500),theme(colors.pink.500),theme(colors.yellow.500))] bg-[length:250%_250%] animate-gradient">Giselle</span>.</p>
        <p className="text-[25px] md:text-[35px] 12xl:text-[85px] mb-20 md:mb-16 12xl:mb-52 font-medium">Welcome to my personal website.</p>
        <FeatherIcon icon="arrow-down" className="animate-bounce" />
      </section>
      <HR />
    </>
  );
}
 
export default IntroductionSection;