let baseUrl = "http://127.0.0.1:8080/iqiyi.com";

define(['jquery'], function($) {
    return {
        render: function() {
            // console.log(`${elm.product_pci}`)
            $.ajax({
                url: `${baseUrl}/lib/getall.php`,
                type: 'get',
                dataType: 'json',
                success: function(res) {
                    console.log(res);
                    let temp = '';
                    res.forEach(elm => {
                        // let pic = JSON.parse(elm.product_pci);
                        // console.log(pic);
                        temp += `
                        <li>
                            <div class="product">
                                <a class="productPic" href="${baseUrl}/src/html/product.html?id=${elm.product_id}" style="display:block !important;" target="_blank">
                                    <img alt="jrjxPic" src="${elm.product_pic}" width="140" height="140" />
                                </a>
                                <div class="productInfo">
                                    <p class="productTitle"><a href="//mall.iqiyi.com/item/19rrkjvbd8" style="display:block !important;" target="_blank">${elm.product_name}</a></p>
                                    <p class="productSubTitle"><span class="productStatus"><em>${elm.product_red}</em></span>${elm.product_title}</p>
                                    <p class="productDesc">
                                        <span class="productPrice">¥${elm.product_price}</span>
                                        <span class="productSale">已售 ${elm.product_sale}</span>
                                    </p>
                                </div>
                            </div>
                        </li>
                        `
                    });
                    $('.productList').append(temp);
                }
            })
        }
    }
});