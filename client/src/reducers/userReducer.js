import { CHOOSE_NICKNAME } from '../constants'

const initialNick = {
    nickName: ''
}

export default function (state = initialNick, action) {
    console.log(action);
    switch(action.type) {
        case CHOOSE_NICKNAME: return action.payload;
        default: return state;
    }
}
