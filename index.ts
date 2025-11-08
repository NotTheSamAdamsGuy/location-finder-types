import { Feature, FeatureCollection } from "geojson";

export type Coordinates = {
  latitude: number;
  longitude: number;
};

export type LocationFeature = Feature & {
  id: string;
  properties: {
    name: string;
    description: string;
    address: string;
    city: string;
    state: {
      name: string;
      abbreviation: string;
    };
    postalCode: string;
    country: {
      name: string;
      countryCode: string;
    };
    coordinates: {
      longitude: number;
      latitude: number;
    };
    images?: LocationImage[];
    tags?: string[];
    displayOnSite: boolean;
  };
};

export type LocationFeatureCollection = FeatureCollection & {
  features: LocationFeature[];
};

export type LocationImage = {
  originalFilename: string;
  filename: string;
  description?: string;
};

export type UserProfile = {
  username: string;
  firstName: string;
  lastName: string;
  role: "USER" | "ADMIN";
};

export type User = UserProfile & {
  password: string | null;
  lastLoginTimestamp: number;
};
