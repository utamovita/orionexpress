import { Contact } from "@components/views/home/contact/contact.component";
import { MeetUs } from "@components/views/home/meet-us/meet-us.component";
import { OurOffer } from "@components/views/home/our-offer/our-offer.component";
import { MainBanner } from "./main-banner/main-banner.component";

function HomePageView() {
  return (
    <>
      <MainBanner />
      <MeetUs />
      <OurOffer />
      <Contact />
    </>
  );
}

export { HomePageView };
