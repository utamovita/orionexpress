import styles from "./team.module.scss";
import { Container } from "@design-system/layout/utilities";
import Image from "next/image";
import { BranchData } from "@components/views/contact/branch/branch-data";
import EnvelopeIcon from "@components/shared/icons/envelope.icon";
import cx from "classnames";

function Team(props: { team: BranchData["team"] }) {
  const { team } = props;

  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.team}>
          {team.map((item, index) => (
            <div key={index} className={styles.member}>
              <div className={styles.imageWrapper}>
                <Image
                  src={item.img1}
                  alt={item.name}
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                  className={styles.image1}
                />
                <Image
                  src={item.img2}
                  alt={item.name}
                  width={445}
                  height={800}
                  style={{
                    objectFit: "cover",
                  }}
                  className={styles.image2}
                />
              </div>
              <div className={styles.content}>
                <ul className={styles.list}>
                  <li className={cx(styles.element, styles.name)}>{item.name}</li>
                  <li className={styles.element}>{item.role}</li>
                  <li className={styles.element}>{item.phone}</li>
                  <li className={styles.element}>
                    <div className={styles.iconWrapper}>
                      <EnvelopeIcon fill={"white"} />
                    </div>
                    <span className={styles.emailText}>
                      {item.email}
                      <span>@orionexpress.eu</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export { Team };
