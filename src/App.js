import logo from'./images/Layout/Logo.png'
import './App.css';
import {Link, Outlet} from "react-router-dom"



function App() {
  return (
   <div>
    <header className="d-flex justify-content-between container col-8 m-auto pt-3">
        <div className="col-3 left-menu">
            <img src={logo} alt="logo"/> 
        </div>
        <div className="right-menu">
            <ul className=" d-flex justify-content-between align-items-center ">
                <li className="item">
                    <Link to={'/'}>TRANG CHỦ</Link>
                </li>
                <li className="item">
                    <Link to={'/about'}>GIỚI THIỆU</Link>
                </li>
                <li className="item">
                    <Link to={'/products'}>SẢN PHẨM</Link>
                </li>
                <li className="item">
                    <Link to={'/news'}>TIN TỨC</Link>
                </li>
                <li className="item">
                    <Link to={'/contact'}>LIÊN HỆ</Link>
                </li>
            </ul>
        </div>
    </header>
    <div className="body">
      <Outlet/>
    </div>
    <footer>
        <div className="col-8 m-auto d-flex justify-content-between align-items-center ">
            <div className="information">
                <div>
                    <img src={logo} alt="logo"/>
                </div>
                <div className="detail pt-3">
                    <div>
                    <p>0963210895</p>
                    </div>
                    <div>
                    <p>trungtien112003@gmail.com</p>
                    </div>
                    <div>
                    <p>C12,TT Kim Liên, Đống Đa, Hà Nội</p>
                    </div>
                </div>
            </div>
            <div className="information">
                <div>
                    <h4>VỀ CHÚNG TÔI</h4>
                </div>
                <div className="detail pt-3">
                    <div>
                    <Link to={'/about'}>Giới thiệu</Link>
                    </div>
                    <div>
                    <Link to={'/products'}>Sản phẩm</Link>
                    </div>
                    <div>
                    <Link to={'/news'}>Tin tức</Link>
                    </div>
                </div>
            </div>
            <div className="information">
                <div>
                    <h4>LIÊN HỆ</h4>
                </div>
                <div className="detail">
                    <div className="d-flex ">
                        <a className="pr-2" href="https://www.youtube.com/@ChungTrinhEduChannel">
                        <i className="fa-brands icon fa-youtube"></i>
                        </a>
                        <a className="pr-2" href="!#">
                            <i className="fa-brands icon fa-instagram"></i>
                        </a>
                        <a className="pr-2" href="https://www.facebook.com/trung.tien.52090/">
                            <i className="fa-brands icon fa-square-facebook"></i>
                        </a>
                    </div>
                    <div>
                    <p>Copyright 2010-2020</p>
                    </div>
                    <div>
                    <p>Devmaster.All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
   </div>
  );
}

export default App;
