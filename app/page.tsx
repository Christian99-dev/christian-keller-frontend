import Background from "@/components/home/Background";
import Icon from "@/components/shared/Icon";
import Logo from "@/components/shared/Logo";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-full flex-col">
      {/** Background */}
      <Background />

      {/** Main Section */}
      <div
        id="primary"
        className="flex px-10 flex-col lg:flex-row lg:gap-10 gap-0 text-center justify-center lg:text-left items-center relative h-screen w-full z-20"
      >
        {/** Image */}
        <img src="/img/me.png" className="w-[23rem]"></img>

        {/** Text Section */}
        <div>
          <h1 className="text-5 font-thin tracking-[0.4rem] pt-10">
            Christian Keller
          </h1>
          <h2 className="text-7 font-normal pb-5">Software Entwickler</h2>
          <p className="text-9 tracking-[0.1rem] pb-5 max-w-[30rem]">
            Hey! Ich bin Christian, Informatikstudent und freiberuflicher
            Softwareentwickler. Coden und komplexe Probleme zu lösen ist meine
            Leidenschaft. Dabei arbeite ich gerne mit unterschiedlichen
            Technologien und setze mich ständig mit neuen Herausforderungen
            auseinander.
          </p>
          <div className="flex gap-2 justify-center lg:justify-normal">
            <Logo
              href="https://github.com/Christian99-dev"
              name="logo-github"
              className="animate-fadeInUp opacity-0 [animation-delay:_0.1s]"
            />
            <Logo
              href="https://www.xing.com/profile/Christian_Keller024727"
              name="logo-xing"
              className="animate-fadeInUp opacity-0 [animation-delay:_0.2s]"
            />
            <Logo
              href="https://www.linkedin.com/in/christian-keller-1768021a2/"
              name="logo-linkedin"
              className="animate-fadeInUp opacity-0 [animation-delay:_0.3s]"
            />
            <Logo
              href="mailto:k.christian9@web.de"
              name="logo-mail"
              className="animate-fadeInUp opacity-0 [animation-delay:_0.4s]"
            />
          </div>
        </div>

        {/** Down arrow */}
        <a className="absolute bottom-10 text-center w-full opacity-0 animate-fadeInUp [animation-delay:_0.7s]" href="#secoundary">
          <p className="text-6 font-thin tracking-[0.2rem]">Meine Projekte</p>
          <Icon name="arrow_downward" />
        </a>
      </div>

      {/** Primary Section */}
      <div id="secoundary" className="h-screen w-full relative z-20">
        {/** Down arrow */}
        <a className="absolute top-10 text-center w-full" href="#primary">
          <Icon name="arrow_upward" />
          <p className="text-7 font-thin tracking-[0.2rem]">Home</p>
        </a>
      </div>
    </div>
  );
}
