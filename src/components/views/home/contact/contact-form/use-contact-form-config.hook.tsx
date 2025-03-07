import { useTranslation } from "next-i18next";
import { useMemo } from "react";
import { z } from "zod";

import {
  useValidationSchemaIsRequiredBoolean,
  useValidationSchemaIsRequiredString,
} from "../../../../../utilities/validationSchema/use-validation-schema-required.hook";
import { FormFieldRendererConfig } from "@components/shared/form/form-fields.types";
import { useValidationSchemaEmail } from "../../../../../utilities/validationSchema/use-validation-schema-email.hook";

export function useContactFormConfig() {
  const { t } = useTranslation("forms");
  const isRequiredStringValidationSchema = useValidationSchemaIsRequiredString();
  const emailValidationSchema = useValidationSchemaEmail();
  const isRequiredBooleanValidationSchema = useValidationSchemaIsRequiredBoolean();
  const fieldsContact = useMemo(
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
        topic: {
          type: "text",
          defaultValue: "",
          label: t("topic"),
          name: "topic",
          validationSchema: isRequiredStringValidationSchema,
        },
        message: {
          type: "textarea",
          defaultValue: "",
          label: t("message"),
          name: "message",
          validationSchema: isRequiredStringValidationSchema,
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
    [isRequiredStringValidationSchema, isRequiredBooleanValidationSchema, emailValidationSchema, t],
  );

  const schema = useMemo(
    () =>
      z.object({
        name: fieldsContact.name.validationSchema,
        email: fieldsContact.email.validationSchema,
        topic: fieldsContact.topic.validationSchema,
        message: fieldsContact.message.validationSchema,
        agreements: fieldsContact.agreements.validationSchema,
      }),
    [fieldsContact],
  );

  const fieldListContact = useMemo(() => Object.entries(fieldsContact), [fieldsContact]);

  return {
    fieldsContact,
    fieldListContact,
    schema,
  };
}
