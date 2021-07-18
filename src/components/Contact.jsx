import React from 'react'

function Contact() {
    return (
        <section class="container-fluid py-5" id="contact">
            <div class="container">
                <div class="col-lg-100">
                    <div class="text-center">
                        <h2 class="fw-bold mb-5">Contact</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-5">
                        <div class="contact-item d-flex mb-3">
                            <div class="icon fs-4 text-danger">
                                <i class="bi bi-envelope"></i>
                            </div>
                            <div class="text ms-3">
                                <h3 class="fs-5">Email</h3>
                                <p class="text-muted">Example@gmail.com</p>
                            </div>
                        </div>
                        <div class="contact-item d-flex mb-3">
                            <div class="icon fs-4 text-danger">
                                <i class="bi bi-telephone-fill"></i>
                            </div>
                            <div class="text ms-3">
                                <h3 class="fs-5">Phone</h3>
                                <p class="text-muted">081XXXXXXXX</p>
                            </div>
                        </div>
                        <div class="contact-item d-flex mb-3">
                            <div class="icon fs-4 text-danger">
                                <i class="bi bi-geo-alt-fill"></i>
                            </div>
                            <div class="text ms-3">
                                <h3 class="fs-5">Visit Office</h3>
                                <p class="text-muted">Jl.lingkar Selatan</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7">
                        <div class="contact-form">
                            <form>
                                <div class="row">
                                    <div class="col-lg-6 mb-4">
                                        <input type="text" placeholder="Your Name" class="form-control form-control-lg fs-6 border-0 shadow-sm"></input>
                                    </div>
                                    <div class="col-lg-6 mb-4">
                                        <input type="text" placeholder="Your Email" class="form-control form-control-lg fs-6 border-0 shadow-sm"></input>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12 mb-4">
                                        <input type="text" placeholder="subject" class="form-control form-control-lg fs-6 border-0 shadow-sm"></input>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12 mb-4">
                                        <textarea rows="5" placeholder="Your Message" class="form-control form-control-lg fs-6 border-0 shadow-sm"></textarea>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <button type="submit" class="btn btn-danger" px-3>Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
