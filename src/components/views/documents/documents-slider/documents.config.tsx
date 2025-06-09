import { Locale } from "@customTypes/pages";

type DocumentItem = {
  title: {
    [key in Locale]: string;
  };
  image: {
    url: {
      [key in Locale]: string;
    };
    alt: string;
    width: number;
    height: number;
  };
  link: {
    [key in Locale]: string;
  };
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
      url: {
        en: `${imageBasePath}rekrutacja.jpg`,
        de: `${imageBasePath}rekrutacja.jpg`,
        pl: `${imageBasePath}rekrutacja.jpg`,
      },
      alt: "Zgoda na przetwarzanie danych osobowych",
      width: 1585,
      height: 1032,
    },
    link: {
      en: `${docBasePath}Orion-Express-Rekrutacja.pdf`,
      de: `${docBasePath}Orion-Express-Rekrutacja.pdf`,
      pl: `${docBasePath}Orion-Express-Rekrutacja.pdf`,
    },
  },
  {
    title: {
      en: "Euro bank details",
      de: "Euro bank details",
      pl: "Euro bank details",
    },
    image: {
      url: {
        en: `${imageBasePath}euro-bank-details.jpg`,
        de: `${imageBasePath}euro-bank-details.jpg`,
        pl: `${imageBasePath}euro-bank-details.jpg`,
      },
      alt: "Euro bank details",
      width: 814,
      height: 931,
    },
    link: {
      en: `${docBasePath}Euro-bank-details.pdf`,
      de: `${docBasePath}Euro-bank-details.pdf`,
      pl: `${docBasePath}Euro-bank-details.pdf`,
    },
  },
  {
    title: {
      en: "Licence",
      de: "Licence",
      pl: "Licencja",
    },
    image: {
      url: {
        en: `${imageBasePath}licencja.jpg`,
        de: `${imageBasePath}licencja.jpg`,
        pl: `${imageBasePath}licencja.jpg`,
      },
      alt: "licencja",
      width: 785,
      height: 931,
    },
    link: {
      en: `${docBasePath}License.pdf`,
      de: `${docBasePath}License.pdf`,
      pl: `${docBasePath}License.pdf`,
    },
  },
  {
    title: {
      en: "Insurance",
      de: "Insurance",
      pl: "Certyfikat ubezpieczenia",
    },
    image: {
      url: {
        en: `${imageBasePath}certyfikat-ubezpieczenia.jpg`,
        de: `${imageBasePath}certyfikat-ubezpieczenia.jpg`,
        pl: `${imageBasePath}certyfikat-ubezpieczenia.jpg`,
      },
      alt: "certyfikat ubezpieczenia",
      width: 790,
      height: 931,
    },
    link: {
      en: `${docBasePath}new/en/insurance-certificate.pdf`,
      de: `${docBasePath}new/en/insurance-certificate.pdf`,
      pl: `${docBasePath}new/pl/certyfikat-ubezpieczeniowy.pdf`,
    },
  },
  {
    title: {
      en: "KRS",
      de: "KRS",
      pl: "KRS",
    },
    image: {
      url: {
        en: `${imageBasePath}KRS.jpg`,
        de: `${imageBasePath}KRS.jpg`,
        pl: `${imageBasePath}KRS.jpg`,
      },
      alt: "KRS",
      width: 789,
      height: 931,
    },
    link: {
      en: `${docBasePath}KRS.pdf`,
      de: `${docBasePath}KRS.pdf`,
      pl: `${docBasePath}KRS.pdf`,
    },
  },
  {
    title: {
      en: "OCPDU insurance contract",
      de: "OCPDU",
      pl: "Umowa ubezpieczenia OCPDU",
    },
    image: {
      url: {
        en: `${imageBasePath}OSCIPD.jpg`,
        de: `${imageBasePath}OSCIPD.jpg`,
        pl: `${imageBasePath}OSCIPD.jpg`,
      },
      alt: "KRS",
      width: 789,
      height: 931,
    },
    link: {
      en: `${docBasePath}new/en/OCPDU-insurance-contract.pdf`,
      de: `${docBasePath}new/en/OCPDU-insurance-contract.pdf`,
      pl: `${docBasePath}new/pl/OCPDU-umowa.pdf`,
    },
  },
  {
    title: {
      en: "OCPDU insurance attachment",
      de: "OCPDU",
      pl: "Załącznik ubezpieczenia OCPDU",
    },
    image: {
      url: {
        en: `${imageBasePath}OSCIPD.jpg`,
        de: `${imageBasePath}OSCIPD.jpg`,
        pl: `${imageBasePath}OSCIPD.jpg`,
      },
      alt: "KRS",
      width: 789,
      height: 931,
    },
    link: {
      en: `${docBasePath}new/en/OCPDU-insurance-attachment.pdf`,
      de: `${docBasePath}new/en/OCPDU-insurance-attachment.pdf`,
      pl: `${docBasePath}new/pl/OCPDU-zalacznik.pdf`,
    },
  },
  {
    title: {
      en: "Cabotage insurance DE",
      de: "Cabotage insurance DE",
      pl: "Ubezpieczenie kabotażowe DE",
    },
    image: {
      url: {
        en: `${imageBasePath}kabotaz-de.jpg`,
        de: `${imageBasePath}kabotaz-de.jpg`,
        pl: `${imageBasePath}kabotaz-de.jpg`,
      },
      alt: "KRS",
      width: 789,
      height: 931,
    },
    link: {
      en: `${docBasePath}new/en/kabotaz-de.pdf`,
      de: `${docBasePath}new/en/kabotaz-de.pdf`,
      pl: `${docBasePath}new/pl/kabotaz-de.pdf`,
    },
  },
  {
    title: {
      en: "Cabotage insurance UE",
      de: "Cabotage insurance UE",
      pl: "Ubezpieczenie kabotażowe UE",
    },
    image: {
      url: {
        en: `${imageBasePath}kabotaz-ue.jpg`,
        de: `${imageBasePath}kabotaz-ue.jpg`,
        pl: `${imageBasePath}kabotaz-ue.jpg`,
      },
      alt: "KRS",
      width: 789,
      height: 931,
    },
    link: {
      en: `${docBasePath}new/en/kabotaz-ue.pdf`,
      de: `${docBasePath}new/en/kabotaz-ue.pdf`,
      pl: `${docBasePath}new/pl/kabotaz-ue.pdf`,
    },
    //new
  },
];

export { documentsConfig };
