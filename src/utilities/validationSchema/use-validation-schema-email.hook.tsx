import { useTranslation } from "next-i18next";
import { useValidationSchemaIsRequiredString } from "./use-validation-schema-required.hook";

function checkDiacriticalLetters(value: string) {
  const regexp = /([\u00C0-\u00FF])/gi;
  return !regexp.test(value);
}

export function useValidationSchemaEmail() {
  const isRequiredSchema = useValidationSchemaIsRequiredString();
  const { t } = useTranslation("validation");

  return isRequiredSchema.email(t("email.wrongFormat")).refine(checkDiacriticalLetters, t("email.wrongFormat"));
}
