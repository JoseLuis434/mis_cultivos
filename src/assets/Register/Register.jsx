import '../login/login.css'

export function Register() {
  const form = document.querySelector("form");

  const falseValidation = document.querySelector(".falseValidation");

  const iconEye = () => {
    const element = document.querySelector(".eye");
    element.classList.toggle("visible");
    let input = element.previousElementSibling;
    if (element.classList.contains("visible")) {
      element.style.color = "#000000";
      input.type = "text";
    } else {
      element.style.color = "#d1d1d1";
      input.type = "password";
    }
  };

  const iconEye2 = () => {
    const element2 = document.querySelector(".eye2");
    element2.classList.toggle("visible");
    let input = element2.previousElementSibling;
    if (element2.classList.contains("visible")) {
      element2.style.color = "#000000";
      input.type = "text";
    } else {
      element2.style.color = "#d1d1d1";
      input.type = "password";
    }
  };

  const sendData = (e) => {
    e.preventDefault();
    const email = form.email.value;
    const password = form.password.value;
    const passwordConfirmate = form.passwordCofirmation.value;
    if (email === "" || password === "") {
      falseValidation.style.display = "block";
      falseValidation.innerHTML = "⚠️ Rellena los campos";
    } else if (!validateEmail(email)) {
      falseValidation.style.display = "block";
      falseValidation.innerHTML = "⚠️ Ingresa un email válido";
    } else if (password !== passwordConfirmate) {
      falseValidation.style.display = "block";
      falseValidation.innerHTML = "⚠️ Las contraseñas no coinciden";
    } else {
      falseValidation.style.display = "none";
      const data = new FormData(form);
      fetch("https://miscultivosbackend-production.up.railway.app/api/register", {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message == "created") {
            localStorage.setItem("code-register", "true");
            localStorage.setItem("email", form.email.value);
            form.submit();
          } else {
            if (data.message.email) {
              falseValidation.style.display = "block";
              falseValidation.innerHTML = "⚠️ El email ya ha sido registrado";
            } else if (data.message.password) {
              falseValidation.style.display = "block";
              falseValidation.innerHTML =
                "⚠️ La contraseña debe tener al menos 6 caracteres";
            }
          }
        });
    }
  };

  function validateEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
  }
  return (
    <div className="background">
      <main className="login">
        <section className="view">
          <div className="imgView">
            <img
              src="images/register.svg"
              alt=""
              style={{ marginBottom: "20px" }}
            />
            <p>
              Forma parte de la nueva <br />
              revolución tecnológica agrícola
            </p>
          </div>
        </section>
        <section className="form">
          <div className="formContainer">
            <div className="infoView">
              <div>
                <img src="images/favicon.svg" alt="" />
                <span>Mis Cultivos</span>
              </div>
              <a href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-home"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
                  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                  <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
                </svg>
              </a>
            </div>
            <h1>Registráte</h1>
            <p>
              ¿Ya tienes una cuenta? <a href="/login">Inicia sesión</a>
            </p>
            <div className="falseValidation">⚠️ Ingresa un valor válido</div>
            <div className="formView">
              <form
                onSubmit={sendData}
                action="/ingresar-codigo"
                method="post"
                noValidate
              >
                <div className="inputView">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-user"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                  </svg>
                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    autoComplete="on"
                  />
                </div>
                <div className="inputView">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-mail"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                    <path d="M3 7l9 6l9 -6"></path>
                  </svg>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    autoComplete="on"
                  />
                </div>
                <div className="inputView">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-lock"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z"></path>
                    <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
                    <path d="M8 11v-4a4 4 0 1 1 8 0v4"></path>
                  </svg>
                  <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon-tabler-eye eye2"
                    onClick={iconEye2}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                    <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path>
                  </svg>
                </div>
                <div className="inputView">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon-tabler-eye"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z"></path>
                    <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
                    <path d="M8 11v-4a4 4 0 1 1 8 0v4"></path>
                  </svg>
                  <input
                    type="password"
                    name="passwordCofirmation"
                    placeholder="Confirmar contraseña"
                  />
                  <svg
                    onClick={iconEye}
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon-tabler-eye eye"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                    <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path>
                  </svg>
                </div>
                <p className="forgot">
                  <a href="/ingresar-email">¿Olvidaste tu contraseña?</a>
                </p>
                <div className="inputViewSubmit">
                  <input type="submit" value="Registrarse" />
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
