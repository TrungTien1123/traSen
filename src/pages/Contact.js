import '../css/lienhe.css'

function Contact(){
    return(
        <div>
            <section className="content">
                <div className="form">
                    <h1>LIÊN HỆ VỚI CHÚNG TÔI</h1>
                    <div className="pt-4">
                        <input className="infor pl-3" type="text" placeholder="Họ tên"/>
                    </div>
                    <div className="pt-3">
                        <input className="infor pl-3" type="email" placeholder="Email"/>
                    </div>
                    <div className="pt-3">
                        <input className="infor pl-3" type="number" placeholder="Số điện thoại"/>
                    </div>
                    <div className="pt-3">
                        <input className="infor pl-3" type="text" placeholder="Nội dung"/>
                    </div>
                    <div className="pt-3">
                        <input className="btn text-center" type="submit"/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;