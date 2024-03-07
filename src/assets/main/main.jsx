import { Menu } from "../Menu/Menu";
import { Card } from "../Card/Card";
import "./main.css";

export function Main() {
  return (
    <>
      <section className="intro">
        <div className="circle"></div>
        <header>
          <a href="" className="logo">
            <img id="logo" src="images/favicon.svg" alt="mis_cultivos" />
          </a>
          <Menu />
        </header>
        <div className="content">
          <div className="textBox">
            <h2>
              Innovación agrícola sostenible:
              <br />
              <span>Mis Cultivos</span>
            </h2>
            <p>
              "Transformamos la agricultura a través de la automatización con un
              enfoque sostenible, cultivando el futuro de manera inteligente y
              respetuosa con el medio ambiente."
            </p>
            <a href="login">Ingresar</a>
            <a href="">Vista Previa</a>
          </div>
          <div className="imgBox">
            <img
              src="images/img_main.svg"
              className="miscultivos"
              alt="img_main"
            />
          </div>
        </div>
      </section>
      <h2 className="subtitle">¿Quiénes somos?</h2>
      <section className="who">
        <div className="textBox">
          <h3>
            Transformando la Agricultura con Innovación y Sostenibilidad:
            Bienvenido a Mis Cultivos
          </h3>
          <p>
            En Mis Cultivos, lideramos la revolución agrícola con soluciones
            innovadoras y sostenibles. Automatizamos procesos, optimizamos
            recursos y conectamos a la comunidad agrícola para impulsar el
            progreso. Desde la eficiencia operativa hasta la preservación del
            medio ambiente, ofrecemos herramientas tecnológicas y educación para
            transformar la agricultura de hoy y construir un futuro sostenible.
          </p>
        </div>
        <div className="imgBox">
          <img src="images/semilleros.svg" alt="" />
        </div>
      </section>
      <h2 className="subtitle">Nuestros objetivos</h2>
      <section className="objectives">
        <Card title="Optimización de Recursos" route="images/optimizacion.png">
          Implementar un sistema integral de automatización que permita una
          gestión más eficiente de recursos críticos como el agua y los
          nutrientes.
        </Card>
        <Card title="Mejora de la Productividad" route="images/productividad.png">
          Aumentar la eficiencia operativa mediante la automatización de tareas
          repetitivas.
        </Card>
        <Card title="Sostenibilidad Ambiental" route="images/el-planeta-tierra.png">
          Reducir la huella ambiental de la agricultura al optimizar el uso de
          insumos y alinear las prácticas agrícolas con principios sostenibles.
        </Card>
        <Card title="Toma de Decisiones Informada" route="images/caminos.png">
          Facilitar herramientas analíticas avanzadas a través de la página web,
          permitiendo a los agricultores tomar decisiones informadas basadas en
          datos precisos.
        </Card>
        <Card title="Interconexión y Comunicación" route="images/conexion.png">
          Fomentar la conectividad entre los agricultores, investigadores y
          expertos agrícolas a través de la plataforma en línea.
        </Card>
        <Card title="Adaptabilidad a Diversos Entornos" route="images/evaluacion.png">
          Diseñar el sistema de automatización de cultivos y la página web de
          manera modular y adaptable, para que pueda ser implementado en
          diversos entornos agrícolas.
        </Card>
        <Card title="Rentabilidad Agrícola" route="images/ganancias.png">
          Contribuir al aumento de la rentabilidad de los agricultores al
          mejorar la eficiencia y la calidad de la producción.
        </Card>
        <Card title="Educación y Capacitación" route="images/rompecabezas.png">
          Proporcionar recursos educativos y capacitación para que los
          agricultores adopten y aprovechen plenamente las capacidades de la
          automatización.
        </Card>
      </section>
    </>
  );
}
