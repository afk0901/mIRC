import { CHOOSE_NICKNAME } from '../constants'

const initialNick = {
    nickName: ''
}

export default function (state = initialNick, action) {
    switch(action.type) {
        case CHOOSE_NICKNAME: 
        console.log(action);
        return action.payload;
        default: return state;
    }
}