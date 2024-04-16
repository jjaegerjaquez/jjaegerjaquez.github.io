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
            imgSrc = '/projects/woman-patient-dentist.jpg'
            title = 'Digital Dentist'
            description = 'An online dentist management information system.'
          />
          <ProjectWrapper 
            imgSrc = '/projects/young-lady-use-cellphone-order-online-shopping-product-paying-bills-with-banking-app-with-transaction-successful-stay-house-quarantine-activity-fun-activity-coronavirus-prevention.jpg'
            title = 'Checkout'
            description = 'A third party checkout service.'
          />
          <ProjectWrapper 
            imgSrc = '/projects/anastasia-nelen-4pCPLfQYo28-unsplash.jpg'
            title = 'Ole Platform'
            description = 'A wallet payment system.'
          />
          <ProjectWrapper 
            imgSrc = '/projects/venti-views-FPKnAO-CF6M-unsplash.jpg'
            title = 'BICM'
            description = 'A customs brokerage, domestic and international freight forwarding company.'
          />
          <ProjectWrapper 
            imgSrc = '/projects/sean-do-EHLd2utEf68-unsplash.jpg'
            title = 'Trivi'
            description = 'A play to earn system.'
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
 
export default ProjectSection;