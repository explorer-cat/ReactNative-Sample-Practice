// Action Types
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const UPDATE_UPBIT_LISTING = 'UPDATE_UPBIT_LISTING';

export const CHECK_LIST = 'CHECK_LIST';

// Action Creators
export const incrementCounter = () => {
    return { type: INCREMENT_COUNTER };
};

export const decrementCounter = () => {
    return { type: DECREMENT_COUNTER };
};

export const updateUpbitListing = (state) => {
    return {
        type: UPDATE_UPBIT_LISTING,
        state : state
    };
};

export const updateCheckList = (state) => {
    return {
        type: CHECK_LIST,
        state : state
    };
};
