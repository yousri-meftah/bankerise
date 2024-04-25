export const GlobalParams = [
    { name: "otp_challenge_template", helpText: "The one time password challenge template to use, should be available in the message center", value: "OTP message" },
    { name: "email_verification_template", helpText: "The email verification template to use, should be available in the message center", value: "3" },
    { name: "password_reset_template", helpText: "The password reset template to use, should be available in the message center", value: "2" },
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