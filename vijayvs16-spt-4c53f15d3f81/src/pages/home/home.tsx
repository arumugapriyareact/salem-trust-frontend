import React from "react";
import HeaderComponent from "../../components/header/header";

const HomeComponent = () => {
    return(
        <div>
            <HeaderComponent/>
            <div className="homePage">
            <section className="hero-wrap rellax" data-rellax-speed="-5" data-rellax-min="-120" data-rellax-max="0" style={{backgroundImage: "url('images/bg_1.jpg')"}}>
<div className="overlay"></div>
<div className="container">
<div className="row no-gutters slider-text align-items-center">
<div className="col-lg-6">
<span className="subheading">Raising Hope</span>
<h1 className="mb-4">To the Homeless &amp; Hopeless People</h1>
<p><a href="#" className="btn btn-primary p-4 py-3">Join Us <span className="ion-ios-arrow-round-forward"></span></a> <a href="#" className="btn">Watch the Video <span className="ion-ios-play"></span></a></p>
</div>
</div>
</div>
</section>
<section className="ftco-intro-wrap">
<div className="container-xl">
<div className="row g-lg-5">
<div className="col-md-5 order-lg-last d-flex align-items-stretch">
<div className="fund-wrap">
<div className="fund-raised d-flex align-items-center">
<div className="icon">
<span className="flaticon-heart"></span>
</div>
<div className="text section-counter-2">
<h4 className="countup">$1,850,000</h4>
<span>Funds raised by 1200 people</span>
</div>
</div>
<form action="#" className="appointment">
<span className="subheading">Donate Now</span>
<h2 className="mb-4 appointment-head">Giving is the greatest act of grace</h2>
<div className="row">
<div className="col-md-12">
<div className="form-group">
<label>Your Full Name</label>
<input type="text" className="form-control" placeholder="Your Full Name"/>
</div>
</div>
<div className="col-md-12">
<div className="form-group">
<label>Email Address</label>
<input type="text" className="form-control" placeholder="Email"/>
</div>
</div>
<div className="col-md-12">
<div className="form-group">
<label>Select Causes</label>
<div className="form-field">
<div className="select-wrap">
<div className="icon"><span className="fa fa-chevron-down"></span></div>
<select name="" id="" className="form-control">
<option value="">Food</option>
<option value="">Medical Health</option>
<option value="">Education</option>
<option value="">Environment</option>
<option value="">Shelter/Home</option>
<option value="">Clothes</option>
<option value="">Other</option>
</select>
</div>
</div>
</div>
</div>
<div className="col-md-12">
<div className="form-group">
<label>Amount to Give</label>
<input type="text" className="form-control" placeholder="Amount"/>
</div>
</div>
<div className="col-md-12">
<div className="form-group d-flex">
<div className="form-check d-flex">
<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
<label className="form-check-label" >Paypal</label>
</div>
<div className="form-check d-flex ms-3">
<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
<label className="form-check-label" >Credit Card</label>
</div>
<div className="form-check d-flex ms-3">
<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
<label className="form-check-label" >Payoneer</label>
</div>
</div>
</div>
<div className="col-md-12">
<input type="submit" value="Donate Now" className="btn btn-primary py-3 px-4 rounded"/>
</div>
</div>
</form>
</div>
</div>
<div className="col-md-7 heading-section d-flex align-items-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
<div className="mt-0 about-wrap">
<span className="subheading">Welcome to Lovecare Charity</span>
<h2 className="mb-4">We Help Thousands of Children to Get Their Education</h2>
<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
<div className="row mt-5 g-md-3">
<div className="col-md-6 col-lg-4 mb-2 mb-md-0 d-flex align-items-stretch">
<a href="#" className="services-2">
<div className="icon"><span className="flaticon-donation"></span></div>
<div className="text">
<h2>Start Donating</h2>
</div>
</a>
</div>
<div className="col-md-6 col-lg-4 mb-2 mb-md-0 d-flex align-items-stretch">
<a href="#" className="services-2 color-2">
<div className="icon"><span className="flaticon-ecosystem"></span></div>
<div className="text">
<h2>Join Our Community</h2>
</div>
</a>
</div>
<div className="col-md-6 col-lg-4 mb-2 mb-md-0 d-flex align-items-stretch">
<a href="#" className="services-2 color-3">
<div className="icon"><span className="flaticon-charity"></span></div>
<div className="text">
<h2>Be A Volunteer</h2>
</div>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
            </div>
        </div>
    )
}

export default HomeComponent;