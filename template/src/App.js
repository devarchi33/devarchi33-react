import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor() {
        super();
        this.temp = "";
    }

    componentWillMount() {
        console.log("Mounting~");
    }
    
    render() {
        console.log("rendering...");
        return (
            <div>
                <h1>Hello {this.props.temp}</h1>
            </div>
        ); 
    }

    componentDidMount() {
        console.log("mounted.");
    }

    componentWillUnmount() {
        console.log("destroyed!")
    }
}

App.propTypes = {
    temp : React.PropTypes.string.isRequired
}

App.defaultProps = {
    temp : "React!"
}

class WrapperApp extends Component {
    mount() {
        ReactDOM.render(<App/>, document.getElementById("wrapper"));
    }

    unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById("wrapper"));
    }
    
    render() {
        return (
            <div>
                <button onClick={this.mount.bind(this)}>Mount</button>
                <button onClick={this.unmount.bind(this)}>Unmount</button>
                <div id="wrapper"></div>
            </div>
        )
    }
}

export default WrapperApp;