import { useContext } from "react";
import  UserProvider  from "../contexts/UserContext"; 
import { Context } from "../contexts/UserContext";
import { StyledTitle } from "../styles/typography";
import { LoginForm } from "../styles/LoginPage";
import "react-toastify/dist/ReactToastify.css";




export const LoginPage = () => {
 const { navigate, register, handleSubmit, Logar } = useContext(Context)


  return (
    <LoginForm>
      <StyledTitle className="Title" Title="one">
        Kenzie Hub
      </StyledTitle>

      <main className="FormContainer">
        <StyledTitle className="Title2" Title="two">
          Login
        </StyledTitle>
        <form className="LoginForm" onSubmit={handleSubmit(Logar)}>
          <label>Email</label>
          <input
            placeholder="Insira seu Email"
            required
            type="email"
            {...register("email")}
          ></input>
          <label>Senha</label>
          <input
            placeholder="Insira sua Senha"
            required
            type="password"
            {...register("password")}
          ></input>
          <button type="submit">Entrar</button>
        </form>
        <span className="LoginSpan">Ainda não possui uma conta?</span>
        <button
          onClick={() => {
            navigate("/cadastro");
          }}
        >
          Cadastre-se
        </button>
      </main>
    </LoginForm>
  );
};
