// src/sanity/lib/queries/postQueries.ts

const commonPostFields = `
  _id,
  title,
  "slug": slug.current,
  author,
  mainImage{
    asset->{
      _id,
      url
    },
    alt
  },
  publishedAt,
  main,
  description
`;

export const getAllPostsAscQuery = `*[_type == "post"]{
  ${commonPostFields}
} | order(publishedAt asc)`;

export const getAllPostsDescQuery = `*[_type == "post"]{
  ${commonPostFields}
} | order(publishedAt desc)`;

export const getMainPostsQuery = `*[_type == "post" && main == true]{
  ${commonPostFields}
}`;
