import view from "../component/asset/shape.png"
import view1 from "../component/asset/bone.png"
import './middle.scss'
function Middle(){
    return(
        <div class="middle">
            <div class="energy">
                <div class="ener">
                    <h2>Increased energy</h2>
                    <p class="body">
                        Structure for your site is already built. Keep in mind that even if you don use the demo 
                        content be much better than with most themes since.
                    </p>
                </div>
                <div class="ener">
                    <h2>Bone Builder</h2>
                    <p class="body">
                        Making it super easy to configure your site as compared most the typical admin panels. You will
                        be pleasantly surprised how easy it is to setup 
                    </p>
                </div>
                <div class="ener">
                    <h2>Stress Realize</h2>
                    <p class="body">
                        Structure for your site is already built. Keep in mind that even if you don use the demo content 
                        be much better than with most themes since.
                    </p>
                </div>
            </div>
            <div>
                <img src={view} class="photo" alt="view-2"/>
            </div>
            <div>
                <img src={view1} class="photo-1" alt="view-2"/>
            </div>
        </div>
    );
}
export default Middle