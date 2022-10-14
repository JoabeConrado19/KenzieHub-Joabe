import { StyledTitle } from "../styles/typography";
import { RegisterForm } from "../styles/RegisterPage";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";

export const Register = () => {
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Senha Obrigatória")
      .min(8, "Senha muito curta - Mínimo de 8 carácteres.")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Senha fraca, mínimo de 8 caracteres, deve conter ao menos uma letra maúscula e um caráctere especial."
      ),
    password2: yup
      .string()
      .required("Campo Obrigatório")
      .oneOf([yup.ref("password")], "Campos não coincidem"),
    bio: yup.string().required("Bio Obrigatória"),
    contact: yup.string().required("Telefone obrigatório"),
  });
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });
  const onSubmitFunction = (data) => {
    delete data.password2;
    api
      .post("/users", data)
      .then((response) => {
        if (response.status === 201) {
          toast.success("Sucesso, Redirecionando!", { autoClose: 3000 });
          setTimeout(() => {
            navigate("/");
          }, 3000);
        } else {
          toast.error("Erro de servidor, tente novamente mais tarde.");
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.request.status) {
          console.log("a");
          toast.error("Algo deu errado, verifique as informações.");
        }
      });
  };
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
          onSubmit={handleSubmit(onSubmitFunction)}
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
