import { CSRSection } from "@components/views/csr/csr-section/csr-section.component";
import { MainBanner } from "@components/views/csr/main-banner/main-banner.component";
import { IntroSection } from "@components/views/csr/intro-section/intro-section.component";
import { BadgesSection } from "@components/views/csr/badges-section/badges-section.component";

function CSRView() {
  return (
    <>
      <MainBanner/>
      <IntroSection />
      <BadgesSection />
      <CSRSection />
    </>
  );
}

export { CSRView };
