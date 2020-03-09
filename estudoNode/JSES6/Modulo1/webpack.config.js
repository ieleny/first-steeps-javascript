module.exports = {
  entry: ["./src/modulo2.js", ".src/main.js"],
  output: {
    path: __dirname + "/public/",
    filename: "./public/bundle.js"
  },
  devServer: {
    contentBase: __dirname + "/public/"
  },
  module: {
    rules: [
      {
        //teste: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
