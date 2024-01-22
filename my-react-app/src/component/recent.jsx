import './recent.scss'
import view from "../component/asset/1 (1).png"
import view1 from "../component/asset/pills.png"
import view2 from "../component/asset/diesel.png"
import view3 from "../component/asset/killer.png"
import view4 from "../component/asset/pingdom.png"
import view5 from "../component/asset/unilever.png"
import view6 from "../component/asset/google.png"
function Recent() {
    return(
        <div>
            <div class="recent-post">
                <h1>Our Recent Post</h1>
                <p>
                Better off than with most other themes since all of the customization<br/>
                are done right from within the making super.
                </p>
            </div>
            <div class="maximize">
                <div class="antioxidant">
                    <div>
                        <img src={view} alt="view-2"/>
                    </div>
                    <div>
                        <h2 class="oxens">Antioxidants maximize the training oxen effect.</h2>
                        <p class="date">22 March, 2019</p>
                        <p class="oxen">
                            Activate navigation page throughoue your them selection onesimple option the admin area doing
                        </p>
                    </div>
                </div>
                <div class="antioxidant">
                    <div>
                        <img src={view1} alt="view-2"/>
                    </div>
                    <div>
                        <h2 class="oxens">Antioxidants maximize the training oxen effect.</h2>
                        <p class="date">22 March, 2019</p>
                        <p class="oxen">
                            Activate navigation page throughoue your them selection onesimple option the admin area doing
                        </p>
                    </div>
                </div>
            </div>
            <div class="logos">
                <img src={view2} class="unilever" alt="view-2"/>
                <img src={view3} class="unilever" alt="view-2"/>
                <img src={view4} class="unilever" alt="view-2"/>
                <img src={view5} class="unilever" alt="view-2"/>
                <img src={view6} class="unilever" alt="view-2"/>
            </div>
        </div>
    )
}
export default Recent