import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router'; 
import Term from './impl/Term';
import Term2 from './impl/Term2';
import Benefit from './impl/Benefit';

// let MixinTermDiv = TermContent => class extends Component {
//     constructor() {
//         super();
//         this.content = {title:"", body: ""}
//     }
//     componentWillMount() {
//         console.log("Mounting~");
//     }
//     componentDidMount() {
//         console.log("Mounted.");
//     }
//     render() {
//         return (
//             <TermContent {...this.state}
//                          {...this.props}/>
//         )
//     }
//     componentWillUnmount() {
//         console.log("Destroyed!");
//     }
// }

class App extends Component {    
    render() {
        console.log("rendering...");
        return (
            <div>
                <Router history={hashHistory}>
                    <Route path="/">
                        <IndexRoute component={Term}></IndexRoute>
                        <Route path="/benefit" component={Benefit}></Route>
                        <Route path="/term2" component={Term2}></Route>
                    </Route>
                </Router>
            </div>
        ); 
    }
}

class WrapperApp extends Component {
    constructor(){
        super();
        this.mount = this.mount.bind(this);
        this.unmount = this.unmount.bind(this);
    }
    mount() {
        ReactDOM.render(<App/>, document.getElementById("wrapper"));
    }

    unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById("wrapper"));
    }
    render() {
        return (
            <div>
                <button onClick={this.mount}>Mount</button>
                <button onClick={this.unmount}>Unmount</button>
                <div id="wrapper"></div>
            </div>
        )
    }
}

export default WrapperApp;