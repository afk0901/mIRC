import React from 'react';
import ChooseNick from "./components/ChooseNick/ChooseNick";
import ChatWindow from './components/ChatWindow/ChatWindow';
import {Switch, Route} from 'react-router-dom';
import { socket } from './services/socketService';

class App extends React.Component {
    componentDidMount() {
        socket.emit("users", function() {
            
        })

        
        socket.on('updateusers', function() {
            /*socket.emit("users", function() {
            
            })

            socket.on('userlist', listOfUsers => {
                this.setState({
                    users: listOfUsers
                });

        })*/
        console.log("UPDATEUSER!");
    })

        socket.on('userlist', listOfUsers => {
            this.setState({
                users: listOfUsers
            });
            console.log("List of users!!: " + listOfUsers);
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }
    render() {
        const users = this.state.users;
        console.log("MYUSERS: "+ users);
        // console.log("app users" + users);
        return (
            <div>
               <ChooseNick />
               <ChatWindow users = {users} />
            </div>
        );
    }
};

export default App;
