
import product02 from "../../images/Chitietsanpham/product02.png"

function CartItem() {
    return(
        <div className="miniCart-item">
            <div className="cartItem-img">
                <img src={product02} alt=""/>
                <button>
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div className="cartItem-box">
                <div className="cartItem-boxInfo">
                    <h3 className="cartItem-infoName">Tra sen</h3>
                    <div className="cartItem-infoPrice">
                        <p className="cartItem-newPrice">2.039.000 ₫</p>
    
                    </div>
                </div>
                <div className="cartItem-itemOption">
                    <p className="cartItem-option">100g</p>
                    <div className="cartItem-btnQuantity">  
                        <button><i className="fa-solid fa-minus"></i></button>
                        <p className="quantity-text">Qty: 1</p>
                        <button><i className="fa-solid fa-plus"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;