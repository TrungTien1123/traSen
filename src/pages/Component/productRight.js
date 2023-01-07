import {connect} from 'react-redux';
import ProductDetails from "./productDetails";
function ProductRight(props){
    let {products}=props
    return(
        <div class="right-block col-9 p-0 ">
                            <div class="arrange">
                                <select class="p-1">
                                    <option value="1">Thứ tự mặc định</option>
                                    <option value="2">Giá thấp đến cao</option>
                                    <option value="3">Giá cao đến thấp</option>
                                    <option value="4">Xếp theo đánh giá</option>
                                    <option value="5">Xếp theo phổ biến</option>
                                </select>
                            </div>
                            <div class="list-products d-flex justify-content-between flex-wrap">
                                {/* <ProductDetails/> */}
                                {
                                    products.map(item=><ProductDetails key={item.id} productItem={item}/>)
                                }
                            </div>
                            <div class="list-pages d-flex justify-content-between m-auto pb-5 pt-5">
                                <div class="pages text-center">1</div>
                                <div class="pages text-center">2</div>
                                <div class="pages text-center">3</div>
                                <div class="pages text-center">4</div>
                                <div class="pages text-center">{">"}</div>
                            </div>
                        </div>
    )
}

const mapStateToProps = state =>({products:state.products})

export default connect(mapStateToProps)(ProductRight);