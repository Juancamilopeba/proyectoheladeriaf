import { useState } from "react";
<<<<<<< HEAD
import { LoginSession, getUserInformation } from "../../utils/appwriteConfig";
=======
import { LoginSession } from "../../utils/appwriteConfig";
>>>>>>> 1ae4e6f (Sprint 3 - Implementacion de inicio de sesion para administrador, agregar producots, editar y eliminar, pruebas y correcciones de errores)
import "./styles.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState();
  const [error, setError] = useState();
  const [success, setssucces] = useState();

  const handleForm = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    const { email, password } = form;
<<<<<<< HEAD
    const response = await LoginSession(email, password);
    const userInfo = await getUserInformation(email);

    sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
=======

    const response = await LoginSession(email, password);
>>>>>>> 1ae4e6f (Sprint 3 - Implementacion de inicio de sesion para administrador, agregar producots, editar y eliminar, pruebas y correcciones de errores)
    if (response.userId) {
      setssucces("Registro exitoso");

      navigate(email.toLowerCase() === "admin@admin.com" ? "/dashboard" : "/", {
        replace: false,
      });
      return;
    }
    setError(response.message);
  };

  return (
    <div className="wrapper fadeInDown">
      <h1>Bienvenido</h1>
      <div id="formContent">
<<<<<<< HEAD
        {/*<div className="fadeIn first">
          <img src="" id="icon" alt="User Icon" />
  </div>*/}
=======
        <div className="fadeIn first">
          <img src="" id="icon" alt="User Icon" />
        </div>
>>>>>>> 1ae4e6f (Sprint 3 - Implementacion de inicio de sesion para administrador, agregar producots, editar y eliminar, pruebas y correcciones de errores)

        <form onSubmit={(event) => handleSubmit(event)}>
          <input
            type="text"
            id="login"
            className="fadeIn second"
            name="email"
            placeholder="login"
            onChange={(event) => handleForm(event)}
          />
          <input
            type="password"
            id="password"
            className="fadeIn third"
            name="password"
            placeholder="password"
            onChange={(event) => handleForm(event)}
          />
          <button
            type="submit"
            className="adeIn fourth btn btn-outline-success"
          >
            Iniciar sesion
          </button>

          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          {success && (
            <div className="alert alert-success" role="alert">
              {success}
            </div>
          )}
        </form>

        <div id="formFooter">
<<<<<<< HEAD
          <a className="underlineHover" href="/register">
            Crear una cuenta
=======
          <a className="underlineHover" href="#">
            Forgot Password?
>>>>>>> 1ae4e6f (Sprint 3 - Implementacion de inicio de sesion para administrador, agregar producots, editar y eliminar, pruebas y correcciones de errores)
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
