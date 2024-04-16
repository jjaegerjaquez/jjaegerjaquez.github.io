import SectionTitle from '@/components/SectionTitle';

import SectionWrapper from '@/components/SectionWrapper';

const TechStack = () => {
  return (
    <>
      <SectionWrapper id="tech-stack-section" className="bg-blue-200" customHeightClass="h-auto md:h-screen">
        <div className="w-full lg:w-2/5 mb-10 md:mb-0">
          <SectionTitle>Technology Stack.</SectionTitle>
        </div>
        <div className="w-full lg:w-3/5">
          <div className="grid 12xl:grid-cols-6 2xl:grid-cols-5 xl:gap-4 md:grid-cols-4 grid-cols-2 gap-4">
            <div className={`bg-[url('/tech/js.jpg')] bg-center bg-no-repeat bg-cover bg-white h-[150px]`}></div>
            <div className={`bg-[url('/tech/jquery.jpg')] bg-center bg-no-repeat bg-cover bg-white h-[150px]`}></div>
            <div className={`bg-[url('/tech/css.jpg')] bg-center bg-no-repeat bg-cover bg-white h-[150px]`}></div>
            <div className={`bg-[url('/tech/html.jpg')] bg-center bg-no-repeat bg-cover bg-white h-[150px]`}></div>
            <div className={`bg-[url('/tech/bs.jpg')] bg-center bg-no-repeat bg-cover bg-white h-[150px]`}></div>
            <div className={`bg-[url('/tech/reactjs.jpg')] bg-center bg-no-repeat bg-cover bg-white h-[150px]`}></div>
            <div className={`bg-[url('/tech/nextjs.jpg')] bg-center bg-no-repeat bg-cover bg-white h-[150px]`}></div>
            <div className={`bg-[url('/tech/nodejs.jpg')] bg-center bg-no-repeat bg-cover bg-white h-[150px]`}></div>
            <div className={`bg-[url('/tech/vuejs.jpg')] bg-center bg-no-repeat bg-cover bg-white h-[150px]`}></div>
            <div className={`bg-[url('/tech/docker.jpg')] bg-center bg-no-repeat bg-cover bg-white h-[150px]`}></div>
            <div className={`bg-[url('/tech/mysql.jpg')] bg-center bg-no-repeat bg-cover bg-white h-[150px]`}></div>
            <div className={`bg-[url('/tech/expressjs.jpg')] bg-center bg-no-repeat bg-cover bg-white h-[150px]`}></div>
            <div className={`bg-[url('/tech/php.jpg')] bg-center bg-no-repeat bg-cover bg-white h-[150px]`}></div>
            <div className={`bg-[url('/tech/redux.jpg')] bg-center bg-no-repeat bg-cover bg-white h-[150px]`}></div>
            <div className={`bg-[url('/tech/r-toolkit.jpg')] bg-center bg-no-repeat bg-cover bg-white h-[150px]`}></div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
 
export default TechStack;