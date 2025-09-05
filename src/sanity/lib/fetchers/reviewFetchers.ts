// src/sanity/lib/fetchers/reviewFetchers.ts
import { client } from "../client";
import { getAllReviewsQuery } from "../queries/reviewQueries";

export const fetchAllReviews = () => client.fetch(getAllReviewsQuery);
