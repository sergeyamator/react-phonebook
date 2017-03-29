import React from 'react';
import './styles.scss';

export default props => {
  return(
    <div className="controls container">
      <div>
        <a href="" className="control">Все</a>
        <a href="" className="control">Избранные</a>
      </div>
      <div>
        <a href="" className="control">list</a>
        <a href="" className="control">greed</a>
      </div>
    </div>
  );
}