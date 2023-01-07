import {connect} from 'react-redux'
import { toggleCart } from '../../reduxModules';
import rating from "../../images/Chitietsanpham/rating.png"
import product02 from "../../images/Chitietsanpham/product02.png"


function productDetails(props){
    let {productItem, toggleCart}=props;
    return(
        <div class="product position-relative pt-5">
            <div class="rating">
                <img src={rating} alt=""/>
            </div>
            <div class="badges position-absolute">
                <span>New</span>
            </div>
            <div>
                <img src={product02} alt=""/>
            </div>
            <div class="detail">
                <button onClick={()=>toggleCart(true)}>Thêm vào giỏ</button>
                <h4 class="text-center">{productItem.name}</h4>
                <div class="product-information d-flex justify-content-center">
                    <div class="price d-flex">
                    <h4>{productItem.price}</h4><span class="currency-unit">VND</span>
                    </div>
                    <select class="pl-2" name="weight" id="weight">
                        <option value="100g">100g</option>
                        <option value="200g">200g</option>
                        <option value="500g">500g</option>
                        <option value="1kg">1kg</option>
                    </select>
                </div>
            </div>
    </div>
        
    )
}
const mapDispatchToProps = {toggleCart}
export default connect(null,mapDispatchToProps)(productDetails);