import banner from "../images/Gioithieu/banner.png"
import title from "../images/Gioithieu/title.png"
import post01 from "../images/Gioithieu/post01.png"
import post02 from "../images/Gioithieu/post02.png"
import '../css/gioithieu.css'


function About(){
    return(
        <div>
            <div className="content pb-5">
                    <img className="position-relative" src={banner} alt="banner"/>
                <div className=" title position-absolute">
                    <img className="" src={title} alt="Title"/>
                </div>
                <div className="post col-8 m-auto pb-5">
                    <h2 className="text-center">GIỚI THIỆU</h2>
                    <p className="pt-3 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis cum quibusdam modi, magni provident asperiores maxime labore iure odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint similique impedit cupiditate! Commodi cupiditate a odio doloremque, exercitationem dolore voluptate quisquam, ullam reprehenderit labore sequi quasi rerum deleniti eveniet? Dolorum.</p>
                    <p className="pt-3 text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ipsum officiis amet quam nam et ex quae,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque libero aliquid pariatur sunt ipsam obcaecati sit veritatis dolorum commodi. Recusandae dignissimos accusamus maxime optio numquam molestias quidem sunt id odio. .</p>
                    <img src={post01} alt=""/>
                    <p className="pt-3 text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, cum quibusdam architecto sed placeat quas deleniti fuga? Velit officia labore saepe, hic, tenetur in, quam neque non accusantium a cum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam maiores iure eaque repellendus maxime molestias illo inventore aperiam sapiente. Quibusdam aperiam, fugiat quasi reprehenderit odio illo maiores eligendi ad?</p>
                    <p className="pt-3 text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis in porro commodi nulla ullam odio dolores voluptatibus expedita libero dolore repellat vitae praesentium mollitia voluptatem necessitatibus voluptate, aspernatur accusantium? Temporibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum vitae voluptatibus animi omnis molestias excepturi quaerat, quo repellat dolor nulla nostrum voluptate in aut illum, numquam veniam, maiores sunt eius.</p> 
                    <img src={post02} alt=""/>   
                </div>
            </div>
        </div>
    )
}

export default About;