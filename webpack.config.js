module.exports = {

    watch: true,

    target: 'electron',

    entry: './player/src/entry.js',

    output: {
        path: __dirname + '/player/build/',
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: '/node_modules',
                loader: 'babel-loader',
                options: {
                    presets: ['react']
                }
            }
        ]
    }

}