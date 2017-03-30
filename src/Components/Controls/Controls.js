import React from 'react';
import './styles.scss';

export default props => {
  return(
    <div className="controls container">
      <div>
        <a
          href=""
          className="control"
          onClick={(e) => {
            e.preventDefault();
            props.changeFilter('SHOW_ALL')
          }}
        >Все</a>
        <a
          href=""
          className="control"
          onClick={(e) => {
            e.preventDefault();
            props.changeFilter('SHOW_FAVORITES')
          }}
        >Избранные</a>
      </div>
      <div>
        <a href="" className="control">list</a>
        <a href="" className="control">greed</a>
      </div>
    </div>
  );
}