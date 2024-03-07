import HR from '@/components/HR';

const SectionWrapper = ({ children }) => {
  return (
    <>
      <section className="px-[15px] md:px-[35px] md:my-24 h-screen snap-start">
        {children}
      </section>
      <HR />
    </>
  );
}
 
export default SectionWrapper;