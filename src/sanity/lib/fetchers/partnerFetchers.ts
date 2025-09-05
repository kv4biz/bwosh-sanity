// src/sanity/lib/fetchers/partnerFetchers.ts
import { client } from "../client";
import { getAllPartnersQuery } from "../queries/partnerQueries";

export const fetchAllPartners = () => client.fetch(getAllPartnersQuery);
