module.exports = {
  bootstrapCustomizations: './src/stylesheets/bootstrap-custom.scss',
  mainSass: './src/stylesheets/main.scss', // path to your main SASS file (optional)
  verbose: true, // print out your custom files used
  debug: true, // print out the full generated scss file
  styleLoader: 'style-loader!css-loader!sass-loader', // see example for the ExtractTextPlugin
  scripts: {
    // add every bootstrap script you need
    transition: true,
  },
  styles: {
    // add every bootstrap style you need
    mixins: true,

    normalize: true,
    print: true,

    scaffolding: true,
    grid: true,
    forms: true,
    type: true,
  },
};
