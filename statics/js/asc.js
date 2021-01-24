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