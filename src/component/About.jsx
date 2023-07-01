import React from 'react'

function About() {
  return (
    <>
     <div className='container-fluid'>
       <img src="shoes8.jpg " alt="" style={{width:"100%",backgroundSize:"50%", height:"560px"}}/>
    </div> 
    
    <div className='container-fluid my-5 w-100 bg-dark text-white text-center p-5 '>
   
    <h1>Soles for souls</h1>
    <p class="lead">Buy good shoes and a good mattress, because when you're <br/><span className="text-warning fst-italic">not in one you're in the other</span><br/>Give a girl the right shoes and she can conquer the world.</p>
    {/* <p class="lead">Cover is a one-page template for building simple and beautiful home <br/>pages. Download, edit the text, and add your own fullscreen background <br/>photo to make it your own.</p> */}
    <p class="lead">
      <a href="#" class="btn btn-lg btn-light fw-bold border-white bg-white">Learn more</a>
    </p>
  </div>
    </>
  )
}

export default About
