import React, { useState, useEffect } from "react";
import { DateSvg, DaysSvg, LocationSvg, StageSvg, TypeSvg, Capacity, Droplet, Ripple, Humidity, HumidityLand, Temperature } from "../Dashboard/svg/Components";
import { Graphic } from "../Graphic/Graphic";
import { GraphicTime } from "../GraphicTime/GraphicTime";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";
import "./Control.css";

export function Control({ name, location, type, stage, date, days, title }) {
  const { id } = useParams();
  document.title = id;
  const [values, setValues] = useState({
    temperatura: 0,
    humedadAmbiente: 0,
    humedadSuelo: 0,
  });
  const [irrigation, setIrrigation] = useState(false);
  
  const [socket, setSocket] = useState(null); // Definición de socket

  useEffect(() => {
    const URL =
      process.env.NODE_ENV === "production"
        ? undefined
        : "http://localhost:3000";
    const newSocket = io(URL);
    setSocket(newSocket); // Guardar socket en el estado

    newSocket.emit("appConnection", "12345");
    newSocket.on("dataDevice", (data) => {
      setValues(data);
    });

    return () => {
      newSocket.close();
    };
  }, []);

  const onIrrigation = () => {
    if (socket) {
      const data ={
        id: '12345',
        state: irrigation
      }
      setIrrigation(!irrigation);
      socket.emit('irrigation', data);
    }
  }

  return (
    <div className="background control">
      <main className="controlFarm">
        <div className="general">
          <div className="img">
            <img src="/images/tomato.png" alt="" />
          </div>
          <div className="info">
            <p className="status active">Offline</p>
            <h1>{name}</h1>
            <div className="section location">
              <LocationSvg />
              <h2>{location}</h2>
            </div>
            <div className="section date">
              <DateSvg />
              <h2>
                <span>Inicio:</span> {date}
              </h2>
            </div>
            <div className="section days">
              <DaysSvg />
              <h2>
                <span>Edad: </span> {days} días
              </h2>
            </div>
            <div className="section type">
              <TypeSvg />
              <h2>
                <span>Variedad:</span> {type}
              </h2>
            </div>
            <div className="section stage">
              <StageSvg />
              <h2>
                <span>Etapa:</span> {stage}
              </h2>
            </div>
          </div>
        </div>
        <div>
          <div className="graphics">
            <div className="graphicOne">
              <Graphic
                color={"#e30224"}
                value={(values.temperatura == null ? '0' : values.temperatura.toFixed(1) + "°C")}
                percentValue={(values.temperatura == null ? 0 : values.temperatura * 2)}
              />
              <div className="infoGraphic">
                <Temperature />
                <h2>Temperatura</h2>
              </div>
            </div>
            <div className="graphicOne">
              <Graphic
                color={"#6cbdb5"}
                value={(values.humedadAmbiente == null ? "0" : Math.round(values.humedadAmbiente) + "%")}
                percentValue={(values.humedadAmbiente == 0 || null) ? '0' : Math.round(
                  (values.humedadAmbiente - 20) * (10 / 7)
                )}
              />
              <div className="infoGraphic">
                <Humidity />
                <h2>Humedad</h2>
              </div>
            </div>
            <div className="graphicOne">
              <Graphic
                color={"#8fd053"}
                value={
                  (values.humedadSuelo == 0 || null) ? '0' :
                  Math.round(((4095 - values.humedadSuelo) / 1595) * 100) + "%"
                }
                percentValue={(values.humedadSuelo == 0 || null) ? '0' : Math.round(
                  ((4095 - values.humedadSuelo) / 1595) * 100
                )}
              />
              <div className="infoGraphic">
                <HumidityLand />
                <h2>Humedad suelo</h2>
              </div>
            </div>
            <div className="graphicOne">
              <Graphic color={"#f2cd4f"} />
              <h2>Nivel de sol</h2>
            </div>
          </div>
        </div>
        <div className="registerData">
          <div className="graphicTime">
            <GraphicTime color={"#ff5c71"} />
            <h2>Registro Temperatura</h2>
          </div>
          <div className="graphicTime">
            <GraphicTime color={"#9cd6c8"} />
            <h2>Registro Humedad</h2>
          </div>
          <div className="graphicTime">
            <div>
              <GraphicTime color={"#bded7e"} />
            </div>
            <h2>Registro Humedad Suelo</h2>
          </div>
        </div>
        <div>
          <h2 className="stageContainer">
            <span>Etapa:</span> Cotiledon
          </h2>
          <div className="imgEtapa">
            <img src="/images/cotiledon_etapa.png" alt="" />
          </div>
        </div>
        <div className="water">
          <div className="containerWater">
            <div></div>
          </div>
          <div className="irrigation">
            <h2>Detalles del riego</h2>
            <div className="waterDetails">
              <Capacity />
              <h3>
                Capacidad del contenedor:<span>10000L</span>
              </h3>
            </div>
            <div className="waterDetails">
              <Droplet />
              <h3>
                Contenido actual: <span>10000L</span>
              </h3>
            </div>
            <div className="waterDetails">
              <Ripple />
              <h3>
                Litros consumidos: <span>1500L</span>
              </h3>
            </div>
            <div className="waterDetails">
              <img src="/images/water_pump.svg" alt="" />
              <h3>
                Forma de riego: <span>Bomba de agua</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button className="buttonControl" style={irrigation ? {backgroundColor: '#ff003c'} : {backgroundColor: '#72ae95'}} onClick={() => onIrrigation(socket)}>{irrigation?`Regando...`:`Regar`}</button>
          <button className="buttonControl">Desactivar riego automático</button>
          <button className="buttonControl">Activar ventilador</button>
        </div>
      </main>
    </div>
  );
}
