/* global modules:false */

modules.define(
    'about',
    ['i-bem__dom'],
    function(provide, BEMDOM) {

        provide(BEMDOM.decl(this.name,
            /* current `about` block methods */
            {
                onSetMod: {
                    js: {
                        inited: function() {
                            console.log("this: \n", this);
                            this.domElem.text(this.domElem.text() + ' js inited');
                        }
                    }
                }
            },
            /* all `about` blocks methods */
            {}
        ));

    });

