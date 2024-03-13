import Image from 'next/image';

import SectionTitle from '@/components/SectionTitle';
import SectionWrapper from '@/components/SectionWrapper';
import ProjectWrapper from '@/components/ProjectWrapper';

const ProjectSection = () => {
  return (
    <SectionWrapper id="design-section" className="bg-green-200" customHeightClass="h-auto md:h-screen">
      <div className="w-full lg:w-2/5 mb-10 md:mb-0">
        <SectionTitle>Projects.</SectionTitle>
      </div>
      <div className="w-full lg:w-3/5">
        <div className="grid md:grid-cols-2 gap-4">
          <ProjectWrapper 
            imgSrc = '/projects/digitaldentist.PNG'
            link="/project/digital-dentist"
            title = 'Digital Dentist'
            description = 'An online dentist management information system.'
          />
          <ProjectWrapper 
            imgSrc = '/projects/checkout.png'
            link="/project/checkout"
            title = 'Checkout'
            description = 'A third party checkout service.'
          />
          <ProjectWrapper 
            imgSrc = '/projects/op.png'
            link="/project/ole-platform"
            title = 'Ole Platform'
            description = 'A wallet payment system.'
          />
          <ProjectWrapper 
            imgSrc = '/projects/bicm.png'
            link="/project/bicm"
            title = 'BICM'
            description = 'A customs brokerage, domestic and international freight forwarding company.'
          />
          <ProjectWrapper 
            imgSrc = '/projects/trivi.png'
            link="/project/trivi"
            title = 'Trivi'
            description = 'A play to earn system.'
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
 
export default ProjectSection;