import React from 'react';
import { Fragment } from 'react';
import Layout from '../../components/layout/layout';

import './styles.css';

const Home = props => {
    return (
        
        <Fragment>
        <Layout>
          
                        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                            <a class="navbar-brand" href="http://ola.com">PWW</a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div class="navbar-nav">
                                <a class="nav-item nav-link active" href="http://ola.com">Home <span class="sr-only">(current)</span></a>
                                <a class="nav-item nav-link" href="http://ola.com">About Us</a>
                                <a class="nav-item nav-link" href="http://ola.com">How it Works</a>
                                <a class="nav-item nav-link" href="http://ola.com">Contact Us</a>
                                <a class="nav-item nav-link" href="http://ola.com">FAQs</a>
                                </div>
                                
                                <button class="btn success"><strong>REQUEST PICKUP</strong></button>
                            </div>
                        </nav>

                        {/*start of Hero Session */}
                        <section id="hero" class="d-flex align-items-center">

                        <div class="container">
                        <div class="row">
                            <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                            <h1>Get rewarded For Recycling Plastics</h1>
                            <p4>We are team of talented designers making websites with Bootstrap<br/>We are team of talented designers making websites with Bootstrap<br/>We are team of talented designers making websites with Bootstrap</p4>
                            <div class="d-lg-flex">
                                <a href="#about" class="btn-get-started scrollto">SIGN UP</a>
                               
                            </div>
                            </div>
                            <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                            <img src="src/components/images/hero-img.png" class="img-fluid animated" alt=""/>
                            </div>
                        </div>
                        </div>
                    
                    </section>
                    {/*End of Hero Session */}
                        
                    
            <section id="services" class="services section-bg">
                    <div class="container1" data-aos="fade-up">

                        <div class="section-title">
                        <h2>How it Works</h2>
                      
                        <div class="row">
                        <div class="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                            <div class="icon-box">
                            <div class="icon"><i class="bx bxl-dribbble"></i></div>
                            <h4><a href="http://ola.html">Lorem Ipsum</a></h4>
                            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                            </div>
                        </div>

                        <div class="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                        <div class="icon-box">
                        <div class="icon"><i class="bx bxl-dribbble"></i></div>
                        <h4><a href="http://ola.html">Lorem Ipsum</a></h4>
                        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                        </div>
                    </div>

                    <div class="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                            <div class="icon-box">
                            <div class="icon"><i class="bx bxl-dribbble"></i></div>
                            <h4><a href="http://ola.html">Lorem Ipsum</a></h4>
                            <img src="wastetowealth/src/components/images/sign up.png" alt="sign-up" width="100px" height="100px"/>
                            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                            </div>
                        </div>

                        </div>

                        </div>
                        

                    

                    </div>
          </section>
                      
                      
              
                    
                          


                            

                            {/* footer styles start */}
                    <div class="container-fluid pb-0 mb-0 justify-content-center text-light ">
                        <footer>
                            <div class="row my-5 justify-content-center py-5">
                                <div class="col-11">
                                    <div class="row ">
                                        
                                        <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                                            <h6 class="mb-3 mb-lg-4"><b>Services</b></h6>
                                            <ul class="list-unstyled">
                                                <strong><li>Recyclables Pickup</li></strong>
                                                <strong><li>Recyclables Dropoff</li> </strong>
                                                <strong><li>Corporate Services</li></strong>
                                                <strong><li>Franchise</li></strong>
                                            </ul>
                                        </div>
                                        <div class="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                                            <h6 class="mb-3 mb-lg-4 text-muted mt-sm-0 mt-5"><b>About Us</b></h6>
                                            <ul class="list-unstyled">
                                            <strong><li>What We Really Do</li></strong>
                                            <strong><li>Our Model</li> </strong>
                                            <strong><li>Our Team</li></strong>
                                            <strong><li>Join Us</li></strong>
                                            <strong><li>FAQs</li></strong>
                                            </ul>
                                        </div>

                                        <div class="col-xl-2 col-md-4 col-sm-4 col-12" >
                                        <h6 class="mb-3 mb-lg-4 mt-sm-0 mt-5"><b>Contact Us</b></h6>
                                        <ul class="list-unstyled">
                                        <strong><li>Lorem Ipsum sit dolor amet</li></strong>
                                        <strong><li>080-878-876-76</li> </strong>
                                        <strong><li>080-878-876-76</li></strong>
                                        
                                        </ul>
                                        </div>
                                    </div>
                                    <div class="row ">
                                        <div class="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                                            <p class="social text-muted mb-0 pb-0 bold-text"> <span class="mx-2"><i class="fa fa-facebook" aria-hidden="true"></i></span> <span class="mx-2"><i class="fa fa-linkedin-square" aria-hidden="true"></i></span> <span class="mx-2"><i class="fa fa-twitter" aria-hidden="true"></i></span> <span class="mx-2"><i class="fa fa-instagram" aria-hidden="true"></i></span> </p><small class="rights"><span>&#174;</span> Pepper All Rights Reserved.</small>
                                        </div>
                                        <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                                            <h6 class="mt-55 mt-2 text-muted bold-text"><b>ANIRUDH SINGLA</b></h6><small> <span><i class="fa fa-envelope" aria-hidden="true"></i></span> anirudh@gmail.com</small>
                                        </div>
                                        <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                                            <h6 class="text-muted bold-text"><b>RISHABH SHEKHAR</b></h6><small><span><i class="fa fa-envelope" aria-hidden="true"></i></span> rishab@gmail.com</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>
                </div>
                            {/* footer end here */}

        </Layout>
        </Fragment>
    )
}

export default Home;