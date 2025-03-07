import styles from "../work-form/work-form.module.scss";
import { useTranslation } from "next-i18next";
import { Button } from "@components/shared/button/button.component";
import { FormFieldsRenderer } from "@components/shared/form/form-fields-renderer.component";
import { useWorkForm } from "@components/views/career/work/form-popups/work-form/use-work-form.hook";
import { useWorkFormConfig } from "@components/views/career/work/form-popups/work-form/use-work-form-config.hook";

export type WorkFormProps = {
  position: string;
};

function WorkForm(props: WorkFormProps) {
  const { position } = props;
  const { t } = useTranslation();
  const { onSubmit, control, isLoading } = useWorkForm({ position });
  const { fieldList } = useWorkFormConfig();

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{t("career.form.title")}</h2>

      <form onSubmit={onSubmit}>
        <div className={styles.formWrapper}>
          <FormFieldsRenderer fieldList={fieldList} control={control} />

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

export { WorkForm };
