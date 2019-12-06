require.config({
    paths: {
        jquery: '../../node_modules/jquery/dist/jquery.min',
        index: './lib/index',
        lazyload: './jquery.lazyload.min',
        bootstrap: '../../node_modules/bootstrap/dist/js/bootstrap.min',
        md5: "./jquery.md5",
        reg: "./reg",
        cookie: "./lib/cookie",
    },
    shim: {
        lazyload: ['jquery'],
        bootstrap: ['jquery'],
        mad5: ['jquery']
    }
});

require(['jquery', 'index', 'lazyload', 'bootstrap', 'cookie'], function($, index, lazyload, bootstrap, cookie) {
    index.render();
    let shop = cookie.get('shop');
    if (shop) {
        shop = JSON.parse(shop);
        $('.orange').text(shop.length)
    }


});
require(['jquery', 'reg'], function($, reg) {
    reg.regEv('.btn-reg');
    reg.reg();
    reg.login();
    reg.loginEv('.btn-login');
})