import logo from '../assets/logo.jpg';

const NavBar = () => {
    return(
      <>
        <nav className="navbar navbar-expand-lg" style={{"backgroundColor": "black"}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/#" padding="0">
                    <img src={logo} alt="" width="80" height="80"></img>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active item_menu" aria-current="page" href="/#">Tablas</a>
                    <a className="nav-link item_menu" href="/#">Sangrías</a>
                    <a className="nav-link item_menu" href="/#">Kids</a>
                    <a className="nav-link item_menu" href="/#">Picnics</a>
                </div>
                </div>
            </div>
        </nav>
    
      </>
    );
};

export default NavBar;

 