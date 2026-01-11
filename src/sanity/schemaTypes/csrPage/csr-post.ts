// src/sanity/schemaTypes/csrPage/csr-post.ts
import { defineField, defineType } from "sanity";

export const csrPostType = defineType({
  name: "csrPost",
  title: "CSR - Posty",
  type: "document",
  fields: [
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
      name: "description",
      title: "Opis",
      type: "object",
      fields: [
        { name: "pl", title: "Polski", type: "text" },
        { name: "en", title: "Angielski", type: "text" },
        { name: "de", title: "Niemiecki", type: "text" },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "images",
      title: "Zdjęcia",
      type: "array",
      of: [{ type: "galleryImage" }],
    }),
  ],
  preview: {
    select: {
      title: "title.pl",
      media: "images.0.image",
    },
    prepare({ title, media }) {
      return {
        title: title || "Nowy post CSR",
        media,
      };
    },
  },
});
