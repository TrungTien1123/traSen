import banner from'../images/trangchu/banner.png'
import product01 from "../images/trangchu/product01.png"
import phone from "../images/trangchu/phone.png"
import nextleft from "../images/trangchu/next-left.png"
import nextright from "../images/trangchu/next-right.png"
import listback from "../images/trangchu/list-product-back.png"
import person from "../images/trangchu/person01.png"
import '../css/trangchu.css'

function Home(){
    return(
        <div>
        <div className="banner">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img className="d-block w-100" src={banner} alt="First slide"/>
                <div className="carousel-caption d-none d-md-block position-absolute">
                    <h5 className="text-left">TRÀ SEN TÂY HỒ</h5>
                    <h4 className="text-center">Tinh hoa trà Việt</h4>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores expedita non ea </p>
                    <div className="btn position-absolute">
                        <a href="!#"> THỬ NGAY</a>                       
                    </div>
                </div>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src={banner} alt="Second slide"/>
                <div className="carousel-caption d-none d-md-block position-absolute">
                    <h5 className="text-left">TRÀ SEN TÂY HỒ</h5>
                    <h4 className="text-center">Tinh hoa trà Việt</h4>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores expedita non ea </p>
                    <div className="btn position-absolute">
                        <a href="!#"> THỬ NGAY</a>                       
                    </div>
                </div>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src={banner} alt="Third slide"/>
                <div className="carousel-caption d-none d-md-block position-absolute">
                    <h5 className="text-left">TRÀ SEN TÂY HỒ</h5>
                    <h4 className="text-center">Tinh hoa trà Việt</h4>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores expedita non ea </p>
                    <div className="btn position-absolute">
                        <a href="!#"> THỬ NGAY</a>                       
                    </div>
                </div>
                </div>
            </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>            
        </div>
        <div className="content pt-5 ">
            <div className="signature pt-5 col-8 m-auto ">
                <h2 className="text-center title">SẢN PHẨM NỔI BẬT</h2>
                <div className="list-product justify-content-between d-flex pt-4 position-relative">
                    <div className="product">
                        <img src={product01} alt=""/>
                        <h5 className="text-center pt-3">TRÀ ƯỚP BÔNG SEN</h5>
                    </div>
                    <div className="product">
                        <img src={product01} alt=""/>
                        <h5 className="text-center pt-3">TRÀ ƯỚP NHỊ SEN</h5>
                    </div>
                    <div className="product">
                        <img src={product01} alt=""/>
                        <h5 className="text-center pt-3">TRÀ SHAN TUYẾT</h5>
                    </div>
                    <div className="product">
                        <img src={product01} alt=""/>
                        <h5 className="text-center pt-3">TRÀ Ô LONG</h5>
                    </div>
                </div>
                <img className="btn-left position-absolute" src={nextleft} alt=""/>
                <img className="btn-right position-absolute" src={nextright} alt=""/>
                <img className="list-product-back position-absolute" src={listback} alt=""/>
            </div>
            <div className="introduction position-relative">
                <div className="intro-content">
                    <h2 className="intro-title text-center title">GIỚI THIỆU</h2>
                    <div>
                        <div className="intro-caption d-none d-md-block ">
                            <h1 className="">Trà sen Bách Diệp</h1>
                            <p className="intro-infor text-justify">Trà được làm từ búp sen tươi hái từ những đầm sen lớn tại Hồ Tây Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit rerum illum, maiores eligendi illo, cumque voluptatem nulla, itaque magnam et possimus doloremque officiis bl</p>
                            <div className="btn">
                                <a href="!#"> ĐỌC THÊM</a>                       
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact position-absolute d-flex">
                    <div className="phone"><img src={phone} alt=""/></div>
                    <div className="phone-number"> <h4>9999.999.999</h4></div>
                </div>
            </div>
            <div className="about-us ">
                <div className="about-us-content pt-5 col-8 m-auto">
                    <h2 className="text-center title">NGHỆ NHÂN TRÀ ĐẠO</h2>
                    <div className="list-person d-flex justify-content-between pt-5">
                        <div className="person">
                            <img src={person} alt=""/>
                            <h4 className="text-center">TS. Nguyễn Trung Cao</h4>
                            <p className="text-center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, consectetur iure? Nam cupiditate, dolorem excepturi iure 
                            </p>
                        </div>
                        <div className="person">
                            <img src={person} alt=""/>
                            <h4 className="text-center">TS. Nguyễn Trung Cao</h4>
                            <p className="text-center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, consectetur iure? Nam cupiditate, dolorem excepturi iure 
                            </p>
                        </div>
                        <div className="person">
                            <img src={person} alt=""/>
                            <h4 className="text-center">TS. Nguyễn Trung Cao</h4>
                            <p className="text-center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, consectetur iure? Nam cupiditate, dolorem excepturi iure 
                            </p>
                        </div>
                        <div className="person">
                            <img src={person} alt=""/>
                            <h4 className="text-center">TS. Nguyễn Trung Cao</h4>
                            <p className="text-center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, consectetur iure? Nam cupiditate, dolorem excepturi iure 
                            </p>
                        </div>
                        <div className="person">
                            <img src={person} alt=""/>
                            <h4 className="text-center">TS. Nguyễn Trung Cao</h4>
                            <p className="text-center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, consectetur iure? Nam cupiditate, dolorem excepturi iure 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="buy pt-5 ">
                <h2 className="text-center pt-5 title">MUA NGAY</h2>
                <div className="form d-flex m-auto justify-content-between pt-5">
                    <input type="text" placeholder="Số điện thoại/Email"/>
                    <div className="btn">
                        GỬI
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Home;