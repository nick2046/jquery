## jQuery第一天课程内容
1.$基础语法规则  
````html 
1.语法结构：$(dom标识).操作函数()
    例：$('body'),$('<div></div>'),$('#id'),$('.className'),$('h1')
    例：$('ul li').removeClass('className');
2.链式操作：$(dom标识).操作函数().操作函数().操作函数().操作函数()
    例：$('ul li').removeClass('className').siblings().addClass('className').show();
````
2.$选择器用法、性能、优先级别  
````html
1.选择器用法
    id选择器：$('#id') 干净整洁，不用再加任何的标识
        反例$('body #id')
        正例$('#id'),$('#id .className'),$('#id h1')
    class选择器：$('.className')，在class名字的前面是个英文符号“.”，而id是“#”号标识
        例：$('.className') $('.className1.className2') $('.className1 .className11')
        $('.className,.className2,.className3')
    标签选择器：不用加.或#，直接书写标签名
        例：$('h1'),$('ul li')
    选择器加筛选功能
        $().first() $().last() $('ul li:eq(2)') $('ul li:odd') $('ul li:even') $('ul li:gt(3)')
        $('.className:hidden')  $('.className:visible')
        $('[data-word="study"]')  <div data-word="study">asdfasdfaf</div>
        $(':password')          <input type="password">
2.性能、优先级别
    $('#id') > $('h1') > $('.className') > $('模糊匹配')
````
3.$事件委托机制、绑定事件  
````html
1.事件委托机制
    普通绑定是把事件直接绑定在目标节点上面
        例$('.className').click(function(e){
            // dosomething 
        })
        // 对于动态植入的目标节点无法生效 因为事件直接委托在目标上面，而目标还没有生成，事件委托自然是失败的。
    动态绑定是把事件绑定在目标节点的某个已存在的父级节点之上，事件触发时候，先从父级节点出发，向下查找目标节点的标识
        $('ul').on('click','li',function(e){
            // dosomething
        })
````