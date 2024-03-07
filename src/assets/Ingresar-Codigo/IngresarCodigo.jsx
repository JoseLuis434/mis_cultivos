import "./IngresarCodigo.css";

export function IngresarCodigo() {
  const otInputs= document.querySelectorAll(".input");
  let code;
  otInputs.forEach((input) => {
    input.addEventListener("keyup", () => {
      const nextElement = input.nextElementSibling;
      if (nextElement && typeof nextElement.focus === "function") {
        let currentValue = (input).value;
        currentValue = currentValue.replace(/[^0-9]/g, "");
        (input).value = currentValue;
        if (currentValue.length === 1) {
          nextElement.focus();
        }
      }
    });
  });
  const sendData = (e) => {
    const alert = document.querySelector(".falseValidation");
    const form = document.querySelector("#code");
    e.preventDefault();
    code = "";
    let validate = true;
    otInputs.forEach((input) => {
      if ((input).value === "") {
        alert.innerHTML = "⚠️ Llena todos los valores";
        alert.style.display = "block";
        validate = false;
        return;
      } else {
        code += (input).value;;
      }
    });
    if (validate) {
      let data = new FormData();
      data.append("code", code);
      let email = localStorage.getItem("email");
      if(email != null){
        data.append("email", email);
      }    
      fetch('http://localhost:8000/api/sendCode', {
        method: "post",
        body: data,
      })
        .then((data) => data.json())
        .then((data) => {
          if (data.message === "success") {
            console.log(code, form);
            if(localStorage.getItem('code-register') == 'true'){
              localStorage.removeItem('code-register');
              localStorage.removeItem('email');
              form.action = '/dashboard';
            }
            localStorage.setItem('code',code);
            form.submit();
          } else {
            alert.innerHTML = "⚠️ Código incorrecto";
            alert.style.display = "block";
          }
        });
    }
  };
  return (
    <div className="background">
      <main className="code">
        <img src="bandeja-de-entrada.png" alt="" />
        <h1>Hemos enviado un código de verificación a tu correo electrónico</h1>
        <div className="falseValidation"></div>
        <form
          onSubmit={sendData}
          action="/actualizar-datos"
          className="numbers"
          noValidate
          id="code"
          method="post"
        >
          <input
            type="text"
            maxLength={1}
            placeholder="__"
            className="input"
            name="code1"
            autoComplete="off"
          />
          <input
            type="text"
            maxLength={1}
            placeholder="__"
            className="input"
            name="code2"
            autoComplete="off"
          />
          <input
            type="text"
            maxLength={1}
            placeholder="__"
            className="input"
            name="code1"
            autoComplete="off"
          />
          <input
            type="text"
            maxLength={1}
            placeholder="__"
            className="input"
            name="code3"
            autoComplete="off"
          />
          <input
            type="text"
            maxLength={1}
            placeholder="__"
            className="input"
            name="code4"
            autoComplete="off"
          />
          <input
            type="text"
            maxLength={1}
            placeholder="__"
            className="input"
            name="code5"
            autoComplete="off"
          />
        </form>
        <button type="submit" form="code">
          Validar código
        </button>
      </main>
    </div>
  );
}
