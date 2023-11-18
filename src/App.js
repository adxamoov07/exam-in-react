import { Route, Routes } from 'react-router';
import './App.css';
import Home from './pages/home/Home'
import Heart from './pages/heart/Heart';
import Profil from './pages/profil/Profil';
import Haridlar from './components/haridlar/Haridlar';
import Sharhlar from './components/sharhlar.css/Sharhlar';
import Cart from './pages/cart/Cart';
import SinglePage from './components/singlePage/SinglePage';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorite' element={<Heart />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/profil' element={<Profil />} >
          <Route path='/profil/haridlar' element={<Haridlar />} />
          <Route path='/profil/sharhlar' element={<Sharhlar />} />
        </Route>
        <Route path='/single-page/:id' element={<SinglePage />} />
      </Routes>
      
    </div>
  );
}

export default App;
