const Wrapper = ({ imgSrc = '', label = '' }) => {
  return (
    <div className="flex justify-start gap-x-3 place-items-center">
      <img src={imgSrc} className="rounded-full w-[30px] h-[30px]"  />
      <span>{label}</span>
    </div>
  );
}
 
export default Wrapper;