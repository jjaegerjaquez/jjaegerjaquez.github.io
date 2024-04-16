const Wrapper = ({ imgSrc = '', label = '' }) => {
  return (
    <div className="flex justify-start gap-x-3 place-items-center">
      <img src={imgSrc} className="rounded-full w-[30px] h-[30px]"  />
      <span className="text-sm md:text-base">{label}</span>
    </div>
  );
}
 
export default Wrapper;