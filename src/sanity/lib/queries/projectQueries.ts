// src/sanity/lib/queries/projectQueries.ts
const commonFields = `
  _id,
  title,
  location,
  category,
  description,
  images[]{
    asset->{
      _id,
      url
    },
    alt
  },
  "slug": slug.current
`;

export const getAllProjectsQuery = `*[_type == "project"]{
  ${commonFields}
} | order(_createdAt desc)`;

export const getResidentialProjectsQuery = `*[_type == "project" && category == "residential"]{
  ${commonFields}
} | order(_createdAt desc)`;

export const getOfficeProjectsQuery = `*[_type == "project" && category == "offices"]{
  ${commonFields}
} | order(_createdAt desc)`;

export const getKitchenProjectsQuery = `*[_type == "project" && category == "kitchens"]{
  ${commonFields}
} | order(_createdAt desc)`;

export const getHospitalityProjectsQuery = `*[_type == "project" && category == "hospitality"]{
  ${commonFields}
} | order(_createdAt desc)`;
