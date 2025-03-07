import styles from "./work.module.scss";
import { useTranslation } from "next-i18next";
import backgroundImage from "../../../../../public/assets/images/career/work.jpg";
import { Container, FlexComponent } from "@design-system/layout/utilities";
import { Button } from "../../../shared/button/button.component";
import { ArrowIcon } from "../../../shared/icons/arrow.icon";
import Image from "next/image";
import { useState } from "react";
import { WorkPopup } from "@components/views/career/work/form-popups/work-popup.component";
import carrierImage from "public/assets/images/career/carrier.jpeg";
import driverImage from "public/assets/images/career/driver.jpeg";
import dispatcherImage from "public/assets/images/career/dispatcher.jpeg";
import forwarderImage from "public/assets/images/career/forwarder.jpeg";
import administrationImage from "public/assets/images/career/administration.jpeg";
import { WorkForm } from "@components/views/career/work/form-popups/work-form/work-form.component";
import { CarrierForm } from "@components/views/career/work/form-popups/carrier-form/carrier-form.component";

function Work() {
  const { t } = useTranslation("common");
  const [isJobCarrierOpen, setJobCarrierOpen] = useState(false);
  const [isJobDriverOpen, setJobDriverOpen] = useState(false);
  const [isJobDispatcherOpen, setJobDispatcherOpen] = useState(false);
  const [isJobForwarderOpen, setJobForwarderOpen] = useState(false);
  const [isJobAdministrationOpen, setJobAdministrationOpen] = useState(false);

  return (
    <>
      <>
        {isJobCarrierOpen && (
          <WorkPopup
            Form={<CarrierForm position="przewoźnik" />}
            img={carrierImage}
            title={t("career.form.carrier.title")}
            onClose={() => setJobCarrierOpen(false)}
          />
        )}
        {isJobDriverOpen && (
          <WorkPopup
            Form={<WorkForm position="kierowca" />}
            img={driverImage}
            title={t("career.form.driver.title")}
            onClose={() => setJobDriverOpen(false)}
          />
        )}
        {isJobDispatcherOpen && (
          <WorkPopup
            Form={<WorkForm position="dyspozytor" />}
            img={dispatcherImage}
            title={t("career.form.dispatcher.title")}
            onClose={() => setJobDispatcherOpen(false)}
          />
        )}
        {isJobForwarderOpen && (
          <WorkPopup
            Form={<WorkForm position="spedytor" />}
            img={forwarderImage}
            title={t("career.form.forwarder.title")}
            onClose={() => setJobForwarderOpen(false)}
          />
        )}
        {isJobAdministrationOpen && (
          <WorkPopup
            Form={<WorkForm position="administracja" />}
            img={administrationImage}
            title={t("career.form.administration.title")}
            onClose={() => setJobAdministrationOpen(false)}
          />
        )}
      </>
      <div className={styles.wrapper}>
        <Container>
          <FlexComponent className={styles.flex}>
            <div className={styles.section}>
              <h2 className={styles.title}>
                {t("career.subtitle.firstHalf")} <br></br>
                {t("career.subtitle.secondHalf")}
              </h2>
              <p className={styles.subtitle}>{t("career.text")}</p>
              <h2 className={styles.secondTitle}>{t("career.work.title")}</h2>
              <div className={styles.buttons}>
                <Button className={styles.button} onPress={() => setJobCarrierOpen(true)}>
                  {t("career.work.carrier")} <ArrowIcon className={styles.arrow} />
                </Button>
                <Button className={styles.button} onPress={() => setJobDriverOpen(true)}>
                  {t("career.work.driver")} <ArrowIcon className={styles.arrow} />
                </Button>
                <Button className={styles.button} onPress={() => setJobDispatcherOpen(true)}>
                  {t("career.work.dispatcher")} <ArrowIcon className={styles.arrow} />
                </Button>
                <Button className={styles.button} onPress={() => setJobForwarderOpen(true)}>
                  {t("career.work.forwarder")} <ArrowIcon className={styles.arrow} />
                </Button>
                <Button className={styles.button} onPress={() => setJobAdministrationOpen(true)}>
                  {t("career.work.administration")} <ArrowIcon className={styles.arrow} />
                </Button>
              </div>
            </div>
            <div className={styles.section}>
              <Image
                alt="background image"
                src={backgroundImage}
                placeholder="blur"
                quality={100}
                width={811}
                height={610}
                className={styles.image}
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          </FlexComponent>
        </Container>
      </div>
    </>
  );
}

export { Work };
