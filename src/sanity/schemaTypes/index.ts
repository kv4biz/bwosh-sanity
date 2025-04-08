import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { postType } from "./postType";
import { projectType } from "./projectType";
import { productType } from "./productType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, postType, projectType, productType],
};
