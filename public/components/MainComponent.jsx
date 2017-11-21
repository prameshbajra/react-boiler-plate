import React from "react";
import MessageDisplay from "MessageDisplay";
import FormDisplay from "FormDisplay";

class MainComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            message: this.props.message
        };
        this.getNewName = this.getNewName.bind(this);
        this.getNewMessage = this.getNewMessage.bind(this);
    }
    static get defaultProps() {
        return {
            name: "Suzal",
            message: "Bajracharya"
        }
    }
    getNewName(name) {
        this.setState({
            name: name
        });
    }
    getNewMessage(message) {
        this.setState({
            message: message
        });
    }
    render() {
        return (
            <div>
                <MessageDisplay name={this.state.name} message={this.state.message} />
                <FormDisplay onNewName={this.getNewName} onNewMessage={this.getNewMessage} />
            </div>
        );
    }
};

export default MainComponent;