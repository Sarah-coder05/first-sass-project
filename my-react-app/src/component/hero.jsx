import './hero.scss'
import view2 from "../component/asset/discount.jpg"
import view3 from "../component/asset/shipping.jpg"
import view4 from "../component/asset/moneyback.jpg"
function Hero() {
    return(
        <div class="heroes">
            <div class="hero">
                <img src={view3} class="view" alt="view-2"/>
                <div>
                    <h3 class="discount">Free Shipping</h3>
                    <p class="page">
                        Page activate navigation any throughout your the selection onesimple option the admin area doing create.
                    </p>
                </div>
            </div>
            <div class="hero">
                <img src={view2} class="view" alt="view-2"/>
                <div>
                    <h3 class="discount">Gift Discount</h3>
                    <p class="page">
                        Page activate navigation any throughout your the selection onesimple option the admin area doing create.
                    </p>
                </div>
            </div>
            <div class="hero">
                <img src={view4} class="view" alt="view-2"/>
                <div>
                    <h3 class="discount">Money Back</h3>
                    <p class="page">
                        Page activate navigation any throughout your the selection onesimple option the admin area doing create.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Hero