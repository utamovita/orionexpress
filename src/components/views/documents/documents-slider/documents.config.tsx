import { Locale } from "@customTypes/pages";

type DocumentItem = {
  title: {
    [key in Locale]: string;
  };
  subtitle: {
    [key in Locale]: string;
  };
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  link: string;
};

const imageBasePath = "/assets/images/documents/";
const docBasePath = "/assets/docs/";
const documentsConfig: DocumentItem[] = [
  {
    title: {
      en: "KRS",
      de: "KRS",
      pl: "KRS",
    },
    subtitle: {
      en: "KRS",
      de: "KRS",
      pl: "Krajowy rejestr sądowy",
    },
    image: {
      url: `${imageBasePath}krs.png`,
      alt: "Grand transport logistics KRS",
      width: 745,
      height: 964,
    },
    link: `${docBasePath}krs.pdf`,
  },
  {
    title: {
      en: "Account details PLN ",
      de: "Kontodetails PLN",
      pl: "Szczegóły konta PLN",
    },
    subtitle: {
      en: "Details regarding Euro bank payment methods",
      de: "Details zu Euro-Bank-Zahlungsmethoden",
      pl: "Szczegóły dotyczące metod płatności PLN",
    },
    image: {
      url: `${imageBasePath}szczegoly-konta-pln.png`,
      alt: "Account details PLN",
      width: 762,
      height: 924,
    },
    link: `${docBasePath}szczegoly-konta-pln.pdf`,
  },
  {
    title: {
      en: "Account details EUR",
      de: "Kontodetails EUR",
      pl: "Szczegóły konta EUR",
    },
    subtitle: {
      en: "Details regarding Euro bank payment methods",
      de: "Details zu Euro-Bank-Zahlungsmethoden",
      pl: "Szczegóły dotyczące metod płatności EUR",
    },
    image: {
      url: `${imageBasePath}szczegoly-konta-eur.png`,
      alt: "Account details EUR",
      width: 761,
      height: 971,
    },
    link: `${docBasePath}szczegoly-konta-eur.pdf`,
  },
  {
    title: {
      en: "Licence",
      de: "Lizenz",
      pl: "Licencja",
    },
    subtitle: {
      en: "Licence for road transport",
      de: "Lizenz für den Straßentransport",
      pl: "Licencja Spedycyjna",
    },
    image: {
      url: `${imageBasePath}licencja.png`,
      alt: "Grand transport logistics licencja",
      width: 735,
      height: 930,
    },
    link: `${docBasePath}licencja.pdf`,
  },
  {
    title: {
      en: "Insurance",
      de: "Versicherung",
      pl: "Ubezpieczenie",
    },
    subtitle: {
      en: "Insurance certificate",
      de: "Versicherungszertifikat",
      pl: "Certyfikat ubezpieczeniowy",
    },
    image: {
      url: `${imageBasePath}ubezpieczenie.png`,
      alt: "Grand transport logistics ubezpieczenie",
      width: 742,
      height: 925,
    },
    link: `${docBasePath}ubezpieczenie.pdf`,
  },
];

export { documentsConfig };
