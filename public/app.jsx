const Invite = React.createClass({
    // Props bata data pass vayena vanney you default value hunnxa ...
    getDefaultProps: function () {
        return {
            name: "Pramesh"
        }
    },
    // State ko lai initial you tala ko method hunnxa ...
    getInitialState: function () {
        return {
            name: this.props.name
        }
    },
    handleForm: function (e) {
        e.preventDefault();
        const name = this.refs.inputName.value;
        this.refs.inputName.value = "";
        // Updates the state and rerenders ...
        this.setState({
            name: name
        });
    },
    render: function () {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h1>{this.props.message}</h1>
                <form onSubmit={this.handleForm}>
                    <input type="text" ref="inputName" />
                    <button>Set name</button>
                </form>
            </div>
        );
    }
});


const message = "Suzal is super cool !";

ReactDOM.render(
    <Invite name="LOL" message={message} />,
    document.getElementById("app")
);