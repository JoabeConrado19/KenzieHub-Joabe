import { DashboardStyles } from "../styles/Dashboard";
import { StyledTitle } from "../styles/typography";
import Vector from "../assets/Vector.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
import { ToastContainer, toast } from "react-toastify";
import { set } from "react-hook-form";
import Modal from "react-modal";
import { useForm } from "react-hook-form";

Modal.setAppElement("#root");

export const LandingPage = () => {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();
  const [Name, SetName] = useState("");
  const [Module, SetModule] = useState("");
  const [Tecs, SetTecs] = useState([]);
  const [ModalOpen, setModalOpen] = useState(false);

  function handleOpenModal() {
    setModalOpen(true);
  }
  function handleCloseModal() {
    setModalOpen(false);
  }
  function criarPost(data) {
    let token = localStorage.getItem("@KenzieHub_Joabe");
    delete data.email;
    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 201) {
          api
            .get("/profile", {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            .then((response) => {
              SetTecs(response.data.techs);
            });
          toast.success("Criado!", { autoClose: 3000 });
        }
      });
  }
  const ModalStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "transparent",
    },
  };

  function Logout() {
    navigate("/");
    localStorage.clear();
  }
  function Excluir(element) {
    let token = localStorage.getItem("@KenzieHub_Joabe");
    const ListaComRemovido = Tecs.filter((item) => {
      return item.id != element;
    });
    api
      .delete(`/users/techs/${element}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 204) {
          toast.success("Deletado!", { autoClose: 3000 });
        }
      });

    SetTecs(ListaComRemovido);
  }
  useEffect(() => {
    let token = localStorage.getItem("@KenzieHub_Joabe");
    api
      .get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        let name = response.data.name.split(" ");
        SetName(name[0]);
        SetModule(response.data.course_module);
        SetTecs(response.data.techs);
      });
  }, []);

  return (
    <DashboardStyles>
      <Modal
        shouldCloseOnOverlayClick={true}
        isOpen={ModalOpen}
        onRequestClose={handleCloseModal}
        style={ModalStyles}
        className="Modal"
      >
        <header>
          <StyledTitle Title="three">Cadastrar Tecnologia</StyledTitle>
          <StyledTitle Title="spanBtn" onClick={handleCloseModal}>
            X
          </StyledTitle>
        </header>
        <form onSubmit={handleSubmit(criarPost)}>
          <label>Nome</label>
          <input
            placeholder="Nome da Tecnologia"
            {...register("title")}
          ></input>
          <label>Status</label>
          <select {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediario">Intermediario</option>
            <option value="Avançado">Avançado</option>
          </select>
          <button type="submit">Cadastrar Tecnologia</button>
        </form>
      </Modal>
      <header>
        <StyledTitle Title="one">Kenzie Hub</StyledTitle>
        <button
          onClick={() => {
            Logout();
          }}
        >
          Sair
        </button>
      </header>
      <div className="UserContainer">
        <StyledTitle Title="two">Olá, {Name}</StyledTitle>
        <StyledTitle Title="span">{Module}</StyledTitle>
      </div>
      <div className="FormUpper">
        <StyledTitle Title="three">Tecnologias</StyledTitle>
        <button onClick={handleOpenModal}>+</button>
      </div>
      <div className="ul-Container">
        <ul className="li-Container">
          {Tecs.map((element) => (
            <li>
              <StyledTitle className="Title-li" Title="four">
                {element.title}
              </StyledTitle>
              <div>
                <span>{element.status}</span>
                <img
                  src={Vector}
                  onClick={() => {
                    Excluir(element.id);
                  }}
                  alt=""
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </DashboardStyles>
  );
};
