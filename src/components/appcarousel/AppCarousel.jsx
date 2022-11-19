import Carousel from 'react-bootstrap/Carousel';
import imagenUno from '../../images/imagenuno.jpg';
import imagenDos from '../../images/imagendos.jpg';


export const AppCarousel=()=>{

    return(
    <>
    <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imagenUno}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imagenDos}
              alt="Second slide"
            />
    
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
         
        </Carousel>
    
    </>
    
    
    
    )
    
    
    }