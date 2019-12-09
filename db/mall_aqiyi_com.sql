-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2019-12-09 02:56:22
-- 服务器版本： 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mall.aqiyi.com`
--

-- --------------------------------------------------------

--
-- 表的结构 `product`
--

CREATE TABLE `product` (
  `product_id` int(10) NOT NULL COMMENT '商品id',
  `product_pic` varchar(50) CHARACTER SET utf8 NOT NULL COMMENT '商品图片地址',
  `product_name` text CHARACTER SET utf8 NOT NULL COMMENT '商品名字',
  `product_red` text CHARACTER SET utf8 NOT NULL COMMENT '商品红色',
  `product_title` text CHARACTER SET utf8 NOT NULL COMMENT '商品title',
  `product_price` float NOT NULL COMMENT '商品价格',
  `product_sale` int(20) NOT NULL COMMENT '商品已售',
  `product_has` int(11) NOT NULL COMMENT '库存',
  `small_pic` varchar(200) NOT NULL COMMENT '小图',
  `old_price` int(11) NOT NULL COMMENT '原价'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`product_id`, `product_pic`, `product_name`, `product_red`, `product_title`, `product_price`, `product_sale`, `product_has`, `small_pic`, `old_price`) VALUES
(1, '../img/jx01.jpg', '掌上游戏机双人对战', '经典怀旧', '迷你儿童游戏掌机', 49.8, 1090, 2880, '[{"src":"../img/jx01-1.jpg"},{"src":"../img/jx01-2.jpg"},{"src":"../img/jx01-3.jpg"},{"src":"../img/jx01-4.jpg"}]', 198),
(2, '../img/jx02.jpg', '颈椎按摩器颈部多功能家用靠垫', '智能操作', '仿真人8D揉捏', 79, 13317, 3956, '[{"src":"../img/jx02-1.jpg"},{"src":"../img/jx02-2.jpg"},{"src":"../img/jx02-3.jpg"},{"src":"../img"}]', 298),
(3, '../img/jx03.jpg', '法国金钻XO白兰地酒40度', '送礼佳品', '礼盒装送酒杯', 99, 4060, 5879, '[{"src":"../img/jx03-1.jpg"},{"src":"../img/"},{"src":"../img/"},{"src":"../img/"}]', 99),
(4, '../img/jx04.jpg', '多功能智能手环手表', '智能运动', '缤纷色彩任你挑选', 28.9, 22100, 559138, '[{"src":"../img/jx04-1.jpg"},{"src":"../img/jx04-2.jpg"},{"src":"../img/jx04-3.jpg"},{"src":"../img/jx04-4.jpg"}]', 299),
(5, '../img/jx05.jpg', '指纹感应打火机', '触摸感应', '充电式火机', 29.9, 7921, 796680, '[{"src":"../img/jx05-1.jpg"},{"src":"../img/jx05-2.jpg"},{"src":"../img/jx05-3.jpg"},{"src":"../img/jx05-4.jpg"}]', 30),
(6, '../img/jx06.jpg', '儿童读物故事书全4册', '付邮体验', '彩图带拼音', 1, 6353, 10984, '[{"src":"../img/jx06-1.jpg"},{"src":"../img/jx06-2.jpg"},{"src":"../img/jx06-3.jpg"},{"src":"../img/"}]', 30),
(7, '../img/jx07.jpg', '大号光触媒灭蚊灯家用', '智能灭蚊', '三维仿生诱捕', 29.9, 3258, 10685, '[{"src":"../img/jx07-1.jpg"},{"src":"../img/jx07-2.jpg"},{"src":"../img/jx07-3.png"},{"src":"../img/jx07-4.jpg"}]', 129),
(8, '../img/jx08.jpg', '爱奇艺电视果4k', '4K新品', '人工智能投屏看电视', 228, 1550, 8593, '[{"src":"../img/jx08-1.jpg"},{"src":"../img/jx08-2.jpg"},{"src":"../img/jx08-3.jpg"},{"src":"../img/jx08-4.jpg"}]', 228),
(9, '../img/jx09.jpg', '蓝漂竹浆本色纸家用面巾纸', '竹浆本色', '湿水不破 母婴适用', 49.9, 17776, 92540, '[{"src":"../img/jx09-1.jpg"},{"src":"../img/jx09-2.jpg"},{"src":"../img/jx09-3.jpg"},{"src":"../img/jx09-4.png"}]', 70),
(10, '../img/jx10.jpg', '憨豆熊 新款每日坚果25g*20袋', '混合果仁', '一天一包 能量满满', 59.9, 16868, 25546, '[{"src":"../img/jx10-1.jpg"},{"src":"../img/jx10-2.jpg"},{"src":"../img/jx10-3.jpg"},{"src":"../img/jx10-4.jpg"}]', 108);

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `user_id` int(20) NOT NULL,
  `user_phone` bigint(50) NOT NULL,
  `user_password` varchar(100) CHARACTER SET utf8mb4 NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`user_id`, `user_phone`, `user_password`) VALUES
(20, 16666666666, '58c75337faaac875e4da8ef286a7dca8'),
(11, 13666666666, 'd396bcf44822349f2c1d792bea124308'),
(12, 13666666667, '5cd04254c8a397876acf03acd95583fe'),
(13, 15999999999, 'ca665d46da6f21a108ddbb8730a256d3'),
(14, 18555555555, '2cc5eab9d2a3ab1f41d8addce1aeb88f'),
(15, 15875512136, '940e0c00ae86f8a907cc1efd7da5a11c'),
(16, 18956565653, '94ee365f5cd55ddbd36139f050dd24ae'),
(17, 15963256563, '7d7b1126d8767eaed646ca14c44f9e85'),
(18, 13213545465, '348a2bc3105a743af6aa1a45350df77d'),
(19, 13566657266, 'd4e3becefd10edfd24c7ba8272904800'),
(21, 15555555565, 'b4dd049af87812aceaeb4c84ddcab223'),
(22, 19999645121, '80ca2cd8eb16c02f26bdf277b6ea7ecd'),
(23, 16999999999, 'b06bc53a6469a10f23a11251a1790e36'),
(24, 15888888888, 'f67c2bcbfcfa30fccb36f72dca22a817'),
(25, 14444444444, '2b070a650a92129c2462deae7707b0c5'),
(26, 16666669696, '65a0ec385ca6a0c1e20d1f8270c28303'),
(27, 17777777777, 'bf709005906087dc1256bb4449d8774d'),
(28, 16666666969, 'ad6295891bf6feeecde6bec83ee61d3d'),
(29, 19613213215, 'b5cc327adec85bafeeec993a9533f777'),
(30, 14555555555, 'a6c8d0c79631a934ea0ed21082d46e43');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(10) NOT NULL AUTO_INCREMENT COMMENT '商品id', AUTO_INCREMENT=11;
--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
