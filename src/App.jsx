import Header from "./componentes/Header";
import SobreMi from "./componentes/SobreMi";
import Experiencia from "./componentes/Experiencia";
import Habilidades from "./componentes/Habilidades";
import Contacto from "./componentes/Contactos";
import "./App.css";
import Proyectos from "./componentes/Proyectos"
function App() {
  return (
    <>
      <h1>Curriculum Vitae</h1>

      <Header />
      <SobreMi />
      <Experiencia />
      <Habilidades />
      <Contacto />
      <Proyectos />
      {/* deploy */}
    </>
      
  );
}

export default App;