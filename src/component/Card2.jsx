import React from 'react'

function Card2() {
  return (
    <>
    <div className='container'>
        <div class="card-group" style={{marginTop:"20px", padding:"20px"}}>
  <div class="card" style={{border:"1px solid #fff"}} >
    <img src="foot8.webp" class="card-img-top" alt="..." style={{borderRadius:"20px",padding:"10px"}}/>
    <div class="card-body">
      <h5 class="card-title  ms-5">Sparton</h5>
      <p class="card-text  ms-5">Sale price₹ 2599.00</p>
      <button type="button" class="btn btn-outline-dark  ms-5">Add to Cart</button>
    </div>
  </div>
  <div class="card"style={{border:"1px solid #fff"}}>
    <img src="foot7.JPG" class="card-img-top" alt="..."style={{borderRadius:"20px",padding:"10px"}}/>
    <div class="card-body">
      <h5 class="card-title  ms-5">Nike</h5>
      <p class="card-text  ms-5">Sale price₹ 2999.00</p>
      <button type="button" class="btn btn-outline-dark  ms-5">Add to Cart</button>
    </div>
  </div>
  <div class="card"style={{border:"1px solid #fff"}}>
    <img src="foot9.webp" class="card-img-top" alt="..."style={{borderRadius:"20px",padding:"10px"}}/>
    <div class="card-body">
      <h5 class="card-title ms-5">Puma</h5>
      <p class="card-text ms-5">Sale price₹ 5999.00</p>
      <button type="button" class="btn btn-outline-dark  ms-5">Add to Cart</button>
   </div>
  </div>
    </div>
    </div>
    </>
  )
}

export default Card2;
