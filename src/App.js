import './App.css';
import Category from './components/Categories/Category';
import Deal from './components/Deal/deal';
import End from './components/End/End';
import Footer from './components/Footer/Footer';
import Guide from './components/Guide/Guide';
import Header from './components/Header/Header';
import Help from './components/Help/Help';
import Products from './components/Products/Products';
import RecommendedProducts from './components/RecomendedProducts/RecomendedProducts';
import SimpleSlider from './components/Slider/Slider';
import ToysSale from './components/ToysSale/ToysSale';

function App() {
  return (
    <div>
      <Header/>
      <Category/>
      <SimpleSlider/>
      <Products/>
      <RecommendedProducts/>
      <Guide/>
      <Deal/>
      <ToysSale/>
      <Help/>
      <Footer/>
      <End/>
    </div>
  );
}

export default App;
