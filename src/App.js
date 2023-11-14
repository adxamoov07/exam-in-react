import { Route, Routes } from 'react-router';
import './App.css';
import Home from './pages/home/Home'
import Heart from './pages/heart/Heart';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/heart' element={<Heart />} />
      </Routes>
    </div>
  );
}

export default App;
