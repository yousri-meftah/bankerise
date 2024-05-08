export interface ApplicationDto {
  id: number;
  name: string;
  audience: string;
  oauthClientId: string;
  helpText: string;
  type: "REGULAR_APPLICATION" | "GATEWAY_APPLICATION";
  attributes: [attribute];
}
export interface ApplicationListResponse {
  applications: [ApplicationDto];
}

export interface attribute {
    name:              string;
    value:             string;
    scopeId:           string;
    scope:             string;
    evaluationScope:   EvaluationScope;
    evaluationScopeId: string;
}

export interface EvaluationScope {
}


export interface TopLevel {
    content:          Content[];
    pageable:         Pageable;
    last:             boolean;
    totalElements:    number;
    totalPages:       number;
    size:             number;
    number:           number;
    sort:             Sort;
    first:            boolean;
    numberOfElements: number;
    empty:            boolean;
}

export interface Content {
    id:                     number;
    user:                   User;
    devices:                [];
    role:                   Role;
    active:                 boolean;
    segmentAssignmentLevel: string;
}

export interface Role {
    id:                  number;
    name:                string;
    applicationId:       number;
    applicationAudience: string;
    applicationName:     string;
    features:            [];
    composedPermissions: [];
}

export interface User {
    id:             number;
    name:           string;
    firstName:      string;
    lastName:       string;
    email:          string;
    phoneNumber:    string;
    audience:       string;
    keycloakId:     string;
    createdDate:    number;
    gender:         string;
    country:        string;
    city:           string;
    address:        string;
    homePhone:      string;
    identityNumber: string;
}

export interface Pageable {
    pageNumber: number;
    pageSize:   number;
    sort:       Sort;
    offset:     number;
    paged:      boolean;
    unpaged:    boolean;
}

export interface Sort {
    empty:    boolean;
    sorted:   boolean;
    unsorted: boolean;
}

export interface TopLevel {
    id:            number;
    name:          string;
    audience:      string;
    oauthClientId: string;
    type:          string;
    attributes:    [];
}

export interface TopLevel {
    "@class":      string;
    id:            number;
    name:          string;
    helpText:      string;
    dataType:      string;
    lookupValue?:  string;
    valueRanges:   string[];
    defaultValues: [];
    defaultValue:  string;
    paramValue:    string;
}
