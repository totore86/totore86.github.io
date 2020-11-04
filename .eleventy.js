const lazyImagesPlugin = require('eleventy-plugin-lazyimages');

module.exports = function(eleventyConfig){
    eleventyConfig.addPassthroughCopy('assets'); 
    eleventyConfig.addPlugin(lazyImagesPlugin);
}

