

export default function({dispatch}) {
    return next=> action => {

       if(!action.payload||!action.payload.then){
           return next(action);
       }
        action.payload.then(function(response){
            const newAct= {...action, payload:response};
            dispatch(newAct);
        });
    }
}
