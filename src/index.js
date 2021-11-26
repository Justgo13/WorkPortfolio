import React from 'react';
import ReactDom from 'react-dom';
import NavBar from './NavBar/NavBar.js';
import AboutMe from './AboutMe/aboutme.js';
import {createStore, applyMiddleware} from "redux";
import rootReducer from "./reducers/root-reducer";
import {Provider} from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk"
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

class App extends React.Component {
    render() { 
        return (
            <Provider store={store}>
                <div className="container">
                    <NavBar></NavBar>
                    <AboutMe></AboutMe>
                </div>
            </Provider>
        );
    }
}
 
ReactDom.render(<App/>, document.getElementById("root"));