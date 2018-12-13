jQuery(function() {

	jQuery("#chkAll").bindCheckAll(jQuery(":checkbox").not("#chkAll"));

});

// 删除

$(".proDel").click(function() {

	$(this).parents("tr").remove();

	change();

});

// 删除所有

$(".delAll").click(function() {

	$(".checkt:checked").parents("tr").remove();

	change();

});

// 加减

$(".ys").click(function() {

	// 改变数量

	var _this = this;

	$(this).siblings(".count").val(function(index, value) {

		var res =  parseInt(value) + parseInt(_this.value + 1)

		return res == -1 ? 0 : res;

	});

//	 改变小计

	$(this).parents("tr").find(".proMoney span").html(function() {

		return $(_this).siblings(".count").val() * $(this).parents("tr").find(".proPirce span").html();

	});

	change();

});

// 改变合计和件数的方法

function change() {

	$("#selectAll").prop("checked", $(".checkt:checked").length == $(".checkt").length);

	// 改变件数

	$(".proTotal span").html($(".checkt:checked").length);

	
	// 改变合计
	$(".totalPirces span").html(function() {

		var pic = 0;

		$(".checkt:checked").parent().siblings(".proMoney").children().each(function(index, el) {

			pic += parseInt(el.innerHTML);

		})

		return pic;

	})

}