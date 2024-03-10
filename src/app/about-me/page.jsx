import CatWrapper from "@/components/CatWrapper";
import Nav from "@/components/Nav/Nav";

const page = () => {
  return (
    <>
      <Nav />
      <div className="px-[15px] lg:px-[200px] py-10 lg:py-[100px]">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-3/5 text-justify text-xl mb-10">
            <p className="font-bold mb-4 lg:mb-10 text-2xl lg:text-4xl">Hello Again!</p>
            <div className="flex flex-col gap-y-6 text-sm lg:text-base">
              <p>My name's Jechel Sanchez, 26 years old Front-End web programmer based in the Philippines. I've been working as a Front-end web programmer for over 5 years but I've also had experience coding some Back-End projects during my early years working and during college as a student.</p>
              <p>I enjoy solving complex problems and delivering projects that people enjoy and has a great time using.</p>
              <p>Outisde of work, I enjoy hanging out with friends, exploring new places, travelling and reading books. I also love playing FPS and open-world video games.</p>
              <p>I'm passionate about animals and their well-being and is a fundamental part of who I am. Ever since rescuing some stray kittens from our neighborhood, I've started to feel a deep connection with all creatures :) I love my cats so much and they mean the whole world to me!</p>
            </div>
          </div>
          <div className="w-full lg:w-2/5 flex justify-center">
            <div className="shadow-[10px_10px_0px_0px_rgba(22,21,24,0.73)] w-[400px] h-[400px] bg-slate-400 bg-[url('/img/dp.jpg')] relative">
              <div className="absolute -left-5 bottom-5 bg-transparent border-solid border-2 border-black w-[400px] h-[400px]" />
            </div>
          </div>
        </div>
        <div className="mt-[100px]">
          <p className="font-bold lg:mb-4 text-2xl lg:text-4xl">Shameless Cat Collections :p</p>
          <p>Meet all my rescued cats &hearts;</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 12xl:grid-cols-4 gap-4 mt-5">
            <CatWrapper 
              imgSrc="/img/mingu.jpg"
              description="Mingu - Our first ever rescued cat! He sadly crossed the rainbow bridge last 2020 :("
            />            
            <CatWrapper 
              imgSrc="/img/ember.jpg"
              description="Ember - The moordafooking starboy :)"
            />            
            <CatWrapper 
              imgSrc="/img/oreo.jpg"
              description="Oreo - My soulmate. He sadly crossed the rainbow bridge last 2022 :("
            />            
            <CatWrapper 
              imgSrc="/img/kitty.jpg"
              description="Kitty - The sweetest ever. She sadly crossed the rainbow bridge last 2022 just a few months after Oreo left :("
            />            
            <CatWrapper 
              imgSrc="/img/toosie.jpg"
              description="Toosie - The most handsome boy!"
            />            
          </div>
        </div>
      </div>
    </>
  );
}
 
export default page;