var webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    cache: true,
    devtool: 'cheap-source-map',

    entry: {
        'vendor': ['./src/vendor.ts'],
        'bundle': ['./src/browser.ts']
    },
    output: {
        path: '__clientBuild__/',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [{
            test: /\.ts$/,
            loader: 'ts-loader'
        }, {
            test: /\.tsx$/,
            loader: 'ts-loader'
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('css-loader')
        }, {
            test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file-loader?mimetype=application/font-woff&name=fonts/[name].[ext]'
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file-loader?mimetype=application/x-font-ttf&name=fonts/[name].[ext]'
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?\??$/,
            loader: 'file-loader?mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]'
        }, {
            test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file-loader?mimetype=application/font-otf&name=fonts/[name].[ext]'
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file-loader?mimetype=image/svg+xml&name=fonts/[name].[ext]'
        }, {
            test: /\.png$/,
            loader: 'file-loader?name=images/[name].[ext]'
        }],
        noParse: [
            /\.min\.js/
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'common.js',
            chunks: ['vendor', 'bundle']
        }),
        new webpack.optimize.DedupePlugin(),
        new ExtractTextPlugin('[name].css'),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};
