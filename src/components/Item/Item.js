
import { Link, NavLink } from "react-router-dom"
const Item=({id,name,img,price,stock})=>{

    return(
        <article className="card mb-4">
            <header className="card-header">
                <h2 className="card-title">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="card-img-top"/>
            </picture>
            <section>
                <p className="card-text">
                    precio: ${price}
                </p>
                <p className="card-text">
                    Stock disponible:{stock}
                </p>
            </section>
            <footer className='card-footer'>
                <Link to={`/item/${id}`} className='btn btn-primary'>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item;