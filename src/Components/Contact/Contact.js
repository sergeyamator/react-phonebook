import React from 'react';
import Button from '../Button';

import './contact.scss';

export default props => {
  return(
    <div className="container contact">
      <div className="contact__information">
        <div className="contact__text contact__text--name">{props.name}</div>
        <div className="contact__text">{props.phone}</div>
        <div className="contact__text">{props.email}</div>
      </div>
      <div className="contact__controls">
        <Button className="star">
          <i className="fa fa-star-o" aria-hidden="true" />
        </Button>
        <Button className="button">
          Написать
        </Button>
      </div>
    </div>
  );
};