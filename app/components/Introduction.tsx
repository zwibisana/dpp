import Batik from "@/public/Batik";

function Logo() {
  return (
    <div className="content-stretch flex gap-[200px] items-center relative shrink-0">
      <p className="font-discordia relative shrink-0">Kulineran Merantau</p>
      <p className="font-polymath font-semibold relative shrink-0">
        A collection of Indonesian recipes
      </p>
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex font-polymath gap-[29px] items-center relative shrink-0">
      <p className="relative shrink-0">About</p>
      <p className="relative shrink-0">Recipes</p>
      <p className="relative shrink-0">Contact</p>
    </div>
  );
}

function Nav() {
  return (
    <div className="bg-[#b0271c] relative shrink-0 w-full" data-name="Nav">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between leading-[1.1] not-italic px-[40px] py-[32px] relative text-[#f9f7ea] text-[18px] w-full whitespace-nowrap">
          <Logo />
          <Navigation />
        </div>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] h-[298px] items-start relative shrink-0 text-[#f9f7ea] w-[659px]">
      <p className="font-discordia font-bold leading-[1.1] not-italic relative shrink-0 text-[16px] tracking-[4px] uppercase w-full">
        About
      </p>
      <p className="flex-[1_0_0] font-discordia italic leading-[0] min-h-px min-w-px relative text-[0px] w-full">
        <span className="font-polymath font-black leading-[1.1] not-italic text-[55px] tracking-[-1.65px]">
          Kulineran Merantau
        </span>
        <span className="leading-[1.1] text-[46px]">{` is a narrative cooking experience about connection in an effort to embed accessible Indonesian cuisine into modern society.`}</span>
      </p>
    </div>
  );
}

function Home() {
  return (
    <div className="bg-[#b0271c] relative shrink-0 w-full" data-name="Home">
      <div className="flex flex-col items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end pb-[250px] pr-[100px] pt-[157px] relative w-full">
          <AboutSection />
        </div>
      </div>
    </div>
  );
}

export default function Introduction() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <Nav />
      <Home />
      <div
        className="absolute h-[258.038px] left-[-546px] top-[455px] w-[1469.632px]"
        data-name="Vector"
      >
        <Batik />
      </div>
    </div>
  );
}
