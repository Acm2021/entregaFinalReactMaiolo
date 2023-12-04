import ItemCount from "../ItemCount/ItemCount";

const ItemDetail =({id,name,img,category,description,price,stock})=>{
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
            <section className="card-body">
                <p className="card-text">
                    Categoría:{category}
                </p>
                <p className="card-text">
                    Descripción:{description}
                </p>
                <p className="card-text">
                    precio: ${price}
                </p>
            </section>
            <footer className='card-footer'>
                <ItemCount initial={1} stock={stock} onAdd={(quantity)=> console.log('Cantidad agregada',quantity)}/>
            </footer>
        </article>
    )
}

export default ItemDetail