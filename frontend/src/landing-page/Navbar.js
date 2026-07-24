import React from "react";
function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
         <img src="/Media/logo.svg" style={{width:"20%"}} alt="Logo"/>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          
          <form class="d-flex" role="search">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active ms-5" aria-current="page" href="#">
                Sign up
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active ms-4" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active ms-4" href="#">
                Product
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active ms-4" href="#">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active ms-4" href="#">
                Support
              </a>
            </li>
            
                
              
            
            
          </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
