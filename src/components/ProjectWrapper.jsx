import Link from 'next/link';

const ProjectWrapper = (props) => {
  const {
    imgSrc = '',
    title = '',
    description = '',
    link = '/',
  } = props;

  return (
    <div className="relative padding-0">
      {/* <Link href={link}> */}
        <img
          src={imgSrc} 
          className="block w-full h-[300px] bg-gradient-to-r from-indigo-500"
        />
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-overlay text-[#f1f1f1] w-full opacity-0 p-[20px] hover:opacity-100">
          <div className="absolute bottom-3">
            {/* <p>{title}</p> */}
            <p>{description}</p>
          </div>
        </div>
      {/* </Link> */}
    </div>
  );
}
 
export default ProjectWrapper;