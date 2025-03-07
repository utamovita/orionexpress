import { useTranslation } from "next-i18next";
import { z } from "zod";

export function useValidationSchemaIsRequiredString() {
  const { t } = useTranslation("validation");

  return z.string().min(1, t("required"));
}

export function useValidationSchemaIsRequiredBoolean() {
  const { t } = useTranslation("validation");

  return z.boolean().refine((val) => val, t("required"));
}
