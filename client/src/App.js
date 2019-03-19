import React from 'react';
import ChooseNick from "./components/ChooseNick";
import {Switch, Route} from 'react-router-dom';

const App = () => {
    return ( 
        <div>
        <Switch>
        <Route exact path="/" component={ ChooseNick }/>
        </Switch>
        </div>
    )
}
export default App;