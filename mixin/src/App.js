import React, {Component} from 'react';
import ReactDOM from 'react-dom';

let Mixin = InnerComponent => class extends Component {
    constructor() {
        super();
        this.temp = "";
        this.update = this.update.bind(this);
        this.state = {val:0};
    }
    update() {
        this.setState({
            val : this.state.val + 1
        })
    }
    componentWillMount() {
        console.log("Mounting~");
    }
    componentDidMount() {
        console.log("mounted.");
    }
    render() {
        return (
            <InnerComponent update={this.update}
                            {...this.state}
                            {...this.props}/>
        )
    }
    componentWillUnmount() {
        console.log("destroyed!")
    }
}

const Button = (props) => <button onClick={props.update}>
                            {props.txt} = {props.val}
                          </button>;
const Label = (props) => <label onMouseOver={props.update}>
                            {props.txt} = {props.val}
                          </label>;
                                  
let ButtonMixed = Mixin(Button);
let LabelMixed = Mixin(Label);

class App extends Component {    
    render() {
        console.log("rendering...");
        return (
            <div>
                <ButtonMixed txt="mixed-btn"/>
                <LabelMixed txt="mixed-label"/>
            </div>
        ); 
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