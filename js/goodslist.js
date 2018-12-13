










jQuery(document).scroll(function() {
	addGoodslist();
});


jQuery(function(){
	
})








function addGoodslist(){
	
	let listItems = document.createElement("div");
	
	let listImg = document.createElement("div");
	
	let a = document.createElement("a");
	
	let face = document.createElement("img");
	
	let back = document.createElement("img");
	
	let listCon = document.createElement("div");
	
	let goodText = document.createElement("a");
	
	let goodPrice = document.createElement("p");
	
		listItems.className = "list_items";
		listImg.className = "list_img";
		a.href ="#";
		listImg.appendChild(a);
		face.className = "face";
		face.src = "img/154320951073073_320X384.png";
		back.className = "back";
		back.src = "img/15432095014778197_320X384.png";
		a.appendChild(face);
		a.appendChild(back);
		listItems.appendChild(listImg);
		listCon.className ="list_con";
		goodText.className = "good_text";
		goodText.href="#";
		goodText.innerHTML ="女士UA Sienna 3合1夹克";
		goodPrice.className = "good_price";
		goodPrice.innerHTML = "￥1699.00";
		listCon.appendChild(goodText);
		listCon.appendChild(goodPrice);
		listItems.appendChild(listCon);
		$(".moregoods")[0].appendChild(listItems);
	}
}



