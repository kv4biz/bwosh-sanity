// sanity/schemaTypes/teamMemberType.ts
import { defineType, defineField } from "sanity";
import { UserIcon } from "@sanity/icons";

export const teamMemberType = defineType({
  name: "teamMember",
  title: "Team Member",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role/Position",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "role",
      media: "image",
    },
  },
});
