let baseUrl = "http://127.0.0.1:8080/iqiyi.com";

define(['jquery', 'cookie', 'public2'], function($, cookie) {
    return {
        render: function(callback) {
            let id = location.search.split('=')[1];
            // console.log(id)
            $.ajax({
                url: `${baseUrl}/lib/getitem.php`,
                type: 'get',
                data: {
                    id: id
                },
                dataType: 'json',
                success: function(res) {
                    let smlpic = JSON.parse(res.small_pic);
                    let tempstr = `
                    <div class="container">

                    <!-- 头部标题开始 -->
        
                    <div class="main-top-title">
                        <a href="">首页</a>
                        <i>></i>
                        <span>${res.product_name}</span>
                    </div>
        
                    <!-- 头部标题结束 -->
        
                    <!-- 内容开始 -->
        
                    <div class="main-top-pro">
        
                        <!-- 内容左边开始 -->
        
                        <div class="pro-left">
        
                            <!-- 大图 -->
        
                            <div class="pro-left-pic">
                                <div class="image-zoom-wrap small">
                                    <img class="smallpic" src="${res.product_pic}" id="J_magnifier-smallImg" alt="${res.product_name}">
                                    <div class="movebox "></div>
                                </div>
                            </div>

                            <div class="big">
                                <img src="${res.product_pic}" alt="" class="bigpic">
                            </div>
        
                            <!-- 小图 -->
        
                            <div class="small-pic ">
                                <ul class="choose">
                                    <li>
                                        <img src="${res.product_pic}" alt="" class="actived">
                                    </li>
                                    <li>
                                        <img src="${smlpic[0].src}" alt="">
                                    </li>
                                    <li>
                                        <img src="${smlpic[1].src}" alt="">
                                    </li>
                                    <li>
                                        <img src="${smlpic[2].src}" alt="">
                                    </li>
                                    <li>
                                        <img src="${smlpic[3].src}" alt="">
                                    </li>
                                </ul>
                            </div>
        
        
                            <!-- 分享 -->
        
                            <div class="share">
                                <div class="share-btn pull-left">
                                    <i class="icon-share-goods"></i>
                                    <span class="btn_info">分享</span>
                                </div>
                                <a class="share-btn share-btnA pull-left" title="收藏">
                                    <i class="icon-collection-goods"></i>
                                    <span class="btn_info">收藏商品 （1034人气）</span>
                                </a>
                            </div>
        
        
                        </div>
        
                        <!-- 内容左边结束 -->
        
                        <!-- 内容右边开始 -->
        
                        <div class="pro-right">
        
                            <!-- 头部开始 -->
        
                            <div class="pro-right-title">
                                <h3 class="detail-title" title="${res.product_name}">${res.product_name}</h3>
                            </div>
        
                            <!-- 头部结束 -->
        
                            <!-- 价格面板 -->
        
                            <div class="detail_price">
                                <div class="shopPromo_panel">
                                    <!-- 当前价格 -->
                                    <div class="now-price">
                                        <span class="detail_metatit" style="margin-top:10px">促&nbsp;销&nbsp;价：</span>
                                        <div class="shopTitle_info">
                                            <div class="promo_price">
                                                <span class="price-now">
                                                        <em class="tm-yen">¥</em>
                                                        <strong class="tm-price" id='J_new-price'>${res.product_price}</strong>
                                                    </span>
                                                <em class="tm-promo-type"><i></i>促销价</em>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- 原价 -->
                                    <div class="original-price">
                                        <span class="detail_metatit">价&nbsp;&nbsp;&nbsp;&nbsp;格：</span>
                                        <div class="shopTitle_info">
                                            <span class="price-old">¥<span id='J_old-price'>${res.old_price}</span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                            <!-- 价格结束 -->
        
                            <!-- 评价 -->
        
                            <ul class="detail-evaluate">
                                <li class="ind-panel-item ind-panel-Count " style="border:0">
                                    <a class="item-label" href=""></a><i></i>销量：<span>${res.product_sale}</span></a>
                                </li>
                                <li class="ind-panel-item ind-panel-point ">
                                    <a class="item-label" href=""><i></i>评价：<span>1057</span></a>
                                </li>
                            </ul>
        
                            <!-- 评价结束 -->
        
                            <!-- 快递开始 -->
        
                            <div class="kuaidi">
                                <label class="yunfei">运费：</label>
                                <div class="postAge">
                                    <span class="deliveryAdd">广东东莞市</span>
                                    <span class="desc">至</span>
                                    <span class="addr-info">杭州市</span>
                                    <span id='J_post-fee'>快递：0&nbsp;&nbsp;</span>
                                </div>
                            </div>
        
                            <!-- 快递结束 -->
        
                            <!-- 颜色开始 -->
        
                            <div class="yanse">
                                <label class="yansefenlei">颜色分类： </label>
                                <div class="choose">
                                    <ul>
                                        <li>白色</li>
                                        <li>黑色</li>
                                        <li>红色</li>
                                        <li>蓝色</li>
                                    </ul>
                                </div>
                            </div>
        
                            <!-- 颜色结束 -->
        
                            <!-- 数量开始 -->
        
                            <div class="kucun">
                                <label class="shuliang">数量： </label>
                                <div class="num">
                                    <input class="pro-num" type="number" placeholder="" value="1">
                                    <span class="amount_erro ">库存${res.product_has}件</span>
                                </div>
                            </div>
        
                            <!-- 数量结束 -->
        
                            <!-- 加入购物车开始 -->
        
                            <div class="jiarugouwuche ">
                                <a class="detail-btn detail-btn-buy  " href="#">立即购买</a>
                                <a class="detail-btn detail-btn-cart add" href="javascript:;"><i class="icon-shopping-cart"></i>加入购物车
                                </a>
                            </div>
        
                            <!-- 加入购物车结束 -->
        
                            <!-- 服务承诺开始 -->
        
                            <div class="fuwuchengnuo">
                                <ul class="promise">
                                    <li class="promiseTitle">
                                        服务承诺：
                                    </li>
                                    <li>
                                        <i class="proPic"></i>
                                        <span class="proItem">爱奇艺电商</span>
                                    </li>
                                    <li>
                                        <i class="proPic"></i>
                                        <span class="proItem">正品保证</span>
                                    </li>
                                    <li>
                                        <i class="proPic"></i>
                                        <span class="proItem">极速发货</span>
                                    </li>
                                    <li>
                                        <i class="proPic"></i>
                                        <span class="proItem">运费说明</span>
                                    </li>
                                    <li>
                                        <i class="proPic"></i>
                                        <span class="proItem">7天无理由</span>
                                    </li>
        
                                </ul>
        
                                <span class="pay-box">
                                    支付方式
                                    <i></i>
                                </span>
                            </div>
        
                            <!-- 服务承诺结束 -->
        
                        </div>
        
                        <!-- 右边内容结束 -->
        
                    </div>
        
                    <!-- 内容结束 -->
        
        
                </div>
                    `;
                    $('#main-top').append(tempstr);
                    callback && callback(res.product_id, res.product_price);
                }
            })
        },
        addItem: function(id, price, num) {
            let shop = cookie.get('shop'); // 获取cookie数据 判断是否存在
            // 如果有cookie  修改cookie
            // 如果有cookie  添加cookie

            let product = {
                id: id,
                price: price,
                num: num
            };

            if (shop) {
                shop = JSON.parse(shop);
                if (shop.some(elm => elm.id == id)) {
                    shop.forEach(elm => {
                        elm.id == id ? elm.num = num : null;
                    });
                } else {
                    shop.push(product);
                }
            } else {
                shop = []; // 购物车没有内容 新建一个购物车
                shop.push(product); //将商品放入购物车
            }
            cookie.set('shop', JSON.stringify(shop), 1);
        },
        fdj: function() {
            var small = $('.small'),
                movebox = $('.movebox'),
                big = $('.big'),
                bigpic = $('.bigpic');
            var choose = $('.choose');


            small.on('mouseover', function() {
                // 1. 显示movebox和big
                movebox.addClass('fdjshow');
                big.addClass('fdjshow');

                // 3. 计算movebox大小 movebox:small = big:bigpic    movebox:big = small:bigpic
                // 获取元素的大小 只能获取可见元素
                movebox.css({
                    'width': $('.small').width() * $('.big').width() / $('.bigpic').width() + 'px',
                    'height': $('.small').height() * $('.big').height() / $('.bigpic').height() + 'px',
                });

                //4.切换图片

                $('.choose>li>img').on('mouseover', function() {
                    $('.choose>li>img').removeClass('actived');
                    star.call(this)
                })

                function star() {
                    $('.choose').on('mouseover', 'img', function(ev) {
                        let src = ev.target.src;
                        $('.small>img')[0].src = src;
                        $('.big>img')[0].src = src;
                        $(ev.target).addClass('actived')
                    })

                }

                // 2.鼠标跟随
                small.on('mousemove', function(ev) {
                    // 计算移动的距离
                    var top = ev.pageY - small.offset().top - ($('.movebox').height() / 2);
                    var left = ev.pageX - small.offset().left - ($('.movebox').width() / 2);

                    var ratio = $('.bigpic').width() / $('.small').width(); //比例必须大于1

                    // console.log(ratio)
                    // 边界管理
                    if (left <= 0) {
                        left = 0;
                    } else if (left > $('.small').width() - $('.movebox').width()) {
                        left = $('.small').width() - $('.movebox').width() - 2;
                    }

                    if (top <= 0) {
                        top = 0;
                    } else if (top > $('.small').height() - $('.movebox').height()) {
                        top = $('.small').width() - $('.movebox').height() - 2;
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
                movebox.removeClass('fdjshow');
                big.removeClass('fdjshow');
            })
        }
    }
});