import React from 'react';

export default function Project(props) {
  return (
    <div className='project card border-primary' key='{props.id}'>
      <div className="img-container">
        <img src={props.image} className="card-img" alt={props.name} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
        <p><a href={props.url}>App/Repo</a></p>
      </div>
    </div>
  );
}