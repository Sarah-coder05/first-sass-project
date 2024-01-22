import './App.scss';
import Experience from './component/experience';
import Feedback from './component/feedback';
import Header from './component/header';
import Hero from './component/hero';
import Middle from './component/middle';
import Pricing from './component/pricing';
import Products from './component/products';
import Recent from './component/recent';
import Copyright from './component/copyright';

function App() {
  return (
    <>
    <Header />
    <Hero />
    <Middle />
    <Products />
    <Feedback />
    <Pricing />
    <Experience />
    <Recent />
    <Copyright />
    </>
  )
}

export default App;
