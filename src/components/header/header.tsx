import React from "react";

const HeaderComponent = () =>{
return(
    <nav className="navbar navbar-expand-lg  ftco-navbar-light">
<div className="container-xl">
<a className="navbar-brand align-items-center" href="index-2.html">
Love<small>Care</small>
<span>Charity Theme</span>
</a>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span className="fa fa-bars"></span> Menu
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
<li className="nav-item"><a className="nav-link active" href="index-2.html">Home</a></li>
<li className="nav-item"><a className="nav-link" href="about.html">About</a></li>
<li className="nav-item"><a className="nav-link" href="causes.html">Causes</a></li>
<li className="nav-item"><a className="nav-link" href="blog.html">Blog</a></li>
<li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
</ul>
</div>
</div>
</nav>
)
}

export default HeaderComponent;

