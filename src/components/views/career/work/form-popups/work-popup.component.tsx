import { ModalDialog } from "@components/shared/modal-dialog/modal-dialog.component";

import styles from "./work-popup.module.scss";
import * as React from "react";
import { useTranslation } from "next-i18next";
import Image, { StaticImageData } from "next/image";

type WorkPopupProps = {
  onClose(): void;
  title: string;
  img: StaticImageData;
  Form: React.ReactNode;
};

function WorkPopup(props: WorkPopupProps) {
  const { onClose: closePopup, title, img, Form } = props;
  const { t } = useTranslation("common");

  return (
    <ModalDialog.Overlay>
      <ModalDialog isOpen onClose={closePopup} isDismissable fullWidth darkTheme>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>{title}</h2>

          <div className={styles.contentWrapper}>
            <div className={styles.formWrapper}>{Form}</div>
            <div className={styles.infoWrapper}>
              <Image
                src={img}
                alt={"grand transport logistic work"}
                placeholder="blur"
                quality={90}
                width={810}
                height={540}
                style={{
                  objectFit: "cover",
                }}
              />
              <div className={styles.noteWrapper}>
                <h4 className={styles.note}>{t("career.form.note")}</h4>
                <a href={"mailto:office@grandtransportlogistics.eu"} className={styles.noteEmail}>
                  office@grandtransportlogistics.eu
                </a>
              </div>
            </div>
          </div>
        </div>
      </ModalDialog>
    </ModalDialog.Overlay>
  );
}

export { WorkPopup };
