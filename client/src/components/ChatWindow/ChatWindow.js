import React from 'react';
import { socket } from '../../services/socketService';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ChatWindow extends React.Component {


    componentDidMount() {
        
        
        console.log(socket.users + " these are the users ");
        socket.emit('adduser', 'siggi',function(available) {
            if(available) {
                console.log("your nick is available");
            }
            else {
                console.log("your nick was not available");
            }
            console.log("Socket id is " + socket.id);
        })
        socket.on('updatechat', message => {
            const { messages } = this.state;
            this.setState({ messages: [ ...messages, message ] });
            
        });
    }
    constructor(props) {
        super(props);
        this.state = {
            messages: [], /* List of all messages within the public lobby */
            message: '' ,/* Current message */
            nick: props
        };
        console.log(this.state);
    }
    sendMessage(message) {
        console.log("message");
        if (message === '') { return false; }
        socket.emit('sendmsg', {roomName: 'Clusterfuck', msg: message});
        this.setState({ message: '' });
    }

    joinRoom() {
        console.log("Joining room...");
        socket.emit('joinroom', );
    }

    render() {

        const { users } = this.props;
        const { messages, message } = this.state;
        return (
            <div className="chat-window">
                <ChatWindow.Title />
                <ChatWindow.Messages messages={ messages } />
                {/* <ChatWindow.Users users={ users } /> */}
                <div className="input-container">
                    <input type="text" value={ message } onChange={e => this.setState({ message: e.target.value })} placeholder="Enter your message here..." />
                    <Link to = {"/lobby"}><button  onClick={() => this.sendMessage(message)}>Send</button></Link>
                </div>
            </div>
        );
    }
};

ChatWindow.Title = () => (
    <h3>
        <span className="first">C</span>
        <span className="second">h</span>
        <span className="third">a</span>
        <span className="fourth">t</span>
        <span className="fifth">.</span>
        <span className="sixth">i</span>
        <span className="seventh">o</span>
    </h3>
);

ChatWindow.Messages = props => (
    <div className="messages">
        { props.messages.map(m => <div key={ m } className="message">{ m }</div>) }
    </div>
);

// ChatWindow.Users = props => (
//     <div className="users">
//         { props.users.map(u => <div key={ u } className="user">{ u }</div>) }
//     </div>
// );

const mapStateToProps = reduxStoreState => {
    console.log(reduxStoreState.user.nickName + " Inside this");
    return {
        nick: reduxStoreState.user.nickName
    };
}

export default connect(mapStateToProps)(ChatWindow);
