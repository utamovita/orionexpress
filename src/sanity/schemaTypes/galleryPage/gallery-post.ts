import { defineField, defineType } from "sanity";

export const galleryPostType = defineType({
  name: "galleryPost",
  title: "Galeria - posty",
  type: "document",
  fields: [
    defineField({
      name: "isPinned",
      title: "Przypnij na górze listy",
      type: "boolean",
      description: "Zaznacz, jeśli ten post ma być zawsze pierwszy.",
      initialValue: false,
    }),
    defineField({
      name: "publicationDate",
      title: "Data publikacji",
      type: "date",
      options: {
        dateFormat: "YYYY-MM-DD",
      },
      initialValue: () => new Date().toISOString().split("T")[0],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Tytuł",
      type: "object",
      fields: [
        { name: "pl", title: "Polski", type: "string" },
        { name: "en", title: "Angielski", type: "string" },
        { name: "de", title: "Niemiecki", type: "string" },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Podtytuł",
      type: "object",
      fields: [
        { name: "pl", title: "Polski", type: "string" },
        { name: "en", title: "Angielski", type: "string" },
        { name: "de", title: "Niemiecki", type: "string" },
      ],
    }),
    defineField({
      name: "slug",
      title: "Link do posta (slug)",
      type: "slug",
      options: { source: "title.pl", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "images",
      title: "Zdjęcia",
      type: "array",
      of: [{ type: "galleryImage" }],
    }),
  ],
});