import { Locale } from "@customTypes/pages";

type DocumentItem = {
  title: {
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
      en: "RODO",
      de: "RODO",
      pl: "Zgoda na przetwarzanie danych osobowych",
    },
    image: {
      url: `${imageBasePath}rekrutacja.jpg`,
      alt: "Zgoda na przetwarzanie danych osobowych",
      width: 1585,
      height: 1032,
    },
    link: `${docBasePath}Orion-Express-Rekrutacja.pdf`,
  },
  {
    title: {
      en: "Euro bank details",
      de: "Euro bank details",
      pl: "Euro bank details",
    },
    image: {
      url: `${imageBasePath}euro-bank-details.jpg`,
      alt: "Euro bank details",
      width: 814,
      height: 931,
    },
    link: `${docBasePath}Euro-bank-details.pdf`,
  },
  {
    title: {
      en: "Licence",
      de: "Licence",
      pl: "Licencja",
    },
    image: {
      url: `${imageBasePath}licencja.jpg`,
      alt: "licencja",
      width: 785,
      height: 931,
    },
    link: `${docBasePath}License.pdf`,
  },
  {
    title: {
      en: "Certificate",
      de: "Certificate",
      pl: "Certyfikat ubezpieczenia",
    },
    image: {
      url: `${imageBasePath}certyfikat-ubezpieczenia.jpg`,
      alt: "certyfikat ubezpieczenia",
      width: 790,
      height: 931,
    },
    link: `${docBasePath}certyfikat_ocpdis.pdf`,
  },
  {
    title: {
      en: "KRS",
      de: "KRS",
      pl: "KRS",
    },
    image: {
      url: `${imageBasePath}KRS.jpg`,
      alt: "KRS",
      width: 789,
      height: 931,
    },
    link: `${docBasePath}KRS.pdf`,
  },
  {
    title: {
      en: "OSCIPD",
      de: "OSCIPD",
      pl: "OSCIPD",
    },
    image: {
      url: `${imageBasePath}OSCIPD.jpg`,
      alt: "KRS",
      width: 789,
      height: 931,
    },
    link: `${docBasePath}Orion-Express-ocsipd.pdf`,
  },
  {
    title: {
      en: "OSCPDU DE",
      de: "OSCPDU DE",
      pl: "Ubezpieczenie kabotażowe OSCPDU DE",
    },
    image: {
      url: `${imageBasePath}kabotaz-de.jpg`,
      alt: "KRS",
      width: 789,
      height: 931,
    },
    link: `${docBasePath}Orion-kabotaz-de.pdf`,
  },
  {
    title: {
      en: "OSCPDU UE",
      de: "OSCPDU UE",
      pl: "Ubezpieczenie kabotażowe OSCPDU UE",
    },
    image: {
      url: `${imageBasePath}kabotaz-ue.jpg`,
      alt: "KRS",
      width: 789,
      height: 931,
    },
    link: `${docBasePath}Orion-kabotaz-ue.pdf`,
  },
];

export { documentsConfig };
