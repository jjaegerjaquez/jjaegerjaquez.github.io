import clsx from 'clsx';

import HR from '@/components/HR';

const SectionWrapper = ({ className = '', id = '', children }) => {
  return (
    <>
      <section 
        id={id}
        className={clsx('px-[15px] md:px-[35px] md:my-24 h-screen snap-start scroll-mt-14')} 
      >
        {children}
      </section>
      <HR />
    </>
  );
}
 
export default SectionWrapper;