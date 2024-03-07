import "./Menu.css";

export function Menu() {
  var line1__bars = document.querySelector(".line1__bars-menu");
  var line2__bars = document.querySelector(".line2__bars-menu");
  var line3__bars = document.querySelector(".line3__bars-menu");
  var nav = document.querySelector(".nav");
  var ul = document.querySelector(".ul");
  function animateBars() {
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
    ul.classList.toggle("ulist");
    nav.classList.toggle("navlist");
  }
  return (
    <>
      <div className="bars__menu" onClick={animateBars}>
        <span className="line1__bars-menu"></span>
        <span className="line2__bars-menu"></span>
        <span className="line3__bars-menu"></span>
      </div>
      <nav className="nav">
        <ul className="ul">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="#who">¿Quiénes somos?</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
