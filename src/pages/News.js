import thumbnail from "../images/Tintuc/thumbnail.png"
import thumbnail02 from "../images/Tintuc/thumbnail02.png"
import thumbnail03 from "../images/Tintuc/thumbnail_03.png"
import '../css/tintuc.css'

function News(){
    return(
        <div>
            <section class="content pt-5">
        <h2 class="text-center title">TIN TỨC</h2>
        <div class="main-content col-8 d-flex justify-content-between flex-wrap m-auto">
            <div class="post pt-5">
                <img src={thumbnail} alt=""/>
                <h4 class="pt-3"><a class="post-title" href="!#">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a></h4>
                <p class="pt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, amet necessitatibus consequatur animi fugit iusto architecto, nihil, a ex ad nostrum blanditiis aliquid </p>
            </div>
            <div class="post pt-5">
                <img src={thumbnail02} alt=""/>
                <h4 class="pt-3"><a class="post-title" href="!#">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a></h4>
                <p class="pt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, amet necessitatibus consequatur animi fugit iusto architecto, nihil, a ex ad nostrum blanditiis aliquid </p>
            </div>
            <div class="post pt-5">
                <img src={thumbnail03} alt=""/>
                <h4 class="pt-3"><a class="post-title" href="!#">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a></h4>
                <p class="pt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, amet necessitatibus consequatur animi fugit iusto architecto, nihil, a ex ad nostrum blanditiis aliquid </p>
            </div>
            <div class="post pt-5">
                <img src={thumbnail} alt=""/>
                <h4 class="pt-3"><a class="post-title" href="!#">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a></h4>
                <p class="pt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, amet necessitatibus consequatur animi fugit iusto architecto, nihil, a ex ad nostrum blanditiis aliquid </p>
            </div>
            <div class="post pt-5">
                <img src={thumbnail02} alt=""/>
                <h4 class="pt-3"><a class="post-title" href="!#">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a></h4>
                <p class="pt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, amet necessitatibus consequatur animi fugit iusto architecto, nihil, a ex ad nostrum blanditiis aliquid </p>
            </div>
            <div class="post pt-5">
                <img src={thumbnail03} alt=""/>
                <h4 class="pt-3"><a class="post-title" href="!#">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a></h4>
                <p class="pt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, amet necessitatibus consequatur animi fugit iusto architecto, nihil, a ex ad nostrum blanditiis aliquid </p>
            </div>
            <div class="post pt-5">
                <img src={thumbnail} alt=""/>
                <h4 class="pt-3"><a class="post-title" href="!#">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a></h4>
                <p class="pt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, amet necessitatibus consequatur animi fugit iusto architecto, nihil, a ex ad nostrum blanditiis aliquid </p>
            </div>
            <div class="post pt-5">
                <img src={thumbnail02} alt=""/>
                <h4 class="pt-3"><a class="post-title" href="!#">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a></h4>
                <p class="pt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, amet necessitatibus consequatur animi fugit iusto architecto, nihil, a ex ad nostrum blanditiis aliquid </p>
            </div>
            <div class="post pt-5">
                <img src={thumbnail03} alt=""/>
                <h4 class="pt-3"><a class="post-title" href="!#">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a></h4>
                <p class="pt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, amet necessitatibus consequatur animi fugit iusto architecto, nihil, a ex ad nostrum blanditiis aliquid </p>
            </div>
        </div>
        <div class="list-pages d-flex justify-content-between m-auto pb-5 pt-5">
            <div class="pages text-center">1</div>
            <div class="pages text-center">2</div>
            <div class="pages text-center">3</div>
            <div class="pages text-center">4</div>
            <div class="pages text-center">{'>'}</div>
        </div>
    </section>
        </div>
    )
}

export default News;