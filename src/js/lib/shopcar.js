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
                        console.log(res);
                        let tempstr = '';
                        res.forEach(elm => {
                            let pic = (elm.product_pic);
                            let arr = shop.filter((val, i) => {
                                // 从购物车cookie数据中取出于本条遍历数据相同id的元素
                                return val.id == elm.product_id;
                            });

                            tempstr += `
                            <ul class="product-list">
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
                                <input type="number" value="${arr[0].num}">
                            </li>
                            <li class="disbursements">
                                ${(arr[0].num*elm.product_price).toFixed(2)}
                            </li>
                            <li class="trade_operate">
                                <a href=";" class="del">删除</a>
                            </li>
                        </ul>
                            `;
                        });
                        $('.product-box').append(tempstr);
                    }
                });
            }





        }
    }
});