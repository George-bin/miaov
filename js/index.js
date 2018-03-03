
window.onload = function() {
	mv.app.toTip();
	mv.app.toBanner();
}
var mv = {}; //命名空间

mv.tools = {};

mv.ui = {};

mv.ui.textChange = function(obj, str) {
    obj.onfocus = function() {
    	if(this.value == str) {
    		this.value = '';
    	}
    }
    obj.onblur = function() {
    	if(this.value == '') {
    		this.value = str;
    	}
    }
};

mv.app = {};

mv.app.toTip = function() {
    var oText1 = document.getElementById('text1');
    var oText2 = document.getElementById('text2');

    mv.ui.textChange(oText1, 'Search website');
    mv.ui.textChange(oText2, 'Search website');


};

mv.ui.fadeIn = function(obj){
	
	var iCur = mv.tools.getStyle(obj,'opacity');
	if(iCur==1){ return false; }
	
	var value = 0;
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var iSpeed = 5;
		if(value == 100){
			clearInterval(obj.timer);
		}
		else{
			value += iSpeed;
			obj.style.opacity = value/100;
			obj.style.filter = 'alpha(opacity='+value+')';
		}
	},30);
	
};

mv.ui.fadeOut = function(obj){
	
	var iCur = mv.tools.getStyle(obj,'opacity');
	if(iCur==0){ return false; }
	
	var value = 100;
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var iSpeed = -5;
		if(value == 0){
			clearInterval(obj.timer);
		}
		else{
			value += iSpeed;
			obj.style.opacity = value/100;
			obj.style.filter = 'alpha(opacity='+value+')';
		}
	},30);
	
};
mv.app.toBanner = function() {
	var oAd = document.getElementById('ad');
	var aLi = oAd.getElementsByTagName('li');

	var iNow = 0;
	var timer = setInterval(auto, 3000);
	function auto() {
        if(iNow == aLi.length-1) {
            iNow = 0;
        }else {
        	iNow++;
        }
        for(var i = 0; i < aLi.length; i++) {
        	//淡出
        	mv.ui.fadeOut(aLi[i]);
        }
        mv.ui.fadeIn(aLi[iNow]);

	}

}

mv.tools.getStyle = function(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}
	else{
		return getComputedStyle(obj,false)[attr];
	}
};

























