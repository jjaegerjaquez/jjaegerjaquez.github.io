import Image from 'next/image';

const TechStackLogo = ({ imgName = '' }) => {
  return (
    <div className={`bg-[url('/tech/${imgName}')] bg-center bg-no-repeat bg-contain bg-white h-[100px]`}></div>
  );
}
 
export default TechStackLogo;