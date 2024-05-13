export const application_controlle = {
    name: "api",
    API_URL: "/",
    header: {
        X_APP_ID: "X-APP-ID",
        X_Device_Id: "X-Device-Id",
        CHANNEL : "CHANNEL"

    }
}
export const modules_controller = {
    name: "modules_controller_api",
    API_URL: "/",
    header: {
        X_APP_ID: "X-APP-ID",
        X_Device_Id: "X-Device-Id",
        CHANNEL : "CHANNEL"

    }
}
export const roles_controller = {
    name: "roles_controller_api",
    API_URL: "/",
    header: {
        X_APP_ID: "back-office",
        X_Device_Id: "",
        CHANNEL : "WEB"
    }
}
export const application_controlle_endpoints = {
    ConfigApplication: '/configuration/applications',
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
    global_param: '/configuration/global-param',

}

export const user_app_management_controller_endpoints = {
    ConfigApplication: '/bankerise-platform/configuration/application',
    Features: "/features",
    ComposedPermissions: "/composed-permissions",
    RegistrationMapping : "/registration-mapping"
}
export const modules_controller_endpoints = {
    getAllFeaturesbyId: '/bankerise-platform/configuration/modules/available-for-app',
}
