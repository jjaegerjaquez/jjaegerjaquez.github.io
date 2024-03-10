const CatWrapper = (props) => {
  const {
    imgSrc = '',
    description = '',
  } = props;

  return (
    <div>
      <img 
        src={imgSrc}
        className="shadow-[5px_5px_0px_0px_rgba(22,21,24,0.73)]" 
      />
      <p className="text-sm mt-2">{description}</p>
    </div>
  );
}
 
export default CatWrapper;