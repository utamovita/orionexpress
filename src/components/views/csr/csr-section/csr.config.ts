import { GalleryImage } from "@sanity/lib/queries";

type CsrConfig = {
  title: string;
  images: GalleryImage[];
};

const basePath = "/assets/images/csr";

const csrConfig: CsrConfig[] = [
  {
    title: "Rutka",
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
    title: "Mecz hala",
    images: [
      {
        imageUrl: `${basePath}/mecz-hala/1.jpg`,
        alt: "mecz-hala",
      },
      {
        imageUrl: `${basePath}/mecz-hala/2.jpg`,
        alt: "mecz-hala",
      },
    ],
  },
  {
    title: "Patria Buk",
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
    title: "Namiot",
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
    title: "Bizon",
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
