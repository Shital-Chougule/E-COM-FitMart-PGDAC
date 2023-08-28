import React from "react"
import img1 from "../images/Banner1.jpg"
import img2 from "../images/Banner2.jpg"
import img3 from "../images/Banner3.jpg"
const Carousel = () => {
    return(
        <div>
            <div id="carouselExampleIndicators" className="carousel slide container mt-3" style={{ height: '400px', width: '80%' }}>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img style={{ height: '400px' }}
              src= {img1}
              className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img style={{ height: '400px' }}
              src={img2}
              className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img style={{ height: '400px' }}
              src={img3}
              className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
        </div>
    )
}
export default Carousel;