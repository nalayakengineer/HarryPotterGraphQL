const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const nodeExternals = require('webpack-node-externals');
// eslint-disable-next-line import/no-extraneous-dependencies
const slsw = require('serverless-webpack');

module.exports = {
    entry: slsw.lib.entries,
    target: 'node',
    // externals: [nodeExternals({
    // 	modulesDir: path.resolve(__dirname, './node_modules'),
    // })],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    'imports-loader?graphql',
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [['env', { targets: { node: '12.18' } }]],
                        },
                    },
                ],
            },
        ],
    },
    output: {
        libraryTarget: 'commonjs',
        path: path.join(__dirname, '.webpack'),
        filename: '[name].js',
    },
    mode: 'development',
};