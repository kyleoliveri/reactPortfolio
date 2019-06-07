import React from 'react';

function Projects(props) {
    return (
        <div className="container">
            <div class="card mb-3">
                <img src={props.image} className="card-img-top" alt={props.name} />
                <div class="card-body">
                    <h2>{props.name}</h2>
                    <h5>{props.description}</h5>
                </div>
            </div>
        </div>
    );
}

export default Projects;