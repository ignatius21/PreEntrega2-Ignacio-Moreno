import { Link } from "react-router-dom"

const Footer = () => {

  return (
    
  
      <footer className="bg-dark text-white text-center">

          <div className="container p-4">

              <div className="row">

                  <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                      <Link to='/' className="text-uppercase fs-1 nav-link"><span className="text-primary">Ofi</span>Muebles</Link>

                      <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                          molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                          aliquam voluptatem veniam, est atque cumque eum delectus sint!
                      </p>
                  </div>

                  <div className="col-lg-6  mb-4 mb-md-0">

                      <ul className="list-unstyled mb-0">
                          <li className="nav-item">
                              <Link to="nosotros" className=" nav-link text-white text-uppercase">nosotros</Link>
                          </li>
                          <li className="nav-item">
                              <Link to="tienda" className="nav-link text-white text-uppercase">tienda</Link>
                          </li>
                          <li className="nav-item">
                              <Link to="blog" className="nav-link text-white text-uppercase">blog</Link>
                          </li>
                          <li className="nav-item">
                              <Link to="testimoniales" className="nav-link text-white text-uppercase">testimonios</Link>
                          </li>
                      </ul>
                  </div>
              </div>

          </div>
          <div className="text-center p-3">
              © 2023
              <p className="text-white"><span className="text-primary">Ofi</span>Muebles</p>
          </div>
      </footer>
  

  )
}

export default Footer