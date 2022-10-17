import { StyledTitle } from "../styles/typography";
import { RegisterForm } from "../styles/RegisterPage";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../contexts/UserContext";

export const Register = () => {
  const { formSchema, navigate, RegisteronSubmitFunction } = useContext(Context);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });
  

  return (
    <RegisterForm>
      <div className="RegisterTitle">
        <StyledTitle className="Title" Title="one">
          Kenzie Hub
        </StyledTitle>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          {" "}
          Voltar
        </button>
      </div>
      <main className="FormContainer">
        <StyledTitle className="Title2" Title="two">
          Crie sua conta
        </StyledTitle>
        <span className="RegisterSpan">Rápido e grátis, vamos nessa</span>
        <form
          className="RegisterForm"
          onSubmit={handleSubmit(RegisteronSubmitFunction)}
        >
          <label>Nome</label>
          <input placeholder="Digite seu Nome" {...register("name")}></input>
          <StyledTitle Title="span-error">{errors.name?.message}</StyledTitle>
          <label>Email</label>
          <input
            placeholder="Digite seu Email"
            {...register("email")}
            type="email"
          ></input>
          <StyledTitle Title="span-error">{errors.email?.message}</StyledTitle>
          <label>Senha</label>
          <input
            placeholder="Digite sua Senha"
            {...register("password")}
            type="password"
          ></input>
          <StyledTitle Title="span-error">
            {errors.password?.message}
          </StyledTitle>
          <label>Confirmar Senha</label>
          <input
            placeholder="Digite novamente sua Senha"
            {...register("password2")}
            type="password"
          ></input>
          <StyledTitle Title="span-error">
            {errors.password2?.message}
          </StyledTitle>
          <label>Bio</label>
          <input placeholder="Fale sobre você" {...register("bio")}></input>
          <StyledTitle Title="span-error">{errors.bio?.message}</StyledTitle>
          <label>Contato</label>
          <input
            placeholder="Opção de contato"
            {...register("contact")}
          ></input>
          <StyledTitle Title="span-error">
            {errors.contact?.message}
          </StyledTitle>
          <label>Selecionar módulo </label>
          <select {...register("course_module")}>
            <option value="Primeiro Módulo (Introdução ao Frontend)">
              Primeiro Módulo
            </option>
            <option value="Segundo Módulo (Frontend Avançado)">
              Segundo Módulo
            </option>
            <option value="Terceiro Módulo (ReactJs)">Terceiro Módulo</option>
            <option value="Quarto Módulo (Introdução ao Backend)">
              Quarto Módulo
            </option>
            <option value="Quinto Módulo (Backend Avançado)">
              Quinto Módulo
            </option>
            <option value="Sexto Módulo (Empregabilidade)">Sexto Módulo</option>
          </select>
          <button type="submit">Cadastrar</button>
        </form>
      </main>
    </RegisterForm>
  );
};
