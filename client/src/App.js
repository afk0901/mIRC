import React from 'react';
import ChooseNick from "./components/ChooseNick/ChooseNick";
import ChatWindow from './components/ChatWindow/ChatWindow';
import {Switch, Route} from 'react-router-dom';
import { socket } from './services/socketService';

class App extends React.Component {
    componentDidMount() {
        socket.on('connection', userList => {
            this._populateUserList(userList);
            console.log(userList);
        });
    }
    _populateUserList(userList) {
        this.setState({
            users: userList
        });
    }
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }
    render() {
        const { users } = this.state;
        // console.log("app users" + users);
        return (
            <div>
               <ChooseNick />
               <ChatWindow userList = {users} />
            </div>
        );
    }
};

export default App;
