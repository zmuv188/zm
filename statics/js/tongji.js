var icen = $('body');

var closeTips = function(){
    $('.mtips').addClass('hide');
}

var son =$('.searchstart-on'),
    soff=$('.searchstart-off'),
    isea=$('.searchform');
son.on('touchend',function(e){
    $(this).hide();
    isea.show();
    soff.show();
    e.preventDefault();
})
soff.on('touchend',function(e){
    $(this).hide();
    son.show();
    isea.hide();
    e.preventDefault();
})

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?b6d73184c996643d25f956a9331d7592";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();
