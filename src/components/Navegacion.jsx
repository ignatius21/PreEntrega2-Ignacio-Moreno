import { Link,NavLink } from "react-router-dom"
import Carrito from "./Carrito"

const Navegacion = () => {
  return (
      <>
          <NavLink className="navbar navbar-expand-lg bg-body-tertiary text-decoration-none">
              <div className="container-fluid">
                  <Link className="navbar-brand text-uppercase gap-5 fw-bold" to="/">Ofi<span className="text-primary">Mueble</span></Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-uppercase fw-ligth">
                          <li className="nav-item">
                              <Link className="nav-link" aria-current="page" to="nosotros">Nosotros</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="tienda">Tienda</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="blog">Blog</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="testimoniales">Testimonios</Link>
                          </li>
                      </ul>
                      <div className="d-flex">
                          <Carrito/>
                      </div>
                  </div>
              </div>
          </NavLink>
      </>
  )
}

export default Navegacion