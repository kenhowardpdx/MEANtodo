var webpack = require('webpack'),
       path = require('path');

module.exports = {
    context: __dirname + '/app',
    entry: {
        app: './app.js',
        vendor: ['angular', 'angular-route']  
    },
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
    ],
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: "ngtemplate?relativeTo=" + (path.resolve(__dirname, './app')) + "/!html"
            }
        ]
    }
};