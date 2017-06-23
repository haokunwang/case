#一. 原生js
##(一). ES(ECMAScript)
①②③④⑤⑥⑦⑧⑨⑩
ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩ
###1. var(变量)
```
    var number = 10,number = 20;
    var bool = true;
    var arry = [1,2,5,1,];
    var object = {"属性名1":"属性值1",
            "属性名2":"属性值2",};
    console.log(string);    //可在浏览器F12控制台输出变量
```
####(1).命名规范
#####①首字符只能用$,下划线,字母来命名
#####②命名有寓意
#####③驼峰命名(picList)或加横杠(pic-list)或其他,要统一使用一种命名规则
####(2). 全局变量和局部变量
####(3). 作用域和作用域链
```
    var x = 20;
    function sum(){
        var y = 10;
        console.log(x);         //可以显示，函数内部能访问外部变量
    }
        console.log(y);         //不可以显示，外部不能访问函数内部变量
```
####(4). 预解析
```
    console.log(number)         //显示undifind,但不报错。
    var number = 10
    原因：受预解析影响，程序加载顺序从上到下，只声明，未赋值，所以不会报错，显示显示undifind
```
####(5). es6(es2015)
```
    //es6中var被取消，let会形成块级作用域(外部不能访问内部变量)
        for(let i=0;i<10;i++){
            console.log(i);
        }
        console.log(i);     //报错，i is not defined

    //es6中用const声明函数和引用模块，会声明成常量，不能被再次赋值(会报错)
        const count = function(a,b){
            console.log(a+b);
        }
        count = function(){
            console.log("hhhh")
        }
        count(10,20);
```
###2. 数据类型
####(1). 基本数据类型
####①. Number(数值)
```
    var number= 10;
    console.log(number);
```
####②. String(字符串)
```
    var string = "字符串";
    console.log(string);
```
####③. Boolean(布尔)
```
    var bool= true/false;
    console.log(number);
```
####④. Undefined(未定义)
```
    var undefined;
    console.log(undefined);
```
####⑤. Null(空)
```
    var nu = null;
    console.log(nu);
```
####(2). 引用数据类型
####①. Object:object{对象}，array[数组]，正则/ /，时间Date,···
####②. function(){}函数
####(3). 基本数据类型和引用数据类型区别
####①. 比较
```
        var str1 = 'xiaoming';
        var str2 = 'xiaohong';
        console.log(str1 == str2);          //ture

        var student1 = {name:'xiaoming'};
        var student2 = {name:'xiaoming'};
        console.log(student1 == student2);  //false
```
####②. 赋值
```
    var num1 = 10;
    var num2 = num1;
    num1 = 20;
    console.log(num2);  //10
//基本数据类型改变num1的值，不会改变num2的值
    var obj1 = {
        name:"小明",}
    var obj2 = obj1;
    obj1.name = "小黑"
    console.log(obj2);  //{name:"小黑",};
//引用数据类型改变obj1的属性值，会改变obj2的属性值
```
####③. 传参
```
    var x = 10;
    function num(x){
        x = 20;
    }
    num(x);
    console.log(x);  //10

    var obj = {name:'xiaoming'}
    function fun(obj){
        obj.name = 'xiaohong'
    }
    fun(obj);
    console.log(obj.name);      //xiaohong
```
####(4). 检测类型
####①. typeof
局限性：1. 检测null(自身是基本数据类型)时，结果为object;
        2. 对于部分引用类型不能详细检测，其结果为object；
```
    var number = 10;
    console.log(typeof number); //number

    var string = "字符串";
    console.log(typeof string); //string

    var boolean = true;
    console.log(typeof boolean); //boolean

    var undefined;
    console.log(typeof undefined);  //undefined

    var nu = null;
    console.log(typeof nu); //object

    var array = [1,5,5];
    console.log(typeof array); //object

    var object = {};
    console.log(typeof object); //object

    var zc = / /;
    console.log(typeof zc); //object

    var fun = function(){};
    console.log(typeof fun);    //function
```
####②. instanceof
a instanceof b (a是b的实例？)
```
    var number = 10;
    console.log(number instanceof Number);  //false

    var string = "";
    console.log(string instanceof String);  //false

    var boolean = true;
    console.log(boolean instanceof Boolean);    //false

    var undefined;
    console.log(undefined instanceof Object);   //false

    var nu = null;
    console.log(nu instanceof Object);  //false

    var array = [1,5,5];
    console.log(array instanceof Object);   //true
    console.log(array instanceof Array);    //true

    var object = {};
    console.log(object instanceof Object);  //true

    var zc = / /;
    console.log(zc instanceof Object);  //true

    var fun = function(){};
    console.log(fun instanceof Function);    //true
    console.log(fun instanceof Object);    //true
```
####(5). 数据类型转换
####①. Number()  (强制转换成数值)
```
    var string = "";
    var string1 = "字符";
    console.log(Number(string));  //0
    console.log(Number(string1));  //NaN

    var boolean = true;
    var boolean1 = false;
    console.log(Number(boolean));    //1
    console.log(Number(boolean1));    //0

    var undefined;
    console.log(Number(undefined));   //NaN

    var nu = null;
    console.log(Number(nu));  //0

    var array = [];
    var array1 = [1,5,5];
    console.log(Number(array));   //0
    console.log(Number(array1));   //NaN

    var object = {};
    var object1 = {"name":"alen"};
    console.log(Number(object));  //NaN
    console.log(Number(object1));  //NaN

    var zc = / /;
    var zc1 = /\d/;
    console.log(Number(zc));  //NaN
    console.log(Number(zc1));  //NaN

    var fun = function(){};
    console.log(Number(fun));    //NaN
```
####②. String()和toString()
```
    //toString()是window的方法，只有本身自带的构造函数才能转换
            (new Number() new String() new Boolean())
    var nu = null;
    var result = nu.toString();     //报错

    String()是直接转换
    var nu = null;
    var result = String(nu);     //'null'
```
####③. 转换成boolean
```
    NaN,0,null,undefined,"",[]都转换为false,对象等其余的都转换成true;
```
####④. parseInt()和parseFloat() (非强制转换成数值)
```
    console.log(parseInt("12px"));   //12
    console.log(parseFloat("12px"));   //12

    console.log(parseInt("12.12px"));   //12
    console.log(parseFloat("12.12px"));   //12.12

    console.log(parseInt("aa12px")); //NaN
    console.log(parseFloat(aa12px)); //NaN

    console.log(parseInt(12 5));     //12
    console.log(parseFloat(12 5));   //12
```
###3. Object
####(1). 包装对象
```
    var string = new String();
    var number = new Number();
    var boolean = new Boolean();
//只有这个三种基本数据类型可以包装对象
    var str = number.toString();
    console.log(str);

```
####(2). 内置对象
####①. new object()对象
```
    var obj = new Object(); //简写方式为var obj = {}
```
####②. new Date()日期对象
```
    var dateNow = new Date();   //全部时间
    var year = dateNow.getFullYear();   //年份
    var month = dateNow.getMonth();     //月份 从0开始算，到11
    var date = dateNow.getDate();      //日期
    var day = dateNow.getDay();     //星期
    var hours = dateNow.getHours();     //小时
    var minutes = dateNow.getMinutes();     //分钟
    var seconds = dateNow.getSeconds();     //秒
    var time = dateNow.getTime();      //1970-1-1至今的毫秒数
```
####③. new Math()数学对象
```
    var math = new Math();  //建立数学对象
    var random = Math.random(); //获取0~1的随机数
    var floor = Math.floor();   //向下取整
    var floor = Math.ceil();   //向上取整
    var floor = Math.round();   //四舍五入取整
```
####④. new Array()数组对象
```
    var array = new Array();   //简写方式为var array = []
    array.push('元素')   //向数组的末尾添加一个或更多数值,操作原数组,返回值为数组长度
    array.pop()          //删除末尾数值,操作原数组,返回值为删除后的数组长度
    array.unshift(值)    //从数组的前面添加数值,操作原数组,返回值为数组长度
    array.shift          //删除第一个数值,操作原数组,返回值为删除后的数组长度

    var arr = array.splice(i,1,'数值')    //删除数组中第i位1个数值,并添加'数值',操作原数组,返回的是一个数组
                arr[0]      //返回删除的数值

    var arr1 = array.slice(x,y)      //拆分数组中的第x位 到 第y-1位的数值,不操作原数组(深克隆),返回值为拆分的数组
    var arr = [1,2,3,4,5,6,7];
    var result = arr.slice(1,5);    //返回值为[2,3,4,5]

    array.map(function(a,b){})      //遍历数组,a输出value值,b输出索引

    array1.concat(array2,array3)    //拼接数组array1，array2，array3
    
    array.sort()                   //内置排序方法，从小到大排序
    array.sort(function(a,b){return b-a})   //从大到小排序
    var objArray = [
                {age:4},
                {age:1},
                {age:5},
                {age:3},
                {age:2},]
    objArray.sort(comp("age"));     //comp("age")返回值为函数，按年龄排序
    function comp(prop){            //prop是属性名
        return function(a,b){
            return a[prop]-b[prop]
        }
    }

    array.join()      //将数组转换为字符串,默认用 逗号 链接,也可用('')其他符号链接
    string.split()     //将字符串转换成数组,

    var str = 'abc123def456gh';
    var result = str.split(123)     //返回值为['abc','def','gh']
```
####⑤. new RegExp()正则
```
    var regExp = new RegExp();   //简写方式为var regExp = / /
        []      中括号 匹配任意一个都可以符合
        ?       匹配0位或1位,首字符不匹配则会为空字符
        *       匹配0位或多位,首字符不匹配则会为空字符
        +       匹配一位或多位
        {n,m}   匹配n位到m位
        ()      分组
        \d      匹配数字
        \D      匹配非数字
        \s      匹配空格或tab
        \S      匹配非空格和tab
        \w      匹配数字字母下划线  [a-zA-Z0-9_]     //63个
        \       转义字符
        ^       必须以^··为开头
        $       必须以··$为结尾
        g       全局匹配
        i       不论大小写 匹配
    
    var str = "123aaa456bbb789";
    var re = /([a-z]+)([1-9]+)/;
    var zc1 = /12345/;
    var zc2 = /2/;
    var str1 = "12345";

    re.exec(str);     //["aaa456","aaa","456",index:3,input:"123aaa456bbb789"]
    zc1.test(str1);      //true  检测是否是指定数值，返回布尔值
    zc1.exec(str1);      //["2", index:1, input: "12345"]

    str.match(re);      //检测第一次匹配，返回数组
    str.search(re);     //查找第一次出现的位置，返回索引，没有则返回-1
    
    str1.replace(ze2,'')   //正则ze2匹配的字符都会被替代为空字符串("")
```
####(3). 构造函数
#####①定义
######Ⅰ. 构造函数的前身是工厂模式,es6之前都没有类的内置方法,所以用函数来创建类
######Ⅱ. 创建构造函数是一般首字母大写
```
    function Animation(){}
```
######Ⅲ. 所有的实例对象共享同一个prototype对象
######Ⅳ. 任何原型链的最后一个对象就是Object
######Ⅴ. 原型链：当对象尝试获某个属性时，该对象没有，会尝试从原型对象中去找，原型对象没有，在从原型对象的原型去找，最后到达Object.prototype。
#####②创建原型和继承
```
//创建构造函数
    function Ani(name,age){
        this.name = name;
        this.sayName = function(){
            console.log('我是' + this.name)d
        }
    }
    Ani.prototype = {
        shout:function(){
            console.log('miao')
        }
    }
//创建子级原型,*子级无法通过父级创建私有属性
    function Cat(name,age){
        Ani.apply(this,arguments);  //只能在参数前面一样是才能用
        //或者Ani.call(this.name,age);    //参数位置不一样时,对照父级原型的参数
    }
//子级继承父级原型
    Cat.prototype = new Ani();
//向子级原型添加方法或属性
    Cat.prototype.eatfish = function(){
        console.log('我吃鱼')
    }
    //继承者不能用花括号添加方法和属性,因为这种写法会将原型添加的方法覆盖
    //eg: Cat.prototype = {
    //    eat:functon(){
    //        console.log('我吃鱼')
    //    }
    //}
//调用构造函数
    var cat = new Cat('mimi');
    cat.sayName();               //我是mimi
```
#####③es2015(es6)
```
    class Ani{
        constructor(name,age){
            this.name = name;
            this.age = age;
        }
        sayName(){
            console.log('我是' + this.name)
        }
    }
    class Cat extends Ani{
        constructor(name,age){
            super(name,age)
        }
        eatfish(){
            console.log('我吃鱼')
        }
    }
    var cat = new Cat('mimi',2);
    cat.sayName()
```
#####④
#####⑤
####(4). 自定义对象
###4. function(函数)
####(1). 定义
```
    function 函数名(形参){       
        表达式}            //function 是声明一个函数

    function  sum(x,y){
        return x+y;         //return 返回值，不在执行下面语句
        var sum = 1+15+1;
        console.log(sum);
    }
    sum(3,4)
```
####①arguments
定义:传入函数内的形参会默认形成一个数组,能用①arguments[i]调用,
```
    形参x与arguments没有冲突
    function count(x,y){
        if(arguments.length === 1){
            return arguments[0]*arguments[0]    //等同return x*x
        }else if(arguments.length === 2){
            return arguments[0]*arguments[1]    //等同return x*y
        }
    }
    count(10);
    count(10,20);
```
####(2). 函数类型
####①. 匿名函数
```
    btn.onclick = function(){}
```
####②. 立即执行函数
```
    (function(){
        var num = 100;
        alert(num);
        })();                //刷新页面立即执行
```
####③. 递归函数
```
    //阶乘函數
    function fun(n){
            if(n === 1){
                return n;
            }else if(n > 1){
                return n * fun(n-1)
            }
        }
        console.log(fun(3));    //6
```
####④. 回调函数
```
    //用一個函數 調用 另一個函數，與 閉包，封裝 無關
    function fun(callback){
        callback();
    }
    fun(function(){
        alert("hello");
        })
```
####⑤. 闭包函数
定义：一个函数 能够读取 其他函数内部变量 的函数，称该函数为闭包
```
    function outFun(){
        var a = 100;
        function inFun(){
            alert(a);
        }
        return inFun();
    }
    outFun();
```
#####Ⅰ. 封装
定义：把定义好的变量，方法，属性封装的在一个函数内，防止与他人写的命名有冲突，并调出接口，供外部使用
```
    var count = (function(){
        var a = 10;
        function(){
            console.log(a);
        }
        return {
            fun1:fun     //接口名:函數名
        }
        })()
    count.fun1();    //10(調用接口名)
```
#####Ⅰ. js闭包
```
    (function(global){      // global 命名有寓意
        var xxx = function(){

        }
    })(tpeof window !=="undefined" ? window : this) //解决兼容问题
```
#####Ⅰ. jQuery闭包
```
    (function($){
        $.fn.xxxx = function(){

        }
    })(jQuery)
```
###5. 语句流
####(1). 循环结构
####①. for循环(用于循环次数已知的循环)
```
    for(声明变量;判断语句;变量的累加(可选);){
        条件成立执行循环语句
    }
    for(var i = 0;i<10;i++){
        sum += i   //相当于sum=sum+i
    }
```
```
    for in(适用于对象遍历)
    var string = {name:"小明"}
    for(var i in string){
        string[i]["属性名"]    //获取属性值
    }
```
####②. do while循环(适用于循环次数未知的循环，先循环再判断)
```
    var sum = 0,i = 0;
    do(sum += i;i++)while{
        i <= 10;
    }
```
####③. while循环(适用于循环次数未知的循环，先判断再循环)
```
    var sum = 0,i = 0;
    while(i <= 10){
        sum += i;
        i++;
    }
```
####(2). 分支结构
####①. if判断语句
#####Ⅰ. if
```
    if(判断语句){
        输出语句    //ture则输出语句，false则结束
    }
```
#####Ⅱ. if···else
```
    if(判断语句){
        输出语句1
    }else{
        输出语句2   //ture则输出语句1，false则输出语句2
    }
```
#####Ⅲ. if···elseif···
```
     if(判断语句1){
        输出语句1   //判断语句1为ture则输出语句1，false则执行下个语句
    }else if(判断语句2){
        输出语句2   //判断语句2为ture则输出语句2
    }
    ···
```
####②. swich判断语句
```
    swich(判断语句){
        case 判断语句1:输出语句1;break; //判断语句1为ture则输出语句1，false则执行下个语句
        ···
        default:输出语句2;(最后不用加break)  //以上判断都为false，则输出输出语句2
    }
```
        break(终止整个循环)
        continue(结束此次循环)
####(3). 顺序结构
###6. 运算符
####(1). 基础运算符
```
    &&  //与，并集
    ||  //或
    !   //非
```
####(2). 三元(目)运算符
判断条件 ? 结果1 : 结果2;      //如果判断条件为true输出结果1，判断条件为false输出结果2
```
    var sum = 0,i=0;
    i=10:console.log(i)?i+=10;      //0
    console.log(i);                 //0
```

##(二). DOM
###定义:D文档 O对象 M模型: DOM是接口,可以调用一些方法和事件
###1. 操作节点
####节点有：元素节点，文本节点，属性节点
####addeventlistener(监听事件，同jQuery的delegate)
####(1). 查(获取节点)
```
    <button id="btn" class="otn"></button>

    var btn0 = document.getElementById("btn");          //获取id节点，只获取一个
    var btn1 = document.getElementsByClassName("obtn");     //获取class节点，返回数组，获取多个
    var btn2 = document.getElementsByTagName("button");     //获取标签节点，返回数组，获取多个

//querySelector无法获取后添加的元素，getElement能够获取
    var btn3 = document.querySelector("#btn");          //获取id节点，只获取一个
    var btn4 = document.querySelector(".obtn");         //获取class节点，有多个时，仅一个并获取第一个
    var btn5 = document.querySelectorAll("button");     //获取多个获取标签节点，返回数组

//获取父级节点
    var parent = li.parentNode;

//获取父级下的所有子节点
    var sbilings = ul.children;     //只获取元素节点
    var sbilings = ul.childNode;    //获取文本节点,元素节点

//获取其他节点
    var ns=s.nextSbiling;           //获得s的下一个兄弟节点
    var ps=s.previousSbiling;       //得到s的上一个兄弟节点
    var fc=s.firstChild;            //获得s的第一个子节点
    var lc=s.lastChile;             //获得s的最后一个子节点
```
####(2). 增加节点
```
//创建节点
    document.createElement("button");       //创建元素节点<button></button>
    document.createTextNode("txt");         //创建文本节点
//添加节点
    <ul class="ul"></ul>
    var li = document.createElement("li")
    document.querySelector(".ul").appendChild(li)


```
####(3). 修改节点
```
    innerHTML
    innerText
```
####(4). 刪除节点
```
        <ul class="ul">
            <li class="li">ss</li>
        </ul>
        var ul = document.querySelector(".ul");
        var li = document.querySelector(".li");
        ul.removeChild(li);
```
###3. 事件/方法/属性
####(1). 事件委托
把子集的事件委托给父级来处理
```
    addEventListener('事件',function(){},false)    //如果有两个事件不会覆盖,一起发生
    //默认false 冒泡过程触发事件，true 捕获过程触发事件
//鼠标点击事件
    onclick     //单击左键(如果有两个事件,后一个会把前面的事件覆盖)
    
```
####(2). 事件
```
//常用事件
    onkeydown   //键盘按下 触发事件
    onkeyup     //键盘弹出事件 触发事件
//表单事件
    onfocus     //获得焦点事件
    onblur      //失去焦点事件
    onchange    //当表单中的改变值 就会触发
    onsubmit    //提交表单 触发事件
    onreset     //重置表单 触发事件
//其他事件
    onload      //当页面结构加载完 触发事件
    onerror     //当文件加载失败时 触发事件
    onresize    //当浏览器界面的大小改变时 触发事件
```
####(2). 方法
```
    click()     //点击方法
    blur()

    history.back()      //后退一个历史
    history.forward()   //前进一个历史
    history.go(-1)      //前进一个历史   -1为后退上一个历史(可写-2,1,2)
```
####(3). 属性
```
    //电脑屏幕可视化高度
    var seeHeight = document.documentElement.clientHeight;

    //页面总高度
    var scrooHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    //滚动条 滚动的高度(滚过去的高度，不可视)
    var scrooTop = document.documentElement.scrollTop || document.body.scrollTop;

    div.clientWidth;    //可视内容宽度 包括内边距 (不包括 边框 外边距 滚动条)
    div.clientHeight;   //可视内容高度 包括内边距 (不包括 边框 外边距 滚动条)
    div.clientTop;      //div边框的宽度(不包括其他)
    div.clientLeft;     //div边框的宽度(不包括其他)

    div.offsetWidth;    //div的总宽度(内外边距,内容,边框,滚动条)
    div.offsetHeight;   //div的总高度(内外边距,内容,边框,滚动条)
    div.offsetTop;      //div边框 距离 页面 顶部的距离
    div.offsetLeft;     //div边框 距离 页面 左侧的距离

    div.scrollWidth;    //全文宽度
    div.scrollHeight;   //全文高度
    div.scrollTop;      //上卷的高度
    div.scrollLeft;     //左卷的宽度

```
#####表单属性
```
    outlineColor    //选中文本空的颜色
    select          //点击文本框 选中文本框的内容

```
##(三). BOM
###1. window
###1. location.href
#二. Jquery库
##1. 操作节点
##2. 事件/方法
###(1). 事件委托
把子集的事件委托给父级来处理
```
    <div class="box">
        <button></button>
    </div>
    $("box").delegate('button','事件',function(){alert("事件")})
```
###(2). 添加class名
```
//js
    //添加
    el.setAttribute("class","名");
    el.className = "名";
//jquery
    //检测
    el.hasClass("名")    //返回值为boolean
    //添加
    el.addClass("名")
    //删除
    el.removeClass("名")
```
##3. 属性
```
```
#三. Vue库
##1. 基础
```
//传数据
    <div id="app">
        {{ message }}
    </div>

    var app = new Vue({
        el: '#app',
        data: {
        message: 'Hello Vue!'
        }
    })
//鼠标悬停显信息
    <span v-bind:title="message">
        //鼠标悬停几秒钟查看此处动态绑定的提示信息！
    </span>
//标签显隐
    <p v-if="seen">现在你看到我了</p>

    var app3 = new Vue({
        el: '#app-3',
        data: {
        seen: true
        }
    })
//点击事件
    <button v-on:click='myfun'>事件</button>
//v-model
    <div id="app-6">
        <p>{{ message }}</p>
        <input v-model="message">
    </div>

    var app6 = new Vue({
        el: '#app-6',
        data: {
            message: 'Hello Vue!'
        }
    })
```
##2. 组件化及传输数据
```
//写法
    <div id="app">
        <table>
            <tr is='my-tr'></tr>    //能显示在table里面
            <my-tr></my-tr>         //显示在table外面
        </table>
    </div>
        Vue.component('my-tr',{
            props:['val'],
            template:'<tr>\
                <td>{{val.name}}</td>\
                <td>{{val.age}}</td>\
                <td>{{val.sex}}</td>\
            </tr>'
        })

//传数据
    </div>
    <div id="app">
    <!-- 2. 写v-bind:val='' -->
        <hello class='a' v-bind:val='furit'></hello>
    <!-- 未写 v-bind -->
        <hello class='a' val='furit'></hello>
    </div>

    <div id="app1">
        <helle v-on:myshow='myfun'></helle>
    </div>

//由外部new Vne 向内部组件里传数据
        Vue.component('hello',{

        //1. 添加props
            props:['val'],
            template:'<div>\
                <h1 v-on:click="show">{{message}}</h1>\
                <h2 v-on:click="show">{{val}}</h2>\
            </div>',
            data:function(){
                return{
                    message:'hello vue'
                }
            },
            methods:{
                show:function(){
                    console.log(this.message)
                }
            }
        })
        new Vue({
            el:'#app',
            data:{
                message:"new vue",
                furit:'水果'
            }
        })

//由内部组件里 向 外部new Vne 传数据
        Vue.component('helle',{
            template:"<h1 v-on:click='mycom'>{{text}}</h1>",
            data:function(){
                return{
                    text:'helle vue'
                }
            },
            methods:{
                mycom:function(){
                    this.$emit('myshow',this.text)  //$emit()里的方法不能是大写
                }
            }
        })
        new Vue({
            el:'#app1',
            methods:{
                myfun:function(text){
                    alert(text)
                }
            }
        })
```
##3. 重设路由
```
    <div id="app">
        <ul>
            <li><router-link to='/'>主页</router-link></li>   //to是煊染到此页
            <li><router-link to='/movie'>电影</router-link></li>
            <li><router-link to='/videos'>视频</router-link></li>
        </ul>
        <router-view></router-view> //<router-view>和<router-link>固定不变
    </div>
    <script src='vue.js'></script>
    <script src='vue-router.js'></script>   //引入vue-router文件
        var home = Vue.component('home',{
            template:'<h1>主页</h1>'
        });

        var movie = Vue.component('movie',{
            template:'<h1>电影</h1>'
        });

        var videos = Vue.component('videos',{
            template:'<h1>视频</h1>'
        });

        var router = new VueRouter({
            routes:[
                {path:'/',component:home},
                {path:'/movie',component:movie},
                {path:'/videos',component:videos}
                ]
        });

        new Vue({
            el:'#app',
            router
        })
```
##4. store状态管理
```
    //建立store.js文件，在main.js中引入
    //在store.js中写入
    import Vue from 'vue';
    import Vuex from 'vuex';
    Vue.use(Vuex);
    const store = new Vuex.Store({
        state:{
            count:0
        },
        mutations:{
            add(state){
                state.count++;
            }
        }
    })
    export default store    //暴露接口

    //数据引用
    computed:{
        count(){
            return this.$store.state.count
        }
    }
```
##4. ajax
```
    new Vue({
        el:'#app',
        data:{
            students:[]
        },
    //1. 添加生命周期函数
        mounted:function(){
            this.getdata()
        },
        methods:{
            getdata:function(){

    //2. 添加$http.get()方法,then(fun1,ufn2)fun1获取成功,fun2获取失败

                this.$http.get('/data/students.json').then(function(res){
                    this.students = res.data;
                },function(res){
                    console.log(res)
                })
            }
        }
    })
```
##5. Vue工程化
```
//用cnpm现在git中安装npm install -g cnpm --registry=https://registry.npm.taobao.org

//建立package.json下载npm，写入
    {
      "name": "vue2017",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "repository": {
        "type": "git",
        "url": "https://git.coding.net/jiyangli/vue2017.git"
      },
      "author": "",
      "license": "ISC",
      "devDependencies": {
        "babel-core": "^6.24.0",
        "babel-loader": "^6.4.1",
        "babel-preset-es2015": "^6.24.0",
        "css-loader": "^0.27.3",
        "style-loader": "^0.14.1",
        "vue": "^2.2.4",
        "vue-loader": "^11.1.4",
        "vue-style-loader": "^2.0.4",
        "vue-template-compiler": "^2.2.4"
      }
    }

//建立webpack.config.js,能够打包(多个文件合成一个文件)编译文件，写入
    module.exports = {
        entry: './src/main.js',     //原文件位置
        output: {
            filename: './dist/bundle.js'   //打包后文件的位置
        },
        module: {
            loaders: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            }, {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }]
        },
        vue: {
            loaders: {
                js: 'babel?{"presets":["es2015"]}',
                css: 'vue-style!css'
            }
        },
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.common.js'
            }
        }
    }

//在main.js中引入vue.js
    import Vue from 'vue'

//在main.js中import后加入下面代码，报错信息更明确
    Vue.config.debug = true;
```
#四. JSON
```
    //json是 后台 传到 前台的一种文件格式(js对象)
    //格式:所有属性值都用双引号("")包起，  数组,对象最有一个属性都不能加逗号(,
    )，全部用单引号包起，用斜杠去除换行
    var data = '{\
            "class":"001",\
            "students":[\
                {"姓名":"xiaohong","年龄":"2","性别":"male"},\
                {"姓名":"xiaohong","年龄":"2","性别":"male"},\
                {"姓名":"xiaohong","年龄":"2","性别":"male"},\
                {"姓名":"xiaohong","年龄":"2","性别":"male"},\
                {"姓名":"xiaohong","年龄":"2","性别":"male"}\
            ],\
            "niamji":"2"\
        }'

    var json = JSON.parse(data);        //将json转换成js对象(严格遵守json格式)
    var obj = JSON.stringify(json);     //将js对象装成json格式

    var str = 'alert("hello eval")';
    eval('str');             //将字符串转换成js代码

```
#五. 跨域请求(jsonp)
```
```
#六. ajax
####定义:a(异步)j(js)a(and)x(xml => html)
```
//原生js,get请求
    function get(){
            var xhr = new XMLHttpRequest();
            xhr.open('get','data.txt');
            xhr.send();
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4 && xhr.status == 200){
                    alert(xhr.responseText);
                }
            }
        }

    //封装方法
    function get(method,url,callback){
            var xhr = new XMLHttpRequest();
            xhr.open(method,url);
            xhr.send();
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4 && xhr.status == 200){
                    callback(xhr.responseText);
                }
            }
        }
        get('get','data.txt',function(t){alert(t)})
```
#七. Git
##(一). 常用命令
```
    cd 文件名                     //进入该文件
    ls                           //该文件下的所有文件列表
    git clone url                //将github上的远程仓库克隆到本地（只执行一次）
    git add .                    //将所有编辑区文件提交到暂存区
    git commit -m "备注"         //将所有暂存区文件提交到主分支。
    git push -u origin master   //将本地分支同步到远程分支
    git pull                    //同步远程仓库
    git status             //查看文件储存位置状态，红色表示在编辑区，绿色表示在暂存区
    HEAD^                  //回到上一个版本(~^^表回上上个版本，~100回到前100个版本)
    git reflog             //找回以前的版本号
    git brach              //查看当前分支
    git brach <name>       //创建分支
    git chechout <name>    //切换分支
    git chechout -b <name> //创建+切换分支
    git merge <name>       //合并其他分区到当前分区
    git branch -d <name>   //删除分支
    安装包名 -v             //查看版本号(如:webpack -v) 

```
#八. Node
##(一). 建立服务器
request   请求
response  响应
``` 
    webpack-dev-server  //先安装npm install -g webpack-dev-server，在git中直接运行建立服务器(同级目录),先用webpack.config.js打包编译，再建立服务器

    http-server   //只创建服务器，先安装npm install -g http-server,再运行(同级目录)

    //建立(文件名).js文件；下载express包
    var express = require("express");       //"express"为内置模块，
    var app = express();                //设置返回值
    app.use(express,static("public"));      //设置静态文件目录，使用express的静态服务器的文件(static定义静态变量)
    app.listen(80,function(){               //设置访问端口（80为默认端口）
        console.log("服务器已启动！")
        })
        
    //在Git输入node (文件名).js以本身电脑为服务器启动
```
##(二).npm模块
```
    //建立package.json文件，安装模块--save-dev可记录安装模块
    {
      "name": "mynpm",
      "version": "0.0.0"
    }
```
##(三). 自定义模块
```
//建立模块.js文件
    function count1(x,y){
        return x+y
    }
    module.exports = {      //node暴露端口
        count1:count1,
    }
//引用自定义模块js文件
    var count1 = require('./count').count1;

    var result = count1(10,20);
    console.log(result)
```
##(四). es5打包、编译为es6
```
//安装模块babel-core  babel-loader  babel-preset-es2015
//建立webpack.config.js文件
    写入
    module.exports = {
        entry: './main.js',
        output: {
            filename: './bundle.js'
        },
        module: {
            loaders: [{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            }]
        },
        babel: {
            presets: ['es2015']
        }
    }


//建立模块文件count.js
    function count(x,y){
        return x+y
    }
    export default count        //es6暴露端口

//要编译的文件main.js
    import c from './count.js';     //c 自定义命名，./是同级目录
    var result = c(10,20);
    alert(result)                //30
```
#九. MongoDb
##(一). 建立数据库
```
    //用cmd进入命令行，在命令行中进入安装目录MongoDB\Server\3.4\bin>中输入mongod
    可查看是否能正常运行

    mongod --dbpath=d:/MongoDb/Data //在该命令行输入可创建或打开服务器，例如：C:\Program Files\MongoDB\Server\3.4\bin>mongod --dbpath=d:/MongoDb/Data

    mongo//打开服务器后，再打开一个新的命令行窗口，输入mongo建立访问端口

    use 数据库名字(mydb)//可进入该数据库，没有则创建该数据库并进入

    var 名 = [{age:2}]//在命令行创建变量，

    show dbs//显示所有数据库的数据库

    db//显示当前的所在的数据库名字

    show collections//显示当前数据库的所有集合

    db.集合名.insert(变量名)//有该集合则在该集合插入该变量，没有则创建新的集合并插入该变量

    db.集合名.find()//显示该集合下的所有文档

    db.集合名.update({age:2},{$set:{age:10}})//修改，将原文档(age:2)改为(age:10)

    db.集合名.remove()//删除该集合中的变量

    db.集合名.drop()//删除该集合

    db.dropDatabase()//必须进入当前数据库才能删除
```
##(二). 用node操作数据库
###1. 查看数据库文档
打开数据库服务器进行
```
    var mongoClient = require("mongodb").MongoClient;   //添加mongodb的模块
    var url = "mongodb://127.0.0.1:27017/mydb";     //设置变量路径
    mongoClient.connect(url,function(err,db){
        db.collection("student").find().toArray(function(err,docs){
            console.log(docs);
            db.close();
        })
    })
```