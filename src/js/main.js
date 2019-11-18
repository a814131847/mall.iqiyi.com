require.config({
    paths: {
        jquery: '../../node_modules/jquery/dist/jquery.min',
        banner: './banner',

    },
    shim: {
        banner: ['jquery']

    }
});

// require(['jquery', 'banner'], function($, carousel) {
//     carousel(
//         $('.demo1'), //必选， 要轮播模块(id/class/tagname均可)，必须为jQuery元素
//         {
//             type: 'leftright', //可选，默认左右(leftright) - 'leftright' / 'updown' / 'fade' (左右/上下/渐隐渐现)
//             arrowtype: 'move', //可选，默认一直显示 - 'move' / 'none'	(鼠标移上显示 / 不显示 )
//             autoplay: true, //可选，默认true - true / false (开启轮播/关闭轮播)
//             time: 3000 //可选，默认3000
//         }
//     );

//     carousel(
//         $('.demo2'), //必选， 要轮播模块(id/class/tagname均可)，必须为jQuery元素
//         {
//             type: 'fade', //可选，默认左右(leftright) - 'leftright' / 'updown' / 'fade' (左右/上下/渐隐渐现)
//             arrowtype: 'move', //可选，默认一直显示 - 'move' / 'none'	(鼠标移上显示 / 不显示 )
//             autoplay: true, //可选，默认true - true / false (开启轮播/关闭轮播)
//             time: 4000 //可选，默认3000
//         }
//     );
// })


// require(['carousel'], function(Carousel) {
//     var carousel1 = new Carousel();
//     carousel1.init({
//         buttonType: 'circle',
//         btnPos: 'center',
//         selector: '#content1',
//         imgData: ['../img/4703abee72a84501b8a4429f772ff580.jpg', '../img/8f90ca7c5d054f9784e66595f4f0a796.jpg', '../img/14cf7d9e17184ad381f2cb1432e2bdc6.jpg', '../img/651a3a4b9386434aa70d9101975e5f2c.jpg', '../img/985cc25e5006410f839ca128f7447ac8.jpg', '../img/f12d49aa600f4260ade76bff2182af65.jpg']
//     });
//     var carousel2 = new Carousel(); //两个轮播图，互不影响
//     carousel2.init({
//         buttonType: 'square',
//         btnPos: 'bottom',
//         selector: '#content2',
//         imgData: ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg']
//     });
// });