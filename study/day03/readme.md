## 遍历+extend函数
#### 遍历函数包括了用于筛选、查找和串联元素的方法，返回了对应的jquery对象集合
````html
add:  $('ul li').add( $('li.className') )
children:   $('.app').children() 第一层，不会向下延伸
andSelf:    $('.app').find('ul li').andSelf() 返回包括ul li集合+className=app的集合
closest:    $('.item-box').closest('.group-box') 向上查找父级className为group-box的集合
each:       $('.item-box').closest('.group-box').each(function(item,index){$(item).addClass("className")}); 
            遍历数据，函数参数中item需要修改为jQuery结构
````
