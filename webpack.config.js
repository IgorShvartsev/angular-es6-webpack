'use_strict';

const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoPrefixer 	    = require('autoprefixer');
const CssSourcemapPlugin = require('css-sourcemaps-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'dev';

let config = {

    context: __dirname + '/src',

    entry: {
    	app : './index.js'
    },

    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: '[name].[hash].js'
    },

    module: {
        loaders: [

         	{
             	test: /\.js$/,
             	exclude: [/node_modules/, /src\/images/, /src\/css/],
             	//include : './app',
             	loader: 'ng-annotate!babel?presets[]=es2015'
         	},

         	{ 	
         		test: /\.css$/, 
         		loader: ExtractTextPlugin.extract('style', 'css-loader!postcss-loader')
            },
            
            /**
            * extract images to images folder 
            */ 
            {
      			test: /\.(png|jpg|jpeg|gif|svg)(\?\S*)?$/,
                include: /\/node_modules\//,
      			loader: 'file?name=images/[1]&regExp=node_modules/(.*)'
    		},
            {
                test: /\.(png|jpg|jpeg|gif)(\?\S*)?$/,
                exclude: /\/node_modules\//,
                include: /\/images\//,
                loader: 'file?name=images/[1]&regExp=images/(.*)'
            },

            /**
            * extract fonts to the fonts folder
            */
            {
                test: /\.(woff|woff2|ttf|eot|svg)(\?\S*)?$/,
                loader: 'file?name=fonts/[name].[ext]'
            },

    		/**
    		* https://github.com/webpack/html-loader
    		*/
    		{
        		test: /\.html$/,
                exclude: /\/node_modules\//,
        		loader: "html"
      		}

            /*
    		{
    			test: /\.html$/,
      			loader: 'raw'
    		}
    		*/
        ],
        noParse : [/node_modules\/(angular\/angular.js|jquery)/]
    },

    /**
    * Add vendor prefixes to your css
    * Reference: https://github.com/postcss/autoprefixer-core
    * postcss-loader should be also added to the module.loaders
    */
    postcss : [
    	autoPrefixer ({
      		browsers: ['last 2 version']
    	})	
  	],

    htmlLoader: {
        ignoreCustomFragments: [/\{\{.*?}}/],
        root: __dirname + '/src',
        attrs: ['img:src']
    },

    plugins: [

        new webpack.DefinePlugin({
            NODE_ENV : JSON.stringify(NODE_ENV)
        }), 

        new webpack.NoErrorsPlugin(),

        new ExtractTextPlugin('css/style.[hash].css', {
			disable: false,
			allChunks: true
		}),

        /**
        * Include output result file links (CSS, JS) into given HTML template
        *   
        */
		new HtmlWebpackPlugin({
        	template: './index.html',
        	inject: 'body'
      	})
    ]
};

if (NODE_ENV == 'production') {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false
            },
            compressor: {
                warnings: false
            }
        })
    );
} else if (NODE_ENV == 'test') {
    config.devtool = 'inline-source-map';
} else {
    config.devtool = 'source-map';
    config.plugins.push(
        new CssSourcemapPlugin()
    );
}
module.exports = config;
