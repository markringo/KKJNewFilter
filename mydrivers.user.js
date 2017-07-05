// ==UserScript==
// @name 快科技新闻筛选脚本
// @namespace http://www.mydrivers.com
// @include http://www.mydrivers.com/
// @version 2
// ==/UserScript==
// 使用方法：将需要屏蔽的关键字写入下面keyws数组里面，使用逗号分
// 隔并用双引号包括（Javascript数组），保存后导入到Chrome或者FireFox的猴油插件里即可

var keyws = ["小米","米","苹果","iPhone 8","华为"];

function chkallkeyws(str){
	if(str==null)return 0;
	for(var i=0;i<keyws.length;i++)
	{
		if(str.indexOf(keyws[i])>=0)return 1;
	}
	return 0;
}

var spans = document.getElementsByTagName("span");
for(var i=0;i<spans.length;i++)
{
	var cls = spans[i].getAttribute("class");
	if(cls=="titl"){
		var anews = spans[i].innerHTML;
		if(chkallkeyws(anews))spans[i].innerHTML="<a>软文屏蔽</a>";
	}
}
var atags = document.getElementsByTagName("a");
for(var j=0;j<atags.length;j++)
{
	if(chkallkeyws(atags[j].innerHTML))
	{
		atags[j].innerHTML="软文勿点";
	}
}
