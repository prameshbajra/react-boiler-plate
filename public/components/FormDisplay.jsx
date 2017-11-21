import React from "react";

class FormDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.formHandler = this.formHandler.bind(this);
    }
    formHandler(e) {
        e.preventDefault();
        const name = this.refs.name.value;
        const message = this.refs.message.value;
        if (name.length > 0 && message.length > 0) {
            this.refs.name.value = "";
            this.refs.message.value = "";
            this.props.onNewName(name);
            this.props.onNewMessage(message);
        }
    }
    render() {
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
};

export default FormDisplay;