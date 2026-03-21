const habilidades = [
    { nombre: "HTML", nivel:90 },
    { nombre: "CSS", nivel:85 },
    { nombre: "JavaScript", nivel:80 },
    { nombre: "React", nivel:75 },
    { nombre: "Git", nivel:70 },
]

function Habilidades() {
  return (
    <section className="habilidades">
      <h3>Habilidades</h3>

      <div className="skills-container">
       {habilidades.map((hab, index) => (
    <div key={index} className="skill-card">
        <span>{hab.nombre}</span>
        
        <div className="barra">
            <div
                className="progreso"
                style={{ width: `${hab.nivel}%` }}
               ></div>     
        </div>

      </div>

       ))}
       </div>  

    </section>
  );
}

export default Habilidades;