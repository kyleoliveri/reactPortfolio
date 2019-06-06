import React from 'react';
import '../styles/Jumbotron.css'

function Jumbotron() {
    return (
        <div className="jumbotron" id="Jumbotron">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-12">
                        <div className="card" id="About">
                            <div className="card-body text-center">
                                <h2 className="text-center" id="name">Kyle Oliveri</h2>
                                <p className="text-center">Web Developer</p>
                                <i id="Icons" className="fas fa-file-pdf"></i>
                                <i id="Icons" className="fab fa-linkedin"></i>
                                <i id="Icons" className="fab fa-github-square"></i>
                                <br></br>
                                <button type="button" id="contactModal" className="btn btn-primary">Contact Me</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron;