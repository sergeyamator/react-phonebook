import React from 'react';
import { connect } from 'react-redux';
import '../styles/index.scss';

import Header from './Components/Header';
import Contacts from './Components/Contacts';
import Controls from './Components/Controls';

function getVisibleContacts(contacts, filter) {
  return contacts.filter(contact => {
    if (filter === 'SHOW_FAVORITES') {
      return contact.favorites;
    }

    return true;
  })
}

function mapStateToProps(state) {
  return {
    visibleContacts: getVisibleContacts(state.contacts, state.filter),
    viewStyle: state.viewStyle
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onCreate: payload => {
      dispatch({
          type: 'ADD_CONTACT',
          payload
      });
    },
    toggleFavotires: id => {
      dispatch({
        type: 'TOGGLE_FAVORITES',
        id
      })
    },
    changeFilter: filter => {
      dispatch({
        type: 'SET_VISIBLE_FILTER',
        filter
      });
    },
    changeViewStyle: style => {
      dispatch({
        type: 'CHANGE_VIEW_STYLE',
        style
      })
    }
  }
}
@connect(mapStateToProps, mapDispatchToProps)
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header
          onCreate={this.props.onCreate}
        />
        <Controls
          changeFilter={this.props.changeFilter}
          changeViewStyle={this.props.changeViewStyle}
        />
        <Contacts
          data={this.props.visibleContacts}
          viewStyle={this.props.viewStyle}
          toggleFavorites={this.props.toggleFavotires}
        />
      </div>
    )
  }
}
