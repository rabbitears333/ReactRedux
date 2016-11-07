

import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as actions from '../actions';
class Header extends Component{
    authButton(){
        if (this.users.authenticated){
            return <button onClick={ ()=> this.props.authenticate(false)}> Sign Out</button>;
        }
        return <button onClick={ ()=> this.props.authenticate(true)}>Sign In</button>;
    }


  render(){
        return(

            <nav class="navbar navbar-light">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li> <Link to="/resources">Resources</Link></li>
                    <li className="nav-item">{this.authButton()}</li>
                </ul></nav>
        );
    }
}

function mapStateToProps(state, propType){
    return { authenticated: state.authenticated};
}

export default connect(mapStateToProps,actions)( Header);
