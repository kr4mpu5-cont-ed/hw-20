import React from 'react';

export default function Project(props) {
  return (
    <project className='project card border-primary' key='{props.id}'>
      <div className="img-container">
        <img src={props.image} class="card-img" alt={props.name} />
      </div>
      <div class="card-body">
        <h5 class="card-title">{props.name}</h5>
        <p class="card-text">{props.description}</p>
        <p><a href={props.url}>App/Repo</a></p>
      </div>
    </project>
  );
}