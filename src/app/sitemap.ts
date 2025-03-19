import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://orionexpress.pl",
      lastModified: new Date(),
      alternates: {
        languages: {
          en: "https://orionexpress.pl/en",
          de: "https://orionexpress.pl/de",
        },
      },
    },
    {
      url: "https://orionexpress.pl/o-nas",
      lastModified: new Date(),
      alternates: {
        languages: {
          en: "https://orionexpress.pl/en/about-us",
          de: "https://orionexpress.pl/de/uber-uns",
        },
      },
    },
    {
      url: "https://orionexpress.pl/galeria",
      lastModified: new Date(),
      alternates: {
        languages: {
          en: "https://orionexpress.pl/en/gallery",
          de: "https://orionexpress.pl/de/galerie",
        },
      },
    },
    {
      url: "https://orionexpress.pl/kariera",
      lastModified: new Date(),
      alternates: {
        languages: {
          en: "https://orionexpress.pl/en/career",
          de: "https://orionexpress.pl/de/karriere",
        },
      },
    },
    {
      url: "https://orionexpress.pl/dokumenty",
      lastModified: new Date(),
      alternates: {
        languages: {
          en: "https://orionexpress.pl/en/documents",
          de: "https://orionexpress.pl/de/unterlagen",
        },
      },
    },
    {
      url: "https://orionexpress.pl/kontakt",
      lastModified: new Date(),
      alternates: {
        languages: {
          en: "https://orionexpress.pl/en/contact",
          de: "https://orionexpress.pl/de/kontakt",
        },
      },
    },  {
      url: "https://orionexpress.pl/csr",
      lastModified: new Date(),
      alternates: {
        languages: {
          en: "https://orionexpress.pl/en/csr",
          de: "https://orionexpress.pl/de/csr",
        },
      },
    },
  ];
}
