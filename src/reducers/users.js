/**
 * Created by andy on 10/9/2016.
 */

import { FETCH_USERS} from '../actions/types';
export default function (state=[], action){
    switch(action.type){
        case FETCH_USERS:
            return [...state, ...action.payload.data];
    }
    return state;
}
