export interface global_reponse {
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
