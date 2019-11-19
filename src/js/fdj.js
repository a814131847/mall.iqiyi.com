define(['public2'], function($) {
    return {
        fdj: function() {
            var small = $('.small'),
                movebox = $('.movebox'),
                big = $('.big'),
                bigpic = $('.bigpic');
            var chanse = $('.chanse')

            small.on('mouseover', function() {
                // 1. 显示movebox和big
                movebox.addClass('show');
                big.addClass('show');

                // 3. 计算movebox大小 movebox:small = big:bigpic    movebox:big = small:bigpic
                // 获取元素的大小 只能获取可见元素
                movebox.css({
                    'width': small.offset().width * big.offset().width / bigpic.offset().width + 'px',
                    'height': small.offset().height * big.offset().height / bigpic.offset().height + 'px',
                });

                //4.切换图片

                $('.chanse>li').on('mouseover', function() {
                    $('.chanse>li').removeClass('border')
                    star.call(this)
                })

                function star() {
                    var arr = ['../img/jx01.jpg', '', '../img/jx01-1.jpg', '../img/jx01-2.jpg', '../img/jx01-3.jpg', '../img/jx01-1.jpg'];
                    var index = $('.chanse>li').index(this); //获得li的下标
                    $('.chanse>li').each((elm, i) => {
                        if (i == index) {
                            $(elm).addClass('border');
                        }
                    })
                    $('.small>img')[0].src = arr[index];
                    $('.big>img')[0].src = arr[index];
                }

                // 2.鼠标跟随
                small.on('mousemove', function(ev) {
                    // 计算移动的距离
                    var top = ev.pageY - small.offset().top - (movebox.offset().height / 2);
                    var left = ev.pageX - small.offset().left - (movebox.offset().width / 2);

                    var ratio = bigpic.offset().width / small.offset().width; //比例必须大于1

                    // 边界管理
                    if (left <= 0) {
                        left = 0;
                    } else if (left > small.offset().width - movebox.offset().width) {
                        left = small.offset().width - movebox.offset().width - 2;
                    }

                    if (top <= 0) {
                        top = 0;
                    } else if (top > small.offset().height - movebox.offset().height) {
                        top = small.offset().height - movebox.offset().height - 2;
                    }

                    movebox.css({
                        left: left + 'px',
                        top: top + 'px'
                    });

                    bigpic.css({
                        left: -left * ratio + 'px',
                        top: -top * ratio + 'px',
                    });
                });
            });
            small.on('mouseout', function() {
                movebox.removeClass('show');
                big.removeClass('show');
            })
        }
    }
});