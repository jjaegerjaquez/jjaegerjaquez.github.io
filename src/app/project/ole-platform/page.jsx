import ProjectBanner from '@/components/project/ProjectBanner';
import ProjectDescriptionWrapper from '@/components/project/ProjectDescriptionWrapper';
import ProjectTechStack from '@/components/project/ProjectTechStack';
import ProjectTitle from '@/components/project/ProjectTitle';
import BS from '@/components/project/tech-stack/BS';
import Docker from '@/components/project/tech-stack/Docker';
import React from '@/components/project/tech-stack/React';
import ReduxLogo from '@/components/project/tech-stack/Redux';
import ReduxToolkit from '@/components/project/tech-stack/ReduxToolkit';
import Vue from '@/components/project/tech-stack/Vue';
import Vuex from '@/components/project/tech-stack/Vuex';

const page = () => {
  return (
    <>
      <ProjectTitle website="https://oleplatform.com/">Ole Platform</ProjectTitle>
      <ProjectBanner imgSrc="/projects/op.png" />
      <ProjectTechStack>
        <Vue />
        <Vuex />
        <BS>Bootstrap 5</BS>
        <Docker />
      </ProjectTechStack>
      <ProjectDescriptionWrapper>
        <p>Ole Platform is a multi-currency and multi-asset wallet payment solution which provides seamless and cashless transactions worldwide.</p>
        <p className="font-semibold">Services offered:</p>
        <ul className="list-decimal list-inside space-y-0">
          <li>Bank Transfer</li>
          <li>Pay with QR code</li>
          <li>Send Money</li>
          <li>Request Money</li>
          <li>Shop Online</li>
        </ul>
        <img src="/projects/op-2.png" alt="" />
        <img src="/projects/op-3.png" alt="" />
        <img src="/projects/op-4.png" alt="" />
      </ProjectDescriptionWrapper>
    </>
  );
}
 
export default page;