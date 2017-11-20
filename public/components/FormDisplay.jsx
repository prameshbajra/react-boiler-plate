const createReactClass = require("create-react-class");

const FormDisplay = createReactClass({
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

module.exports = FormDisplay;