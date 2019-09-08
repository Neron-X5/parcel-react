import { APP_CONSTANTS } from '../configs/constants';

export const increment = (incrementBy = 0) => ({
    type: APP_CONSTANTS.ACTION_TYPE.INCREMENT,
    payload: incrementBy
});

export const decrement = () => ({
    type: APP_CONSTANTS.ACTION_TYPE.DECREMENT
});
