import { StyledTitle } from "../styles/typography";
import { LoginForm } from "../styles/LoginPage";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import api from "../services/api";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const LoginPage = () => {
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm();
    function Logar(data){
      api
      .post("/sessions", data)
      .then((response) => {
        if (response.status === 200) {
          toast.success("Sucesso, Redirecionando!", {autoClose: 3000,});
          setTimeout(() => {
            navigate("/dashboard");
            localStorage.setItem("@KenzieHub_Joabe", response.data.token);
          }, 3000);
        }
        else{toast.error("Algo deu errado, verifique as informações.")}
        
      });

    }

  
  return (
    <LoginForm>
      <StyledTitle className="Title" Title="one">Kenzie Hub</StyledTitle>

      <main className="FormContainer">
        <StyledTitle className="Title2" Title='two'>Login</StyledTitle>
        <form className="LoginForm" onSubmit={handleSubmit(Logar)}>
            <label>Email</label>
            <input placeholder="Insira seu Email" required type="email" {...register("email")}></input>
            <label>Senha</label>
            <input placeholder="Insira sua Senha" required type="password" {...register("password")}></input>
            <button type="submit">Entrar</button>
        </form>
        <span className='LoginSpan'>Ainda não possui uma conta?</span>
        <button onClick={()=>{navigate('/cadastro')}}>Cadastre-se</button>
      </main>
    </LoginForm>
  );
};
