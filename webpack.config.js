module.exports = {
    entry: "./public/app.jsx",
    output: {
        path: __dirname,
        filename: "./public/bundle.js"
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module: {
        loaders: [{
            loader: "babel-loader",
            query: {
                presets: ["react", "env"]
            },
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/
        }]
    }
}