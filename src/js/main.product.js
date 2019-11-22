require.config({
    paths: {
        jquery: "../../node_modules/jquery/dist/jquery.min",
        product: "./lib/product",
        bootstrap: '../../node_modules/bootstrap/dist/js/bootstrap.min',
        cookie: "./lib/cookie",
        public2: "./public2",
        md5: "./jquery.md5",
        reg: "./reg"
    },
    shim: {
        product: ['public2'],
        bootstrap: ['jquery'],
        mad5: ['jquery']

    }
});


require(['jquery', 'product', 'public2', 'bootstrap'], function($, product, bootstrap) {
    product.render(function(id, price) { // 渲染页面
        $('.add').on('click', function() {
            // alert(1);
            // console.log($('.pro-num'))
            product.addItem(id, price, $('.pro-num').val());
        });
        product.fdj();
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
    });

});

require(['jquery', 'reg'], function($, reg) {
    reg.regEv('.btn-reg');
    reg.reg();
    reg.login();
    reg.loginEv('.btn-login');
})