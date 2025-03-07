import styles from "./contact-form.module.scss";
import { useTranslation } from "next-i18next";
import { Button } from "@components/shared/button/button.component";
import { FormFieldsRenderer } from "@components/shared/form/form-fields-renderer.component";
import { useContactFormConfig } from "@components/views/home/contact/contact-form/use-contact-form-config.hook";
import { useContactForm } from "@components/views/home/contact/contact-form/use-contact-form.hook";

function ContactForm() {
  const { t } = useTranslation();

  const { onSubmit, control, isLoading } = useContactForm();
  const { fieldListContact } = useContactFormConfig();

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{t("common:contactForm.title")}</h3>

      <form onSubmit={onSubmit}>
        <div className={styles.formWrapper}>
          <FormFieldsRenderer fieldList={fieldListContact} control={control} />

          <div className={styles.btnWrapper}>
            <Button type={"submit"} variant={"secondary"} isLoading={isLoading}>
              {t("forms:submit")}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export { ContactForm };
