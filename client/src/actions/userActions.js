import { CHOOSE_NICKNAME } from '../constants'

export const setNickName = newNickName => {
    console.log(newNickName);
    return {
        type: CHOOSE_NICKNAME,
        payload: newNickName
    };
};