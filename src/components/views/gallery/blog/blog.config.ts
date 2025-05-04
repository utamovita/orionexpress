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
    ytLink?: string;
  }>;
};

const imageBasePath = "/assets/images/gallery/";

const blogConfig: BlogItem[] = [
  {
    title: {
      en: "Daily life",
      de: "Alltag",
      pl: "Życie codzienne",
    },
    subtitle: {
      en: null,
      de: null,
      pl: null,
    },
    images: [
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
      {
        url: `${imageBasePath}zycie-codzienne/10.jpg`,
        alt: "gallery blog 1 image 10",
      },
      {
        url: `${imageBasePath}zycie-codzienne/11.jpg`,
        alt: "gallery blog 1 image 11",
      },
      {
        url: `${imageBasePath}zycie-codzienne/12.jpg`,
        alt: "gallery blog 1 image 12",
      },
      {
        url: `${imageBasePath}zycie-codzienne/13.jpg`,
        alt: "gallery blog 1 image 13",
      },
    ],
  },
  {
    title: {
      en: "Integrations",
      de: "Integrationen",
      pl: "Integracje",
    },
    subtitle: {
      en: "April 2024",
      de: "April 2024",
      pl: "Kwiecień 2024",
    },
    images: Array.from({ length: 8 }, (_, i) => ({
      url: `${imageBasePath}kwiecien-24/${i + 1}.jpg`,
      alt: `Integrations April 2024 photo ${i + 1}`,
    })),
  },
  {
    title: {
      en: "Integrations",
      de: "Integrationen",
      pl: "Integracje",
    },
    subtitle: {
      en: "December 2023",
      de: "Dezember 2023",
      pl: "Grudzień 2023",
    },
    images: [
      {
        url: `${imageBasePath}grudzien-23/1.jpg`,
        alt: "Integrations December 2023 photo 1",
      },
      {
        url: `${imageBasePath}grudzien-23/2.jpg`,
        alt: "Integrations December 2023 photo 2",
        ytLink: "https://www.youtube.com/watch?v=SBLa3Q_4qS8",
      },
      {
        url: `${imageBasePath}grudzien-23/3.jpg`,
        alt: "Integrations December 2023 photo 3",
        ytLink: "https://www.youtube.com/watch?v=alroEc_K0c4",
      },
      {
        url: `${imageBasePath}grudzien-23/4.jpg`,
        alt: "Integrations December 2023 photo 4",
        ytLink: "https://www.youtube.com/watch?v=Q2i_8hCGs6E",
      },
      {
        url: `${imageBasePath}grudzien-23/5.jpg`,
        alt: "Integrations December 2023 photo 5",
      },
      {
        url: `${imageBasePath}grudzien-23/6.jpg`,
        alt: "Integrations December 2023 photo 6",
      },
      {
        url: `${imageBasePath}grudzien-23/7.jpg`,
        alt: "Integrations December 2023 photo 7",
      },
      {
        url: `${imageBasePath}grudzien-23/8.jpg`,
        alt: "Integrations December 2023 photo 8",
      },
    ],
  },
  {
    title: {
      en: "Integrations",
      de: "Integrationen",
      pl: "Integracje",
    },
    subtitle: {
      en: "September 2023",
      de: "September 2023",
      pl: "Wrzesień 2023",
    },
    images: Array.from({ length: 12 }, (_, i) => ({
      url: `${imageBasePath}wrzesien-23/${i + 1}.jpg`,
      alt: `Integrations September 2023 photo ${i + 1}`,
    })),
  },
  {
    title: {
      en: "Integrations",
      de: "Integrationen",
      pl: "Integracje",
    },
    subtitle: {
      en: "October 2023",
      de: "Oktober 2023",
      pl: "Październik 2023",
    },
    images: Array.from({ length: 8 }, (_, i) => ({
      url: `${imageBasePath}pazdziernik-23/${i + 1}.jpg`,
      alt: `Integrations October 2023 photo ${i + 1}`,
    })),
  },
  {
    title: {
      en: "Integrations",
      de: "Integrationen",
      pl: "Integracje",
    },
    subtitle: {
      en: "June 2023",
      de: "Juni 2023",
      pl: "Czerwiec 2023",
    },
    images: Array.from({ length: 14 }, (_, i) => ({
      url: `${imageBasePath}czerwiec-23/${i + 1}.jpg`,
      alt: `Integrations June 2023 photo ${i + 1}`,
    })),
  },
  {
    title: {
      en: "Integrations",
      de: "Integrationen",
      pl: "Integracje",
    },
    subtitle: {
      en: "December 2022",
      de: "Dezember 2022",
      pl: "Grudzień 2022",
    },
    images: Array.from({ length: 6 }, (_, i) => ({
      url: `${imageBasePath}grudzien-22/${i + 1}.jpg`,
      alt: `Integrations October 2023 photo ${i + 1}`,
    })),
  },
  {
    title: {
      en: "Integrations",
      de: "Integrationen",
      pl: "Integracje",
    },
    subtitle: {
      en: "June 2022",
      de: "Juni 2022",
      pl: "Czerwiec 2022",
    },
    images: Array.from({ length: 5 }, (_, i) => ({
      url: `${imageBasePath}czerwiec-22/${i + 1}.jpg`,
      alt: `Integrations June 2022 photo ${i + 1}`,
    })),
  },
  {
    title: {
      en: "Integrations",
      de: "Integrationen",
      pl: "Integracje",
    },
    subtitle: {
      en: "September 2022",
      de: "September 2022",
      pl: "Wrzesień 2022",
    },
    images: Array.from({ length: 5 }, (_, i) => ({
      url: `${imageBasePath}wrzesien-22/${i + 1}.jpg`,
      alt: `Integrations September 2022 photo ${i + 1}`,
    })),
  },
];

export { blogConfig };
export type { BlogItem };
