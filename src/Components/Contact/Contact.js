import React from 'react';
import Button from '../Button';

import './contact.scss';

export default props => {
  return (
    <div className="container contact">
      <div className="contact__information">
        <div className="contact__text contact__text--name">{props.name}</div>
        <div className="contact__text">{props.phone}</div>
        <div className="contact__text">{props.email}</div>
      </div>
      <div className="contact__controls">
        <i
          aria-hidden="true"
          className={props.favorites ? "fa fa-star star" : "fa fa-star-o star"}
          onClick={() => props.toggleFavorites(props.id)}
        />
        <Button className="button">
          Написать
        </Button>
      </div>
    </div>
  );
};