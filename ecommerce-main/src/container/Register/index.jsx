import { useState } from "react";
<<<<<<< HEAD
import { LoginSession, createUser } from "../../utils/appwriteConfig";
=======
import {
  LoginSession,
  createUser,
  getUserInformation,
  registerUser,
} from "../../utils/appwriteConfig";
>>>>>>> 6452f0c4b1e01a6a421d6a805ff32fb40c93ee66
import { useNavigate } from "react-router-dom";

const Register = () => {
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
<<<<<<< HEAD
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password, name } = form;
    const response = await createUser(email, password, name);
    const createSession = await LoginSession(email, password);
    if (response.status && createSession.userId) {
      setssucces("Registro exitoso");
      return navigate("/", { replace: false });
    }
    setError(response.message || createSession.message);
=======

  const handleSubmit = async (event) => {
    event.preventDefault();
    let register = {};
    const { email, password, name, phone, cedula } = form;
    const response = await createUser(email, password, name, phone);
    const createSession = await LoginSession(email, password);

    if (response.status && createSession.userId) {
      register = await registerUser(email, password, name, phone, cedula);

      if (register) {
        const userInfo = await getUserInformation(email);
        sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
        setssucces("Registro exitoso");
        return navigate("/", { replace: false });
      }
    }
    const errorResponse = response.message ? `${response.message}` : "";
    const errorCreateSession = createSession.message
      ? `or ${createSession.message}`
      : "";
    const errorRegister = register.message ? `or ${register.message}` : "";

    setError(`${errorResponse} ${errorCreateSession} ${errorRegister}`);
>>>>>>> 6452f0c4b1e01a6a421d6a805ff32fb40c93ee66
  };

  return (
    <div className="wrapper fadeInDown">
      <h1>Registrate</h1>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          name="name"
<<<<<<< HEAD
          placeholder="name"
=======
          placeholder="Nombre"
>>>>>>> 6452f0c4b1e01a6a421d6a805ff32fb40c93ee66
          onChange={(event) => handleForm(event)}
        />
        <input
          type="email"
          name="email"
<<<<<<< HEAD
          placeholder="email"
=======
          placeholder="Correo"
          onChange={(event) => handleForm(event)}
        />
        <input
          type="text"
          name="cedula"
          placeholder="Cedula"
          onChange={(event) => handleForm(event)}
        />
        <input
          type="phone"
          name="phone"
          placeholder="Celular"
>>>>>>> 6452f0c4b1e01a6a421d6a805ff32fb40c93ee66
          onChange={(event) => handleForm(event)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(event) => handleForm(event)}
        />
        <button type="submit" className="btn btn-outline-success">
          Registrate
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
    </div>
  );
};

export default Register;
