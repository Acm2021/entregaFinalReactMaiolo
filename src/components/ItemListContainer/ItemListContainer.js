import { useCallback, useEffect, useState } from "react"
import { getProducts,getProductById, getProductsByCategory} from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import "./ItemListContainer.css";


function ItemListContainer({greeting}){
    const [products, setProducts]=useState([])
    
    const{categoryId} = useParams()
    /*console.log("ESTA ES LA CAT:",categoryId)*/
    
    useEffect(()=>{
        const asyncFunc = categoryId ? getProductsByCategory : getProducts
      
        asyncFunc(categoryId)
            .then(response =>{
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    },[categoryId])


    return(
            <div className="container mt-4">
                <h1>{greeting}</h1>
                <div className="ListGroup">
                <ItemList products={products}/>
                </div>
            </div>
    )
}

export default ItemListContainer