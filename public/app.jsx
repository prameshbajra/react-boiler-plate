const MessageDisplay = React.createClass({
    render: function () {
        const name = this.props.name;
        const message = this.props.message;
        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>Hello {message}</p>
            </div>
        );
    }
})

const FormDisplay = React.createClass({
    handleForm: function (e) {
        e.preventDefault();
        const name = this.refs.inputName.value;
        if (name.length > 0) {
            this.refs.inputName.value = "";
            this.props.onNewName(name);
        }

    },
    handleFormMessage: function (e) {
        e.preventDefault();
        const message = this.refs.messageData.value;
        if (message.length > 1) {
            this.refs.messageData.value = "";
            this.props.onNewMessage(message);
        }
    },
    render: function () {
        return (
            <div>
                <form onSubmit={this.handleForm}>
                    <input type="text" ref="inputName" />
                    <button>Set name</button>
                </form>
                <form onSubmit={this.handleFormMessage}>
                    <input type="text" ref="messageData" />
                    <button>Set message</button>
                </form>
            </div>
        );
    }
});

const Invite = React.createClass({
    // Props bata data pass vayena vanney you default value hunnxa ...
    getDefaultProps: function () {
        return {
            name: "Pramesh",
            message: "Bajracharya"
        }
    },
    // State ko lai initial you tala ko method hunnxa ...
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
    getNewMessage: function (messageData) {
        this.setState({
            message: messageData
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
    <Invite />,
    document.getElementById("app")
);