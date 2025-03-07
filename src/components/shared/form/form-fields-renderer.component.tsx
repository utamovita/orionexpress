import { Control, Controller } from "react-hook-form";

import { FieldList } from "./form-fields.types";
import { TextField } from "@components/shared/form/text-field/text-field.component";
import { Agreements } from "@components/shared/agreements/agreements.component";
import { Checkbox } from "@components/shared/form/checkbox/checkbox.component";
import { TextAreaField } from "@components/shared/form/textarea/textarea.component";
import { FileField } from "@components/shared/form/file-field/file-field.component";

type FormFieldsRenderer = {
  fieldList: FieldList;
  control: Control<any>;
};

export function FormFieldsRenderer(props: FormFieldsRenderer) {
  const { control, fieldList } = props;

  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
      {fieldList.map(([_, item]) => {
        return (
          <Controller
            key={item.name}
            control={control}
            name={item.name}
            render={({ field: { name, value, onChange, onBlur, ref }, fieldState: { invalid, error } }) => {
              if (item.type === "checkbox") {
                return (
                  <Checkbox
                    label={item.name === "agreements" ? <Agreements isInvalid={invalid} /> : item.label}
                    onChange={onChange}
                    error={error}
                    fullWidth={item.fullWidth}
                    isInvalid={invalid}
                    isSelected={value}
                    defaultSelected={item.defaultValue}
                    ref={ref}
                  />
                );
              }

              if (item.type === "textarea") {
                return (
                  <TextAreaField
                    label={item.label}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    validationBehavior="aria"
                    isInvalid={invalid}
                    error={error}
                    type={item.type}
                    ref={ref}
                  />
                );
              }

              if (item.type === "file") {
                return (
                  <FileField
                    label={item.label}
                    name={name}
                    onChange={onChange}
                    isInvalid={invalid}
                    error={error}
                    ref={ref}
                  />
                );
              }

              return (
                <TextField
                  label={item.label}
                  name={name}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  validationBehavior="aria"
                  isInvalid={invalid}
                  error={error}
                  type={item.type}
                  ref={ref}
                />
              );
            }}
          />
        );
      })}
    </>
  );
}
