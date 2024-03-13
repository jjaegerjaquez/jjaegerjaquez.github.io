const ProjectBanner = ({ imgSrc = '' }) => {
  return (
    <div className="mx-auto mb-5">
      <img src={imgSrc} alt="" />
    </div>
  );
}
 
export default ProjectBanner;