移动webAPP开发
```
    //快捷方式：meta:vp
    //在head标签中添加 meta标签
    //viewport 只有在移动端才能识别
    <!--
        设置宽度 width 设置成和终端设备一样的宽度 device-width
        设置默认的缩放比 initial-scale=1.0
        设置用户能否自行缩放 user-scalable= 0 1 (no yes)
            最大自行缩放比例 maximum-scalable
            最小自行缩放比例 minimum-scalable
     -->
    <meta name="viewport" conten="width=device-width,initial-scale=1.0,user-scalable=0" />
```
移动端特有
/*清除移动端所有高亮的*/
    /*点击高亮效果：点击瞬间有 灰色高亮效果*/
    -webkit-tap-highlight-color: transparent;
    可改颜色
    -webkit-tap-highlight-color: red;