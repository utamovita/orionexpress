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
    images: [
      {
        url: `${imageBasePath}kwiecien-24/2v2.jpg`,
        alt: "gallery blog 1 image 2",
      },
      {
        url: `${imageBasePath}kwiecien-24/2v3.jpg`,
        alt: "gallery blog 1 image 3",
      },
      {
        url: `${imageBasePath}kwiecien-24/2v5.jpg`,
        alt: "gallery blog 1 image 5",
      },
      {
        url: `${imageBasePath}kwiecien-24/2v6.jpg`,
        alt: "gallery blog 1 image 6",
      },
      {
        url: `${imageBasePath}kwiecien-24/2v7.jpg`,
        alt: "gallery blog 1 image 7",
      },
      {
        url: `${imageBasePath}kwiecien-24/2v8.jpg`,
        alt: "gallery blog 1 image 8",
      },
      {
        url: `${imageBasePath}kwiecien-24/2v10.jpg`,
        alt: "gallery blog 1 image 10",
      },
      {
        url: `${imageBasePath}kwiecien-24/2v11.jpg`,
        alt: "gallery blog 1 image 11",
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
      en: "December 2023",
      de: "Dezember 2023",
      pl: "Grudzień 2023",
    },
    images: [
      {
        url: `${imageBasePath}grudzien-23/3v1.jpg`,
        alt: "gallery blog 3 image 1",
      },
      {
        url: `${imageBasePath}grudzien-23/3v2.jpg`,
        alt: "gallery blog 3 image 2",
      },
      {
        url: `${imageBasePath}grudzien-23/3v3.jpg`,
        alt: "gallery blog 3 image 3",
      },
      {
        url: `${imageBasePath}grudzien-23/3v4.jpg`,
        alt: "gallery blog 3 image 4",
      },
      {
        url: `${imageBasePath}grudzien-23/3v5.jpg`,
        alt: "gallery blog 3 image 5",
      },
      {
        url: `${imageBasePath}grudzien-23/3v6.jpg`,
        alt: "gallery blog 3 image 6",
      },
      {
        url: `${imageBasePath}grudzien-23/3v7.jpg`,
        alt: "gallery blog 3 image 7",
      },
      {
        url: `${imageBasePath}grudzien-23/3v8.jpg`,
        alt: "gallery blog 3 image 8",
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
    images: [
      {
        url: `${imageBasePath}wrzesien-23/4v1.jpg`,
        alt: "gallery blog 1 image 1",
      },
      {
        url: `${imageBasePath}wrzesien-23/4v2.jpg`,
        alt: "gallery blog 1 image 1",
      },
      {
        url: `${imageBasePath}wrzesien-23/4v3.jpg`,
        alt: "gallery blog 1 image 1",
      },
      {
        url: `${imageBasePath}wrzesien-23/4v4.jpg`,
        alt: "gallery blog 1 image 1",
      },
      {
        url: `${imageBasePath}wrzesien-23/4v5.jpg`,
        alt: "gallery blog 1 image 1",
      },
      {
        url: `${imageBasePath}wrzesien-23/4v6.jpg`,
        alt: "gallery blog 1 image 1",
      },
      {
        url: `${imageBasePath}wrzesien-23/4v7.jpg`,
        alt: "gallery blog 1 image 1",
      },
      {
        url: `${imageBasePath}wrzesien-23/4v8.jpg`,
        alt: "gallery blog 1 image 1",
      },
      {
        url: `${imageBasePath}wrzesien-23/4v9.jpg`,
        alt: "gallery blog 1 image 1",
      },
      {
        url: `${imageBasePath}wrzesien-23/4v10.jpg`,
        alt: "gallery blog 1 image 1",
      },
      {
        url: `${imageBasePath}wrzesien-23/4v11.jpeg`,
        alt: "gallery blog 1 image 1",
      },
      {
        url: `${imageBasePath}wrzesien-23/4v12.jpeg`,
        alt: "gallery blog 1 image 1",
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
      en: "October 2023",
      de: "Oktober 2023",
      pl: "Październik 2023",
    },
    images: [
      {
        url: `${imageBasePath}pazdziernik-23/5v1.jpeg`,
        alt: "gallery blog 1 image 1",
      },
      {
        url: `${imageBasePath}pazdziernik-23/5v2.jpeg`,
        alt: "gallery blog 1 image 1",
      },
      {
        url: `${imageBasePath}pazdziernik-23/5v3.jpeg`,
        alt: "gallery blog 1 image 1",
      },
      {
        url: `${imageBasePath}pazdziernik-23/5v4.jpeg`,
        alt: "gallery blog 1 image 1",
      },
      {
        url: `${imageBasePath}pazdziernik-23/5v5.jpeg`,
        alt: "gallery blog 1 image 1",
      },
      {
        url: `${imageBasePath}pazdziernik-23/5v6.jpeg`,
        alt: "gallery blog 1 image 1",
      },
      {
        url: `${imageBasePath}pazdziernik-23/5v7.jpeg`,
        alt: "gallery blog 1 image 1",
      },
      {
        url: `${imageBasePath}pazdziernik-23/5v8.jpeg`,
        alt: "gallery blog 1 image 1",
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
      en: "June 2023",
      de: "Juni 2023",
      pl: "Czerwiec 2023",
    },
    images: [
      {
        url: `${imageBasePath}czerwiec-23/6v1.jpg`,
        alt: "gallery blog 1 image 1",
      },
      {
        url: `${imageBasePath}czerwiec-23/6v2.jpeg`,
        alt: "gallery blog 1 image 1",
      },
      {
        url: `${imageBasePath}czerwiec-23/6v3.jpg`,
        alt: "gallery blog 1 image 1",
      },
      {
        url: `${imageBasePath}czerwiec-23/6v4.jpg`,
        alt: "gallery blog 1 image 1",
      },
      {
        url: `${imageBasePath}czerwiec-23/6v5.jpg`,
        alt: "gallery blog 1 image 1",
      },
      {
        url: `${imageBasePath}czerwiec-23/6v6.jpg`,
        alt: "gallery blog 1 image 1",
      },
      {
        url: `${imageBasePath}czerwiec-23/6v7.jpg`,
        alt: "gallery blog 1 image 1",
      },
      {
        url: `${imageBasePath}czerwiec-23/6v8.jpg`,
        alt: "gallery blog 1 image 1",
      },
      {
        url: `${imageBasePath}czerwiec-23/6v9.jpg`,
        alt: "gallery blog 1 image 1",
      },
      {
        url: `${imageBasePath}czerwiec-23/6v10.jpg`,
        alt: "gallery blog 1 image 1",
      },
      {
        url: `${imageBasePath}czerwiec-23/6v11.jpg`,
        alt: "gallery blog 1 image 1",
      },
      {
        url: `${imageBasePath}czerwiec-23/6v12.jpg`,
        alt: "gallery blog 1 image 1",
      },
      {
        url: `${imageBasePath}czerwiec-23/6v13.jpeg`,
        alt: "gallery blog 1 image 1",
      },
      {
        url: `${imageBasePath}czerwiec-23/6v14.jpeg`,
        alt: "gallery blog 1 image 1",
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
      en: "December 2022",
      de: "Dezember 2022",
      pl: "Grudzień 2022",
    },
    images: [
      {
        url: `${imageBasePath}grudzien-22/7v1.jpg`,
        alt: "gallery blog 1 image 1",
      },
      {
        url: `${imageBasePath}grudzien-22/7v2.jpg`,
        alt: "gallery blog 1 image 1",
      },
      {
        url: `${imageBasePath}grudzien-22/7v3.jpg`,
        alt: "gallery blog 1 image 1",
      },
      {
        url: `${imageBasePath}grudzien-22/7v4.jpg`,
        alt: "gallery blog 1 image 1",
      },
      {
        url: `${imageBasePath}grudzien-22/7v5.jpg`,
        alt: "gallery blog 1 image 1",
      },
      {
        url: `${imageBasePath}grudzien-22/7v6.jpg`,
        alt: "gallery blog 1 image 1",
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
      en: "June 2022",
      de: "Juni 2022",
      pl: "Czerwiec 2022",
    },
    images: [
      {
        url: `${imageBasePath}czerwiec-22/8v1.jpg`,
        alt: "gallery blog 1 image 1",
      },
      {
        url: `${imageBasePath}czerwiec-22/8v2.jpeg`,
        alt: "gallery blog 1 image 1",
      },
      {
        url: `${imageBasePath}czerwiec-22/8v4.jpeg`,
        alt: "gallery blog 1 image 1",
      },
      {
        url: `${imageBasePath}czerwiec-22/8v5.jpg`,
        alt: "gallery blog 1 image 1",
      },
      {
        url: `${imageBasePath}czerwiec-22/8v7.jpeg`,
        alt: "gallery blog 1 image 1",
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
      en: "September 2022",
      de: "September 2022",
      pl: "Wrzesień 2022",
    },
    images: [
      {
        url: `${imageBasePath}wrzesien-22/9v1.jpeg`,
        alt: "gallery blog 1 image 1",
      },
      {
        url: `${imageBasePath}wrzesien-22/9v2.jpeg`,
        alt: "gallery blog 1 image 1",
      },
      {
        url: `${imageBasePath}wrzesien-22/9v3.jpeg`,
        alt: "gallery blog 1 image 1",
      },
      {
        url: `${imageBasePath}wrzesien-22/9v4.jpeg`,
        alt: "gallery blog 1 image 1",
      },
      {
        url: `${imageBasePath}wrzesien-22/9v5.jpeg`,
        alt: "gallery blog 1 image 1",
      },
    ],
  },
];

export { blogConfig };
export type { BlogItem };
