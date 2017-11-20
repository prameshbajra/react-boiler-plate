const Invite = React.createClass({
    getDefaultProps: function () {
        return {
            name: "Pramesh"
        }
    },
    render: function () {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h1>{this.props.message}</h1>
            </div>
        );
    }
});


const message = "Suzal is super cool !";

ReactDOM.render(
    <Invite name="LOL" message={message} />,
    document.getElementById("app")
);