import { Amplify } from "aws-amplify";
import { signInWithRedirect } from "aws-amplify/auth";

import "./App.css";

function App() {
  function handleRedirect() {
    Amplify.configure({
      Auth: {
        Cognito: {
          userPoolId: import.meta.env.VITE_USER_POOL_ID,
          userPoolClientId: import.meta.env.VITE_USER_POOL_WEB_CLIENT_ID,
          loginWith: {
            email: true,
            oauth: {
              domain: import.meta.env.VITE_COGNITO_DOMAIN,
              redirectSignIn: [
                import.meta.env.VITE_WEB_CLIENT_REDIRECT_URL_APP2,
              ],
              redirectSignOut: [import.meta.env.VITE_WEB_CLIENT_LOGOFF_URL],
              responseType: "code",
              scopes: ["email", "openid", "phone"],
            },
          },
        },
      },
    });

    signInWithRedirect({ provider: "teste" });
  }

  return (
    <>
      <p className="read-the-docs">App 1</p>
      <button onClick={handleRedirect}>Ir para App 2</button>
    </>
  );
}

export default App;
