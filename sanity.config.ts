"use client";
/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\admin\[[...tool]]\page.tsx` route
 */
// import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { simplerColorInput } from "sanity-plugin-simpler-color-input";
import { structureTool } from "sanity/structure";
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { dataset, projectId } from "./src/sanity/env";
//import { apiVersion } from "./src/sanity/env";
import { schema } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";
import AdminNavbar from "@/components/ui/admin-navbar";

export default defineConfig({
  basePath: "/admin",
  title: "Bwosh",
  studio: {
    components: {
      navbar: AdminNavbar,
    },
  },
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    simplerColorInput({
      // Note: These are all optional
      defaultColorFormat: "rgba",
      defaultColorList: [
        { label: "Light", value: "#ffffff" },
        { label: "Dark", value: "#333333" },
        { label: "Brand", value: "#ca786d" },
        { label: "Accent", value: "#626754" },
        { label: "Custom...", value: "custom" },
      ],
      enableSearch: true,
    }),
    structureTool({ structure }),

    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    // visionTool({ defaultApiVersion: apiVersion }),
  ],
});
