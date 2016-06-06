var webpack = require('webpack');

module.exports = {
    cache: true,
    devtool: 'cheap-source-map',

    entry: {
        'vendor': ['./src/vendor.ts'],
        'bundle': ['./src/browser.ts']
    },
    output: {
        path: 'build',
        publicPath: 'build',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [{
            test: /\.ts$/,
            loader: 'ts-loader'
        },{
            test: /\.tsx$/,
            loader: 'ts-loader'
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
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};
