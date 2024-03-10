import SectionTitle from '@/components/SectionTitle';
import SectionWrapper from '@/components/SectionWrapper';

const DesignPhilosophy = () => {
  return (
    <SectionWrapper id="design-section" className="bg-green-200">
      <div className="w-full lg:w-2/5 mb-10 lg:mb-0">
        <SectionTitle>Design Philosophy.</SectionTitle>
      </div>
      <div className="w-full lg:w-3/5 font-light text-[18px] lg:text-[30px] 12xl:text-[60px] leading-none ">
        <p className="mb-10">My design philosophy strongly focuses around the concept of minimalism and seamless UX. I believe that the UX aspect matters as much as the visual aspect if not more from a design.</p>
        <p>Asking who the target user also factors on my design process. Design trends changes almost every year, as a developer, you must adhere to these trends but certain trends may not be everyone's cup of tea. Based on my experience, older people may have a hard time navigating a modern designed system since they are not well versed with newer trends. You don't want people raising issues regarding a simple process because the design failed to instruct them on what to do.</p>
      </div>
    </SectionWrapper>
  );
}
 
export default DesignPhilosophy;