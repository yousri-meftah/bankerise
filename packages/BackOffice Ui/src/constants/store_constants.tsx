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
        X_APP_ID: "X-APP-ID",
        X_Device_Id: "X-Device-Id",
        CHANNEL : "CHANNEL"

    }
}
export const application_controlle_endpoints = {
    ConfigApplication: '/bankerise-platform/configuration/applications',
    Features: "bankerise-platform/configuration/applications/features",
    ComposedPermissions: "/composed-permissions",
    RegistrationMapping : "/registration-mapping"
}
export const modules_controller_endpoints = {
    getAllFeaturesbyId: '/bankerise-platform/configuration/modules/available-for-app',
}
