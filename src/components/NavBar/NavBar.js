import CartWidget from "../CartWidget/CartWidget"

const NavBar = ()=>{
        return(
            <nav>

                <h3>ChulisInn</h3>
                <div>
                    <button> Mochilas </button>
                    <button> Calzado </button>
                    <button> Linternas </button>
                </div>
                <CartWidget/>
            </nav>
        )
    } 


export  default NavBar