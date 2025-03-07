import { useTranslation } from "next-i18next";
import { useMemo } from "react";
import { z } from "zod";

import { FormFieldRendererConfig } from "@components/shared/form/form-fields.types";
import {
  useValidationSchemaIsRequiredBoolean,
  useValidationSchemaIsRequiredString,
} from "../../../../../../utilities/validationSchema/use-validation-schema-required.hook";
import { useValidationSchemaEmail } from "../../../../../../utilities/validationSchema/use-validation-schema-email.hook";
import { useValidationSchemaPhoneRequired } from "../../../../../../utilities/validationSchema/use-validation-schema-phone.hook";
import { useValidationSchemaFile } from "../../../../../../utilities/validationSchema/use-validation-schema-file.hook";

export function useWorkFormConfig() {
  const { t } = useTranslation("forms");
  const isRequiredStringValidationSchema = useValidationSchemaIsRequiredString();
  const emailValidationSchema = useValidationSchemaEmail();
  const isRequiredBooleanValidationSchema = useValidationSchemaIsRequiredBoolean();
  const isPhoneRequiredValidationSchema = useValidationSchemaPhoneRequired();
  const isFileRequiredValidationSchema = useValidationSchemaFile();
  const fields = useMemo(
    () =>
      ({
        name: {
          type: "text",
          defaultValue: "",
          label: t("name"),
          name: "name",
          validationSchema: isRequiredStringValidationSchema,
        },
        email: {
          type: "text",
          defaultValue: "",
          label: t("email"),
          name: "email",
          validationSchema: emailValidationSchema,
        },
        phone: {
          type: "text",
          defaultValue: "",
          label: t("phone"),
          name: "phone",
          validationSchema: isPhoneRequiredValidationSchema,
        },
        message: {
          type: "textarea",
          defaultValue: "",
          label: t("writeAboutYourself"),
          name: "message",
          validationSchema: isRequiredStringValidationSchema,
        },
        file: {
          type: "file",
          defaultValue: "",
          label: t("uploadCV"),
          name: "file",
          validationSchema: isFileRequiredValidationSchema,
        },
        agreements: {
          type: "checkbox",
          defaultValue: false,
          label: t("agreement"),
          name: "agreements",
          validationSchema: isRequiredBooleanValidationSchema,
          fullWidth: true,
        },
      }) as const satisfies Record<string, FormFieldRendererConfig>,
    [
      isRequiredStringValidationSchema,
      isRequiredBooleanValidationSchema,
      isPhoneRequiredValidationSchema,
      emailValidationSchema,
      isFileRequiredValidationSchema,
      t,
    ],
  );

  const schema = useMemo(
    () =>
      z.object({
        name: fields.name.validationSchema,
        email: fields.email.validationSchema,
        phone: fields.phone.validationSchema,
        message: fields.message.validationSchema,
        file: fields.file.validationSchema,
        agreements: fields.agreements.validationSchema,
      }),
    [fields],
  );

  const fieldList = useMemo(() => Object.entries(fields), [fields]);

  return {
    fields,
    fieldList,
    schema,
  };
}
