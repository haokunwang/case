①②③④⑤⑥⑦⑧⑨⑩
ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩ
#1. 盒模型
```
    实际宽度=本身宽度+内边距+边框宽度
    
    box-sizing: border-box;     /*消除 内边距+边框 占实际宽度的位置*/
    //盒子宽度从边框开始计算
```

#一. flexble box布局
css3中定义的一种新的布局模式
1. 控制在容器内的子元素的对齐方式、排列方式以及排序顺序
2. 调整期子元素的宽度或者高度 已使其能在不同的分辨率的屏幕 能用最好的方式填充可用空间
总结：flex就是display的属性值
    它约定了一套设置项目的大小、排列、排序的规则
    
1. 解决问题
(1). 水平垂直居中
```
    <style>
        .cont{
            width: 200px;
            height: 200px;
            background: #eee;
            display: flex;
        }
        .item{
            width: 50px;
            height: 50px;
            background: #000;
            margin: auto;
        }
    </style>
    <body>
        <div class="cont">
            <div class="item">item</div>
        </div>
    </body>
```
(2). margin重叠问题
```
    <style>
         .cont{
            width: 200px;
            height: 200px;
            background: #eee;
            display: flex;
        }
        .item{
            width: 50px;
            height: 50px;
            background: #000;
            margin: 0 30px;
        }
    </style>
    <body>
        <div class="cont">
            <div class="item">item</div>
            <div class="item">item</div>
        </div>
    </body>
```
(3). 抵消float的属性
2. flex的概念
(1). 容器和项目
```
    <div class="cont">  //外部盒子叫做容器
         <div class="item">item</div>   //内部盒子叫做项目(项目可多个)
         <div class="item">item</div>
         <div class="item">item</div>
    </div>
```
(2). 主轴和交叉轴
①. 项目的排列顺序是主轴的方向(默认从左到右)
②. 在容器内，项目与主轴方向交集的部分为主轴
③. 与主轴垂直相交的为交叉轴(默认从上到下)

##容器的属性
1. flex-direction(排列方向 即 主轴的方向)
```
    <style>
        .cont{
            width: 200px;
            height: 200px;
            background: #eee;
            display: flex;
            flex-direction:row; /*默认方向 从左到右*/

            //flex-direction:row-reverse; /*方向 从右到左*/
            //flex-direction:column; /*方向 从上到下*/
            //flex-direction:column-reverse; /*方向 从下到上*/
        }
        .item{
            width: 50px;
            height: 50px;
            background: #000;
        }
    </style>
    <body>
        <div class="cont">
            <div class="item">1</div>
            <div class="item">2</div>
        </div>
    </body>
```
2. flex-wrap(是否换行)
换行与主轴方向有关，要事先知道主轴方向
```
     <style>
        .cont{
            width: 200px;
            height: 200px;
            background: #eee;
            display: flex;
            flex-wrap: nowrap;  /*默认 不换行 换行方向 从上往下*/
            //flex-wrap: wrap;  /*不换行*/
            //flex-wrap: wrap-reverse;  /*换行 换行方向 从下到上*/
        }
        .item{
            width: 50px;
            height: 50px;
            background: #000;
        }
    </style>
    <body>
        <div class="cont">
            <div class="item">1</div>
            <div class="item">2</div>
        </div>
    </body>
```
3. flex-flow(上两个属性的简写)
```
    flex-flow: flex-direction flex-wrap;
```
4. justify-content(主轴方向 排列方式)
```
    justify-content: flex-start;    /*默认 左对齐*/
    justify-content: flex-end;      /*右对齐*/

    justify-content: center;        /*主轴方向 居中 写在容器里*/
    align-items: center;        /*交叉轴方向 居中 写在容器里*/

    margin: auto;               /*垂直水平居中 写在项目里*/

    justify-content: space-around;  /*让项目的 主轴方向外边距 充满容器*/
    justify-content: space-between; /*让项目与项目之间的 主轴方向外边距 相等*/
```
5. align-items(交叉轴方向 排列方式)
```
    align-items: stretch;
    align-items: flex-start;
    align-items: flex-end;
    align-items: center;
    align-items: baseline;
```
6. align-content(容器中有多行项目(前提允许换行)，每一行的项目就会产生一个主轴，多行项目就会有多个主轴，这个属性决定多根主轴之间的位置关系)
```
    align-content: strech;
    align-content: flex-start;
    align-content: flex-end;
    align-content: space-around;
    align-content: space-between;
```

项目属性
1. order(排列次序 主轴方向)
```
    order: 0;   /*默认为 0*/
    取值：数值(可为负数)
    功能：项目里order数值越小，越靠前(在主轴方向的排列次序)

```
2. flex-grow
```
    flex-grow: 0;/*默认为 0 表不放大*/
    取值：数值(0时，不会改变)
    功能：放大因子。使用前提：主轴方向上有多余的空间可以让项目去“伸展”(数值大=>宽度长)
    计算步骤：(1) 统计多余的空间：M = 容器宽度 - 所有项目宽度之和
            (2) 确定均分的分数：N = 项目flex-grow的值之和
            (3)计算单位空间 P = M / N
            (4)项目放大后的宽度：R = 宽度 + P * 当前flex-grow值

    两个项目，有一个项目设置flex-grow: 1;会让这个项目充满 容器空余 的空间
```
3. flex-shrink
```
   flex-shrink: 1;  /*默认值1 表所有项目都压缩(主轴空间宽度不够时)*/
   取值：数值(0时，不会改变)
   功能：缩小因子。使用前提：主轴方向上的 空间 不够，项目被压缩(数值大=>宽度越短)
   计算步骤：(1) 总差值，即需要被压缩的大小：M = 容器的宽度 - 项目的宽度之和
            (2) 加权和：N = flex-shrink * 项目宽度值之和 /*多个项目累加*/
            (3) 缩小后的宽度 = 项目值 - (项目值 * flex-shrink / N) * M
```
4. flex-basis(项目在主轴上占据的大小。可覆盖width属性)
```
    flex-basis: auto;   /*默认为auto(主轴是水平方向,为宽度；主轴是垂直方向,为高度)*/
    取值：同 width 属性 取值
```
5. flex(flex-grow,flex-shrink，flex-basis的简写)
```
    flex: 0 1 auto; /*默认值0 1 auto；后两个属性可选*/
    flex: auto; /*表 1 1 auto*/
    flex: none; /*表 0 0 auto*/
```
6. align-self(属性允许单个项目有与其他项目不一样的对齐方式，*可覆盖容器的aline-items)
```
    align-self: auto;
    align-self: flex-start;
    align-self: flex-end;
    align-self: center;
    align-self: baseline;
    align-self: stretch;
```

基本网络布局
1. 如果所有项目有相同的宽度，把所有项目的 flex-grow 设为相同即可
2. 如果所有项目可能有不一样的宽度，可以设置 flex-basis 百分比来达到 等宽 的效果

媒体查询(屏幕到达一定的宽度，菜单 横列 自动 竖列)
```
    <style>
        ul{
            list-style: none;
        }
        .container{
            padding-top: 20px;
            display: flex;
            width: 500px;
            height: 300px;
            background: #fff;
            border: 1px solid #ddd;
            justify-content: space-around;
        }
        @media(max-width: 600px){ /*当宽度 小于 等于 600px 就会执行下面代码(覆盖)*/
            .container{
                flex-direction: columu;
                justify-content: flex-start;
            }
        }
    </style>
    <body>
        <ul class="container">
            <li>主页</li>
            <li>电影</li>
            <li>音乐</li>
        </ul>
    </body>
```

