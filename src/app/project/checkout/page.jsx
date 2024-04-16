import ProjectBanner from '@/components/project/ProjectBanner';
import ProjectDescriptionWrapper from '@/components/project/ProjectDescriptionWrapper';
import ProjectTechStack from '@/components/project/ProjectTechStack';
import ProjectTitle from '@/components/project/ProjectTitle';
import BS from '@/components/project/tech-stack/BS';
import Docker from '@/components/project/tech-stack/Docker';
import React from '@/components/project/tech-stack/React';
import ReduxLogo from '@/components/project/tech-stack/Redux';
import ReduxToolkit from '@/components/project/tech-stack/ReduxToolkit';

const page = () => {
  return (
    <>
      <ProjectTitle website="https://opsoftwaredev.com/">OP Software Dev Checkout</ProjectTitle>
      <ProjectBanner imgSrc="/projects/checkout.png" />
      <ProjectTechStack>
        <BS>Bootstrap 5</BS>
        <React />
        <Docker />
        <ReduxLogo />
        <ReduxToolkit />
      </ProjectTechStack>
      <ProjectDescriptionWrapper>
        <p>OP Software Dev Checkout is a payment processing solution offered by OP Software Dev which provides businesses with a streamlined way to accept payments. It integrates the checkout process onto a website. Customers have the option to pay using debit or credit card.</p>
        <img src="/projects/checkout.png" alt="" />
        <img src="/projects/checkout-2.png" alt="" />
        <img src="/projects/checkout-3.png" alt="" />
        <p className="font-semibold">Demo Page:</p>
        <img src="/projects/checkout-demo.png" alt="" />
      </ProjectDescriptionWrapper>
    </>
  );
}
 
export default page;