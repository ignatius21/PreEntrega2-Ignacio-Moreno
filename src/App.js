import './App.css';
import Navegacion from './components/Navegacion';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Inicio from '../src/pages/Inicio'
import Nosotros from '../src/pages/Nosotros'
import Blog from '../src/pages/Blog'
import Testimonios from '../src/pages/Testimonios'
import Tienda from './pages/Tienda';
import Footer from './components/Footer';


function App() {
  return (
    <>
        <BrowserRouter>
        <Navegacion />
          <Routes>
            <Route exact path="/" element={<Inicio />}></Route>
            <Route exact path="/nosotros" element={<Nosotros />}></Route>
            <Route exact path="/tienda" element={<Tienda />}></Route>
            <Route exact path="/blog" element={<Blog />}></Route>
            <Route exact path="/testimoniales" element={<Testimonios />}></Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
    </>
  );
}

export default App;
