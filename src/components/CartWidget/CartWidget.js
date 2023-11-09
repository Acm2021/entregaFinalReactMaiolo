import cart from "./assets/cart.png"

function CartWidget(){
    return(
        <div>
            <img src={cart} alt="cart-Widget" width="50" height="35" />
            0
        </div>

    )

}

export default CartWidget;