import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { Locale } from "@customTypes/pages";
import { Dropdown, useDropdownState } from "@components/shared/dropdown/dropdown.component";
import { PlanetIcon } from "@components/shared/icons/planet.icon";

const LangSwitcher = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const { locales: routerLocales, locale, pathname } = router;
  const locales = routerLocales as Locale[] | undefined;
  const { onChangeSelectedOption, selectedOption } = useDropdownState({
    placeholder: t("langSwitcher.chooseLang"),
    onChangeSelected: (selection) => {
      if (selection.value !== locale) {
        router.push(pathname, pathname, { locale: selection.value });
      }
    },
  });

  const options = locales?.map((locale) => {
    return {
      name: t(`langSwitcher.${locale}`),
      value: locale,
    };
  });

  return (
    <Dropdown
      icon={<PlanetIcon />}
      placeholder={t("langSwitcher.chooseLang")}
      onChangeSelected={onChangeSelectedOption}
      selected={selectedOption}
      options={options}
    />
  );
};

export { LangSwitcher };
