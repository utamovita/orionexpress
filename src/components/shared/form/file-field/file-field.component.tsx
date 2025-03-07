import React, { forwardRef } from "react";

import { FieldError } from "react-hook-form";
import cx from "classnames";
import { isString } from "lodash-es";
import styles from "./file-field.module.scss";

type CustomErrorType = {
  message: string;
};

export type FileFieldProps = {
  isInvalid: boolean;
  label: string;
  onChange: (files: FileList | null) => void;
  error: FieldError | undefined | CustomErrorType;
  errorMessage?: string | undefined;
  name: string;
};

const FileField = forwardRef<HTMLInputElement, FileFieldProps>((props, ref) => {
  const { error, errorMessage = undefined, isInvalid, onChange, label, name } = props;

  return (
    <div className={styles.textFieldWrapper}>
      <div className={styles.inputWrap}>
        <label className={styles.labelText}>{label}</label>
        <input
          type={"file"}
          name={name}
          onChange={(e) => onChange(e.target.files)}
          accept="application/pdf"
          ref={ref}
          className={cx(styles.input, { [styles.inputError]: isInvalid })}
        />
      </div>
      {isInvalid && isString(error?.message) ? (
        <p className={styles.errorText}>
          <span dangerouslySetInnerHTML={{ __html: error.message }} />
        </p>
      ) : null}

      {errorMessage ? (
        <p className={styles.errorText}>
          <span dangerouslySetInnerHTML={{ __html: errorMessage }} />
        </p>
      ) : null}
    </div>
  );
});

export { FileField };
