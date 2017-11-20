const Helloer = React.createClass({
    render: () => {
        return (
            <div>
                <h1>Suzal hero nai xa</h1>
                <p>Bajracharya haru sapai hero nai hunnxa !</p>
            </div>
        );
    }
});

ReactDOM.render(
    <Helloer />,
    document.getElementById("app")
);