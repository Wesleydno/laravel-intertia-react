const mix = require('laravel-mix');
const path = require('path');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.alias({
    ziggy: path.resolve('vendor/tightenco/ziggy/dist'),
});


mix.js('resources/js/app.tsx', 'public/js')
    .react()
    .webpackConfig({
        module: {
          rules: [
            {
              test: /\.tsx?$/,
              loader: "ts-loader",
              exclude: /node_modules/
            }
          ]
        },
        resolve: {
          extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
          alias: {
            '@': path.resolve('resources/js')
          }
        }
      })
    .sass('resources/sass/app.scss', 'public/css');
