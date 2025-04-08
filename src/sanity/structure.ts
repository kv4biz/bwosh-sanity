import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Admin")
    .items([
      S.documentTypeListItem("post").title("Blog Posts"),
      S.documentTypeListItem("project").title("Projects"),
      S.documentTypeListItem("product").title("Products"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !["post", "project", "product"].includes(item.getId()!)
      ),
    ]);
