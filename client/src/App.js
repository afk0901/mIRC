import React from 'react';
import ChooseNick from "./components/ChooseNick";
import {Switch, Route} from 'react-router-dom';

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
                <Switch>
                <Route exact path="/" component={ ChooseNick }/>
                </Switch>
            </div>
        );
    }
};

export default App;
