import React from 'react';
import ChooseNick from "./components/ChooseNick/ChooseNick";
import {Switch, Route} from 'react-router-dom';
import { socket } from './services/socketService';

class App extends React.Component {
    componentDidMount() {
        socket.on('connection', userList => {
            this._populateUserList(userList);
        });
    }
    _populateUserList(userList) {
        this.setState({
            users: userList.map((u, idx) => `User ${idx + 1}`)
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
        return (
            <div className="container">
                
            </div>
        );
    }
};

export default App;
