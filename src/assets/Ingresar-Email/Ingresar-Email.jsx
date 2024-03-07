import "./Ingresar-Email.css";
import React from 'react';

export function IngresarEmail() {
  const sendData = (e) => {
    const form = document.querySelector(".inputView");
    const falseValidation = document.querySelector(
      ".falseValidation"
    );

    e.preventDefault();
    const email = form.email.value;
    if (email === "") {
      falseValidation.style.display = "block";
      falseValidation.innerHTML = "⚠️ Ingresa tu email";
    } else if (!validateEmail(email)) {
      falseValidation.style.display = "block";
      falseValidation.innerHTML = "⚠️ Ingresa un email válido";
    } else {
      let data = new FormData();
      data.append("email", email);
      fetch("http://localhost:8000/api/validateEmail", {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.message === "success") {
            localStorage.setItem("email", email);
            window.location.href = '/ingresar-codigo'
          } else {
            falseValidation.style.display = "block";
            falseValidation.innerHTML = "⚠️ El email no existe";
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
      <main className="email">
        <img src="images/correo-electronico.png" alt="" />
        <h1>Ingresa tu email para reecuperar tu contraseña</h1>
        <div className="falseValidation">⚠️ Ingresa un valor válido</div>
        <form
          onSubmit={sendData}
          action="ingresar-codigo"
          className="inputView"
          id="form"
          method="post"
          noValidate
        >
          <input style={{paddingLeft: '20px'}} type="email" autoComplete="on" name="email" />
        </form>
        <button type="submit" form="form">
          Enviar código
        </button>
      </main>
    </div>
  );
}
