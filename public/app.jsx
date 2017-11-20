const MessageDisplay = React.createClass({
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

const FormDisplay = React.createClass({
    formHandler: function (e) {
        e.preventDefault();
        const name = this.refs.name.value;
        const message = this.refs.message.value;
        if (name.length > 0 && message.length > 0) {
            this.refs.name.value = "";
            this.refs.message.value = "";
            this.props.onNewName(name);
            this.props.onNewMessage(message);
        }
    },
    render: function () {
        return (
            <div>
                <form onSubmit={this.formHandler}>
                    <input type="text" ref="name" required /><br />
                    <input type="text" ref="message" required /><br />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
});

const MainComponent = React.createClass({
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

ReactDOM.render(
    <MainComponent />,
    document.getElementById("app")
);