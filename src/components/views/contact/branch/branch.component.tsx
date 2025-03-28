import { BranchData } from "./branch-data";
import styles from "./branch.module.scss";
import { Container } from "@design-system/layout/utilities";
import { Team } from "@components/views/contact/team/team.component";
import { Locale } from "@customTypes/pages";
import { useRouter } from "next/router";

function BranchView(props: { branchData: BranchData }) {
  const { branchData } = props;
  const { locale } = useRouter();

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.titleWrapper}>
          <h1 className={styles.mainTitle}>{branchData.title[locale as Locale]}</h1>
          <h2 className={styles.subtitle}>{branchData.address}</h2>
        </div>

        <Team team={branchData.team} />
      </Container>
    </div>
  );
}

export { BranchView };

