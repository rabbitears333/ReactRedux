
import { combineReducers } from 'redux';
import authReducer from 'authentication';
import user from 'users';
import React from 'react';
import {Connect} from 'react-redux';
import * as actions from '../actions';
class UserList extends Component{
    componentWillMount(){
        this.props.fetchUsers();
    }
    renderUser(user){
        return(
            <div className="card card-block">
                <h2 className="card-title">{user.name}</h2>
                </div>
        );
    }

    render(){
        return(
            <div>
                {this.props.users.map(this.renderUser)}</div>
        );
    }
}

function mapStateToProps(state){
    return {users:state.users};
}

export default connect(mapStateToProps)(UserList);