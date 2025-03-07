import React from "react";
import { z } from "zod";

type FordFieldBase = {
  name: string;
  validationSchema: z.Schema;
};

type FormFieldTextInput = {
  type: "text" | "password" | "textarea";
  defaultValue: string;
  label: string;
  halfWidth?: boolean;
  googleAutocomplete?: boolean;
} & FordFieldBase;

type FormFieldCheckbox = {
  type: "checkbox";
  label: string | React.ReactNode;
  defaultValue: boolean;
  fullWidth?: boolean;
} & FordFieldBase;

type FormFieldRadio = {
  type: "radio";
  label: string;
  defaultValue: string;
  options: Array<{
    label: string;
    value: string;
  }>;
} & FordFieldBase;

type FormFieldFile = {
  type: "file";
  label: string;
  defaultValue: "";
} & FordFieldBase;

export type FormFieldRendererConfig = FormFieldTextInput | FormFieldCheckbox | FormFieldRadio | FormFieldFile;
export type FieldList = [string, FormFieldRendererConfig][];
