  import "./Habilidades.css";

   /*const habilidades = [
    { nombre: "HTML", nivel:90 },
    { nombre: "CSS", nivel:85 },
    { nombre: "JavaScript", nivel:80 },
    { nombre: "React", nivel:75 },
    { nombre: "Git", nivel:70 },
]*/

function Habilidades() {
  const skills = ["HTML","CSS","JavaScript","React","Git"];

  return (
    <section className="habilidades">
      <h3>Habilidades</h3>

      <div className="skills-container">
       {skills.map((skill, index) => (
        <span key={index} className="skill">
          {skill}
        </span>     

       ))}
       </div>  

    </section>
  );
}

export default Habilidades;