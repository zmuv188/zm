	$(".sort-button").on("click", function() {
		var orderBy = $(this).attr("data-order");
		if (orderBy == "asc") {
			$(this).attr("data-order", "desc");
			$(this).html('<i class="icon icon-sort-by-order"></i>&nbsp;正序⇅')
		} else {
			$(this).attr("data-order", "asc");
			$(this).html('<i class="icon icon-sort-by-order-alt"></i>&nbsp;倒序⇅')
		}
		var listWrap = $(this).parents(".stui-pannel-box").find("ul");
		var elems = listWrap.children("li");
		var arr = $.makeArray(elems);
		arr.reverse();
		$(arr).appendTo(listWrap)
	})

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?5d50168f1fc7d6b5893354757d3c424c";
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
