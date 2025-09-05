// sanity/schemaTypes/reviewType.ts
import { defineType, defineField } from "sanity";
import { StarIcon } from "@sanity/icons";

export const reviewType = defineType({
  name: "review",
  title: "Review",
  type: "document",
  icon: StarIcon,
  fields: [
    defineField({
      name: "name",
      title: "Client/Company Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
    }),
    defineField({
      name: "desc",
      title: "Review Content",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "role",
    },
  },
});
