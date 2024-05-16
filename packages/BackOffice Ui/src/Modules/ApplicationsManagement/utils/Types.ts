
export interface Features {
  id:       number;
  name:     string;
  audience: string;
  features: Feature[];
}

export interface Feature {
  id:         number;
  name:       string;
  moduleId:   number;
  moduleName: string;
  exclusive:  boolean;
}
