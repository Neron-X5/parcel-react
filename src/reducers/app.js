import { APP_CONSTANTS } from '../configs/constants';

const defaultState = { counter: 0 };

const appReducer = (state = defaultState, action) => {
    switch (action.type) {
        case APP_CONSTANTS.ACTION_TYPE.INCREMENT: {
            return { ...state, counter: state.counter + action.payload };
        }
        case APP_CONSTANTS.ACTION_TYPE.DECREMENT: {
            return { ...state, counter: state.counter - 1 };
        }
        default:
            return state;
    }
};

export default appReducer;
