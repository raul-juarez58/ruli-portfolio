import "./Proyectos.css";

function Proyectos() {

    const proyectos = [
        {
            nombre: "TODO App",
            descripcion: "Aplicacion de tareas con React (CRUD).",
            demo: "#",
            codigo: "#"
        },
        {
            nombre: "Portfolio CV",
            descripcion: "Sitio personal desarrollado con React y Vite.",
            demo: "#",
            codigo: "#"
        }
    ];

  return (
    <section className="proyectos">
      <h3>Proyectos</h3>

       {proyectos.map((proyecto, index) => (
      <div className="card" key={index}>
        <h4>{proyecto.nombre}</h4>
        <p>{proyecto.descripcion}</p>

        <div className="links">
          <a href={proyecto.demo} target="_blank">Ver proyecto</a>
          <a href={proyecto.codigo} target="_blank">Código</a>
        </div>
      </div>
    ))}
    </section>
  );
}

export default Proyectos;