import { GalleryImage } from "@sanity/lib/queries";

type CsrConfig = {
  title: {
    en: string;
    pl: string;
    de: string;
  };
  description: {
    en: string;
    pl: string;
    de: string;
  };
  images: GalleryImage[];
};

const basePath = "/assets/images/csr";

const csrConfig: CsrConfig[] = [
  {
    title: {
      en: "Rutka EN",
      pl: "Rutka PL",
      de: "Rutka DE",
    },
    description: {
      en: "EN Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      pl: "PL Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      de: "DE Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    images: [
      {
        imageUrl: `${basePath}/rutka/1.jpg`,
        alt: "rutka",
      },
      {
        imageUrl: `${basePath}/rutka/2.jpg`,
        alt: "rutka",
      },
      {
        imageUrl: `${basePath}/rutka/3.jpg`,
        alt: "rutka",
      },
    ],
  },
  {
    title: {
      en: "Rutka EN",
      pl: "Rutka PL",
      de: "Rutka DE",
    },
    description: {
      en: "EN Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      pl: "PL Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      de: "DE Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    images: [
      {
        imageUrl: `${basePath}/mecz-hala/1.jpg`,
        alt: "mecz-hala",
      },
      {
        imageUrl: `${basePath}/mecz-hala/2.jpg`,
        alt: "mecz-hala",
      },
      {
        imageUrl: `${basePath}/mecz-hala/2.jpg`,
        alt: "mecz-hala",
      },
    ],
  },
  {
    title: {
      en: "Rutka EN",
      pl: "Rutka PL",
      de: "Rutka DE",
    },
    description: {
      en: "EN Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      pl: "PL Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      de: "DE Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    images: [
      {
        imageUrl: `${basePath}/patria-buk/1.jpg`,
        alt: "patria-buk",
      },
      {
        imageUrl: `${basePath}/patria-buk/2.jpg`,
        alt: "patria-buk",
      },
      {
        imageUrl: `${basePath}/patria-buk/3.jpg`,
        alt: "patria-buk",
      },
      {
        imageUrl: `${basePath}/patria-buk/4.jpg`,
        alt: "patria-buk",
      },
      {
        imageUrl: `${basePath}/patria-buk/5.jpg`,
        alt: "patria-buk",
      },
      {
        imageUrl: `${basePath}/patria-buk/6.jpg`,
        alt: "patria-buk",
      },
      {
        imageUrl: `${basePath}/patria-buk/7.jpg`,
        alt: "patria-buk",
      },
    ],
  },
  {
    title: {
      en: "Rutka EN",
      pl: "Rutka PL",
      de: "Rutka DE",
    },
    description: {
      en: "EN Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      pl: "PL Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      de: "DE Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    images: [
      {
        imageUrl: `${basePath}/namiot/namiot-1.jpg`,
        alt: "orion namiot",
      },
      {
        imageUrl: `${basePath}/namiot/namiot-2.jpg`,
        alt: "orion namiot",
      },
      {
        imageUrl: `${basePath}/namiot/namiot-3.jpg`,
        alt: "orion namiot",
      },
      {
        imageUrl: `${basePath}/namiot/namiot-4.jpg`,
        alt: "orion namiot",
      },
    ],
  },
  {
    title: {
      en: "Rutka EN",
      pl: "Rutka PL",
      de: "Rutka DE",
    },
    description: {
      en: "EN Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      pl: "PL Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      de: "DE Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    images: [
      {
        imageUrl: `${basePath}/bizon/bizon-1.jpg`,
        alt: "orion csr",
      },
      {
        imageUrl: `${basePath}/bizon/bizon-2.jpg`,
        alt: "orion csr",
      },
      {
        imageUrl: `${basePath}/bizon/bizon-3.jpg`,
        alt: "orion csr",
      },
      {
        imageUrl: `${basePath}/bizon/bizon-4.jpg`,
        alt: "orion csr",
      },
    ],
  },
];

export { csrConfig };
export type { CsrConfig };
