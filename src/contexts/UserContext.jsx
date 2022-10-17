import { createContext } from "react";
import { toast } from "react-toastify";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";

export const Context = createContext({});

const UserProvider = ({ children }) => {
  let token = localStorage.getItem("@KenzieHub_Joabe");
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

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

  const RegisteronSubmitFunction = (data) => {
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

  function autoLogin() {
    if (token !== undefined) {
      api
        .get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.status == 200) {
            navigate("/dashboard");
          }
        });
    }
  }

  function Logar(data) {
    api
      .post("/sessions", data)
      .then((response) => {
        if (response?.status === 200) {
          toast.success("Sucesso, Redirecionando!", { autoClose: 3000 });
          setTimeout(() => {
            navigate("/dashboard");
            localStorage.setItem("@KenzieHub_Joabe", response.data.token);
          }, 3000);
        }
      })
      .catch((err) => {
        if (err.request.status) {
          toast.error("Algo deu errado, verifique as informações.");
        }
      });
  }

  return (
    <Context.Provider
      value={{
        useNavigate,
        navigate,
        register,
        handleSubmit,
        Logar,
        formSchema,
        RegisteronSubmitFunction,
        token,
        autoLogin,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default UserProvider;
