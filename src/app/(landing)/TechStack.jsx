import { staatliches } from '@/app/fonts';

import SectionWrapper from './SectionWrapper/SectionWrapper';
import TechStackLogo from '@/components/TechStackLogo';

const TechStack = () => {
  return (
    <>
      <SectionWrapper id="tech-stack-section" className="bg-blue-200">
        <div className="flex flex-col md:flex-row w-full">
          <div className="md:w-2/5">
            <p className={`text-[30px] md:text-[90px] font-semibold leading-tight ${staatliches.className}`}>
              <span>Tech Stack.</span>
            </p>
          </div>
          <div className="md:w-3/5">
            <div className="grid grid-cols-4 gap-4">
              <div className={`bg-[url('/tech/css.png')] bg-center bg-no-repeat bg-contain bg-white h-[50px]`}></div>
              <div className={`bg-[url('/tech/html.png')] bg-center bg-no-repeat bg-contain bg-white h-[50px]`}></div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
 
export default TechStack;