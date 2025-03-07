import { MainBanner } from "./main-banner/main-banner.component";
import { WhoWeAre } from "./who-we-are/who-we-are.component";
import { LocalizationSection } from "@components/views/about-us/localization-section/localization-section.component";
import { More } from "./more/more.component";

function AboutUsView() {
  return (
    <>
      <MainBanner />
      <WhoWeAre />
      <LocalizationSection />
      <More />
    </>
  );
}

export { AboutUsView };
