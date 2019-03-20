import React from 'react';


class ChooseNick extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            nickname: ''
        };
    }

    onNickChange(e) {
        this.setState({ nickname: e.target.value });
    }

    sendNickname() {
        console.log(this.state);

    }

    render() {
        const {nickname} = this.state;
        return (
            <div className="chat-window">
                <ChooseNick.Title />
                <div className="nicknameBox">
                    <input type="text" value={nickname} onChange={e => this.onNickChange(e)} />
                    <button type="button" onClick={() => this.sendNickname()}>Choose Nickname</button>
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



export default ChooseNick;

