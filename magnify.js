window.onload = function(){
    var left = document.getElementById('left');

    //左边的可拖拽遮罩
    var mask = document.getElementById('mask');
    //左边的图片
    var imgs1 = document.getElementById('imgs1');

    //显示放大的 左边遮罩下面图片部分 的标签
    var magnify = document.getElementById('border');
    //右边显示的图片
    var imgs2 = document.getElementById('img2');


    //onmouseover鼠标移入鼠标在哪里，遮罩就显示在哪里
    //鼠标在遮罩mask上距离mask左边的距离 = ev.clientX - mask.getBoundingClientRect().left
    //鼠标在遮罩mask上距离masks上边的距离 = ev.clientY - mask.getBoundingClientRect().top

//鼠标移入左边left上  才开始实现左边的mask拖拽
    left.onmouseover = function(){
        
        mask.style.display = 'block';
        right.style.visibility = 'visible';
        //宽的比例是大图的宽比小图的宽
        var rate = (imgs2.clientWidth)/(imgs1.clientWidth);
        var rate1 = (imgs2.clientHeight)/(imgs1.clientHeight);


        /*算出一个左边运动 带动右边运动 的比率  比率不一样就要修改mask的大小
		大图		放大镜#border
		 —————— =  ————————
         小图		遮罩#mask
         */
        mask.style.height = magnify.clientHeight/rate1 + 'px';
        mask.style.width = magnify.clientWidth/rate + 'px';
        
        document.onmousemove = function(ev){
            //x、y 是鼠标在浏览器滑动 在浏览器的坐标位置-遮罩宽或者高的一半
            
            var x = ev.clientX - left.getBoundingClientRect().left -mask.clientWidth/2;
            var y = ev.clientY - left.getBoundingClientRect().top -mask.clientHeight/2;
            if(x < 0){
                x = 0;
            }
            if(y < 0){
                y = 0;
            }
            //遮罩最大运动范围
            var maxX = imgs1.clientWidth - mask.clientWidth;
            var maxY = imgs1.clientHeight - mask.clientHeight;
            
            if(x>maxX){
                x = maxX;
            }
            if(y>maxY){
                y = maxY;
            }
            //遮罩的位置
            mask.style.left = x +'px'
            mask.style.top = y +'px'
           
            //图片的定位
            imgs2.style.left = -x*rate +'px';
            imgs2.style.top = -y*rate1  +'px';

        }
    }
//鼠标移出left,停止mask的拖拽，并且隐藏起来
    left.onmouseout = function(){
        document.onmousemove =null;
        mask.style.display = 'none';
        right.style.visibility = 'hidden';
        imgs2.style.left = '';
        imgs2.style.top =  '';
     }
     
     
 

     










}