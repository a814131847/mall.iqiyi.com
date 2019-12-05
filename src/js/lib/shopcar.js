let baseUrl = "http://127.0.0.1:8080/iqiyi.com";
define(['jquery', 'cookie'], function($, cookie) {
    return {
        render: function() {
            let shop = cookie.get('shop');
            if (shop) {
                shop = JSON.parse(shop);
                let idList = shop.map(elm => elm.id).join(); //取id并且用,连接
                $.ajax({
                    url: `${baseUrl}/lib/shop.php`,
                    type: 'get',
                    data: {
                        idlist: idList
                    },
                    dataType: 'json',
                    success: function(res) {
                        // console.log(res);
                        let tempstr = '';
                        res.forEach(elm => {
                            let pic = (elm.product_pic);
                            let arr = shop.filter((val, i) => {
                                // 从购物车cookie数据中取出于本条遍历数据相同id的元素
                                return val.id == elm.product_id;
                            });

                            tempstr += `
                            <ul class="product-list" id="${elm.product_id}">
                            <li class="check">
                                <input type="checkbox">
                            </li>
                            <li class="detail">
                                <a href="" target="_blank" class="activity_pic">
                                    <img width="80" height="80" src="${pic}" alt="${elm.product_name}">
                                </a>
                                <div class="orderItems_content promotions_line">
                                    <a target="_blank" href="">${elm.product_name}</a>
                                    <span class="tx-inline">颜色分类: 白色</span>
                                </div>
                            </li>
                            <li class="price">
                                ${elm.product_price} 
                            </li>
                            <li class="num">
                                <input type="number" value="${arr[0].num}" class="pro_num">
                            </li>
                            <li class="disbursements">
                                ${(arr[0].num*elm.product_price).toFixed(2)}
                            </li>
                            <li class="trade_operate">
                                <a href="javascript:;" class="del">删除</a>
                            </li>
                        </ul>
                            `;
                        });
                        $('.product-box').append(tempstr);
                        $('.trade_operate').on('click', function() {
                            console.log($(this).parent());
                            let id = $(this).parent().attr('id');
                            let shop = JSON.parse(cookie.get('shop'));
                            console.log(shop);
                            if (shop.length > 1) {
                                let shopp = shop.filter(elm => {
                                    return elm.id != id; //过滤返回id不与按钮相同的商品id
                                })
                                cookie.set("shop", JSON.stringify(shopp), 1); //重新设定cookie
                            } else {
                                cookie.remove('shop'); //移除原有cookie
                            }
                            location.reload();
                        });
                        $('.pro_num').on('change', function() {
                            // console.log(($(this).val()) * ($(this).parent().prev().text()))
                            let addprice = ($(this).val()) * ($(this).parent().prev().text()); //重新计算价格
                            $(this).parent().next().text(addprice.toFixed(2)); //放入页面
                        });

                        $('.clist :checkbox').on('click', function() {

                            // $('.clist :checkbox').prop('clicked', function(i, val) {

                            // })
                            // $('.clist :checkbox').each(function(i, elm) {
                            //     let a = 0;
                            //     if (elm.prop('clicked')) {
                            //         a++;
                            //     }
                            // })

                            if ($(".product-list input:checked").length === $('.clist :checkbox').length) {
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

                    }
                });
            }





        }
    }
});