### 底部固定广告
- 使用fixed进行定位
- 除了用style.display = 'none'之外，可以给一个新样式，用className = 'hide'。便于统一使用。
- a链接的herf用javascript:void(0);表示死循环，点击无效果;
- 封装document.getElementById();
- function $(id){ return typeof id === 'string'?document.getElementById(id):id;}
- var $ = function(id){ return document.getElementById(id);}

### 伸缩性广告
- setTimeout:过多久后执行，setInterval：隔多久执行一次