import "./Zone.css";

import {LocationSvg,TypeSvg, StageSvg, DateSvg, DaysSvg} from './ComponentsZone';

export function Zone({ title, location, type, stage, date, days, shouldUpdate }) {
  const titleUrl = title.toLowerCase().replace(" ", "-");
  return (
    <section className="zone">
      <div className="img">
        <img src="images/tomato.png" alt="" />
      </div>
      <div className="info">
        <p className="status active">Offline</p>
        <h3>{title}</h3>
        <div className="section location">
          <LocationSvg />
          <h4>{location}</h4>
        </div>
        <div className="section date">
          <DateSvg />
          <h4>
            <span>Inicio:</span> {date}
          </h4>
        </div>
        <div className="section days">
          <DaysSvg />
          <h4>
            <span>Edad: </span> {days} días
          </h4>
        </div>
        <div className="section type">
          <TypeSvg />
          <h4>
            <span>Variedad:</span> {type}
          </h4>
        </div>
        <div className="section stage">
          <StageSvg />
          <h4>
            <span>Etapa:</span> {stage}
          </h4>
        </div>

        <a href={`/dashboard/${titleUrl}`} className="link">Panel de control</a>
      </div>
    </section>
  );
}
