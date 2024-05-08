export const GlobalParams = [
    {
        name: "otp_challenge_template", helpText: "The one time password challenge template to use, should be available in the message center", value: {
           value : "OTP message" , type: "text", flag: true
        }
    },
    { name: "email_verification_template", helpText: "The email verification template to use, should be available in the message center", value: {
           value : "3" , type: "number", flag: true
        }},
    { name: "password_reset_template", helpText: "The password reset template to use, should be available in the message center", value: {
           value : "6" , type: "date", flag: true
        }},
    // Add more entries as needed
];
export const Dictionary = [
    { code: 3, content: "EN: Could not persist this data, please check your request", category: "Exceptions" },
    { code: 4, content: "EN: Requested data not found", category: "Exceptions" },
    { code: 5, content: "EN: Invalid input data, please check your request", category: "Validation" },
    { code: 6, content: "EN: Internal server error, please try again later", category: "Exceptions" },
    { code: 7, content: "EN: Unauthorized access, please log in", category: "Security" },
    // Add more entries as needed
];