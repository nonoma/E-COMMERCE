$(function() {
    /*搜索栏*/
    (function() {
        var aLi = $("#menu li");
        var oText = $("#search .text");
        var aText = [
            "例如：荷棠鱼坊烤鱼 或 樱花日本料理",
            "例如：北理工、北师大、吉林大学等",
            "例如：美食团购券、海滨公园免费门票等",
            "例如： 马岚清、方佩玲、打你、我生气了"
        ];
        var iNow = 0;
        function textChange (obj,text) {
            obj.focus(function() {
                if (obj.val() == text) {
                    obj.val("");
                }
            });
            obj.blur(function() {
                if (obj.val() == "") {
                    obj.val(text);
                }
            });  
        }

        oText.val(aText[iNow]);
        textChange(oText,aText[iNow]); 
        aLi.each(function(index) {
            // var this = $(this); ？ 无效
            $(this).click(function() {
                iNow = index;
                aLi.attr("class", "gradient");
                $(this).attr("class", "active gradient");
                oText.val(aText[iNow]);
                textChange(oText,aText[iNow]); 
            });    
        });
        

        
     /*搜索栏end*/  
       
     /*LIFESTYLE ADVICE 输入框搜索区域*/
     var sosoText = $(".soso .text");
     textChange(sosoText,"快点搜搜看看");    
     /*LIFESTYLE ADVICE 输入框搜索区域end*/

    })();

    /*新闻轮播*/
    (function() {
        var arrData = [
            { 'name': '萱萱', 'time': 4, 'title': '那些灿烂华美的瞬间', 'url': 'http://www.miaov.com/2013/' },
            { 'name': '畅畅', 'time': 5, 'title': '广东3天抓获涉黄疑犯', 'url': 'http://www.miaov.com/2013/#curriculum' },
            { 'name': '萱萱', 'time': 6, 'title': '国台办回应王郁琦', 'url': 'http://www.miaov.com/2013/#about' },
            { 'name': '畅畅', 'time': 7, 'title': '那些灿烂华美的瞬间', 'url': 'http://www.miaov.com/2013/#message' },
            { 'name': '萱萱', 'time': 8, 'title': '那些灿烂华美的瞬间', 'url': 'http://www.miaov.com/2013/' },
            { 'name': '畅畅', 'time': 9, 'title': '广东3天抓获涉黄疑犯', 'url': 'http://www.miaov.com/2013/#curriculum' },
            { 'name': '萱萱', 'time': 10, 'title': '国台办回应王郁琦', 'url': 'http://www.miaov.com/2013/#about' },
            { 'name': '畅畅', 'time': 11, 'title': '那些灿烂华美的瞬间', 'url': 'http://www.miaov.com/2013/#message' }
        ];
        var oUl = $("#update").find("ul");
        var oUpbtn = $(".triangle-up");
        var oDownbtn = $(".triangle-down");
        var oTriangle = $(".triangle");
        var iH = 0;
        var str = "";
        var iNow = 0;
        var timer;

        function downPlay() {
            if (iNow == oUl.find("li").length - 1) {
                iNow = (oUl.find("li").length / 2) - 1;
                oUl.css("top", iH * -iNow + 'px');
                iNow++;              
            } else {
                iNow++;
                oUl.stop().animate({ top: iH * -iNow }, 1000);
            }
        }

        function upPlay() {
            if (iNow == 0) {
                iNow = oUl.find("li").length / 2;
                oUl.css("top", iH * -iNow + 'px');
                iNow--
                oUl.stop().animate({ top: iH * -iNow }, 1000);
            } else {
                iNow--;
                oUl.stop().animate({ top: iH * -iNow }, 1000);
            }
        }

        function autoPlay() {
            timer = setInterval(function() {
                downPlay();
            }, 4000);
        }

        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < arrData.length; j++) {
                str += "<li><strong>" + arrData[j].name + "</strong> <span>" + arrData[j].time + "</span>分钟前 写了一篇新文章：<a href='" + arrData[j].url + "'>" + arrData[j].title + "</a></li>";
            }
        }
        oUl.html(str);
        iH = oUl.find("li").height();
        autoPlay();
        oDownbtn.click(function() {
            downPlay();
        })
        oUpbtn.click(function() {
            upPlay();
        });
        oUl.find("li").hover(function() {
            clearInterval(timer);
        }, autoPlay);
        oTriangle.hover(function() {
            clearInterval(timer);
        }, autoPlay);
    })();
    /*新闻轮播end*/

    /*选项卡切换*/
    (function() {
        function tabToggle(tabNav, tabCon,iEvent) {
            var aNavLi = tabNav.find("li");
            var aCon = tabCon.children();
            aNavLi.each(function(index) {
                $(this).on(iEvent,function() {
                    aNavLi.removeClass("active").addClass("gradient");
                    $(this).addClass("active").removeClass("gradient");
                    aNavLi.find("a").attr("class","triangle-down-grey");
                    $(this).find("a").attr("class","triangle-down");
                    aCon.hide().eq(index).show();
                })
            });
        }
        /*hot区域*/
        var tabNav1 = $(".tabNav1");
        var tabCon1 = $(".tabCon1");
        var aCon1 = tabCon1.children();
        aCon1.hide().eq(0).show();
        tabToggle(tabNav1, tabCon1,"click");

        /*Subway&Life区域*/
        var tabNav2 = $(".tabNav2");
        var tabCon2 = $(".tabCon2");
        var aCon2 = tabCon2.children();
        aCon2.hide().eq(0).show();
        tabToggle(tabNav2, tabCon2,"click");

	 	/*LIFESTYLE ADVICE区域*/
        var tabNav3 = $(".tabNav3");
        var tabCon3 = $(".tabCon3");
        var aCon3 = tabCon3.children();
        aCon3.hide().eq(0).show();
        tabToggle(tabNav3, tabCon3,"mouseover");

     	/*COUPONSqu区域*/     	
        var tabNav4 = $(".tabNav4");
        var tabCon4 = $(".tabCon4");
        var aCon4 = tabCon4.children();
        aCon4.hide().eq(0).show();
        tabToggle(tabNav4, tabCon4,"mouseover");
     })();
     /*选项卡切换end*/

    /*图片轮播图*/
    (function () {
    	var picFade = $("#pic-fade");
    	var aUlLi = picFade.find("ul li");
    	var aOlLi = picFade.find("ol li");
    	var oP = picFade.find("p");
    	var arrText = ["爸爸去哪儿~","戴帽子的美女~","黄色头发的美女~"];
    	var iNow = 0;
    	var timer = null;
    	function play() {
    		aUlLi.each(function (index) {
    			if(iNow != index){
    				aUlLi.eq(index).fadeOut().removeClass("active").css("zIndex","1");;
    				aOlLi.eq(index).removeClass("active");
    			}else {
    				aUlLi.eq(index).fadeIn().css("zIndex","2");;
    				aOlLi.eq(index).addClass("active");
    			}
    			oP.text(arrText[iNow]);
    		});
    	}
    	function autoPlay() {
    		timer = setInterval(function() {
    			iNow++;
    			play();
    			if(iNow == 2) {
    				iNow = -1;
    			}
    		},2000);
    	}
    	play();
		aOlLi.click(function () {
    		iNow = $(this).index();
    		play();
    	});
    	autoPlay();
    	picFade.hover (function () {
    		clearInterval(timer);
    	},autoPlay);
    })();
    /*图片轮播图end*/

    /*日历提示*/
    (function () {
    	var aSpan = $(".calendar h3 span");
    	var aLi = $(".calendar ol li");
    	var info = $(".calendar .info");
    	var aImg = $(".calendar li img");
    	var oInfoImg = info.find("img");
    	var oInfoStrong = info.find("strong");
    	var oInfoP = info.find("p");

    	aImg.hover(function () {
    		var iTop = $(this).parent().position().top - 35 + "px";
    		var iLeft = $(this).parent().position().left + 50 + "px";//obj.position 获取的是子元素相对父元素位置
    		var index = $(this).parent().index() % aSpan.size();
            $(this).parent().addClass("active");
    		info.show().css({"top": iTop,"left": iLeft});
    		oInfoImg.attr("src",$(this).attr("src"));
    		oInfoStrong.text(aSpan.eq(index).text());
    		oInfoP.text($(this).attr("info"));

    	},function() {
    		info.hide();
            $(this).parent().removeClass("active");
    	});
    })();
    /*日历提示end*/
  
    /*选卡高亮*/
    (function () {
    	var aLi = $(".bbs li");
    	aLi.mouseover(function () {
    		aLi.removeClass("active");
    		$(this).addClass("active");
    	});
    })();
    /*选卡高亮end*/

    /*选卡移入遮盖层提示*/
    (function () {
    	var aLi = $(".hot-person li");  	
    	var aTextArr = [
    		"",
    		"用户名：A<br>区域：A<br>人气：123"	,	
    		"用户名：B<br>区域：B<br>人气：123"	,
    		"用户名：C<br>区域：C<br>人气：123"	,
    		"用户名：D<br>区域：D<br>人气：123"	,
    		"用户名：E<br>区域：E<br>人气：123"	,
    		"用户名：F<br>区域：F<br>人气：123"	,
    		"用户名：G<br>区域：G<br>人气：123"	,
    		"用户名：H<br>区域：H<br>人气：123"	,
    		"用户名：I<br>区域：I<br>人气：3213",
    		"用户名：J<br>区域：J<br>人气：12414",
    	]
    	aLi.mouseover(function () {
            if ($(this).index() == 0) {return;}
    		var pHeight = $(this).height-12+"px"; //obj.height()/width() 获取的是width+padding
    		var pWidth = $(this).width-12+"px";
    		aLi.find("p").remove();
    		$(this).append('<p style=height:' +  pHeight +' ;width:' + pHeight + ';>' + aTextArr[$(this).index()] + '</p>');
    	});
    })();
    /*选卡移入遮盖层提示end*/
});
