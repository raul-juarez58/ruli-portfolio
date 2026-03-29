function Header() {
  return (
    <header className="header">
        <img src="/fotoPerfil.jpg" alt="Foto perfil" className="foto" />

      <h1>Nombre Apellido: RULY++</h1>
      <h2>Desarrollador Fronted</h2>

      <div className="botones">
        <a href="https://github.com/" target="_blank">GitHub</a>
        <a href="#contacto">Contacto</a>
      </div>
    </header>
  );
}

export default Header;