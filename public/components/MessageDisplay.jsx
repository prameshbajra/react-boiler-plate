const createReactClass = require("create-react-class");

const MessageDisplay = createReactClass({
    render: function () {
        const name = this.props.name;
        const message = this.props.message;
        return (
            <div>
                <h1>{name}</h1>
                <h6>{message}</h6>
            </div>
        );
    }
});

module.exports = MessageDisplay;