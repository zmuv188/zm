
//下拉菜单
 function show_hidden(nav) {
    if (nav.style.display == "block") {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }
}

//搜索验证
function search() {
	if ($(".search .ipt").val() == "" || $(".search .ipt").val() == "在这里搜索您感兴趣的内容") {
		alert("请输入搜索关键词");
		$(".search .ipt").focus();
		return false;
	};
}

//图片加载
function lazy() {
	$("img.lazy").lazyload({
		effect: "fadeIn",
	});
};

//返回顶部
$(function() {
	$(window).scroll(function() {
		if ($(window).scrollTop() >= 50) {
			$('#back-to-top').fadeIn(300)
		} else {
			$('#back-to-top').fadeOut(300)
		}
	});
	$('.stop').click(function() {
		$('html,body').animate({
			scrollTop: '0px'
		}, 300)
	})
});
document.writeln('<div id="back-to-top"><a class="stop" href="javascript:"><span></span></a></div>');