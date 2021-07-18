import React from 'react';
import img1 from '../images/ff.jpg';

function Section() {
    return (
        <section class="container-fluid py-5" id="home">
        <div class="container">
            <div class="row min-vh-100 align-items-center align-content-center">
                <div class="col-md-6 mt-5 mt-md-0">
                    <div class="home-img">
                        <img src={img1} class="rounded-circle mw-100" alt="profile img"></img>
                    </div>
                </div>
                <div class="col-md-6 mt-5 mt-md-0 order-md-first">
                    <div class="home-text">
                        <p class="text-muted mb-1">Hello I am</p>
                        <h1 class="text-danger text-uppercase fs-1 fw-bold">Web Development</h1>
                        <h2 class="fs-4">Yahya Adisyafutra</h2>
                        <p class="mt-4 text-muted">Saya S1 lulusan teknik informatika konsentrasi perangkat lunak.This is a longer card with supporting text below as a natural lead-in</p>
                        <a class="btn btn-primary" href="https://twitter.com/Adisyafutra_ya" role="button" target="blank"><span class="bi bi-twitter px-2"></span>Twitter</a>
                    </div>
                </div>
            </div>  
        </div>
        </section>
    )
}

export default Section
