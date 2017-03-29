import React from 'react';
import Button from '../Button';

export default props => {
  return(
    <div className="container contact">
      <div className="contact__information">
        <div className="contact__name">{props.name}</div>
        <div className="contact__phone">{props.phone}</div>
        <div className="contact__email">{props.email}</div>
      </div>
      <div className="contact__controls">
        <Button>
          <i className="fa fa-star-o" aria-hidden="true" />
        </Button>
        <Button>
          Написать
        </Button>
      </div>
    </div>
  );
};