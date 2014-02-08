var BEM = require('bem'),
    Q = BEM.require('q'),
    environ = require('bem-environ'),
    join = require('path').join,
    BEMCORE_TECHS = environ.getLibPath('bem-core', '.bem/techs'),

    tidy = require('htmltidy').tidy,

    /* see http://w3c.github.io/tidy-html5/quickref.html */
    tidyOpts = {
        charEncoding: 'utf8',
        doctype: 'html5',
        hideComments: false,
        indent: true,
        indentSpaces: 4,
        bare: true,
        breakBeforeBr: true,
        fixUri: true,
        wrap: 0,
        'vertical-space': 1
    };

exports.baseTechPath = join(BEMCORE_TECHS, 'html.js');

exports.techMixin = {

    getCreateResult: process.env.YENV === 'production' ?
        function() {
            return this.__base.apply(this, arguments);
        } :
        function(path, suffix, vars) {
            var deferred = Q.defer();

            return this.__base.apply(this, arguments)
                .then(function(html) {

                    tidy(html, tidyOpts, function(err, html) {
                        if (err) {
                            deferred.reject(new Error(err));
                        } else {
                            deferred.resolve(html);
                        }
                    });

                    return deferred.promise;

                });

        }

};
