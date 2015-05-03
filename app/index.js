var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    constructor: function() {
        // Calling the super constructor is important so our generator is correctly set up
        generators.Base.apply(this, arguments);
    },
    method1: function() {
        console.log('method 1 just ran');
    }
});
