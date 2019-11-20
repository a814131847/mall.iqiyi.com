require.config({
    paths: {
        jquery: '../../node_modules/jquery/dist/jquery.min',
        index: './lib/index',
        lazyload: './jquery.lazyload.min',
        bootstrap: '../../node_modules/bootstrap/dist/js/bootstrap.min',
        md5: "./jquery.md5",
        reg: "./reg"
    },
    shim: {
        lazyload: ['jquery'],
        bootstrap: ['jquery'],
        mad5: ['jquery']
    }
});

require(['jquery', 'index', 'lazyload', 'bootstrap'], function($, index, lazyload, bootstrap) {
    index.render();


});
require(['jquery', 'reg'], function($, reg) {
    reg.regEv('.btn-reg');
    reg.reg();
    reg.login();
    reg.loginEv('.btn-login');
})