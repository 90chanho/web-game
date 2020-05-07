const path = require("path")
const webpack = require("webpack")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

process.env.NODE_ENV = process.env.NODE_ENV || "development"

module.exports = {
	mode: "development",
	entry: {
		app: "./src/index.ts",
		"js-stone/js-stone": "./src/js-stone/js-stone.ts",
		"number-baseball/number-baseball": "./src/number-baseball/number-baseball.ts",
		"pair-card/pair-card": "./src/pair-card/pair-card.ts",
		"rps/rps": "./src/rps/rps.ts",
		"tic-tac-toe/tic-tac-toe": "./src/tic-tac-toe/tic-tac-toe.ts",
		"times-table/times-table": "./src/times-table/times-table.ts"
	},
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "[name].js"
	},
	devServer: {
		contentBase: path.join(__dirname, "build"),
		publicPath: "/",
		overlay: true,
		stats: "errors-only"
	},
	module: {
		rules: [
			{
				test: /\.(css|scss)$/,
				use: [
					process.env.NODE_ENV === "production" ? MiniCssExtractPlugin.loader : "style-loader",
					"css-loader",
					"sass-loader"
				]
			},
			{
				test: /\.js$/,
				use: ["babel-loader"],
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|svg|gif)$/,
				loader: "url-loader",
				options: {
					name: "[name].[ext]?[hash]",
					limit: 10000 // 10Kb
				}
			},
			{
				test: /\.ts$/,
				use: ["babel-loader", "ts-loader"],
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			templateParameters: {
				env: process.env.NODE_ENV === "production" ? "배포" : "개발"
			},
			chunks: ["app"]
		}),
		new HtmlWebpackPlugin({
			template: "./src/js-stone/index.html",
			filename: "js-stone/index.html",
			chunks: ["js-stone/js-stone"]
		}),
		new HtmlWebpackPlugin({
			template: "./src/number-baseball/index.html",
			filename: "number-baseball/index.html",
			chunks: ["number-baseball/number-baseball"]
		}),
		new HtmlWebpackPlugin({
			template: "./src/pair-card/index.html",
			filename: "pair-card/index.html",
			chunks: ["pair-card/pair-card"]
		}),
		new HtmlWebpackPlugin({
			template: "./src/rps/index.html",
			filename: "rps/index.html",
			chunks: ["rps/rps"]
		}),
		new HtmlWebpackPlugin({
			template: "./src/tic-tac-toe/index.html",
			filename: "tic-tac-toe/index.html",
			chunks: ["tic-tac-toe/tic-tac-toe"]
		}),
		new HtmlWebpackPlugin({
			template: "./src/times-table/index.html",
			filename: "times-table/index.html",
			chunks: ["times-table/times-table"]
		}),
		...(process.env.NODE_ENV === "production"
			? [new MiniCssExtractPlugin({ filename: "[name].css" })]
			: [])
	]
}
