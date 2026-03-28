import Header from "./componentes/Header";
import SobreMi from "./componentes/SobreMi";
import Experiencia from "./componentes/Experiencia";
import Habilidades from "./componentes/Habilidades";
import Contacto from "./componentes/Contactos";
function App() {
  return (
    <>
      <h1>Curriculum Vitae</h1>

      <Header />
      <SobreMi />
      <Experiencia />
      <Habilidades />
      <Contacto />
    </>
      {/* deploy */}
  );
}

export default App;