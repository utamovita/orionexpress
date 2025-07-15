// src/sanity/schemaTypes/branch.ts
import { defineField, defineType } from "sanity";

export const branchType = defineType({
  name: "branch",
  title: "Oddział",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Nazwa Oddziału (wielojęzyczna)",
      type: "object",
      fields: [
        { name: "pl", type: "string", title: "Polska" },
        { name: "en", type: "string", title: "Angielska" },
        { name: "de", type: "string", title: "Niemiecka" },
      ],
    }),
    defineField({
      name: "slug",
      title: "Link do oddziału (slug)",
      type: "slug",
      options: {
        source: "title.pl",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "img",
      title: "Zdjęcie oddziału",
      type: "image",
    }),
    defineField({
      name: "address",
      title: "Adres",
      type: "string",
    }),
    defineField({
      name: "team",
      title: "Zespół",
      type: "array",
      of: [{ type: "teamMember" }],
    }),
  ],
});
