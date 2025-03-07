import React, { useCallback, useState } from "react";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";

import { isArray } from "lodash-es";
import cx from "classnames";

import styles from "./dropdown.module.scss";
import { ChevronDownIcon } from "@components/shared/icons/chevron-down.icon";
import { CheckmarkIcon } from "@components/shared/icons/checkmark.icon";

type Option = { name: string; value: string };

export type DropdownProps = {
  placeholder: string;
  // eslint-disable-next-line
  onChangeSelected: (selection: Option) => void;
  selected: Option;
  options: Option[] | React.ReactNode;
  icon?: React.ReactNode;
};

function Dropdown(props: DropdownProps) {
  const { placeholder, options, onChangeSelected, selected, icon } = props;

  return (
    <div className={styles.dropdownWrapper}>
      <Listbox value={selected} onChange={onChangeSelected}>
        {({ open }) => (
          <>
            <ListboxButton className={styles.select}>
              {icon ? <div className={styles.icon}>{props.icon}</div> : null}
              {selected.name || placeholder}
              <ChevronDownIcon className={cx([styles.chevron, { [styles.chevronUp]: open }])} size={16} />
            </ListboxButton>
            {isArray(options) ? (
              <ListboxOptions className={styles.list}>
                {options.map((option) => (
                  <DropdownOption key={option.name} option={option} />
                ))}
              </ListboxOptions>
            ) : (
              <div className={styles.list}>{options}</div>
            )}
          </>
        )}
      </Listbox>
    </div>
  );
}

type DropdownOptionProps = { option: Option };

function DropdownOption(props: DropdownOptionProps) {
  const { option } = props;

  return (
    <ListboxOption className={styles.option} value={option}>
      {({ active }) => (
        <>
          {option.name}
          {active ? <CheckmarkIcon size={16} /> : null}
        </>
      )}
    </ListboxOption>
  );
}

export function useDropdownState(props: Pick<DropdownProps, "onChangeSelected" | "placeholder">) {
  const defaultValue = { name: props.placeholder, value: props.placeholder };
  const [selectedOption, setSelectedOption] = useState<Option>(defaultValue);

  const onChangeSelectedOption = useCallback(
    (value: Option) => {
      setSelectedOption(value);
      props.onChangeSelected ? props.onChangeSelected(value) : false;
    },
    [props],
  );

  return {
    onChangeSelectedOption,
    selectedOption,
  };
}

export { Dropdown };
