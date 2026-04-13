import svgPaths from "../../public/Batik.svg";

interface SVGPathData {
  [key: string]: string;
}

function Logo() {
  return (
    <div className="content-stretch flex gap-[200px] items-center relative shrink-0">
      <p className="font-discordia relative shrink-0">Kulineran</p>
      <p className="font-polymath relative shrink-0">A collection of Indonesian recipes</p>
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
      <p className="font-discordia leading-[1.1] not-italic relative shrink-0 text-[16px] tracking-[4px] uppercase w-full">About</p>
      <p className="flex-[1_0_0] font-discordia italic leading-[0] min-h-px min-w-px relative text-[0px] w-full">
        <span className="font-polymath leading-[1.1] not-italic text-[55px] tracking-[-1.65px]">Kulineran</span>
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

function DecorativeSVG() {
  const paths = svgPaths as SVGPathData;

  return (
    <div className="absolute h-[258.038px] left-[-546px] top-[455px] w-[1469.632px]" data-name="Vector">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1469.63 258.038">
        <g id="Vector">
          <path d={paths.p14164200} fill="var(--fill-0, #F9F7EA)" fillOpacity="0.06" />
          <path d={paths.p96d500} fill="var(--fill-0, #F9F7EA)" fillOpacity="0.06" />
          <path d={paths.p12cd6400} fill="var(--fill-0, #F9F7EA)" fillOpacity="0.06" />
          <path d={paths.p360fd600} fill="var(--fill-0, #F9F7EA)" fillOpacity="0.06" />
          <path d={paths.p7837300} fill="var(--fill-0, #F9F7EA)" fillOpacity="0.06" />
          <path d={paths.p176ad180} fill="var(--fill-0, #F9F7EA)" fillOpacity="0.06" />
          <path d={paths.p7326e80} fill="var(--fill-0, #F9F7EA)" fillOpacity="0.06" />
          <path d={paths.p1c1da300} fill="var(--fill-0, #F9F7EA)" fillOpacity="0.06" />
          <path d={paths.p32c57e00} fill="var(--fill-0, #F9F7EA)" fillOpacity="0.06" />
          <path d={paths.p3888ac00} fill="var(--fill-0, #F9F7EA)" fillOpacity="0.06" />
          <path d={paths.pd1ff300} fill="var(--fill-0, #F9F7EA)" fillOpacity="0.06" />
          <path d={paths.p37f290b0} fill="var(--fill-0, #F9F7EA)" fillOpacity="0.06" />
          <path d={paths.p2d225800} fill="var(--fill-0, #F9F7EA)" fillOpacity="0.06" />
          <path d={paths.p31b467f0} fill="var(--fill-0, #F9F7EA)" fillOpacity="0.06" />
          <path d={paths.p858a700} fill="var(--fill-0, #F9F7EA)" fillOpacity="0.06" />
          <path d={paths.p520a300} fill="var(--fill-0, #F9F7EA)" fillOpacity="0.06" />
          <path d={paths.p20cd1200} fill="var(--fill-0, #F9F7EA)" fillOpacity="0.06" />
          <path d={paths.p1ac69ff0} fill="var(--fill-0, #F9F7EA)" fillOpacity="0.06" />
          <path d={paths.p1b18b400} fill="var(--fill-0, #F9F7EA)" fillOpacity="0.06" />
          <path d={paths.p22072000} fill="var(--fill-0, #F9F7EA)" fillOpacity="0.06" />
          <path d={paths.p2e19e780} fill="var(--fill-0, #F9F7EA)" fillOpacity="0.06" />
          <path d={paths.p3626c770} fill="var(--fill-0, #F9F7EA)" fillOpacity="0.06" />
          <path d={paths.p331bc800} fill="var(--fill-0, #F9F7EA)" fillOpacity="0.06" />
          <path d={paths.p1af5f719} fill="var(--fill-0, #F9F7EA)" fillOpacity="0.06" />
          <path d={paths.p191b6100} fill="var(--fill-0, #F9F7EA)" fillOpacity="0.06" />
          <path d={paths.p2c8ede00} fill="var(--fill-0, #F9F7EA)" fillOpacity="0.06" />
          <path d={paths.p3a176300} fill="var(--fill-0, #F9F7EA)" fillOpacity="0.06" />
          <path d={paths.p122ee800} fill="var(--fill-0, #F9F7EA)" fillOpacity="0.06" />
          <path d={paths.p1f85600} fill="var(--fill-0, #F9F7EA)" fillOpacity="0.06" />
          <path d={paths.p309ca100} fill="var(--fill-0, #F9F7EA)" fillOpacity="0.06" />
        </g>
      </svg>
    </div>
  );
}

export default function Introduction() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <Nav />
      <Home />
      <DecorativeSVG />
    </div>
  );
}