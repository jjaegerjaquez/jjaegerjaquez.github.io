import { staatliches } from '@/app/fonts';
import SectionWrapper from './SectionWrapper/SectionWrapper';

const DesignPhilosophy = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col md:flex-row w-full">
        <div className="md:w-2/5">
          <p className={`text-[30px] md:text-[90px] font-semibold leading-tight ${staatliches.className}`}>
            <span className="">Design Philosophy.</span>
          </p>
        </div>
        <div className="md:w-3/5">
          <p className="font-light text-[20px] md:text-[30px] leading-none mb-10">My design philosophy strongly focuses around the concept of minimalism and seamless UX. I believe that the UX aspect matters as much as the visual aspect if not more from a design.</p>
          <p className="font-light text-[20px] md:text-[30px] leading-none">Asking who the target user also factors on my design process. Design trends changes almost every year, as a developer, you must adhere to these trends but certain trends may not be everyone's cup of tea. Based on my experience, older people may have a hard time navigating a modern designed system since they are not well versed with newer trends. You don't want people raising issues regarding a simple process because the design failed to instruct them on what to do.</p>
        </div>
      </div>
    </SectionWrapper>
  );
}
 
export default DesignPhilosophy;