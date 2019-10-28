#运行已选择SQL语句（ctrl + shift + R）
#Student    Course   SC    Teacher
select VERSION();
select user from mysql.user;

#学生表
CREATE TABLE `student` (
  `Sno` varchar(255) NOT NULL,
  `Sname` varchar(255) DEFAULT NULL,
  `Sage` int(11) DEFAULT NULL,
  `Ssex` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Sno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

insert into student values ('001','张三',23,'男');
insert into student values ('002','李四',23,'男');
insert into student values ('003','吴鹏',25,'男');
insert into student values ('004','琴沁',20,'女');
insert into student values ('005','王丽',20,'女');
insert into student values ('006','李波',21,'男');
insert into student values ('007','刘玉',21,'男');
insert into student values ('008','萧蓉',21,'女');
insert into student values ('009','陈萧晓',23,'女');
insert into student values ('010','陈美',22,'女');
select * from student;


#课程表
CREATE TABLE `course` (
  `Cno` varchar(255) NOT NULL,
  `Cname` varchar(255) DEFAULT NULL,
  `Tno` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Cno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

insert into course values ('001','J2SE','t002');
insert into course values ('002','Java Web','t002');
insert into course values ('003','SSH','t001');
insert into course values ('004','Oracle','t001');
insert into course values ('005','SQL SERVER 2005','t003');
insert into course values ('006','C#','t003');
insert into course values ('007','JavaScript','t002');
insert into course values ('008','DIV+CSS','t001');
insert into course values ('009','PHP','t003');
insert into course values ('010','EJB3.0','t002');
select * from course;

#成绩表
CREATE TABLE `sc` (
  `Sno` varchar(255) DEFAULT NULL,
  `Cno` varchar(255) DEFAULT NULL,
  `score` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


insert into sc values ('001','001',78.9);
insert into sc values ('002','001',80.9);
insert into sc values ('003','001',81.9);
insert into sc values ('004','001',60.9);
insert into sc values ('001','002',82.9);
insert into sc values ('002','002',72.9);
insert into sc values ('003','002',81.9);
insert into sc values ('001','003',59);
select * from SC;

#教师表
CREATE TABLE `teacher` (
  `Tno` varchar(255) NOT NULL,
  `Tname` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Tno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


insert into teacher values ('001', '刘阳');
insert into teacher values ('002', '谌燕');
insert into teacher values ('003', '胡明星');
select * from Teacher;

# Student(Sno,Sname,Sage,Ssex) 学生表 
# Course(Cno,Cname,Tno) 课程表 
# SC(Sno,Cno,score) 成绩表 
# Teacher(Tno,Tname) 教师表

#1.查询“001”课程比“002”课程成绩高的所有学生的学号
#注意：比较的是同一个学生的“001”课程比“002”课程成绩高，然后这些学生偶遇哪些
select * from sc;
select sno,score from sc where cno = '001';
select sno,score from sc where cno = '002';

select a.sno from (select sno,score from sc where cno = '001')a,(select sno,score from sc where cno = '002')b 
where a.score>b.score and a.sno = b.sno;


#分组查询   GROUP BY
#Having字句:对分组之后的数据进行再一次筛选
#聚合函数
#排序:ORDER BY     ASC  DESC


#如：按男女分组获取各个组的最大最小年龄
SELECT MAX(age),MIN(age),sex FROM student GROUP BY sex;
#注意:分组查询显示的数据只能是 分组的字段或聚合函数
#按男女分组查询平均钱大于300的
SELECT AVG(money),sex FROM student GROUP BY sex  HAVING AVG(money)>300;


#2.查询平均成绩大于60分的同学的学号和平均成绩
#注意：
SELECT * FROM sc WHERE Sno = '001';#001的各门课成绩
SELECT avg(score) FROM sc WHERE Sno = '001';#001的各门课平均成绩
SELECT avg(score) FROM (SELECT * FROM sc WHERE Sno = '001');#？？？？？
#上面这句有问题：
#[Err] 1248 - Every derived table must have its own alias
#每个派生表都必须有自己的别名
SELECT avg(score) FROM (SELECT * FROM sc WHERE Sno = '001')a;

#where写法
#（1）平均成绩为每个同学各门课的平均成绩，如学号为001学生的各门课的平均成绩
select Sno, avg(score) agvscore from sc group by Sno;#查询结果做条件
#（2）各门课平均成绩大于60分所有的同学再查学号和平均成绩
select a.Sno,a.agvscore from (select Sno, avg(score) agvscore from sc group by Sno)a #一定要区别名
where agvscore>60;

#HAVING写法
SELECT sno,avg(score) FROM sc GROUP BY Sno HAVING avg(score)>60;  
 
#3.查询所有同学的学号、姓名、选课数、总成绩
#用到的表：student  sc   
select * from student;
select * from sc;

SELECT * from student st,sc WHERE st.Sno=sc.Sno;
SELECT * from sc JOIN student on (student.Sno=sc.Sno);

SELECT * from (SELECT * from student st,sc WHERE st.Sno=sc.Sno)a GROUP BY sno; 
 
SELECT sno,sname,count(cno),sum(score) FROM (SELECT * from student st,sc WHERE st.Sno=sc.Sno)a;


