(function(app, document) {
	app.playMusic = function(event){
		event.stopImmediatePropagation();
		event.stopPropagation();
		event.cancelBubble = true;
		app.test(null);
	}
	
	app.test = function(str){
		str = str || "hello";
		alert(str);
	}
	
	app.addItem = function(e){
		var li = app.createElement("li", {"class":"mui-table-view", "onclick": "app.onItemClick(event)"}, "");
		var img = app.createElement("img", {"class":"mui-media-object mui-pull-left", "src":"http://placehold.it/40x30"}, "");
		li.appendChild(img);
		var div = app.createElement("div", {"class":"mui-media-body"}, "幸福");
		var p = app.createElement("p", {"class":"mui-ellipsis"}, "能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？");
		div.appendChild(p);
		var span = app.createElement("span", {"class":"mui-icon iconfont icon-swticonyinle3", "onclick":"app.test(null)"}, "");
		div.appendChild(span);
		li.appendChild(div);
		var ul = document.getElementById("musicList");
		ul.appendChild(li);
	}
	
	app.createElement = function(type, classValue, innerHtml){
		var ele = document.createElement(type);
		for(var key in classValue){
			ele.setAttribute(key, classValue[key]);
		}
		ele.innerHTML = innerHtml;//"幸福"
		return ele;
	}
	
	app.onItemClick = function(e){
		alert("item click")
		e.stopImmediatePropagation();
		e.stopPropagation();
		event.cancelBubble = true;
	}
})(window.app = {}, document)