import cart from "./assets/cart.png"
import './CartWidget.css';

function CartWidget(){
    return (
        <div className="cart-widget-container">
          <img src={cart} alt="cart-widget" className="cart-icon" />
          <span className="cart-counter">0</span>
        </div>
      );
}

export default CartWidget;