import { useTranslation } from "next-i18next";
import { useValidationSchemaIsRequiredString } from "./use-validation-schema-required.hook";

function checkPhoneChars(value: string) {
  const regexp = /^([+\d]){1}(\d|-| ){7,19}$/;
  return regexp.test(value);
}

function useValidationSchemaPhoneRequired() {
  const isRequiredSchema = useValidationSchemaIsRequiredString();
  const { t } = useTranslation("validation");

  return isRequiredSchema.refine((value) => {
    const digitsLength = value.replace(/[^0-9]/g, "").length;
    const hasDoubleSpaces = value.includes("  ");

    return digitsLength >= 9 && !hasDoubleSpaces && checkPhoneChars(value);
  }, t("phone.wrongFormat"));
}

export { useValidationSchemaPhoneRequired };
