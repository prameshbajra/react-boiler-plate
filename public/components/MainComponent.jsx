const createReactClass = require("create-react-class");
const MessageDisplay = require("./MessageDisplay");
const FormDisplay = require("./FormDisplay");

const MainComponent = createReactClass({
    getDefaultProps: function () {
        return {
            name: "Suzal",
            message: "Bajracharya"
        };
    },
    getInitialState: function () {
        return {
            name: this.props.name,
            message: this.props.message
        }
    },
    getNewName: function (name) {
        this.setState({
            name: name
        });
    },
    getNewMessage: function (message) {
        this.setState({
            message: message
        });
    },
    render: function () {
        return (
            <div>
                <MessageDisplay name={this.state.name} message={this.state.message} />
                <FormDisplay onNewName={this.getNewName} onNewMessage={this.getNewMessage} />
            </div>
        );
    }
});

module.exports = MainComponent;