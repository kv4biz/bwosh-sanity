// src/sanity/lib/fetchers/teamFetchers.ts
import { client } from "../client";
import { getAllTeamMembersQuery } from "../queries/teamQueries";

export const fetchAllTeamMembers = () => client.fetch(getAllTeamMembersQuery);
