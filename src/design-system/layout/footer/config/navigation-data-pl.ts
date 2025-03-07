import { FooterItem } from "@design-system/layout/footer/footer-navigation/footer-navigation.component";

export type FooterConfig = {
  mainNavigation: FooterItem[];
  bottomNavigation: FooterItem[];
};

const footerConfigPL: FooterConfig = {
  mainNavigation: [
    {
      title: "O nas",
      link: "/o-nas",
    },
    {
      title: "Galeria",
      link: "/galeria",
    },
    {
      title: "Kariera",
      link: "/kariera",
    },
    {
      title: "Kontakt",
      link: "/kontakt",
    },
  ],
  bottomNavigation: [
    {
      title: "Polityka Prywatności",
      link: "/dokumenty",
    },
    {
      title: "Pliki Cookies",
      link: "/dokumenty",
    },
  ],
};

export { footerConfigPL };
