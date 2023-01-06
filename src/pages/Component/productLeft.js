

function ProductLeft(){
    return(
        <div class="left-block col-2 p-0">
                            <p class="blur">Bộ lọc sản phẩm</p>
                            <div class="type-identifier">
                                <h3>Loại sản phẩm</h3>
                                <div class="d-flex pt-3">
                                    <input type="checkbox"/>
                                    <label class="m-0 pl-2 blur">Trà xanh Thái nguyên</label>
                                </div>
                                <div class="d-flex pt-2">
                                    <input type="checkbox"/>
                                    <label class="m-0 pl-2 blur">Trà Ôolong</label>
                                </div>
                                <div class="d-flex pt-2">
                                    <input type="checkbox"/>
                                    <label class="m-0 pl-2 blur">Trà Shan Tuyết</label>
                                </div>
                                <div class="d-flex pt-2">
                                    <input type="checkbox"/>
                                    <label class="m-0 pl-2 blur">Trà nhài</label>
                                </div>
                                <div class="d-flex pt-2">
                                    <input type="checkbox"/>
                                    <label class="m-0 pl-2 blur">Trà thảo dược</label>
                                </div>
                                <div class="d-flex pt-2">
                                    <input type="checkbox"/>
                                    <label class="m-0 pl-2 blur">Dụng cụ pha trà</label>
                                </div>
                                <div class="d-flex pt-2 pb-5">
                                    <input type="checkbox"/>
                                    <label class="m-0 pl-2 blur">Nước pha trà</label>
                                </div>
                            </div>  
                            <div class="price-identifier">
                                <h3>Giá thành</h3>
                                <input class="slide" type="range" min="50.000" max="200.000"/>
                                <p class="blur">Từ 50.000 đến 200.000</p>
                            </div>
                            <div class="brand-identifier">
                                <h3>Thương hiệu</h3>
                                <div class="d-flex pt-2">
                                    <input type="checkbox"/>
                                    <label class="m-0 pl-2 blur">Trà Tân Cương xanh</label>
                                </div>
                                <div class="d-flex pt-2">
                                    <input type="checkbox"/>
                                    <label class="m-0 pl-2 blur">Trà Sen Tây Hồ</label>
                                </div>
                                <div class="d-flex pt-2 pb-5">
                                    <input type="checkbox"/>
                                    <label class="m-0 pl-2 blur">Trà Lộc Thân</label>
                            </div>
                        </div>
                        </div>
    )
}

export default ProductLeft