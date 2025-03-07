import { Locale } from "@customTypes/pages";

type BlogItem = {
  title: {
    [key in Locale]: string;
  };
  subtitle: {
    [key in Locale]: string | null;
  };
  images: Array<{
    url: string;
    alt: string;
  }>;
};

const imageBasePath = "/assets/images/gallery/";

const blogConfig: BlogItem[] = [
  {
    title: {
      en: "Daily life",
      de: "Alltag",
      pl: "Życie",
    },
    subtitle: {
      en: null,
      de: null,
      pl: "codzienne",
    },
    images: [
      {
        url: `${imageBasePath}zycie-codzienne/12.jpg`,
        alt: "gallery blog 1 image 12",
      },
      {
        url: `${imageBasePath}zycie-codzienne/11.jpg`,
        alt: "gallery blog 1 image 11",
      },
      {
        url: `${imageBasePath}zycie-codzienne/10.jpg`,
        alt: "gallery blog 1 image 10",
      },
      {
        url: `${imageBasePath}zycie-codzienne/1.jpg`,
        alt: "gallery blog 1 image 1",
      },
      {
        url: `${imageBasePath}zycie-codzienne/2.jpg`,
        alt: "gallery blog 1 image 2",
      },
      {
        url: `${imageBasePath}zycie-codzienne/3.jpg`,
        alt: "gallery blog 1 image 3",
      },
      {
        url: `${imageBasePath}zycie-codzienne/4.jpg`,
        alt: "gallery blog 1 image 4",
      },
      {
        url: `${imageBasePath}zycie-codzienne/5.jpg`,
        alt: "gallery blog 1 image 5",
      },
      {
        url: `${imageBasePath}zycie-codzienne/6.jpg`,
        alt: "gallery blog 1 image 6",
      },
      {
        url: `${imageBasePath}zycie-codzienne/7.jpg`,
        alt: "gallery blog 1 image 7",
      },
      {
        url: `${imageBasePath}zycie-codzienne/8.jpg`,
        alt: "gallery blog 1 image 8",
      },
      {
        url: `${imageBasePath}zycie-codzienne/9.jpg`,
        alt: "gallery blog 1 image 9",
      },
    ],
  },
];

export { blogConfig };
export type { BlogItem };
