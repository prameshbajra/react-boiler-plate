const createReactClass = require("create-react-class");
const React = require("react");
const ReactDOM = require("react-dom");
const MainComponent = require("./components/MainComponent");


ReactDOM.render(
    <MainComponent />,
    document.getElementById("app")
);