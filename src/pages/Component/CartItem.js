import { addMore } from "../../reduxModules";
import { connect } from "react-redux";
function CartItem(props) {
    let {product,addMore}=props
    return(
        <div className="miniCart-item">
            <div className="cartItem-img">
                <img src={product.image} alt=""/>
                <button>
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div className="cartItem-box">
                <div className="cartItem-boxInfo">
                    <h3 className="cartItem-infoName">{product.name}</h3>
                    <div className="cartItem-infoPrice">
                        <p className="cartItem-newPrice">{product.price}đ</p>
    
                    </div>
                </div>
                <div className="cartItem-itemOption">
                    <p className="cartItem-option">100g</p>
                    <div className="cartItem-btnQuantity">  
                        <button><i className="fa-solid fa-minus"></i></button>
                        <p className="quantity-text">{product.quantity}</p>
                        <button onClick={()=>addMore(product)}><i className="fa-solid fa-plus"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchProps = {addMore}
export default connect(null,mapDispatchProps)(CartItem);