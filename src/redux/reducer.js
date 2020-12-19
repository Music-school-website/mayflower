import {initState} from "./initState";
import * as actionJs from './action';

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionJs.type.language:
            return Object.assign({}, state, {
                language: action.value,
            });
        default:
            return {
                ...state,
            };
    }
};

export default reducer;
