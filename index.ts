import { Feature, FeatureCollection } from "geojson";

export type Coordinates = {
  latitude: number;
  longitude: number;
};

export type LocationFeature = Feature & {
  id: string;
  properties: {
    name?: string;
    type?: string;
    description?: string;
    address?: string;
    city?: string;
    state?: {
      name: string;
      abbreviation: string;
    };
    postalCode?: string;
    country?: {
      name: string;
      countryCode: string;
    };
    coordinates?: {
      longitude: number;
      latitude: number;
    };
    images?: LocationImage[];
    tags?: string[];
    displayOnSite?: boolean;
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

type MapboxContextBase = {
  id: string;
  name: string;
};

type MapboxContext = {
  country?: MapboxContextBase & {
    country_code: string;
    country_code_alpha_3: string;
  };
  region?: MapboxContextBase & {
    region_code: string;
    region_code_full: string;
  };
  postcode?: MapboxContextBase;
  district?: MapboxContextBase;
  place?: MapboxContextBase;
  locality?: MapboxContextBase;
  neighborhood?: MapboxContextBase;
  address?: MapboxContextBase & {
    address_number: string;
    street_name: string;
  };
  street?: MapboxContextBase;
};

export type MapboxSuggestion = {
  name: string;
  name_preferred?: string;
  mapbox_id: string;
  feature_type: string;
  address?: string;
  full_address?: string;
  place_formatted: string;
  context: MapboxContext;
  language: string;
  maki?: string;
  poi_category?: string[];
  poi_category_ids?: string[];
};

export type MapSearchReply = {
  suggestions: MapboxSuggestion[];
  sessionToken: string;
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
