import React from 'react';
import { connect } from 'react-redux'
import { setNickName } from '../../actions/userActions';
import { socket } from '../../services/socketService';


class ChooseNick extends React.Component {

    
    componentDidMount() {
        socket.on('connection', userList => {
            this._populateUserList(userList);
            console.log(userList);
        })
      
        };

    constructor(props){
        super(props);
        this.state = {
            nickName: ''
        }
    }

    onInput(e) {
        this.setState ({ nickName: e.target.value });
        console.log(this.state.nickName);
    }
    onFormSubmit(e) {
        console.log("this is the nickname being sent", this.state)
        e.preventDefault();

        const { nickName } = this.state;
        const { setNickName } = this.props;
        setNickName({nickName});
        socket.emit('adduser', this.state.nickName,function(available) {
            if(available) {
                console.log("your nick is available");
            }
            else {
                console.log("your nick was not available");
            }
        });

        socket.emit("users", function() {
            
        })
        socket.on('userlist', listOfUsers => {
            console.log("List of users!!: " + listOfUsers);
        })
        
            
        
        
        
    }

    render() {
        return(
            <div className="chat-window">
            <ChooseNick.Title />
            
            <div className='nickContainer'>
                <input type="text" value  = {this.state.nickname} onChange={e => this.onInput(e)} placeholder="Enter your nickname.." />
                <button type="button" onClick = {e => this.onFormSubmit(e)}>Choose Nickname</button>
            </div>
           
            </div>
        )
    }
    
}

ChooseNick.Title = () => (
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



ChooseNick.ChooseNick = () => (
    <div className='nickContainer'>
        <input type="text" onChange={e => ChooseNick.this.setState({ nickName: e.target.value })} placeholder="Enter your nickname..." />
        <button type="button" onClick={() => this.sendNickname()}>Choose Nickname</button>
    </div>
); 

const mapStateToProps = reduxStoreState => {
    
    return {

    };
};

export default connect(mapStateToProps, { setNickName })(ChooseNick);

