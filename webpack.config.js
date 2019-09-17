module.exports = {
  entry:{
    main:'./main.js'
    
  }, 
  output: {
    filename: 'bundle.js'
  },
  
  module: {
    rules:[
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
    ]
  }
};