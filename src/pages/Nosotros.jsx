import nosotros from '../img/1.jpg'

const Nosotros = () => {
  return (
    <main class="container-xl py-5">
        <h2 class="text-center my-5 display-3">Nosotros</h2>
        <div class="row g-5 align-items-center">
            <div class="col-md-6">
                <img src={nosotros} alt="sobre nosotros" class="img-fluid"/>    
            </div>
            <div class="col-md-6">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit laboriosam commodi deleniti ut minima. Dolorum, similique aut sit voluptatum alias ad, et fugit quasi sint consequatur magni vero mollitia doloremque.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, corporis nihil! Quibusdam ipsam enim libero perferendis consectetur rem autem odit debitis, ratione magni nemo velit tempora praesentium obcaecati. Impedit, nam!</p>
            </div>
        </div>
    </main>
  )
}

export default Nosotros