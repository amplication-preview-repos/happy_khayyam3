import { Turf as TTurf } from "../api/turf/Turf";

export const TURF_TITLE_FIELD = "name";

export const TurfTitle = (record: TTurf): string => {
  return record.name?.toString() || String(record.id);
};
