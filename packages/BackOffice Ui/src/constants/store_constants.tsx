export const application_controlle = {
    name: "application_controlle_api",
    //API_URL: "http://platform-backend-api.dev.proxym-it.tn/bankerise-platform/configuration/applications",
    //API_URL: "http://localhost:5173/bankerise-platform/configuration/applications",
    API_URL: "/",
    header: {
        X_APP_ID: "back-office",
        X_Device_Id: "",
        CHANNEL : "WEB"
    }
}
export const application_controlle_endpoints = {
    ConfigApplication: '/bankerise-platform/configuration/applications',
    Features: "/features",
    ComposedPermissions: "/composed-permissions",
    RegistrationMapping : "/registration-mapping"
}

export const user_app_management_controller = {
    name: "user_api",
    API_URL: "/",
    header: {
        X_APP_ID: "back-office",
        X_Device_Id: "",
        CHANNEL : "WEB"
    }
}
export const global_parameter_controlle = {
    name: "global_parameter_controller",
    API_URL: "/",
    header: {
        X_APP_ID: "back-office",
        X_Device_Id: "",
        CHANNEL : "WEB"
    }
}
export const global_parameter_controlle_endpoints = {
    global_param: '/bankerise-platform/configuration/global-param',

}

export const user_app_management_controller_endpoints = {
    ConfigApplication: '/bankerise-platform/configuration/application',
    Features: "/features",
    ComposedPermissions: "/composed-permissions",
    RegistrationMapping : "/registration-mapping"
}