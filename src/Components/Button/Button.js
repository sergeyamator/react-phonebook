import React from 'react';
import './styles.scss';

export default props => {
  return(
    <button
    className={props.className}
    onClick={props.onclick}
    >
      {props.children}
    </button>
  );
}