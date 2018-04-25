(function(app, document, window) {
	var itemList = [];
	var isPlaying = false;
	
	app.init = function(){
		var list = window.musicObj.getMusicList;
		var len = list.length;
		for(var i = 0;i < len;i ++){
			
		}
	}
	
	app.test = function(str){
		str = str || "hello";
		alert(str);
	}
	
	app.playSong = function(event){
		var div = event.currentTarget;
		var ftype = div.getAttribute("ftype");
		if(ftype != "2")return;
		var type = "mui-icon iconfont icon-bofanganniu";
		if(isPlaying == false){
			isPlaying = true;
			type = "mui-icon iconfont icon-zanting";
		}
		else{
			isPlaying = false;
		}
		div.setAttribute("class", type);
		window.musicObj.playOrPause();
	}
	
	app.preSong = function(event){
		window.musicObj.preSong();
	}
	
	app.nextSong = function(event){
		window.musicObj.nextSong();
	}
	
	app.addItem = function(itemVo){
		var mainUl = document.getElementById("musicList");
		mainUl.innerHTML += "<ul class='mui-table-view' id='"+ itemList.length + "' onclick='app.onItemClick(event)'>" + 
					"<li class='mui-table-view-cell mui-media'>" + 
						"<a href='javascript:;'>" + 
							"<img class='mui-media-object mui-pull-left' src='" + vo.image + "'>" +
							"<div class='mui-media-body'>" + 
								"幸福" + 
								"<p class='mui-ellipsis'>" + vo.displayName + 
								"</p></div></a></li></ul>";
		var item = document.getElementById(itemList.length);
		itemList.push(item);
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
		window.location.href = "";
	}
	
	
})(window.app = {}, document, window)