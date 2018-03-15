/**
 * Created by DzEN on 11/21/2016.
 */
require('babel-core/register');
['.css', '.less', '.sass', '.ttf', '.woff', '.woff2'].forEach((ext) => require.extensions[ext] = () => {});
require('babel-polyfill');
require('./src/server');
