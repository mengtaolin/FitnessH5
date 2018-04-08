(function(app, document, window) {
	var itemList = [];
	app.playMusic = function(event){
		var ele = event.currentTarget;
		var fType = ele.getAttribute("ftype");
		
		event.stopImmediatePropagation();
		event.stopPropagation();
		event.cancelBubble = true;
		event.bubbles = false;
		event.preventDefault();
		alert("playMusic");
	}
	
	app.test = function(str){
		str = str || "hello";
		alert(str);
	}
	
	app.playSong = function(event){
		window.android.playSong();
	}
	
	app.preSong = function(event){
		window.android.preSong();
	}
	
	app.nextSong = function(event){
		window.android.nextSong();
	}
	
	app.addItem = function(e){
		var mainUl = document.getElementById("musicList");
		mainUl.innerHTML = "<ul class='mui-table-view' id="+ itemList.length + ">" + 
					"<li class='mui-table-view-cell mui-media'>" + 
						"<a href='javascript:;'>" + 
							"<img class='mui-media-object mui-pull-left' src='" + "http://placehold.it/40x30" + "'>" +
							"<div class='mui-media-body'>" + 
								+ "幸福" + 
								"<p class='mui-ellipsis'>" + "能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？" + 
								"</p></div></a></li></ul>";
		var item = document.getElementById(itemList.length);
		itemList.push(item);
		
		var ul = app.createElement("ul",{"class":"mui-table-view", "id":itemList.length},"")
		var li = app.createElement("li", {"class":"mui-table-view-cell mui-media", "onclick": "app.onItemClick(event)"}, "");
		var a = app.createElement("a", {}, "");
		var img = app.createElement("img", {"class":"mui-media-object mui-pull-left", "src":"http://placehold.it/40x30"}, "");
		a.appendChild(img);
		var div = app.createElement("div", {"class":"mui-media-body"}, "幸福");
		var p = app.createElement("p", {"class":"mui-ellipsis"}, "能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？");
		div.appendChild(p);
		var btnsDiv = app.createElement("div", {"class":"mui-button-row mui-pull-left"}, "")
		var preSongDiv = app.createElement("div", {"class":"mui-icon iconfont icon-shangyishou", "onclick":"app.preSong(event)", "ftype":"1"}, "");
		var playSongDiv = app.createElement("div", {"class":"mui-icon iconfont icon-bofanganniu", "onclick":"app.playSong(event)", "ftype":"1", "isPlay":false}, "");
		var nextSongDic = app.createElement("div", {"class":"mui-icon iconfont icon-xiayishou", "onclick":"app.nextSong(event)", "ftype":"1"}, "");
		btnsDiv.appendChild(preSongDiv);
		btnsDiv.appendChild(playSongDiv);
		btnsDiv.appendChild(nextSongDic);
		div.appendChild(btnsDiv);
		a.appendChild(div);
		li.appendChild(a);
		ul.appendChild(li);
		mainUl.appendChild(ul);
		
		app.pushItem(li, a, img, preSongDiv, playSongDiv, nextSongDic);
	}
	
	app.pushItem = function(li, a, img, preSongDiv, playSongDiv, nextSongDiv){
		var obj = {"li":li, "a":a, "img":img, "pre":preSongDiv, "play":playSongDiv, "next":nextSongDiv};
		itemList.push(obj);
	}
	
	app.createElement = function(type, classValue, innerHtml){
		var ele = document.createElement(type);
		for(var key in classValue){
			ele.setAttribute(key, classValue[key]);
		}
		ele.innerHTML = innerHtml;//"幸福"
		return ele;
	}
	
	app.onItemClick = function(event){
		var ele = event.target;
		var ftype = ele.hasAttribute("ftype");
		if(ftype)return;
		alert("item click");
		event.bubbles = false;
		event.stopImmediatePropagation();
		event.stopPropagation();
		event.cancelBubble = true;
		event.preventDefault();
	}
	
	
})(window.app = {}, document, window)