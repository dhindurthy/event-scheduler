module: {
  rules: [
    {
      test: /\.ts$/,
      loaders: [{
        loader: 'awesome-typescript-loader',
        options: { configFileName: helpers.root('src', 'tsconfig.json') }
      } , 'angular2-template-loader']
    },
    {
      test: /\.html$/,
      loader: 'html-loader'
    },
    {
      test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
      loader: 'file-loader?name=assets/[name].[hash].[ext]'
    },
    {
      test: /\.css$/,
      exclude: helpers.root('src', 'app'),
      loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap' })
    },
    {
      test: /\.css$/,
      include: helpers.root('src', 'app'),
      loader: 'raw-loader'
    }
  ]
},
