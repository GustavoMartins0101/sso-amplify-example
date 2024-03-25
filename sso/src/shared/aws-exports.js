export const amplifyConfig = {
  Auth: {
    // identityPoolId: import.meta.env.VITE_IDENTITY_POOL_ID,
    region: import.meta.env.VITE_AWS_REGION,
    userPoolId: import.meta.env.VITE_USER_POOL_ID,
    userPoolWebClientId: import.meta.env.VITE_USER_POOL_WEB_CLIENT_ID,
    signUpVerificationMethod: "code",
    authenticationFlowType: "USER_PASSWORD_AUTH",
    oauth: {
      domain: import.meta.env.VITE_COGNITO_DOMAIN,
      scope: [
        "phone",
        "email",
        "profile",
        "openid",
        "aws.cognito.signin.user.admin",
      ],
      redirectSignIn: import.meta.env.VITE_WEB_CLIENT_REDIRECT_URL + "login",
      redirectSignOut: import.meta.env.VITE_WEB_CLIENT_REDIRECT_URL + "logout",
      responseType: "code",
    },
  },
};
