module.exports = {
    plugins: [
        require('postcss-nested'),
        require('postcss-preset-env'), // Stage 2 by default
        require('postcss-calc'),
        require('autoprefixer')
    ]
}