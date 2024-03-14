const ProjectDescriptionWrapper = ({ children }) => {
  return (
    <div className="flex flex-col gap-y-3 mt-5 md:mt-10 text-base md:text-lg">
      {children}
    </div>
  );
}
 
export default ProjectDescriptionWrapper;