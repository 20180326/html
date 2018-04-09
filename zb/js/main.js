    function creatHeight(){
        var contentObj = $(".tablistContent"), 
            screenHeight = document.documentElement.clientHeight, 
            videoHeight = $(".video-div").height(), 
            tabHeight = $(".liveTab").outerHeight();
        contentObj.height(screenHeight - videoHeight -tabHeight);
    }
    creatHeight();

    function changeTab(self){
    	var index = $(self).index() + 1;
    	$(self).addClass("active").siblings().removeClass("active");
    	$(".tablistContent").hide();
    	$(".tabSign" + index).show();
        if(index == 2){
            $(".drawChange, .sendMsg").show();
        }else{
            $(".drawChange, .sendMsg").hide();
        }
    	
    }

    $(".liveTab li").click(function(){
      if(this.getElementsByTagName('SPAN')[0].innerText === '关注'){
        $(".QRcode").show()
        return
      }
    	changeTab(this);
    });
    $(".QRcode-close").click(function(){
      $(".QRcode").hide()
    })
    function drawChange(){
    	setTimeout(function(){
    		//$(".drawChange").removeClass("on").css("webkitTransform","translateY(0)")
    	},1200)
    }

    drawChange();
     var timer = null;
    $(".sendMsgInput input").focus(function(){
        clearInterval(timer);
        var index = 0;
        timer = setInterval(function() {
            if(index>5) {
                $('body').scrollTop(1000000);
                clearInterval(timer);
            }
            index++;
        }, 50)
    })
