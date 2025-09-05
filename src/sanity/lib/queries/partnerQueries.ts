// src/sanity/lib/queries/partnerQueries.ts
export const getAllPartnersQuery = `*[_type == "partner"]{
  _id,
  name,
  "slug": slug.current,
  logo {
    asset->{
      _id,
      url
    },
    alt
  }
} | order(_createdAt asc)`;
