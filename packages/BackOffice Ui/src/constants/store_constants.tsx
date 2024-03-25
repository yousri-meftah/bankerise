export const application_controlle = {
    name: "api",
    API_URL: "http://platform-backend-api.dev.proxym-it.tn/bankerise-platform/configuration/applications",
    header: {
        X_APP_ID: "X-APP-ID",
        X_Device_Id: "X-Device-Id",
        CHANNEL : "CHANNEL"

    }
}
export const application_controlle_endpoints = {
    ConfigApplication: '/',
    Features: "/features",
    ComposedPermissions: "/composed-permissions",
    RegistrationMapping : "/registration-mapping"
}