import { MainBanner } from "./main-banner/main-banner.component";
import { BranchList } from "@components/views/contact/branch-list/branch-list.component";
import { Branch } from "@sanity/lib/queries";

function ContactView({ branches }: { branches: Branch[] }) {
  return (
    <>
      <MainBanner />
      <BranchList branches={branches} />
    </>
  );
}

export { ContactView };