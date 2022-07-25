const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
    mode: "none",
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "../public/index.html")
        })
    ],
    module: {
        rules: [
            // specific instructions for each helper
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.css$/,
              use: ['style-loader', 'css-loader'],
            },
            {
              test: /\.(png|svg|jpg|gif|pdf)$/,
              use: ['file-loader'],
            }, // transpile image files
          ]
    }
}

module.exports = config;