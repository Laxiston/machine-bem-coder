module.exports = {
    block : 'page',
    title : 'Title of the About page',
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
            block: 'about',
            content: 'about me'
        }
    ]
};
