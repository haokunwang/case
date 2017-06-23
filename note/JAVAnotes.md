①②③④⑤⑥⑦⑧⑨⑩
ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩ
书：数据库原理
    Java入门到精通
    Spring3.x
    Spring+mybits

##1. 
static的属性和方法只能使用static的变量(静态方法、属性只能访问静态的变量)
##2. 操作MySQL(使用Navicat Premium)
操作语句：不区分大小写
###(1). 增
```
//INSERT 语句：INSERT INTO 表名(字段名1,字段名2...) VALUES(值1,值2,...);
                INSERT INTO 表名(字段名1,字段名2...) VALUES(值1,值2,...);
    //单个插入
    INSERT INTO stumgmt.student(
    student.studentID,
    student.studentName,
    student.studentSex,
    student.studentBirthday
    ) VALUES(
    10014,
    '小红',
    1,
    '1993-12-13'
    );
    或
    INSERT INTO student(
    studentID,
    studentName,
    studentSex,
    studentBirthday
    ) VALUES(
    10014,
    '小红',
    1,
    '1993-12-13'
    );
```
###(2). 查
```
//SELECT语句：SELECT 所选字段列表 FROM 表名 WHERE 条件表达式

    SELECT student.studentID AS '学号',
    student.studentName AS '姓名',
    student.studentSex AS '性别',
    student.studentBirthday AS 'Birthday'
    FROM student
    WHERE studentSex=1 AND studentBirthday<='1994' OR studentBirthday>='1997'
    ORDER BY
    studentBirthday

//BETWEEN...AND...
    WHERE studentBirthday BETWEEN '1992-01-01' AND '1997-10-11'

//排序(默认升序)
    ORDER BY
    studentBirthday DESC
```
###(3). 改
```
//UPDATE语句：UPDATE 表名 SET 字段名=新值 WHERE 条件表达式

    UPDATE student
    SET studentName='小吕',studentSex=0
    WHERE studentName='小红' AND studentID=10014
```
###(4). 删
```
//DELETE语句：DELETE FROM 表名 WHERE 条件表达式

    DELETE FROM student
    WHERE studentName LIKE '%吕%'

//LIKE表示删除类似(在 改 查 中都能用)

//in表示删除studentName为括号内的字段
    DELETE FROM student
    WHERE studentName in ('李雪','JACK SON','韩梅梅')
```
##2. 使用java操作MySQL
###(1). 注册驱动
```
//创建JDBCStudy项目，并在src目录下创建名为lib的package，将mysql-connector-java-5.1.41-bin.jar复制到lib下。
//将mysql-connector-java-5.1.41-bin.jar导入到项目中，点击OK即可。
//在项目中创建package名字为util，并在包中创建DBHelper类,写入
public class DBHelper {

    private final static String DRIVERNAME = "com.mysql.jdbc.Driver";
    private final static String MYSQL_URL = "jdbc:mysql://localhost/stumgmt?useUnicode=true&characterEncoding=utf-8&useSSL=false";
    private final static String MYSQL_USERNAME = "root";
    private final static String MYSQL_PASSWORD = "root";
    
    public static Connection getConnection(){
        //创建Connection接口对象
        Connection con = null;
        
        try {                           //异常处理try/catch
            //1. 注册驱动
            Class.forName(DRIVERNAME);
            //2. 获取数据库链接
            con = DriverManager.getConnection(MYSQL_URL, MYSQL_USERNAME, MYSQL_PASSWORD);
        } catch (ClassNotFoundException e) {      //ClassNotFound删除 可解决异常，但不能说明
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        //返回数据库链接con
        return con;
    }

    //测试是否连接
    public static void main(String[] args) {
        Connection c = getConnection();
        System.out.println(c);
    }
}

```
###(1). 查询
```
    //1. Connection     con
    //2. prepareStatement       ps
    //3. ResultSet      re

    //关闭
    //1. re.close()
```

搭建Web配置文件(SpringMVC)
1. web.xml
2. 新建一个xml文件,名SpringMVC.xml
3. 写配置文件---applicationContext.xml
    数据库链接配置


package包名建立规则
1. 见名知意
(1). controller 接受前台的数据给后台，然后再把数据传回前台，也可跳转页面
service (具体的业务逻辑处理)接口 serviceImpl 接口实现
dao 数据持久化操作
util 工具类
domain (建立set、get....)运行文件(表名、字段名、类型要一致)实例化


Javaweb交互流程  Controller <=> Service(业务逻辑语句) <=> Dao(sql语句) <=> DB


ref关联固定的id

定义一个静态方法

接口的实现类 必须实现 接口定义的所有方法