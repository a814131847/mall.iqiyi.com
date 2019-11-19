require.config({
    paths: {
        jquery: "../../node_modules/jquery/dist/jquery.min",
        product: "./lib/product",
        cookie: "./lib/cookie",
        public2: "./public2",
    },
    shim: {
        product: ['public2']
    }
});


require(['jquery', 'product', 'public2'], function($, product) {
    product.render(function(id, price) { // 渲染页面
        $('.add').on('click', function() {
            product.addItem(id, price, $('.num').val());
        });
        product.fdj();
    });

});