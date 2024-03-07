import { staatliches } from '@/app/fonts';
import HR from '@/components/HR';

const DesignPhilosophy = () => {
  return (
    <>
      <section className="px-[15px] md:px-[35px] m-0 mb-">
        <div className="flex flex-col md:flex-row w-full">
          <div className="md:w-2/5">
            <p className={`text-[30px] md:text-[90px] font-semibold leading-tight ${staatliches.className}`}>
              <span className="">Design Philosophy.</span>
            </p>
          </div>
          <div className="md:w-3/5">
            <p className="font-light text-[20px] md:text-[30px] leading-none">In the tapestry of pet adoration, the love for cats is a vibrant thread, woven with moments of joy, comfort, and deep connection. Their grace and independence evoke a profound sense of devotion. Yet, amid this affection blooms a thorn named Monggi. Unlike the feline companions who inspire adoration, Monggi's presence incites disdain, a discordant note in the symphony of feline love. As we explore the profound bond with our whiskered friends, we confront the complexities of human emotion, navigating the contrast between our cherished companions and the figure of resentment that shadows their beauty.</p>
          </div>
        </div>
      </section>
      <HR />
    </>
  );
}
 
export default DesignPhilosophy;