import React from 'react';
import './styles.scss';

export default props => {
  return(
    <div className="controls container">
      <div>
        <a
          href=""
          className={props.activeFilter === 'SHOW_ALL' ? "control control--active": "control"}
          onClick={(e) => {
            e.preventDefault();
            props.changeFilter('SHOW_ALL')
          }}
        >Все</a>
        <a
          href=""
          className={props.activeFilter === 'SHOW_FAVORITES' ? "control control--active": "control"}
          onClick={(e) => {
            e.preventDefault();
            props.changeFilter('SHOW_FAVORITES')
          }}
        >Избранные</a>
      </div>
      <div>
        <a
          href=""
          className={props.activeViewStyle === 'LIST' ? "control control--active": "control"}
          onClick={e => {
            e.preventDefault();
            props.changeViewStyle('LIST');
          }}
        >
          list
        </a>
        <a
          href=""
          className={props.activeViewStyle === 'GRID' ? "control control--active": "control"}
          onClick={e => {
            e.preventDefault();
            props.changeViewStyle('GRID');
          }}
        >
          greed</a>
      </div>
    </div>
  );
}