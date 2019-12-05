define(['cookie', 'jquery'], function(cookie, $) {
    return {
        rander: function(callback) {
            if (cookie.get('name')) {
                $('.login').addClass("none");
                $('.name').removeClass('none');
                // console.log($('#name'));
                // console.log(cookie.get('name'));
                $('#uname').html(cookie.get('name'));
            }
            let shop = cookie.get('shop');
            if (shop) {
                shop = JSON.parse(shop);
                let idList = shop.map(elm => elm.id).join(); //取id并且用,连接
                $.ajax({
                    url: "http://localhost:8080/kepeng/changhong.com/src/lib/shopcar.php",
                    type: 'get',
                    data: {
                        idlist: idList
                    },
                    dataType: 'json',
                    success: function(res) {
                        // console.log(res);
                        let tempstr = '';
                        res.forEach(elm => {
                            let pic = JSON.parse(elm.bigpic)[0];
                            let arr = shop.filter((val, i) => {
                                // 从购物车cookie数据中取出于本条遍历数据相同id的元素
                                return val.id == elm.id;
                            });

                            tempstr += `
                            <li class="item${elm.id}">
                            <div class="xuan"><input type="checkbox"></div>
                            <div class="tu"><img src="${pic.bg01}" alt="${elm.name}"></div>
                            <div class="tit">${elm.name}</div>
                            <div class="dan">
                                <span>单价</span>&nbsp;&nbsp;&nbsp;
                                <span style=" color: red;" class="pi">${elm.price}</span>&nbsp;&nbsp;&nbsp;
                                <span>元</span>
                            </div>
                            <div class="num">数量&nbsp;&nbsp;<a href="javascript:;" class="jian">-</a><input type="text" value=${arr[0].num}><a href="javascript:;" class="zijia">+</a></div>
                            <div class="p8">有货</div>
                            <div class="p9"><span class="iconfont icon-cuo"></span></div>
                        </li>
                            `;
                        });
                        $('.clist').append(tempstr);

                        callback && callback();
                    }
                });
            } else {
                // console.log($('.kong'));
                // console.log($('.foo'));
                // console.log($('.ding'));
                $('.kong').removeClass('none');
                $('.foo').addClass('none');
                $('.ding').addClass('none');
            }

        },
        removeName: function() {
            $('#tui').on('click', function() {
                cookie.remove('name');
                location.reload();
                $('#uname').html('');
            })
        },
        total: function() {
            //全选    
            $(':checkbox').eq(0).on('click', function() {
                // console.log($(':checkbox').eq(0).prop('checked'));
                let shop = JSON.parse(cookie.get('shop'));
                let jia = 0;
                shop.forEach(elm => {
                    jia += elm.price * elm.num;
                })
                $('.clist :checkbox').prop("checked", function(i, val) {
                    return $(':checkbox').eq(0).prop('checked');
                })
                if ($(':checkbox').eq(0).prop("checked")) {
                    $('.foo .num').html($('.clist :checkbox').length);
                    $('.money').html(jia);

                } else {
                    $('.foo .num').html("0");
                    $('.money').html('0');
                }
            })

            //勾选功能  复选
            $('.clist :checkbox').on('click', function() {

                // $('.clist :checkbox').prop('clicked', function(i, val) {

                // })
                // $('.clist :checkbox').each(function(i, elm) {
                //     let a = 0;
                //     if (elm.prop('clicked')) {
                //         a++;
                //     }
                // })

                if ($(".clist input:checked").length === $('.clist :checkbox').length) {
                    $(':checkbox').eq(0).prop('checked', true);
                } else {
                    $(':checkbox').eq(0).prop('checked', false);
                }

                let id = $(this).parents('li').attr('class').slice(4);
                let shop = JSON.parse(cookie.get('shop'));
                let shop1 = shop.filter(elm => {
                    return elm.id == id;
                })
                let num = shop1[0].price * shop1[0].num;
                // console.log(num);
                // console.log(shop1);
                if ($(this).prop('checked')) {
                    $('.foo .num').html(parseInt($('.foo .num').html()) + 1);
                    $('.money').html(parseInt($('.money').html()) + num);
                } else {
                    $('.money').html(parseInt($('.money').html()) - num);
                    $('.foo .num').html(parseInt($('.foo .num').html()) - 1);
                }
                // console.log($(this).prop('checked'));
            })


            //删除功能
            $('.icon-cuo').on('click', function() {
                let shop = JSON.parse(cookie.get('shop'));
                let id = $(this).parents('li').attr('class').slice(4);
                // console.log(shop);
                if (shop.length > 1) {
                    let shop1 = shop.filter(elm => {
                        return elm.id != id;
                    })
                    cookie.set("shop", JSON.stringify(shop1), 1);
                } else {
                    cookie.remove('shop');
                }
                location.reload();
            })


            //修改num值
            $('.clist li .num input').on('change', function() {

                let shop = JSON.parse(cookie.get('shop'));
                let id = $(this).parents('li').attr('class').slice(4);
                if ($(this).parents('li').find(':checkbox').prop('checked')) {
                    shop.forEach((elm) => {
                        if (elm.id == id) {
                            let i = parseInt($(this).val()) - elm.num;
                            let num = i * elm.price;
                            $('.money').html(parseInt($('.money').html()) + num);
                        }
                    })
                }
                shop.map(elm => {
                    if (elm.id == id) {
                        elm.num = $(this).val();
                    }
                })
                cookie.set('shop', JSON.stringify(shop), 1);
            })

            //减num值
            $('.jian').on("click", function() {
                let val = parseInt($(this).parents('.num').find('input').val()) - 1;
                let shop = JSON.parse(cookie.get('shop'));
                let id = $(this).parents('li').attr('class').slice(4);

                if (val > 0) {
                    $(this).parents('.num').find('input').val(val);

                    if ($(this).parents('li').find(':checkbox').prop('checked')) {
                        shop.forEach((elm) => {
                            if (elm.id == id) {
                                let num = 1 * elm.price;
                                $('.money').html(parseInt($('.money').html()) - num);
                            }
                        })
                    }

                    shop.map(elm => {
                        if (elm.id == id) {
                            elm.num = val;
                        }
                    })

                    cookie.set('shop', JSON.stringify(shop), 1);
                } else {
                    alert('至少购买一件哦');
                }
            })

            //加num值
            $('.zijia').on("click", function() {
                let val = parseInt($(this).parents('.num').find('input').val()) + 1;
                let shop = JSON.parse(cookie.get('shop'));
                let id = $(this).parents('li').attr('class').slice(4);
                if (val <= 1000) {
                    $(this).parents('.num').find('input').val(val);
                    if ($(this).parents('li').find(':checkbox').prop('checked')) {
                        shop.forEach((elm) => {
                            if (elm.id == id) {
                                let num = 1 * elm.price;
                                $('.money').html(parseInt($('.money').html()) + num);
                            }
                        })
                    }
                    shop.map(elm => {
                        if (elm.id == id) {
                            elm.num = val;
                        }
                    })
                    cookie.set('shop', JSON.stringify(shop), 1);

                } else {
                    alert("库存不够咯");
                }

            })

        }


    }
})