import React from 'react';
import Contact from '../Contact';
import './styles.scss';

export default props => {
  return(
    <div className={props.viewStyle === 'GRID' ? 'grid-containaer' : ''}>
      {
        props.data.map(item => {
          return <Contact
            key={item.id}
            id={item.id}
            name={item.name}
            email={item.email}
            phone={item.phone}
            favorites={item.favorites}
            toggleFavorites={props.toggleFavorites}
          />
        })
      }
    </div>
  );
}