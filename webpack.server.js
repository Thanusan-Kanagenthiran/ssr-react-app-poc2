const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  target: "node", // specify the target environment for the bundle
  mode: "development", // set the mode to development or production
  externals: [nodeExternals()], // exclude node modules from the bundle
  entry: "./server/index.js", // specify the entry point of the application
  output: {
    filename: "server.js", // specify the output file name
    path: path.resolve(__dirname, "build"), // specify the output directory
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // match files with js or jsx extension
        exclude: /node_modules/, // exclude files from node modules
        use: {
          loader: "babel-loader", // use babel-loader to transpile js and jsx files
          options: {
            presets: [
              "@babel/preset-env", // use preset-env to support modern js features
              "@babel/preset-react", // use preset-react to support react syntax
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // allow omitting file extensions when importing
  },
};
