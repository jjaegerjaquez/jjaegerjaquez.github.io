import clsx from 'clsx';

import HR from '@/components/HR';

const SectionWrapper = ({ className = '', id = '', customHeightClass = 'h-screen', children }) => {
  return (
    <>
      <section 
        id={id}
        className={clsx('px-[15px] md:px-[35px] 12xl:px-[60px] snap-start scroll-mt-14')} 
      >
        <div className={clsx('flex flex-col lg:flex-row w-full items-center justify-center', customHeightClass)}>
          {children}
        </div>
      </section>
      <HR />
    </>
  );
}
 
export default SectionWrapper;