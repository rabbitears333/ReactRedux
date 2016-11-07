

import {CHANGE_AUTH} from './types';
import {FETCH_USERS} from './types';
import axios from './axios';
export function authenticate(isLoggedIn){
    return{

        type:CHANGE_AUTH,
        payload:isLoggedIn
    };
}

export function fetchUsers(){
    const request= axios.get('http');
    return{
        type:FETCH_USERS,
        payload:[
            {name:'andy'},
            {name:'bob'},
            {name:'Matt'}
        ]
    };
}

