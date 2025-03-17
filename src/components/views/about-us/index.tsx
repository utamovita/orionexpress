import { MainBanner } from "./main-banner/main-banner.component";
import { SectionTwo } from "@components/views/about-us/section-two/section-two.component";
import { SectionThree } from "@components/views/about-us/section-three/section-three.component";
import { SectionFour } from "@components/views/about-us/section-four/section-four.component";
import { SectionFive } from "@components/views/about-us/section-five/section-five.component";

function AboutUsView() {
  return (
    <>
      <MainBanner />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </>
  );
}

export { AboutUsView };
