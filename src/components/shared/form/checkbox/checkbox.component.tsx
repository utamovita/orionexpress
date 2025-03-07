import { isString } from "lodash-es";
import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { FieldError } from "react-hook-form";
import { useToggleState } from "react-stately";
import { useCheckbox, useFocusRing, VisuallyHidden } from "react-aria";
import cx from "classnames";
import styles from "./checkbox.module.scss";
import { WarningIcon } from "@components/shared/icons/warning.icon";
import { TickIcon } from "@components/shared/icons/tick.icon";

type CheckboxProps = {
  isSelected?: boolean;
  isIndeterminate?: boolean;
  isDisabled?: boolean;
  label: string | React.ReactNode;
  isReadOnly?: boolean;
  isLarge?: boolean;
  onChange?: ((isSelected: boolean) => void) | undefined;
  error?: FieldError | undefined;
  fullWidth?: boolean;
  isInvalid?: boolean;
  defaultSelected?: boolean;
};

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const { error, fullWidth = false, isInvalid = false } = props;
  const state = useToggleState(props);
  const internalRef = useRef<HTMLInputElement>(null);
  const { inputProps } = useCheckbox({ ...props, children: props.label }, state, internalRef);
  const { focusProps } = useFocusRing();
  const isSelected = state.isSelected && !props.isIndeterminate;

  useImperativeHandle(ref, () => internalRef.current!);

  return (
    <div className={cx({ [styles.fullWidth]: fullWidth })}>
      <label className={styles.checkboxWrapper}>
        <VisuallyHidden>
          <input {...inputProps} {...focusProps} ref={internalRef} />
        </VisuallyHidden>
        <div className={cx(styles.checkboxListItemTick, { [styles.checkboxListItemTickActive]: isSelected })}>
          {isSelected ? <TickIcon color={"var(--colorBlack)"} /> : null}
        </div>

        <span
          className={cx([styles.checkboxLabel], {
            [styles.disabled]: props.isDisabled,
            [styles.large]: props.isLarge,
            [styles.invalid]: isInvalid,
          })}
        >
          {props.label}
        </span>
      </label>

      {isInvalid && isString(error?.message) ? (
        <div className={styles.errorWrapper}>
          <WarningIcon className={styles.iconError} />
          <p className={styles.errorText}>{error.message}</p>
        </div>
      ) : null}
    </div>
  );
});

export { Checkbox };
