import { defineField, defineType } from "sanity";

export const galleryImageType = defineType({
  name: "galleryImage",
  title: "Zdjęcie w Galerii",
  type: "object",
  fields: [
    defineField({
      name: "image",
      title: "Zdjęcie",
      type: "image",
      options: {
        hotspot: false,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "alt",
      title: "Tekst alternatywny (dla SEO)",
      type: "string",
      description: "Ważne dla dostępności i SEO (image alt). Opisz krótko, co widać na zdjęciu.",
      initialValue: "Zdjęcie z galerii Orion Express",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "ytLink",
      title: "Link do YouTube (opcjonalnie)",
      type: "url",
      description: "Jeśli to zdjęcie ma być podlinkowane do filmu na YouTube, wklej tutaj link.",
    }),
  ],
});
