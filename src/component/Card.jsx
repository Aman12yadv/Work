import React from 'react'

function Card() {
  
  return (
    <>
     <div className="container"> 
     <div className="text-center my-5"> 
     <h1 >Shop<span className="text-primary"> Now</span></h1> 
     <hr className="w-25 m-auto"/>
      </div>
     <div class="card-group" style={{marginTop:"20px", padding:"20px"}}>
  <div class="card" style={{border:"1px solid #fff"}} >
    <img src="foot6.JPG" class="card-img-top" alt="..." style={{borderRadius:"20px",padding:"10px"}}/>
    <div class="card-body">
      <h5 class="card-title  ms-5">Adidas</h5>
      <p class="card-text  ms-5">Sale price₹ 2999.00</p>
      <button type="button" class="btn btn-outline-dark  ms-5">Add to Cart</button>
    </div>
  </div>
  <div class="card"style={{border:"1px solid #fff"}}>
    <img src="foot4.JPG" class="card-img-top" alt="..."style={{borderRadius:"20px",padding:"10px"}}/>
    <div class="card-body">
      <h5 class="card-title  ms-5">Woodland</h5>
      <p class="card-text  ms-5">Sale price₹ 799.00</p>
      <button type="button" class="btn btn-outline-dark  ms-5">Add to Cart</button>
    </div>
  </div>
  <div class="card"style={{border:"1px solid #fff"}}>
    <img src="foot5.JPG" class="card-img-top" alt="..."style={{borderRadius:"20px",padding:"10px"}}/>
    <div class="card-body">
      <h5 class="card-title ms-5">Columbus</h5>
      <p class="card-text ms-5">Sale price₹ 1599.00</p>
      <button type="button" class="btn btn-outline-dark  ms-5">Add to Cart</button>
   </div>
  </div>
    </div>
    </div>
  </>
  )
}

export default Card
