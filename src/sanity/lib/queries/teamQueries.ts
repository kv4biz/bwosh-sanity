// src/sanity/lib/queries/teamQueries.ts
export const getAllTeamMembersQuery = `*[_type == "teamMember"]{
  _id,
  name,
  role,
  image {
    asset->{
      _id,
      url
    },
    alt
  }
} | order(_createdAt asc)`;
