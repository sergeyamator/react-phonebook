import React from 'react';
import Contact from '../Contact';

export default props => {
  return(
    <div>
      {
        props.data.contacts.map(item => {
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