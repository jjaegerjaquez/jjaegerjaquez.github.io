import clsx from 'clsx';

import { inter } from '@/app/fonts';

const ProjectTitle = ({ children }) => {
  return (
    <p className={clsx(inter.className, 'text-4xl font-extrabold text-left mb-5')}>Digital Dentist</p>
  );
}
 
export default ProjectTitle;