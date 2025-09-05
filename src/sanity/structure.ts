//sanity/structure.ts
import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Admin")
    .items([
      S.documentTypeListItem("post").title("Blog Posts"),
      S.documentTypeListItem("project").title("Projects"),
      S.documentTypeListItem("product").title("Products"),
      S.documentTypeListItem("partner").title("Partners"),
      S.documentTypeListItem("review").title("Reviews"),
      S.divider(),
      S.documentTypeListItem("teamMember").title("Team Members"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !["post", "project", "product", "partner", "review", "teamMember"].includes(item.getId()!)
      ),
    ]);
