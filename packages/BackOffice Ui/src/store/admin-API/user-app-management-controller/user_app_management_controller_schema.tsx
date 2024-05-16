export interface ApplicationUser_query {
    pageable: string;
    metaData: string;
    preferredLanguage: {
            language: string;
            script: string;
            variant: string;
            country: string;
            displayLanguage: string;
            displayScript: string;
            displayCountry: string;
            displayVariant: string;
            iso3Language: string;
            iso3Country: string;
            extensionKeys: [string]
            unicodeLocaleKeys: [string]
            unicodeLocaleAttributes : [string]
        };
    role: string;
    segmentAssignmentId: number;
    segmentAssignmentLevel: "SEGMENT" | "NONE"| "SUB_SEGMENT";
    segmentId: number;
    active: boolean;
    id: number;
    user: string;
    blockingReason : string
}

export interface user_response {
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

export interface TopLevel_foruser {
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
    id:          number;
    name:        string;
    firstName:   string;
    lastName:    string;
    email:       string;
    phoneNumber: string;
    audience:    string;
    keycloakId:  string;
    createdDate: number;
}

