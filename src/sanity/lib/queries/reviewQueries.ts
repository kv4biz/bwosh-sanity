// src/sanity/lib/queries/reviewQueries.ts
export const getAllReviewsQuery = `*[_type == "review"]{
  _id,
  name,
  role,
  desc,
} | order(_createdAt asc)`;
