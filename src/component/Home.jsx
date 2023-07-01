import React from 'react'

function Home() {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div  className="carousel-inner">
    <div className="carousel-item active "   >
      <img src="shoes6.jpg" className="d-block" alt="..."style={{height:"600px",width:"100%"
    ,backgroundSize: "60%" }}/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Cool And Creative</h5>
        <p>Uphold a key benefit of your shoe store business</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="shoes9.webp" className="d-blockk " alt="..." style={{height:"600px",width:"100%"
    ,backgroundSize: "60%" }}/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="shoes3.jpg" className="d-blockd " alt="..." style={{height:"600px",width:"100%"
    ,backgroundSize: "60%" }}/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      
    </>
  )
}

export default Home
