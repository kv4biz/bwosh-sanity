// src/sanity/lib/fetchers/productFetchers.ts

import { client } from "../client";
import { getAllProductsQuery } from "../queries/productQueries";

export const fetchAllProducts = async () => {
  return await client.fetch(getAllProductsQuery);
};
