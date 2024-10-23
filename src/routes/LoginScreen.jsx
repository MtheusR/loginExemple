/* eslint-disable react/prop-types */
import React from "react";
import logoLongchat from "../img/logo-longchat.svg";
import { useNavigate } from "react-router-dom";

function InputLoginCustom({
  tipo,
  inputValue,
  setInputValue,
  errorLogin,
  setErrorLogin,
}) {
  let textPlaceholder = tipo == "email" ? "seu@email.com" : "********";

  return (
    <input
      className={`block pl-2 py-3 rounded-md min-w-[315px] mb-6 mt-2 focus:outline-1 focus:outline-green-900 ${errorLogin ? "" : "border-solid border-2 border-red-500 bg-red-50"}`}
      placeholder={textPlaceholder}
      type={tipo}
      value={inputValue}
      onChange={(evento) => {
        setInputValue(evento.target.value);
        setErrorLogin(true);
      }}
      required
    />
  );
}

function LoginScreen() {
  const navigate = useNavigate();

  const [inputEmail, setInputEmail] = React.useState("");
  const [inputPassword, setInputPassword] = React.useState("");
  const [loginError, setLoginError] = React.useState(true);

  const verificarAutenticacao = (emailAuth, senhaAuth) =>
    emailAuth === "admin@admin.com" && senhaAuth === "123";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (verificarAutenticacao(inputEmail, inputPassword)) {
      navigate("/home");
      setLoginError(true);
    } else {
      setLoginError(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center  h-screen w-full bg-backgoround-1">
        <div className="flex flex-wrap items-center justify-center gap-12">
          <div className="px-16 py-24 bg-green-800 rounded-2xl">
            <img src={logoLongchat} alt="logo longchat" />
          </div>
          <div>
            <form action="#" method="POST" onSubmit={handleSubmit}>
              <label htmlFor="email" className="block">
                Email
              </label>
              <InputLoginCustom
                tipo="email"
                inputValue={inputEmail}
                setInputValue={setInputEmail}
                errorLogin={loginError}
                setErrorLogin={setLoginError}
              />
              <label htmlFor="password" className="block">
                Senha
              </label>
              <InputLoginCustom
                tipo="password"
                inputValue={inputPassword}
                setInputValue={setInputPassword}
                errorLogin={loginError}
                setErrorLogin={setLoginError}
              />
              <p
                className={`text-red-600 text-sm mb-6 ${loginError ? "hidden" : ""}`}
              >
                Email ou Senha incorreto, tente novamente!
              </p>

              <button
                type="submit"
                className="bg-green-800 text-white py-3 rounded-md min-w-[315px] font-medium focus:outline-none focus:bg-green-700 hover:bg-green-700"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginScreen;
