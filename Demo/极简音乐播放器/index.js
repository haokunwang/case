(function(global){
	var __INFO__ = {
		plug:"DNmusicPlay",
		version:"1.0.1",
		author:"ver"
	};
	var defaults = {
		audioUrl:"",
		nodeID:"",
		boxStyle:"",
		bottonSrc:"",
		htmls:'<audio src="" loop autoplay style="width: 0px;">\
					<source src="">\
				</audio>\
				<button href="" style="width: 24px;height: 24px;background: red;display: inline-block;"></button>\
				<select name="" id="" style="vertical-align: top;">\
				</select>',
	};
	var PlugCode = function(options){
		var settings = Object.assign({},defaults,options);

		var audioDOM = document.getElementById(settings.nodeID);
		if(!audioDOM){audioDOM = document.body}
		var audioBOX = document.createElement("div");
		audioBOX.id = "dnmusiccontrol";
		audioBOX.style = "overflow: hidden;z-index: 214754;";
		audioBOX.innerHTML = settings.htmls;
		audioDOM.appendChild(audioBOX);

		var audioButton = audioBOX.querySelector("button");
		var audioList = audioBOX.querySelector("select");
		var audioTag = audioBOX.querySelector("audio");

		audioButton.state = true;
//设置播放器位置
		if(settings.boxStyle){
			audioBOX.style.cssText += settings.boxStyle;
		}
//设置图标
		if(settings.bottonSrc){audioButton.style.backgroundImage = "url("+settings.bottonSrc+")"};
//判断音乐URL的类型
	//不太懂 _urlType
		var _urlType = toString.apply(settings.audioUrl);
	//判断 settings.audioUrl是否为空
		if(!settings.audioUrl.length){
			console.log(__INFO__.plug + '因无音乐资源启动失败，请添加音乐资源audioUrl:');
			return
		}
	//如果 _urlType 为object 则该为 数组 格式
		if(_urlType === "[object Object]"){
			var _temp = [];
			_temp.push(settings.audioUrl);
			settings.audioUrl = _temp;
		}
	//判断 _urlType 为 数组 还是 字符串
		if(typeof settings.audioUrl === 'object'){
			audioTag.src = settings.audioUrl[0].source;
			for(let i = 0;i<settings.audioUrl.length;i++){
				var _option = new Option(settings.audioUrl[i].title,settings.audioUrl[i].source);
				audioList.add(_option);
			}
		}else{
			audioTag.src = settings.audioUrl;
			audioList.style.display = "none"
		}

//定义音乐 播放暂停 事件
		var audioFN = {
			play:function(url){
				if(url){audioTag.src = url};
				audioButton.style.background = "blue";
				audioTag.play()
			},
			stop:function(){
				audioButton.style.background = "yellow"
				audioTag.pause()
			}
		}
//判断 PC端 或 移动端 改变监听事件
		var _device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
		var clickEvtName = _device ? "touchstart" : "mousedown";
//音乐播放 暂停监听事件
		audioButton.addEventListener(clickEvtName,function(){
			if(this.state){
				this.state = false;
				audioFN.stop()
			}else{
				this.state = true;
				audioFN.play()
			}
		});
//切换列表 改变音乐
		audioList.addEventListener("change",function(){
			var musicName = this.options[this.selectedIndex].value;
			audioFN.play(musicName);
			audioButton.state = true;
			console.log(musicName)
		});
//微信自动播放
		if(navigator.userAgent.toLowerCase().match(/micromessenger/i)){
			document.addEventListener("weixinJSBridgeReady",function onBridgeReady(){
				weixinJSBridge.invoke("getNetworkType",{},function(){
					audioFN.play()
				})
			})
		}
	};	//end PlugCode
	global[__INFO__.plug] = PlugCode;
})(typeof window !== "undefined" ? window : this)