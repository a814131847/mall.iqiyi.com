let baseUrl = "http://127.0.0.1:8080/iqiyi.com";
define(['jquery', 'cookie'], function($, cookie) {
    return {
        render: function() {
            let shop = cookie.get('shop');

            if (shop) {
                shop = JSON.parse(shop);
                $('.orange').text(shop.length);
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
                                <input type="number" value="${arr[0].num}" class="pro_num" max="" min = "1">
                            </li>
                            <li class="disbursements">${(arr[0].num*elm.product_price).toFixed(2)}</li>
                            <li class="trade_operate">
                                <a href="javascript:;" class="del">删除</a>
                            </li>
                        </ul>
                            `;
                        });
                        $('.product-box').append(tempstr);

                        // 删除cookie
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

                        // 改变数量价格
                        let Allcheck = [];
                        let Allcheckprice = [];
                        let sum = 0;

                        function getSum() {
                            sum = 0;
                            Allcheckprice.forEach((elm, i) => {
                                sum += elm.price
                            });
                            sum = sum.toFixed(2);
                            $('.allCheckedPrice').text(sum)
                        };
                        $('.pro_num').on('change', function() {
                            let addprice = ($(this).val()) * ($(this).parent().prev().text()); //重新计算价格
                            $(this).parent().next().text(addprice.toFixed(2)); //放入页面
                            Allcheckprice.forEach((elm, i) => {
                                if (elm.id == $(this).parent().parent().attr('id')) {
                                    elm.price = parseFloat($(this).parent().next().text());
                                }
                                sum = 0;
                                getSum();
                            })
                        });

                        // 单选框被点击时
                        $('.check :checkbox').on('click', function() {
                            sum = 0;
                            let checkid = $(this).parent().parent().attr("id")
                            let checkallprice = Number((parseFloat($(this).parent().next().next().next().next().text())).toFixed(2));

                            if ($(this).prop('checked')) {
                                Allcheck.push(checkid);
                                Allcheckprice.push({
                                    id: checkid,
                                    price: checkallprice
                                });

                            } else {
                                Allcheck.splice(Allcheck.indexOf(checkid), 1)
                                Allcheckprice.forEach((elm, i) => {
                                    if (elm.id == checkid) {
                                        Allcheckprice.splice(i, 1)
                                    }
                                })
                            }
                            $('.checkednum').text(Allcheckprice.length)

                            getSum();

                            // 所有复选框被选中时，全选被选中
                            if (shop.length == Allcheckprice.length) {
                                $('.allcheck :checkbox').prop('checked', true)
                            } else {
                                $('.allcheck :checkbox').prop('checked', false)
                            }
                        })

                        $('.allcheck :checkbox').on('click', function() {
                            if ($(this).prop('checked')) {
                                $('.check :checkbox').prop('checked', true)
                                $('.allcheck :checkbox').prop('checked', true)
                                Allcheckprice = []

                                shop.forEach((elm, i) => {
                                    Allcheckprice.push({
                                        id: elm.id,
                                        price: parseFloat($(`#${elm.id}`).children('.disbursements').text())
                                    });
                                })
                                getSum()
                                $('.checkednum').text(shop.length)
                            } else {
                                $('.check :checkbox').prop('checked', false)
                                $('.allcheck :checkbox').prop('checked', false)
                                Allcheckprice = []
                                $('.allCheckedPrice').text(0)
                                $('.checkednum').text(0)

                            }

                        })

                    }
                });
            }





        }
    }
});