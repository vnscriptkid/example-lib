import { join } from "path";

const include = join(__dirname, "src");

export default {
  entry: "./src/index",
  output: {
    path: join(__dirname, "dist"),
    libraryTarget: "umd",
    library: "@vnscriptkid/example-lib",
  },
  devtool: "source-map",
  module: {
    rules: [{ test: /\.js$/, loader: "babel-loader", include }],
  },
};
