## 浏览器的视图窗口【不包括工具栏和滚动条】
````javascript
window.outerWidth 浏览器宽度，包括滚动条和外边框
window.innerWidth 浏览器宽度，包括滚动条，不包括边框
window.open('/.html','width=200;height=200;') 打开宽度200高度200的窗口

myWindow =  window.open('','','width=200,height=100'); 
myWindow.document.write("<p>这是'我的窗口'</p>"); 
myWindow.focus();

window.moveTo(500,500) 移动到指定位置
window.moveBy(300,300) 相对当前位置进行300，300的移动
window.resizeTo() 把窗口调整到指定宽度和高度
window.resizeBy() 按照指定像素调整窗口大小
window.scrollTo() 把内容滚动到指定位置
window.scrollBy() 相对滚动

screen.availHeight  availWidth 【屏幕】减去界面特性，比如窗口任务栏

location.reload() 刷新页面
location.href = "";
location.assign('www.baidu.com') 在浏览器中有记录
location.replace('www.baidu.com') 清理掉浏览器里面的记录

history.go(-1)
history.back()
history.forward()


confirm() 确认对话框
var r=confirm("Press a button")
if (r==true){
	document.write("You pressed OK!")
}else{
	document.write("You pressed Cancel!")
}

prompt() 输入对话框
var name=prompt("Please enter your name","")
  if (name!=null && name!="")
    {
    document.write("Hello " + name + "!")
    }
````