import React from "react";

class MessageDisplay extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const name = this.props.name;
        const message = this.props.message;
        return (
            <div>
                <h1>{name}</h1>
                <h6>{message}</h6>
            </div>
        );
    }
};

export default MessageDisplay;