import FeatherIcon from "feather-icons-react";

const Footer = () => {
  return (
    <section className="px-[15px] md:px-[35px] 12xl:px-[60px] md:mt-[30px] md:mb-0 snap-start max-w-sm:scroll-mt-14">
      <footer className="flex flex-col md:flex-row items-center justify-center md:justify-between text-lg 12xl:text-4xl">
        <div>
          <p>
            <a 
              className="text-inherit inline-flex"
              href="mailto:jechelsanchez06@gmail.com"
            >
              Feel free to say hi <img src="https://img.icons8.com/emoji/20/000000/waving-hand-emoji.png"/>
            </a>
          </p>
        </div>
        <div className="flex flex-col mt-3 md:mb-0 gap-y-1 md:flex-row md:gap-3">
          <a href="https://github.com/jjaegerjaquez">
            <FeatherIcon icon="github" size="20px" />
          </a>         
          {/* <a href="https://www.linkedin.com/in/jechelsanchez?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
            <FeatherIcon icon="linkedin" size="20px" className="text-pink"/>
          </a>          */}
        </div>
      </footer>
    </section>
  );
}
 
export default Footer;