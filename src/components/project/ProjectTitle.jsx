import clsx from 'clsx';

import { inter } from '@/app/fonts';
import ExternalLink from '../ExternalLink';

const ProjectTitle = ({ website = '', children }) => {
  return (
    <div className="mb-5">
      <p className={clsx(inter.className, 'text-xl md:text-4xl font-extrabold text-left')}>{children}</p>
      <div className="flex justify-end">
        {website && 
          <><ExternalLink link={website} label='Visit website'/></>
        }
      </div>
    </div>
  );
}
 
export default ProjectTitle;