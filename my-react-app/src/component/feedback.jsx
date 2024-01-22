import './feedback.scss'
import view from "../component/asset/testimonial-left.jpg"
import view1 from "../component/asset/clint.png"
import view2 from "../component/asset/quote-left.png"
function Feedback() {
    return(
        <div class="feedback">
            <div class="overlay">
                <img src={view} class="bigger" alt="view-2"/>
                <img src={view1} class="smaller" alt="view-2"/>
                <div className="transit-containers">
                    <div class="transit"></div>
                    <div class="transit"></div>
                    <div class="transit"></div>
                </div>
            </div>
            <div class="feedback-page">
                <img src={view2} class="quote-left" alt="view-2"/>
                <h1 class="feedback-heading">Some feedbacks from <br/>our customers</h1>
                <p class="feedback-page">
                    Users to manage their site with ease however the problem this is that you never know what might be
                    lurking beneath the surface of your beautiful new theme poorly written code is a serious issue that
                    can lead to huge problems with you along the long run use improper or depreciated code can break
                    layouts corrupt database or worse. 
                    
                </p>
            </div>
        </div>
    );
}
export default Feedback