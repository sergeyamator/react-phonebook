import React from 'react';
import { connect } from 'react-redux';
import '../styles/index.scss';

import Header from './Components/Header';
import Contacts from './Components/Contacts';
import Controls from './Components/Controls';

function mapStateToProps(state) {
  return {
    state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onCreate: payload => {
      dispatch({
          type: 'ADD_CONTACT',
          payload
      });
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
        <Controls />
        <Contacts data={this.props.state} />
      </div>
    )
  }
}
