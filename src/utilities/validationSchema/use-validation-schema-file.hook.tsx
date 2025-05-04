import { z } from "zod";
import { useTranslation } from "next-i18next";

export function useOptionalValidationSchemaFile() {
  const { t } = useTranslation("validation");

  return z
    .custom<FileList | null | undefined>((value) => {
      if (
        value === undefined ||
        value === null ||
        (value instanceof FileList && value.length === 0)
      ) {
        return true; // it's optional
      }

      return value.length > 0 && value[0].size > 0;
    }, {
      message: t("file.wrongFormat"),
    })
    .optional()
    .nullable()
}