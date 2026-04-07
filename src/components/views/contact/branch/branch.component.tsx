import styles from "./branch.module.scss";
import { Container } from "@design-system/layout/utilities";
import { Team } from "@components/views/contact/team/team.component";
import { Locale } from "@customTypes/pages";
import { useRouter } from "next/router";
import { Branch } from "@sanity/lib/queries";
import { MainBanner } from "./main-banner/main-banner.component";

function BranchView(props: { branchData: Branch }) {
  const { branchData } = props;
  const { locale } = useRouter();

  return (
    <div className={styles.wrapper}>
      <MainBanner
        title={branchData.title[locale as Locale]}
        subtitle={branchData.address}
        imageUrl={branchData.mainBannerImageUrl!}
      />
      <Container>
        <Team team={branchData.team} />
      </Container>
    </div>
  );
}

export { BranchView };
