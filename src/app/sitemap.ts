import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://grandtransportlogistics.pl",
      lastModified: new Date(),
      alternates: {
        languages: {
          en: "https://grandtransportlogistics.pl/en",
          de: "https://grandtransportlogistics.pl/de",
        },
      },
    },
    {
      url: "https://grandtransportlogistics.pl/o-nas",
      lastModified: new Date(),
      alternates: {
        languages: {
          en: "https://grandtransportlogistics.pl/en/about-us",
          de: "https://grandtransportlogistics.pl/de/uber-uns",
        },
      },
    },
    {
      url: "https://grandtransportlogistics.pl/galeria",
      lastModified: new Date(),
      alternates: {
        languages: {
          en: "https://grandtransportlogistics.pl/en/gallery",
          de: "https://grandtransportlogistics.pl/de/galerie",
        },
      },
    },
    {
      url: "https://grandtransportlogistics.pl/kariera",
      lastModified: new Date(),
      alternates: {
        languages: {
          en: "https://grandtransportlogistics.pl/en/career",
          de: "https://grandtransportlogistics.pl/de/karriere",
        },
      },
    },
    {
      url: "https://grandtransportlogistics.pl/dokumenty",
      lastModified: new Date(),
      alternates: {
        languages: {
          en: "https://grandtransportlogistics.pl/en/documents",
          de: "https://grandtransportlogistics.pl/de/unterlagen",
        },
      },
    },
    {
      url: "https://grandtransportlogistics.pl/kontakt",
      lastModified: new Date(),
      alternates: {
        languages: {
          en: "https://grandtransportlogistics.pl/en/contact",
          de: "https://grandtransportlogistics.pl/de/kontakt",
        },
      },
    },
  ];
}
