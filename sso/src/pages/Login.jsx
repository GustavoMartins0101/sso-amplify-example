import { useNavigate } from "react-router-dom";
import { Amplify } from "aws-amplify";
import { signInWithRedirect } from "aws-amplify/auth";

export const Login = () => {
  const navigate = useNavigate();

  async function handleSignUpApp1() {
    try {
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
                  import.meta.env.VITE_WEB_CLIENT_REDIRECT_URL_APP1,
                ],
                redirectSignOut: [import.meta.env.VITE_WEB_CLIENT_LOGOFF_URL],
                responseType: "code",
                scopes: ["email", "openid", "phone"],
              },
            },
          },
        },
      });

      signInWithRedirect();
    } catch (error) {}
  }

  async function handleSignUpApp2() {
    try {
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

      signInWithRedirect();
    } catch (error) {}
  }

  return (
    <div className="flex flex-col gap-4">
      <button className="border" onClick={handleSignUpApp1}>
        Login App 1
      </button>
      <button className="border" onClick={handleSignUpApp2}>
        Login App 2
      </button>
      <button className="border" onClick={() => navigate("/register")}>
        Criar um usuario
      </button>
    </div>
  );
};
