import "./login.css";

export function Login({title}) {
  document.title = title;
  const iconEye = () => {
    const element = document.querySelector(".icon-tabler-eye");
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

  const validateLogin = (e) => {
    const form = document.querySelector("form");
    const falseValidation = document.querySelector(
      ".falseValidation"
    );
    e.preventDefault();
    const email = form.email.value;
    const password = form.password.value;
    if (email === "" || password === "") {
      falseValidation.style.display = "block";
      falseValidation.innerHTML = "⚠️ Rellena los campos";
    } else if (!validateEmail(email)) {
      falseValidation.style.display = "block";
      falseValidation.innerHTML = "⚠️ Ingresa un email válido";
    } else {
      falseValidation.style.display = "none";
      const data = new FormData(form);
      fetch("https://miscultivosbackend-production.up.railway.app/api/login", {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.message === "authorized") {
            localStorage.setItem("email", form.email.value);
            localStorage.setItem("password", form.password.value);
            window.location.href = '/dashboard';
          } else {
            falseValidation.style.display = "block";
            falseValidation.innerHTML = "⚠️ Credenciales inválidas";
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
            <img src="images/login.svg" alt="" />
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
            <h1>Iniciar Sesión</h1>
            <p>
              ¿No tienes una cuenta? <a href="/register">Registráte</a>
            </p>
            <div className="falseValidation">⚠️ Ingresa un valor válido</div>
            <div className="formView">
              <form
                onSubmit={validateLogin}
                action="/dashboard"
                method="post"
                noValidate
              >
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
                    onClick={iconEye}
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
                    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                    <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path>
                  </svg>
                </div>
                <p>
                  <a href="/ingresar-email">¿Olvidaste tu contraseña?</a>
                </p>
                <div className="inputViewSubmit">
                  <input type="submit" value="Ingresar" />
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
