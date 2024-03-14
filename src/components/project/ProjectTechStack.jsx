import { inter } from '@/app/fonts';

const ProjectTechStack = ({ children }) => {
  return (
    <div className={inter.className}>
      <p className="text-base md:text-xl font-bold mb-2">Made using:</p>
      <div className="grid sm:grid-cols-4 text-slate-950 gap-3">
        {children}
      </div>
    </div>
  );
}
 
export default ProjectTechStack;