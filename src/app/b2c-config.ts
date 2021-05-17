
/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
 export const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1_susi_v1",
        editProfile: "B2C_1_edit_profile_v1",
        passwordReset: "B2C_1_password_reset_v1"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://wahaniyab2c.b2clogin.com/wahaniyab2c.onmicrosoft.com/B2C_1_susi_v1",
        },
        editProfile: {
            authority: "https://wahaniyab2c.b2clogin.com/wahaniyab2c.onmicrosoft.com/B2C_1_edit_profile_v1",
        },
        passwordReset: {
            authority: "https://wahaniyab2c.b2clogin.com/wahaniyab2c.onmicrosoft.com/B2C_1_password_reset_v1" 
        }
    },
    authorityDomain: "wahaniyab2c.b2clogin.com"
}

/**
 * Enter here the coordinates of your web API and scopes for access token request
 * The current application coordinates were pre-registered in a B2C tenant.
 */
export const apiConfig: { scopes: string[]; uri: string } = {
    scopes: ['https://wahaniyab2c.onmicrosoft.com/api/Hello.Read'],
    uri: 'https://fabrikamb2chello.azurewebsites.net/hello'
};
