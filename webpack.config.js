module.exports = {
    entry: "./public/app.jsx",
    output: {
        path: __dirname,
        filename: "./public/bundle.js"
    },
    resolve: {
        modules: [__dirname, "node_modules"],
        alias: {
            FormDisplay: "public/components/FormDisplay.jsx",
            MainComponent: "public/components/MainComponent.jsx",
            MessageDisplay: "public/components/MessageDisplay.jsx"
        },
        extensions: ["*", ".js", ".jsx"]
    },
    module: {
        rules: [{
            loader: "babel-loader",
            query: {
                presets: ["react", "env"]
            },
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/
        }]
    }
}