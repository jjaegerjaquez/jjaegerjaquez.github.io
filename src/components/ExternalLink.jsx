import FeatherIcon from 'feather-icons-react';

const ExternalLink = ({ link = '', label = '' }) => {
  return (
    <a 
      href={link} 
      className="font-medium italic text-sm md:text-lg hover:text-transparent hover:bg-clip-text hover:bg-[linear-gradient(to_right,theme(colors.purple.500),theme(colors.pink.500),theme(colors.yellow.500),theme(colors.purple.500),theme(colors.pink.500),theme(colors.yellow.500))] bg-[length:250%_250%] animate-gradient"
    >
      {label} &rarr;
    </a>
  );
}
 
export default ExternalLink;