import { useTranslation } from "next-i18next";
import { z } from "zod";

export function useValidationSchemaFile() {
  const { t } = useTranslation("validation");

  return z.custom((value) => {
    if (value instanceof File) {
      return value.size > 0;
    }
    if (value instanceof FileList && value.length > 0) {
      return value[0].size > 0;
    }
    return false;
  }, t("file.wrongFormat"));
}
