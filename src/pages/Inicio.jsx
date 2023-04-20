import fondo from '../img/principal.jpg';
import imagen1 from '../img/1.jpg'
import imagen2 from '../img/2.jpg'
import imagen3 from '../img/3.jpg'
import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
    <>
      <div>
        <img src={fondo} alt="imagen de fondo" className='img-fluid' />
      </div>
      <section class="bg-light py-5">
        <div class="container-xl">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <h4 class="text-center display-1">Muebles de <span className='text-primary'>diseño</span> </h4>
                </div>
            </div>
        </div>
    </section>

      <section className="container-xl py-5">
        <div className="row justify-content-center align-items-center">
            <div className="col-md-5 order-2 order-md-1">
                <img src={imagen1} alt="imagen presentacion" className="img-fluid"/>
            </div>
            <div className="col-md-5 order-1 order-md-2">
                <h2 className="fs-3 text-uppercase">Linea Moderna</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quis dignissimos. Magni non aut commodi minima similique odio consequuntur culpa sequi, praesentium nisi a saepe amet aperiam excepturi fugiat maxime.</p>
                <Link to="tienda" className="btn btn-dark">Ver Más</Link>
            </div>
        </div>
    </section>

    <section class="container-xl py-5">
        <div class="row justify-content-center align-items-center">
            <div class="col-md-5 order-2 order-md-2">
                <img src={imagen2} alt="imagen instructora" class="img-fluid"/>
            </div>
            <div class="col-md-5 order-1 order-md-1">
                <h2 class="fs-3 text-uppercase">LINEA<span class="text-primary">CLASICA</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quis dignissimos. Magni non aut commodi minima similique odio consequuntur culpa sequi, praesentium nisi a saepe amet aperiam excepturi fugiat maxime.</p>
                <Link to="tienda" className="btn btn-dark">Ver Más</Link>
            </div>
        </div>
    </section>

    <section class="container-xl py-5">
        <div class="row justify-content-center align-items-center">
            <div class="col-md-5 order-2 order-md-1">
                <img src={imagen3} alt="imagen instructora" class="img-fluid"/>
            </div>
            <div class="col-md-5 order-1 order-md-2">
                <h2 class="fs-3 text-uppercase"><span className='text-primary'>Linea</span> Vanguardista</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quis dignissimos. Magni non aut commodi minima similique odio consequuntur culpa sequi, praesentium nisi a saepe amet aperiam excepturi fugiat maxime.</p>
                <Link to="tienda" className="btn btn-dark">Ver Más</Link>
            </div>
        </div>
    </section>
    </>
  )
}

export default Inicio