import React from 'react'

function Nav(props  ) {
  return (
    <>
    <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
   <img  className="logo" src="logo_.webp" alt="notFounded...." style={{width:"70px", height:"60px"}} />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Famous</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Services
          </a>

        </li>
        <li class="nav-item">
          <a class="nav-link disabled">About</a>
        </li>
      </ul>
      <i class="bi bi-cart-fill position-relative mx-5 " onClick={props.Cart} style={{fontSize:"30px"}}>
      
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger fs-6" onClick={props.inbox}>

    <span class="visually-hidden">unread messages</span>
  </span>

      </i>
          <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Nav
