// sanity/schemaTypes/productType.ts
import { DocumentTextIcon } from "@sanity/icons";
import { defineType, defineField, defineArrayMember } from "sanity";

export const productType = defineType({
  name: "product",
  title: "Product",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    }),
    defineField({
      name: "productId",
      title: "Product ID",
      type: "string",
    }),
    defineField({
      name: "size",
      title: "Size",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "Price (₦)",
      type: "number",
    }),
    defineField({
      name: "availableColors",
      title: "Available Colors",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "colorName",
              title: "Color Name",
              type: "string",
            }),

            defineField({
              name: "colorCode",
              title: "Color Code",
              type: "string",
            }),
            defineField({
              name: "colorImage",
              title: "Color Image",
              type: "image",
              options: { hotspot: true },
              fields: [
                defineField({
                  name: "alt",
                  title: "Alternative text",
                  type: "string",
                }),
              ],
            }),
          ],
          preview: {
            select: {
              title: "colorName",
              media: "colorImage",
            },
          },
        }),
      ],
    }),
    defineField({
      name: "otherImages",
      title: "Other Images",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alternative text",
              type: "string",
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "blockContent",
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      // Optionally, add a validation rule to limit the number of tags:
      validation: (Rule) => Rule.max(10),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "size",
      media: `availableColors.[0].colorImage`,
    },
  },
});
