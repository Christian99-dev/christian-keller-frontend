import Icon from "@/components/shared/Icon";
import Logo from "@/components/shared/Logo";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-full flex-col">
      {/** Main Section */}
      <div
        id="primary"
        className="flex px-10 flex-col lg:flex-row lg:gap-10 gap-0 text-center justify-center lg:text-left items-center relative h-screen w-full"
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
            <Logo href="https://github.com/Christian99-dev" name="logo-github" />
            <Logo href="https://www.xing.com/profile/Christian_Keller024727" name="logo-xing" />
            <Logo href="https://www.linkedin.com/in/christian-keller-1768021a2/" name="logo-linkedin" />
            <Logo href="mailto:k.christian9@web.de" name="logo-mail" />
          </div>
        </div>

        {/** Down arrow */}
        <a className="absolute bottom-10 text-center w-full" href="#secoundary">
          <p className="text-6 font-thin tracking-[0.2rem]">Meine Projekte</p>
          <Icon name="arrow_downward" />
        </a>
      </div>

      <div id="secoundary" className="h-screen w-full relative">
        {/** Down arrow */}
        <a className="absolute top-10 text-center w-full" href="#primary">
          <Icon name="arrow_upward" />
          <p className="text-7 font-thin tracking-[0.2rem]">Home</p>
        </a>
      </div>
    </div>
  );
}
