
import ProductDetails from "./productDetails";
function ProductRight(){
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
                                <ProductDetails/>
                                {/* <div class="product position-relative pt-5">
                                    <div class="rating"><img src={rating} alt=""/></div>
                                    <div class="badges position-absolute">
                                        <span>New</span>
                                    </div>
                                    <div>
                                        <img src={product02} alt=""/>
                                    </div>
                                    <div class="detail">
                                        <h4 class="text-center">Trà Búp</h4>
                                            <div class="product-information d-flex justify-content-center">
                                            <div class="price d-flex">
                                            <h4>70,000</h4><span class="currency-unit">VND</span>
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
                                <div class="product position-relative pt-5">
                                    <div class="rating"><img src={rating} alt=""/></div>
                                    <div class="badges position-absolute">
                                        <span>New</span>
                                    </div>
                                    <div>
                                        <img src={product02} alt=""/>
                                    </div>
                                    <div class="detail">
                                        <h4 class="text-center">Trà Búp</h4>
                                            <div class="product-information d-flex justify-content-center">
                                            <div class="price d-flex">
                                            <h4>70,000</h4><span class="currency-unit">VND</span>
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
                                <div class="product position-relative pt-5">
                                    <div class="rating"><img src={rating} alt=""/></div>
                                    <div class="badges position-absolute">
                                        <span>New</span>
                                    </div>
                                    <div>
                                        <img src={product02} alt=""/>
                                    </div>
                                    <div class="detail">
                                        <h4 class="text-center">Trà Búp</h4>
                                            <div class="product-information d-flex justify-content-center">
                                            <div class="price d-flex">
                                            <h4>70,000</h4><span class="currency-unit">VND</span>
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
                                <div class="product position-relative pt-5">
                                    <div class="rating"><img src={rating} alt=""/></div>
                                    <div class="badges position-absolute">
                                        <span>New</span>
                                    </div>
                                    <div>
                                        <img src={product02} alt=""/>
                                    </div>
                                    <div class="detail">
                                        <h4 class="text-center">Trà Búp</h4>
                                            <div class="product-information d-flex justify-content-center">
                                            <div class="price d-flex">
                                            <h4>70,000</h4><span class="currency-unit">VND</span>
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
                                <div class="product position-relative pt-5">
                                    <div class="rating"><img src={rating} alt=""/></div>
                                    <div class="badges position-absolute">
                                        <span>New</span>
                                    </div>
                                    <div>
                                        <img src={product02} alt=""/>
                                    </div>
                                    <div class="detail">
                                        <h4 class="text-center">Trà Búp</h4>
                                            <div class="product-information d-flex justify-content-center">
                                            <div class="price d-flex">
                                            <h4>70,000</h4><span class="currency-unit">VND</span>
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
                                <div class="product position-relative pt-5">
                                    <div class="rating"><img src={rating} alt=""/></div>
                                    <div class="badges position-absolute">
                                        <span>New</span>
                                    </div>
                                    <div>
                                        <img src={product02} alt=""/>
                                    </div>
                                    <div class="detail">
                                        <h4 class="text-center">Trà Búp</h4>
                                            <div class="product-information d-flex justify-content-center">
                                            <div class="price d-flex">
                                            <h4>70,000</h4><span class="currency-unit">VND</span>
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
                                <div class="product position-relative pt-5">
                                    <div class="rating"><img src={rating} alt=""/></div>
                                    <div class="badges position-absolute">
                                        <span>New</span>
                                    </div>
                                    <div>
                                        <img src={product02} alt=""/>
                                    </div>
                                    <div class="detail">
                                        <h4 class="text-center">Trà Búp</h4>
                                            <div class="product-information d-flex justify-content-center">
                                            <div class="price d-flex">
                                            <h4>70,000</h4><span class="currency-unit">VND</span>
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
                                <div class="product position-relative pt-5">
                                    <div class="rating"><img src={rating} alt=""/></div>
                                    <div class="badges position-absolute">
                                        <span>New</span>
                                    </div>
                                    <div>
                                        <img src={product02} alt=""/>
                                    </div>
                                    <div class="detail">
                                        <h4 class="text-center">Trà Búp</h4>
                                            <div class="product-information d-flex justify-content-center">
                                            <div class="price d-flex">
                                            <h4>70,000</h4><span class="currency-unit">VND</span>
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
                                <div class="product position-relative pt-5">
                                    <div class="rating"><img src={rating} alt=""/></div>
                                    <div class="badges position-absolute">
                                        <span>New</span>
                                    </div>
                                    <div>
                                        <img src={product02} alt=""/>
                                    </div>
                                    <div class="detail">
                                        <h4 class="text-center">Trà Búp</h4>
                                            <div class="product-information d-flex justify-content-center">
                                            <div class="price d-flex">
                                            <h4>70,000</h4><span class="currency-unit">VND</span>
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
                                <div class="product position-relative pt-5">
                                    <div class="rating"><img src={rating} alt=""/></div>
                                    <div class="badges position-absolute">
                                        <span>New</span>
                                    </div>
                                    <div>
                                        <img src={product02} alt=""/>
                                    </div>
                                    <div class="detail">
                                        <h4 class="text-center">Trà Búp</h4>
                                            <div class="product-information d-flex justify-content-center">
                                            <div class="price d-flex">
                                            <h4>70,000</h4><span class="currency-unit">VND</span>
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
                                <div class="product position-relative pt-5">
                                    <div class="rating"><img src={rating} alt=""/></div>
                                    <div class="badges position-absolute">
                                        <span>New</span>
                                    </div>
                                    <div>
                                        <img src={product02} alt=""/>
                                    </div>
                                    <div class="detail">
                                        <h4 class="text-center">Trà Búp</h4>
                                            <div class="product-information d-flex justify-content-center">
                                            <div class="price d-flex">
                                            <h4>70,000</h4><span class="currency-unit">VND</span>
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
                                <div class="product position-relative pt-5">
                                    <div class="rating"><img src={rating} alt=""/></div>
                                    <div class="badges position-absolute">
                                        <span>New</span>
                                    </div>
                                    <div>
                                        <img src={product02} alt=""/>
                                    </div>
                                    <div class="detail">
                                        <h4 class="text-center">Trà Búp</h4>
                                            <div class="product-information d-flex justify-content-center">
                                            <div class="price d-flex">
                                            <h4>70,000</h4><span class="currency-unit">VND</span>
                                            </div>
                                            <select class="pl-2" name="weight" id="weight">
                                                <option value="100g">100g</option>
                                                <option value="200g">200g</option>
                                                <option value="500g">500g</option>
                                                <option value="1kg">1kg</option>
                                            </select>
                                        </div>
                                    </div>
                                </div> */}
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

export default ProductRight;