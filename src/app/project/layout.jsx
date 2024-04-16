import Nav from "@/components/nav/Nav";

const layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className="px-[15px] lg:px-[200px] py-10 lg:py-[100px]">
        {children}
      </div>
    </>
  );
}
 
export default layout;