//sanity/schemaTypes/index.ts
import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { postType } from "./postType";
import { projectType } from "./projectType";
import { productType } from "./productType";
import { partnerType } from "./partnerType";
import { teamMemberType } from "./teamMemberType";
import { reviewType } from "./reviewType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, postType, projectType, productType, partnerType, teamMemberType, reviewType],
};
