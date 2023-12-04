
import Item from "../Item/Item";



const ItemList=({products})=>{
    
    return (
        <div className="container-fluid">
          <div className="row">
            {products.map(prod => (
              <div key={prod.id} className="col-lg-4 col-md-4 col-12 mb-4">
                <Item {...prod} />
              </div>
            ))}
          </div>
        </div>
      );

}

export default ItemList