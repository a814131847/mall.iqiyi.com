require.config({
    paths: {
        jquery: '../../node_modules/jquery/dist/jquery.min',
        index: './lib/index',
        lazyload: './jquery.lazyload.min',
        bootstrap: '../../node_modules/bootstrap/dist/js/bootstrap.min',
        md5: "./jquery.md5",
        reg: "./reg",
        shopcar: "./lib/shopcar",
        cookie: "./lib/cookie",
    },
    shim: {
        lazyload: ['jquery'],
        bootstrap: ['jquery'],
        mad5: ['jquery']
    }
});
require(['jquery', 'shopcar'], function($, shopcar) {
    shopcar.render();
});

require(['jquery', 'reg', 'bootstrap'], function($, reg, bootstrap) {
    reg.regEv('.btn-reg');
    reg.reg();
    reg.login();
    reg.loginEv('.btn-login');
    $('.modal-footer>a').on('click', function() {
        var index = $('.modal-footer>a').index(this);
        // $(this).addClass('actived').siblings().removeClass('actived');
        $('.modal-content>div').eq(index).addClass('show').siblings().removeClass('show');
    });
    $('.login').on('click', function() {
        $('.log-part').addClass('show').siblings().removeClass('show');
    })
    $('.reg').on('click', function() {
        $('.reg-part').addClass('show').siblings().removeClass('show');
    })
})