import {SUMMARY} from './action';

const initialState= {
    summary: {}
}

const reducer = (state= initialState, action) =>{
    const{type,payload} = action;

    switch(type){

        case SUMMARY:
        {  debugger;
            return{...state, summary:{...state.summary,[payload.id]:{...payload, count: payload.count}}};
        }
      

        return state;
    }
}

export default reducer;