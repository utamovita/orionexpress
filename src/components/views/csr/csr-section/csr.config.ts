type CsrConfig = {
  title: string;
  images: Array<{
    url: string;
    alt: string;
  }>;
};

const basePath = "/assets/images/csr";

const csrConfig: CsrConfig[] = [
  {
    title: "Rutka",
    images: [
      {
        url: `${basePath}/rutka/1.jpg`,
        alt: "rutka",
      },
      {
        url: `${basePath}/rutka/2.jpg`,
        alt: "rutka",
      },
      {
        url: `${basePath}/rutka/3.jpg`,
        alt: "rutka",
      },
    ],
  },
  {
    title: "Mecz hala",
    images: [
      {
        url: `${basePath}/mecz-hala/1.jpg`,
        alt: "mecz-hala",
      },
      {
        url: `${basePath}/mecz-hala/2.jpg`,
        alt: "mecz-hala",
      },
    ],
  },
  {
    title: "Patria Buk",
    images: [
      {
        url: `${basePath}/patria-buk/1.jpg`,
        alt: "patria-buk",
      },
      {
        url: `${basePath}/patria-buk/2.jpg`,
        alt: "patria-buk",
      },
      {
        url: `${basePath}/patria-buk/3.jpg`,
        alt: "patria-buk",
      },
      {
        url: `${basePath}/patria-buk/4.jpg`,
        alt: "patria-buk",
      },
      {
        url: `${basePath}/patria-buk/5.jpg`,
        alt: "patria-buk",
      },
      {
        url: `${basePath}/patria-buk/6.jpg`,
        alt: "patria-buk",
      },
      {
        url: `${basePath}/patria-buk/7.jpg`,
        alt: "patria-buk",
      },
    ],
  },
];

export { csrConfig };
export type { CsrConfig };
