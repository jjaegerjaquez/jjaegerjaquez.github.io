import { inter } from '@/app/fonts';

import HTML from './tech-stack/HTML';
import JS from './tech-stack/JS';
import CSS from './tech-stack/CSS';
import BS from './tech-stack/BS';
import PHP from './tech-stack/PHP';
import Jquery from './tech-stack/Jquery';

const ProjectTechStack = () => {
  return (
    <div className={inter.className}>
      <p className="text-xl font-bold mb-2">Made using:</p>
      <div className="grid md:grid-cols-4 text-slate-950 gap-3">
        <HTML />
        <JS />
        <CSS />
        <BS />
        <PHP />
        <Jquery />
      </div>
    </div>
  );
}
 
export default ProjectTechStack;