import { staatliches } from '@/app/fonts';

const SectionTitle = ({ children }) => {
  return (
    <p className={`text-[35px] md:text-[50px] lg:text-[80px] 12xl:text-[150px] font-semibold leading-tight ${staatliches.className}`}>
      <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,theme(colors.purple.500),theme(colors.pink.500),theme(colors.yellow.500),theme(colors.purple.500),theme(colors.pink.500),theme(colors.yellow.500))] bg-[length:250%_250%] animate-gradient">{children}</span>
    </p>
  );
}
 
export default SectionTitle;