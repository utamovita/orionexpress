import { MainBanner } from "./main-banner/main-banner.component";
import { BranchList } from "@components/views/contact/branch-list/branch-list.component";

function ContactView() {
  return (
    <>
      <MainBanner />
      <BranchList/>
    </>
  );
}

export { ContactView };
