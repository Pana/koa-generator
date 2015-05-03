var generators = require('yeoman-generator');
var fs = require('fs');
var path = require('path');
var basename = path.basename(module.filename);
var rread = require('readdir-recursive');
var templateFolder = path.join(__dirname, './templates');

module.exports = generators.Base.extend({
    constructor: function() {
        generators.Base.apply(this, arguments);
    },
    copying: function() {
        var that = this;
        rread
            .fileSync(templateFolder)
            .map(function (file) {
                return path.relative(templateFolder, file)
            })
            .forEach(function(file){
                that.copy(that.templatePath(file), that.destinationPath(file));
            })
    },
    installDepends: function () {
        var packageJson = require(path.join(templateFolder, 'package.json'));
        var depends = Object.keys(packageJson.dependencies);
        // how to specify package version here
        this.npmInstall(depends);
    }
});
