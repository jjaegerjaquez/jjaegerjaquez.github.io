import Image from 'next/image';

const TechStackLogo = ({ imgName = '' }) => {
  return (
    <div className={`bg-[url('/tech/js.jpg')] bg-center bg-no-repeat bg-cover bg-white h-[150px]`}></div>
  );
}
 
export default TechStackLogo;