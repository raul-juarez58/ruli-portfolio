import {useEffect, useRef} from "react";
import "./Proyectos.css";

function Proyectos() {
   const ref = useRef(); 
    
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("mostrar");
                }
            });
        });   
        
        observer.observe(ref.current);
    }, []);

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
    <section ref={ref}className="proyectos ocultos">
      <h3>Proyectos</h3>

      {proyectos.map((p, index) => (
        <div className="card" key={index}>
            <h4>{p.nombre}</h4>
            <p>{p.descripcion}</p>

            <div className="links">
                <a href={p.demo} target="_blank">Ver proyecto</a>
                <a href={p.codigo} target="_blank">Codigo</a>
            </div>
        </div>
      ))}
    </section>
  );
}

export default Proyectos;