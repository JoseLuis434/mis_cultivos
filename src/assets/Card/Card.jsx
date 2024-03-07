import './Card.css';

export function Card({route, title, children}) {
  return (
    <article className="card">
      <div className="img_main">
        <img src={route} alt="" />
      </div>
      <h3>{title}</h3>
      <p>
        {children}
      </p>
    </article>
  );
}
