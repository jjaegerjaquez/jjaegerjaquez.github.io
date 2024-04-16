import clsx from 'clsx';

import HR from '@/components/HR';

const SectionWrapper = ({ className = '', id = '', customHeightClass = 'h-screen', children }) => {
  return (
    <>
      <section 
        id={id}
        className={clsx('snap-start scroll-mt-14')} 
      >
        <div className={clsx('flex flex-col lg:flex-row gap-x-4 w-full items-center justify-center', customHeightClass)}>
          {children}
        </div>
      </section>
      <HR />
    </>
  );
}
 
export default SectionWrapper;