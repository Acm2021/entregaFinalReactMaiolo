import CartWidget from "../CartWidget/CartWidget"

const NavBar = ()=>{
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <h3 className="navbar-brand">ChulisInn</h3>
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <button className="nav-item " > Mochilas </button>
                        <button className="nav-item "> Calzado </button>
                        <button className="nav-item "> Linternas </button>
                    </div>
                </div>
                <CartWidget/>
            </nav>
        )
    } 


export  default NavBar