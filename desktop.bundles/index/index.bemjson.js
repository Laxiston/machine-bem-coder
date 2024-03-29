module.exports = {
    block : 'page',
    title : 'Title of the Index page',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : '/desktop.bundles/merged/merged.min.css' }
    ],
    scripts: [{ elem : 'js', url : '/desktop.bundles/merged/merged.min.js' }],
    mods : { theme : 'islands' },
    content : [
        {
            block : 'header',
            content : [
                'header content goes here'
            ]
        },
        {
            block : 'content',
            content : 'content goes here'
        },
        {
            block : 'footer',
            content : [
                'footer content goes here'
            ]
        }
    ]
};
