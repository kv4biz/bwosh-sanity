// src/sanity/lib/fetchers/postFetchers.ts

import { client } from "../client";
import {
  getAllPostsAscQuery,
  getAllPostsDescQuery,
  getMainPostsQuery,
} from "../queries/postQueries";

export const fetchAllPostsAsc = async () => {
  return await client.fetch(getAllPostsAscQuery);
};

export const fetchAllPostsDesc = async () => {
  return await client.fetch(getAllPostsDescQuery);
};

export const fetchMainPosts = async () => {
  return await client.fetch(getMainPostsQuery);
};
