import { Feature, FeatureCollection } from "geojson";

export interface LocationFeature extends Feature {
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
  };
}

export interface LocationFeatureCollection extends FeatureCollection {
  features: LocationFeature[];
}

export interface LocationImage {
  originalFilename: string;
  filename: string;
  description?: string;
}
