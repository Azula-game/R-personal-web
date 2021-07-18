import React from 'react';
import img2 from '../images/design.png';
import img3 from '../images/html.png';
import img4 from '../images/css.png';
import img5 from '../images/java.jpg';


function Card() {
    return (
        <div class="container-fluid py-5" id="about">
        <div class="container py-5">
            <div class="col-lg-100">
                <div class="text-center">
                    <h2 class="fw-bold mb-3">Skill</h2>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-md-4 g-4 text-center mt-3">
                <div class="col">
                    <div class="card">
                        <img src={img2} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title fw-bolder">Design</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={img3} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title fw-bolder">HTML</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={img4} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title fw-bolder">CSS</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={img5} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title fw-bolder">Javascript</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
              </div>
        </div>
    </div>
    )
}

export default Card
