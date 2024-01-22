import view from "../component/asset/logo.png"
import view1 from "../component/asset/1.png"
function Header() {
    return(
       <div class="container">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&family=Lexend+Deca:wght@200&family=Noto+Sans:wght@300&display=swap" rel="stylesheet"/>
            </head>
            <nav>
                <div class="logo">
                    <img src={view} class="photo-2" alt="view-2"/>
                </div>
                <ul>
                    <li class="home"><a href="#home">Home</a>
                        <div class="dropdown-content">
                            <a href="#submenu1">Home One</a>
                            <hr class="dotted"/>
                            <a href="#submenu2">Home Two</a>
                        </div>
                    </li>
                    <li><a href="#Features">Features</a></li>
                    <li><a href="#Products">Products</a></li>
                    <li><a href="#Price">Price</a></li> 
                    <li><a href="#Blog">Blog</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#Order now" class="order">Order now</a></li>
                </ul>
            </nav>  
           <div class="header">
                <div>
                    <h1 class="powerful">We Provide Powerful<br/> Medical Supplement.</h1>
                    <p>
                        Allows you to upload your own favorite images to individual setting an image on a single 
                        page will overwrite your.
                    </p>
                    <h3>
                        <a href="https://eds.edatastyle.com/demo/Joytun/index.html#" class="purchase">Purchase Now</a>
                    </h3>
                </div>
                <div>
                    <img src={view1} class="photo-2" alt="view-2"/>
                </div>
           </div>
       </div>
    );
}
export default Header