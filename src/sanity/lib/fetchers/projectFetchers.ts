// src/sanity/lib/fetchers/projectFetchers.ts
import { client } from "../client";
import {
  getAllProjectsQuery,
  getResidentialProjectsQuery,
  getOfficeProjectsQuery,
  getKitchenProjectsQuery,
  getHospitalityProjectsQuery,
} from "../queries/projectQueries";

export const fetchAllProjects = () => client.fetch(getAllProjectsQuery);
export const fetchResidentialProjects = () => client.fetch(getResidentialProjectsQuery);
export const fetchOfficeProjects = () => client.fetch(getOfficeProjectsQuery);
export const fetchKitchenProjects = () => client.fetch(getKitchenProjectsQuery);
export const fetchHospitalityProjects = () => client.fetch(getHospitalityProjectsQuery);
