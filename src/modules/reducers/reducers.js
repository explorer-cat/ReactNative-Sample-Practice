import {INCREMENT_COUNTER, DECREMENT_COUNTER, UPDATE_UPBIT_LISTING,CHECK_LIST} from '../actions/actions';

// Initial state
const initialState = {
    counter: 0,
    upbitListingCoin : {},
    checkbox : {}
};

// Initial state

// Reducer
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return { ...state, counter: state.counter + 1 };
        case DECREMENT_COUNTER:
            return { ...state, counter: state.counter - 1 };
        case UPDATE_UPBIT_LISTING:
            return {...state, upbitListingCoin: action.state};
        case CHECK_LIST:
            return {...state, checkbox: action.state};
        default:
            return state;
    }
};

export default rootReducer;
