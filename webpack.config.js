const path = require('path');
const webpack = require('webpack');module.exports = {
 //mode: ""
 entry: {
 index: path.resolve(__dirname, './src/js/index.js'),
 },
 output: {
 filename: '[name].js',
 path: path.resolve(__dirname, 'public', 'build'),
 },
 module: {
 rules: []
 },
}


