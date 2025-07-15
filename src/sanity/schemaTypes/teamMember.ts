// src/sanity/schemaTypes/teamMember.ts
import { defineField, defineType } from "sanity";

export const teamMemberType = defineType({
  name: "teamMember",
  title: "Członek Zespołu",
  type: "object",
  fields: [
    defineField({
      name: "name",
      title: "Imię i Nazwisko",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Stanowisko",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "phone",
      title: "Telefon",
      type: "string",
    }),
    defineField({
      name: "img1",
      title: "Zdjęcie 1",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "img2",
      title: "Zdjęcie 2",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
