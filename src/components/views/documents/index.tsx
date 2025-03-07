import { MainBanner } from "./main-banner/main-banner.component";
import { DocumentsSlider } from "./documents-slider/documents-slider.component";
import { Container } from "@design-system/layout/utilities";

function DocumentsView() {
  return (
    <>
      <MainBanner />
      <Container>
        <DocumentsSlider />
      </Container>
    </>
  );
}

export { DocumentsView };
