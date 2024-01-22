import './products.scss'
import view from "../component/asset/multi.jpg"
import view1 from "../component/asset/multi-1.jpg"
import view2 from "../component/asset/boost.jpg"
import view3 from "../component/asset/renew.jpg"
function Products() {
    return (
        <div>
            <div class="recent">
                <h1>Recent Products</h1>
                <p>
                    Better off than with most other themes since all of the customization
                    <br/>are done right from within the making super.
                </p>
            </div>
            <div>
                <nav class="product-list">
                    <ul class="p-l">
                        <li><a href="#Vitamins">Vitamins</a></li>
                        <li><a href="#Protein">Protein</a></li>
                        <li><a href="#Nutrition" class="nutrition">Nutrition</a></li>
                    </ul>
                </nav>
            </div>
            <div class="theme">
                <div class="vitamin">
                    <div class="bonus">
                        <p class="off">60% off</p>
                        <p class="dollars">$890</p>
                    </div>
                    <img src={view} class="bottles" alt="view-2"/>
                   <div>
                        <h3>Mens Vitamin</h3>
                        <p>
                            Most other themes since all from the making super
                        </p>
                   </div>
                </div>
                <div class="vitamin">
                    <div class="bonus">
                        <p class="off">40% off</p>
                        <p class="dollars">$600</p>
                    </div>
                    <img src={view1} class="bottles" alt="view-2"/>
                    <div>
                        <h3>Sparkling Antioxidant</h3>
                        <p>
                            Most other themes since all from the making super
                        </p>
                   </div>
                </div>
                <div class="vitamin">
                    <div class="bonus">
                        <p class="off">30% off</p>
                        <p class="dollars">$990</p>
                    </div>
                    <img src={view2} class="bottles" alt="view-2"/>
                    <div>
                        <h3>Nutritional shake</h3>
                        <p>
                            Most other themes since all from the making super
                        </p>
                   </div>
                </div>
                <div class="vitamin">
                    <div class="bonus">
                        <p class="off">80% off</p>
                        <p class="dollars">$800</p>
                    </div>
                    <img src={view3} class="bottles" alt="view-2"/>
                    <div>
                        <h3>Womens Protein</h3>
                        <p>
                            Most other themes since all from the making super
                        </p>
                   </div>
                </div>
            </div>
            <div className="transit-container">
                <div class="transit"></div>
                <div class="transit"></div>
                <div class="transit"></div>
            </div>
        </div>
    );
}
export default Products