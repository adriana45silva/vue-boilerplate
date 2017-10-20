// ------------------------------------------------------------------
// Default Dependencies
// ------------------------------------------------------------------


exports = pluginsProd = () => {
  return [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    })
  ];
};

// ------------------------------------------------------------------

return module.exports = {pluginsProd};
