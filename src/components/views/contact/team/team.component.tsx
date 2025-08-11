import styles from "./team.module.scss";
import Image from "next/image";
import EnvelopeIcon from "@components/shared/icons/envelope.icon";
import cx from "classnames";
import { TeamMember } from "@sanity/lib/queries";

function Team(props: { team: TeamMember[] }) {
  const { team } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.team}>
        {team.map((item, index) => (
          <div key={index} className={styles.member}>
            <div className={styles.imageWrapper}>
              <Image
                quality={100}
                src={item.img1Url!}
                alt={item.name}
                width={274}
                height={300}
                className={styles.image1}
              />
              <Image
                src={item.img2Url!}
                alt={item.name}
                width={274}
                height={300}
                style={{
                  objectFit: "cover",
                }}
                className={styles.image2}
                quality={100}
              />
            </div>
            <div className={styles.content}>
              <ul className={styles.list}>
                <li className={cx(styles.element, styles.name)}>{item.name}</li>
                {item.role ? <li className={styles.element}>{item.role}</li> : null}
                {item.phone ? <li className={styles.element}>{item.phone}</li> : null}
                <li className={styles.element}>
                  <div className={styles.iconWrapper}>
                    <EnvelopeIcon fill={"white"} />
                  </div>
                  <span className={styles.emailText}>
                    {item.email}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Team };
