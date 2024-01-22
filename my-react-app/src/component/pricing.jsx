import view from "../component/asset/blank.png"
import './pricing.scss'
function Pricing() {
    return(
        <div>
            <div class="pricing">
                <h1>Price & Planning</h1>
                <p>
                    Better off than with most other themes since all of the customization<br/>
                    are done right from within the making super.
                </p>
            </div>
           <div class="pricing-planning">
                <div class="top-planning">
                    <div class="planning">
                        <img src={view} class="tiny-image" alt="view-2"/>
                        <h1 class="text-overlay">$580</h1>
                    </div>
                    <div class="planning">
                        <h1>Golden</h1>
                        <p>Monthly</p>
                    </div>
                </div>
                <div class="top-planning">
                    <div class="planning">
                        <img src={view} class="tiny-image" alt="view-2"/>
                        <h1 class="text-overlay">$670</h1>
                    </div>
                    <div class="planning">
                        <h1>Business</h1>
                        <p>Monthly</p>
                    </div>
                </div>
                <div class="top-planning">
                    <div class="planning">
                        <img src={view} class="tiny-image" alt="view-2"/>
                        <h1 class="text-overlay">$920</h1>
                    </div>
                    <div class="planning">
                        <h1>Platinum</h1>
                        <p>Monthly</p>
                    </div>
                </div>
           </div>
           <div class="addition">
                <div class="pricing-note1">
                    <p class="tag">
                        Unique & Clean Design
                        Fresh Hand Coding
                        Fully Mobile Responsive
                        Money Back Guarantee
                        24/7 Support
                    </p>
                    <h1 class="add">+</h1>
                </div>
                <div class="pricing-note2">
                    <p class="tag">
                        Unique & Clean Design
                        Fresh Hand Coding
                        Fully Mobile Responsive
                        Money Back Guarantee
                        24/7 Support
                    </p>
                    <h1 class="add">+</h1>
                </div >
                <div class="pricing-note3">
                    <p class="tag">
                        Unique & Clean Design
                        Fresh Hand Coding
                        Fully Mobile Responsive
                        Money Back Guarantee
                        24/7 Support
                    </p>
                    <h1 class="add">+</h1>
                </div>
           </div>
        </div>
    )
}
export default Pricing