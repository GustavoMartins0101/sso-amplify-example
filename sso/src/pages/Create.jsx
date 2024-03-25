import { signUp } from "aws-amplify/auth";
import { Amplify } from "aws-amplify";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Create = () => {
  const navigate = useNavigate("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [givename, setGivename] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [preferredUsername, setPreferredUsername] = useState("");
  const [name, setName] = useState("");

  async function handleCreate() {
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

      const response = await signUp({
        username: username,
        password: password,
        options: {
          userAttributes: {
            name: name,
            email: email,
            given_name: givename,
            middle_name: middlename,
          },
        },
      });

      console.log(response);

      alert("Usuario criado com sucesso");
      navigate("/auth");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex gap-4 flex-col">
      <div className="flex flex-col">
        <label className="text-left">Nome de Usuário</label>
        <input
          type="text"
          className="h-10 rounded p-2"
          placeholder="username"
          onChange={(e) => setUsername(e.currentTarget.value)}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-left">Senha</label>
        <input
          type="password"
          className="h-10 rounded p-2"
          placeholder="Senha"
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-left">Email</label>
        <input
          type="text"
          className="h-10 rounded p-2"
          placeholder="email"
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <div className="flex flex-col">
          <label className="text-left">Nome</label>
          <input
            type="text"
            className="h-10 rounded p-2"
            placeholder="Nome"
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label className="text-left">Give Name</label>
        <input
          type="text"
          className="h-10 rounded p-2"
          placeholder="GiveName"
          onChange={(e) => setGivename(e.currentTarget.value)}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-left">Nome do Meio</label>
        <input
          type="text"
          className="h-10 rounded p-2"
          placeholder="Nome do Meio"
          onChange={(e) => setMiddlename(e.currentTarget.value)}
        />
      </div>
      <div className="flex flex-col gap-4">
        <button className="border" onClick={handleCreate}>
          Criar
        </button>
        <button className="border" onClick={handleCreate}>
          Cancelar
        </button>
      </div>
    </div>
  );
};
