import React, { Component } from 'react';
import {Provider} from 'react-redux';
import UserList from 'user_list';
import Header from './Header';
export default class App extends Component {
  render() {
    return (
      <div><Header /> {this.props.children}</div>
    );
  }
}
