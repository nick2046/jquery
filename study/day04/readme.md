## 动画效果 + ajax
#### 动画效果
````html
动画效果之前，记得操作元素的位置应该是定位状态
$('.className').css({position:'relative'}).animate({left:'140px'})

$('.className').css({position:'relative'}).animate({left:'250px',
    opacity:'0.5',
    height:'150px',
    width:'150px'})
    
animate动画默认有队列操作，就是动画有先后顺序进行
var div=$(".className");
    div.animate({height:'300px',opacity:'0.4'},"slow");
    div.animate({width:'300px',opacity:'0.8'},"slow");
    div.animate({height:'100px',opacity:'0.4'},"slow");
    div.animate({width:'100px',opacity:'0.8'},"slow");

$('.className').stop() //停止当前动画效果
````
