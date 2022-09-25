const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {Template} = require('webpack');
const {ClientRequest} = require('http');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WebpackNotifierPlugin = require('webpack-notifier');

const pages = ['index']

const createHtmlPlugin = (title, filename, paths, chunks = pages[0]) => {
    return new HtmlWebpackPlugin({
        title: title,
        filename: `${filename}.html`,
        template: paths.html.split(' ').join('/').padStart(paths.html.length + 2, './'),
        favicon: paths.favicon ? paths.favicon.split(' ').join('/').padStart(paths.favicon.length + 2, './') : '',
        chunks: [`${chunks}`]
    })
}

const plugins = [
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css'
    }),
    createHtmlPlugin('???', 'index', {
        html: 'src index.html',
    }),
    new WebpackNotifierPlugin({ onlyOnError: true })
]

module.exports = {
    plugins,
    mode: 'development',
    entry: pages.reduce((config, page) => {
        config[page] = `./src/${page}.js`
        return config
    }, {}),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true
    },
    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
                resolve: {
                    extensions: ['.tsx', '.ts', '.js'],
                },
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: `images/[name][ext]`
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]'
                }
            },
            {
                test: /\.ejs$/,
                loader: 'ejs-loader'
            }
        ],
    },
    watch: true,
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        open: true,
        host: '192.168.28.137',
        hot: false,
    },
};