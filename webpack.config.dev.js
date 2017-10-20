// ------------------------------------------------------------------
// Default Dependencies
// ------------------------------------------------------------------

const webpack = require('webpack');

// ------------------------------------------------------------------

exports = pluginsDev = () => {
  return [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
  ];
};


// ------------------------------------------------------------------

return (module.exports = { pluginsDev});
