import React from 'react';


class ChooseNick extends React.Component {

    render() {
        return(
            <div className="chat-window">
            <ChooseNick.Title />
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
    <div className="input-container">
        <input type="text" placeholder="Enter your nickname..." />
        <button type="button" onClick={() => this.sendNickname('Siggi')}>Choose Nicname</button>
    </div>
); 

export default ChooseNick;

