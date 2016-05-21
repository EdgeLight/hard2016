//题目库
/*北校题库 共86题*/
var question_n = ['下列哪项属于华工北二饭堂的视觉系菜品?',
'下列饭堂有宵夜供应的是',
'下列饭堂能喝早茶的是',
'华工食堂的饭菜好吃吗?',
'华工二饭有几层？',
'以下哪个不是广东传统小吃？',
'使华工青年失去唯一与妹子搭讪机会的自动打饭机在',
'广州的豆腐花是什么味道？',
'学校哪里有清真食堂？',
'南门麟鸿楼前的果树结什么果子？',
'下面哪一种水果不是热带水果？',
'2015年星级饭堂评比，第一名是',
'腐败街没有下列哪家餐厅？',
'以下哪个不是小东门的便利店',
'传说中的华工北校“最贵最难吃”的食堂',
'世博里没有哪种食物',
'校园价超市什么时候打烊？',
'在西区饭堂坐电梯时，哪一个楼层的按钮摁了没反应？',
'回南天不会湿的是',
'一年中广州共有什么季节',
'夏天的华工男生们的统一衣着是',
'回南天的形成中暖湿气流是从哪里吹来的',
'回南天中冷暖气流相遇后形成的是',
'回南天的傍晚 出现的飞虫学名叫什么',
'广州属于什么气候',
'以下天气状况没有在华工发生过的是',
'中山像高多少米',
'华工本科生宿舍中唯一的五人套间',
'已知北十四的宿舍有6个床位，求每个宿舍住多少人？',
'大学城一卡通补办在哪里？',
'以下哪种飞行物在华工看不到',
'机汽学院轻机专业的全称是什么？',
'A5教学楼旁边的亭子被我们亲切地称为什么亭？',
'校巴一共可以容纳多少人？',
'这个学期华工正式放暑假的日期是？',
'华工医学院专业创立的时间是？',
'广州塔的外形属于数学中的哪一种二次曲面?',
'华南理工大学校长王迎军来自哪个学院？',
'逸夫人文馆、逸夫科学馆、世博会中国馆的设计者是谁',
'下列哪些人不是华工校友',
'贝岗有几家KTV',
'华工毕业需要多少创新学分？',
'华工毕业需要游泳游到多少米',
'华工30个志愿时是多少个学分？',
'2016 年9 月1 日起，学生第三学年（五年制专业第四学年）体质测试成绩多少分及以上可参加推免研究生？',
'完成专业课程表的所有必修及规定学分的选修科目，且全部通过，平均绩点达到多少以上才能毕业？',
'华工男不怕女友问“掉水里救我还是救妈”的问题，因为',
'华工本科生最长在校年限是',
'通选课不包含',
'学校里有那么多单杠，是因为',
'以下哪项不能加科创分',
'毕业前必须做的事情',
'毕业对身体有什么要求',
'以下哪个不是华南不毕业大学的毕业条件是',
'以下哪路公交可以往返南北校',
'去华工北校可以在哪个地铁站下车',
'以下哪种换乘方式不能从北校到达南校',
'校巴支付方式有',
'大学城校区去贝岗应乘坐下列哪路车',
'以下哪种车是在华工看不到的',
'离五山校区最近的火车站是',
'步行内环一圈大约需要多长时间',
'以下哪种不是常用的打车软件',
'一块钱可以坐到以下哪路车',
'大学城校区天桥下的马路是哪一环',
'校巴没有经过的是',
'A5教学楼有多少层',
'下列哪个学院是华工没有的',
'南校的上课时间为',
'华工爆水管最多的是哪栋楼',
'下列哪一句话是粤语',
'北校的上课时间为',
'在华工大学城校区，你不可以怎么浪？',
'下列哪个不是华工七大校级组织之一？',
'冬天的华工什么花最多？',
'为了考试不挂科，正确的方法是',
'在华工，看到心仪的妹子怎么办',
'华工南校区生活区宿舍空调晚上什么时候开放',
'以下哪一个活动不是百步梯举办的？',
'以下哪一个不是华工北校区大楼的名称？',
'百步梯的全称是什么？',
'如何进入A5楼？',
'哪些人不被允许进入宿舍楼？',
'大学城校区的正门在哪里',
'晚上的华工校园哪里最虐狗',
'校巴一共有几个站',
];

var a_n = ['辣条炒饭',
'东二饭堂',
'北二饭堂',
'好吃',
'2层',
'煲仔饭',
'北二饭堂',
'甜的',
'东区饭堂',
'椰子',
'猕猴桃',
'东二食堂',
'半城火锅',
'7-11',
'北二饭堂',
'生煎',
'21:30',
'一楼',
'衣物',
'春夏秋冬',
'西装领带皮鞋',
'南海',
'准静止锋',
'飞蚁',
'亚热带季风气候',
'半夜狂风暴雨',
'4.7米',
'北二',
'4',
'D1',
'直升机',
'材料成型及控制工程（轻化工程与塑料模具）',
'初恋亭',
'20',
'6.18',
'2012',
'单叶双曲面',
'机械',
'何镜堂',
'创维集团创始人 黄宏生',
'1',
'2',
'1',
'1',
'60',
'1.0',
'华工学生游泳要过25m才能毕业',
'5年',
'人文科学',
'让同学们强身健体,以便女生当男生用，男生当畜生用',
'SRP',
'和5个以上的同班男生说过话',
'必须练出麒麟臂',
'有对象',
'专线一',
'天河客运站',
'三号线→八号线→四号线→五号线',
'现金',
'环线一',
'婴儿车',
'火车站',
'240s',
'优步',
'环线一',
'内环',
'人文馆',
'10',
'轻工学院',
'8:50',
'c1',
'斯国以',
'8:50 ',
'去中心湖边看傻狗',
'校会',
'木棉花',
'每天默念：宝宝我不会挂科',
'别逗了，这种可能不存在',
'傍晚七点',
'雕刻时光电影文化节',
'麟鸿楼',
'百步梯学生创业中心',
'从A5一楼门口进入',
'长得太帅的',
'教学楼B1、B2处',
'C11楼下',
'12',
];

var b_n = ['带皮牛蛙',
'北二饭堂',
'南区饭堂',
'很好吃',
'2.5层',
'艇仔粥',
'南区饭堂',
'咸的',
'南区饭堂',
'芒果',
'番石榴',
'中区食堂',
'一点兔',
'喜市多',
'中区食堂',
'炒饭',
'22:00',
'二楼',
'被子',
'夏天',
'校服校裤',
'海南',
'气旋',
'蚂蚁',
'热带季风气候',
'起床雾气弥漫',
'5.3米',
'北十四',
'5',
'D2',
'水蚁',
'材料成型与控制工程（轻工机械与高分子材料）',
'热恋亭',
'30',
'6.28',
'2013',
'双叶双曲面',
'材料',
'贝聿铭',
'过掉科比上篮的男人陈江华',
'2',
'3',
'25',
'2',
'70',
'2.0',
'华工学生游泳要过50m才能毕业',
'6年',
'自然科学',
'装饰校园',
'国家级英语竞赛',
'和5个以上的同班女生说过话',
'毕业当年体测成绩50分以上',
'15张讲座票',
'专线二',
'华师',
'六号线→二号线→八号线→四号线',
'支付宝',
'388路',
'火车',
'火车南站',
'1200s',
'快的打车',
'专线一',
'中环',
'31号楼',
'11',
'食品学院',
'7:50',
'c2',
'咩鸠嘢',
'7:50',
'去贝岗吃好吃的',
'书法协会',
'紫荆花',
'考前制定计划，认真复习',
'sorry，我来自基汽学院',
'晚上九点',
'寻找新生Dai',
'唯美楼',
'百步梯学生创意中心',
'从A4通道进入',
'长得太美的',
'图书馆到天桥路上 ',
'西湖苑前',
'13'
];

var c_n = ['红烧猪乳头',
'北一饭堂',
'西区四楼',
'从未见过这么好吃的食堂',
'3层',
'油炸鬼',
'西区饭堂',
'辣的',
'北二饭堂',
'荔枝',
'莲雾',
'西区食堂',
'奉天美食',
'OK',
'西区食堂',
'麻辣烫',
'22:30',
'五楼',
'桌子',
'夏天冬天',
'军大衣',
'东海',
'反气旋',
'水蚁',
'地中海气候',
'下午黄沙漫天',
'5.5米',
'西八',
'6',
'D3',
'超人',
'过程装备与控制工程（轻化工程与高分子材料）',
'吵架亭',
'40',
'7.18',
'2014',
'马鞍面',
'电力',
'梁思成',
'UC浏览器总裁 何小鹏',
'3',
'4',
'50',
'不算学分',
'80',
'3.0',
'华工男生不会游泳',
'7年',
'实践科学',
'男生体测要测引体向上',
'跟学院老师做调研',
'参加百步梯毕业季',
'所有体测成绩50分以上',
'30个志愿时',
'环线一',
'岗顶',
'三号线→八号线→四号线',
'赊账',
'68路',
'滑板车',
'火车北站',
'2400s',
'滴滴打人',
'番202',
'外环',
'鸿生科技楼',
'12',
'轻工与食品学院',
'8:00',
'c5',
'萨瓦迪卡',
'8:00',
'去穗石看电影',
'妇委',
'夹竹桃',
'给老师发短信',
'妹纸，给个微信呗',
'反正有课它就不开',
'毕业季文化节',
'励吾楼',
'白步梯学生创新中心',
'从A5侧面进去',
'老司机',
'校医院处',
'分手亭',
'14'
];

var d_n = ['尖椒炒月饼',
'西区饭堂',
'二饭二楼',
'其他选项都对',
'3.5层',
'蚵仔煎',
'一饭',
'酸的',
'二饭',
'龙眼',
'葡萄',
'北二食堂',
'台北小吃',
'KO',
'南区饭堂',
'煎饺',
'23:00',
'西区饭堂没电梯',
'没有不会湿的',
'回南天夏天冬天',
'背心短裤拖鞋',
'上海',
'螺旋',
'大母蟑螂',
'海洋性气候',
'晚上内裤漫天',
'6.2米',
'东九',
'7',
'D4',
'无人机',
'过程装备与控制工程（轻工机械与塑料模具）',
'分手亭',
'容量和印度的摩托车一样',
'7.28',
'2015',
'直纹面',
'自动化',
'邵逸夫',
'宝洁公司CEO 雷富礼',
'4',
'听死在报告厅',
'来回游一下午',
'修够30个志愿时可以直接毕业',
'必须满分',
'华工的学霸宝宝们要满绩才能毕业',
'华工男生会自制救生圈',
'爱呆多久呆多久',
'社会科学',
'男生要加强锻炼才能抱得起女朋友',
'听“世纪木棉”讲座',
'反正不是选我',
'毕业当年体测成绩60分以上',
'有游泳证',
'环线二',
'大学城南',
'六号线→三号线→八号线→四号线',
'微信支付',
'番203',
'三轮车',
'火车东站',
'12000s',
'滴滴打车',
'383路',
'五环',
'华工附中',
'13',
'机械与汽车工程学院',
'7:30',
'c8',
'欧巴',
'7:30',
'去比华工好吃的食堂蹭饭',
'校记者团',
'朱瑾花',
'死猪不怕开水烫，越到考试我越浪',
'妹子是啥？能给我打辅助吗',
'全天无休',
'光音派对',
'潇艺楼',
'百步梯学生创新中心',
'空降进去',
'楼管心情不好的时候还晚归的',
'二饭处',
'图书馆',
'15'
];


/*南校题库 共136题*/

var question_s = ['华工南校行政楼在哪里？',
'华工IBM实验中心在哪里？',
'精通餐厅一般晚上几点关门？',
'15级国防生本学期晚上操练在周几？',
'华工南校配眼镜的地方在哪里？',
'世博的麻辣烫几块起烫？',
'世博的二楼，三楼几块开始可以用支付宝付款？',
'游泳课的情形实际是什么？',
'下面哪些广告是南校食堂桌面上的广告？',
'二饭一楼的扣肉中间夹的是什么',
'华工一饭二楼新增的窗口是什么窗口？',
'四五月，在华工听取蛙声一片在哪最有感触？',
'在华工南校区的夜晚，最热闹的地方是？',
'在南校图书馆，那一层楼的网速最好？',
'传说中华工将会在哪新增一个校区？',
'华工邮局的邮递员小哥会在每天几点开信箱把信件取走？',
'华工南校体育馆内有什么球场？',
'华工在哪个时段会对视频进行限速',
'以下哪栋教学楼有电梯',
'薯饼是哪个饭堂的菜式？',
'曾经爆过屎管的宿舍是',
'华工什么人最多',
'华工男女比例最大的学院',
'华工的全称',
'你在华工被多少只蚊子亲吻过',
'番201的除大学城体育中心的另一个起发站是',
'一个外省和两个广东人在一起什么时候最尴尬',
'交通最便利的南校宿舍是',
'华工原名',
'华工占地面积',
'华工创建时间',
'华工有多少个学院',
'叫了外卖送到c1保安亭经常会被放在c1楼下的哪里',
'教学区湖面上的桥连接哪两栋楼',
'如果你想去华工校园里的泳池游泳，最关键的是什么',
'华工南校区哪个学院人数最多？',
'南校有几个打印店？',
'南校游泳馆有几个游泳池？',
'大学城有几所高校？',
'华工南校SB超市卖得最多的摊位？',
'华工南校图书馆自然科学类书库在几楼？',
'华工图书馆如何进入？',
'进入C2的隐藏方法',
'世博超市1号店卖',
'网费包年多少钱',
'教学区有几个篮球场？',
'哪个教学楼经常会有展览一类的活动哇？',
'下列哪个学院不是在南校哒',
'大学城离华工最近的是哪所学校',
'有一个能查询校巴位置的公众号是哪只？',
'哪个学院有形体教室？',
'只在南校区传授的课程',
'华工第一个MOOC试验课程',
'南校区可定制蛋糕地点',
'华工的mooc平台',
'南校区有几栋专业建筑',
'在南校，你可以选择的健身方式不可以是',
'去外校泡妹子，哪个学校不是一个好选择',
'内环的出口的数量',
'什么地方没有免费饮用水提供',
'离学校最近的药店在',
'一饭关门时间',
'有地下停单车场的宿舍楼是',
'某月某天半夜狂风暴起，华工发生了什么？',
'华工内销售的华农酸奶包装没有什么颜色？',
'广州大学城第二冷站在哪两个学校中间？',
'C13宿舍楼在华工南校区的哪一个方位？',
'华工大学城校区的艺术学院楼在哪个方位？',
'华工大学城校区B8教学楼在哪个方位？',
'大学城校区宿舍晚上几点会听见阿姨的口哨声？',
'椰汁包在南校哪里有卖？',
'南校这边热水表不用时把卡放在上面多少分钟后会被锁？',
'南校热水表被同一个人锁上几次就得叫楼下阿姨拿解锁卡',
'以下哪个学院大学四年都在大学城校区？',
'不是穆斯林可以去一饭三楼的清真食堂吗？',
'华工图书馆的WIFI密码是多少？',
'华工大学城校区男女比例最接近于？',
'华工校花是？',
'2号线与8号线在哪个站台相交 ',
'大学城雅乐轩酒店和情缘酒店哪一个住一晚均价比较贵',
'华南理工大学招不招预科生?',
'以下哪个不是华南不给毕业大学的毕业条件是',
'在华工大学城校区，你不可以怎么浪？',
'华工大学城校区消失了的饭堂是',
'华工大学城校区在哪里交电费',
'没交电费宿舍停电了怎么办？',
'一卡通补办在哪里？',
'在华工，你周末不可能干什么',
'从南校到北校，最便捷的方式是',
'大学城最好吃的食堂是？',
'以下天气状况没有在华工发生过的是',
'广告学属于哪个学院的专业？',
'二饭唯一的一家快递是哪一家？',
'教学楼的开水间分布在哪些楼层？',
'搭乘什么公交车可以直达五山校区？',
'穗石没有下列哪家餐厅？',
'A5教学楼旁边的亭子被我们亲切地称为什么亭？',
'一饭三楼有什么热销菜式，深受学生喜爱？',
'学术大讲堂一共可以容纳多少人？',
'这个学期华工正式放暑假的日期是？',
'A1到A4的架空层里，哪一层有巨型垫子可以让同学们进行跆拳道练习？',
'C7宿舍楼里有什么可以提供运动的活动室？',
'华工现在有多少个校区？',
'下列哪个不是华工七大校级组织之一？',
'南校区的穗石村打印店打印每张多少钱？',
'在穗石村可以吃到绵绵冰吗？',
'南校区的广播台是属于',
'为了考试不挂科，正确的方法是',
'华工自动售卖机里没有什么？',
'“碎石深处是美国”的店家是',
'C3最底层的办公室不包含',
'华工南校区的升旗仪式在哪里举行？',
'华工南校区维修部的电话是多少',
'华工留学生住在哪一楼？',
'C1楼下的商店不包括？',
'在华工，看到心仪的妹子怎么办',
'华工南小区C10楼下的理发店叫什么名字？',
'华工南校区生活区宿舍空调晚上什么时候开放？',
'信息管理与信息系统专业在华工属于那个学院 ',
'华工南校男女混宿的宿舍是？',
'华工医学院专业创立的时间是？',
'广州塔属于哪一种二次曲面?',
'华南理工大学校长王迎军来自哪个学院？',
'以下哪一个活动不是百步梯举办的？',
'以下哪一个是华工南校区楼的名称？',
'华工教学区篮球筐上的广告是什么？',
'如何进入A5楼？',
'穗石里有多少家漾漾好贡茶？',
'哪些人不被允许进入宿舍楼？',
'华工图书馆有几层楼？',
'宿舍楼里的电视房的开放时间是',
'世博里没有哪种食物 ',
'生活区操场几点变得黑漆漆',
'华工的正门在哪里',
'晚上的华工校园哪里最虐狗 ',
'贝岗有几家KTV ',
'天桥下的马路是哪一环'
];

var a_s = ['a1',
'图书馆1楼',
'九点半',
'周一',
'图书馆',
'6块5',
'5块',
'很多穿比基尼的美女和有胸肌腹肌的帅锅',
'杜蕾斯',
'土豆',
'麻辣烫',
'A4',
'生活区运动场',
'2',
'珠海',
'9:00以后',
'足球场',
'12:00-14:00',
'a1',
'二饭一楼',
'C1',
'帅哥',
'机汽',
'华南理工大学',
'几只而已',
'大学城穗石村总站',
'谈起广州美食时',
'C5',
'华工',
'634万平方米',
'1949年',
'25个',
'保安亭里的大叔那里',
'A2和B12',
'有钱',
'化学学院',
'1',
'1',
'6',
'粥',
'1',
'用绿卡',
'爬洞',
'包子',
'230',
'11',
'A4',
'经济与贸易学院',
'华农',
'百步梯波板糖',
'新传',
'高数',
'高数',
'一饭',
'www.scut.xuetangx.com',
'8',
'到中心湖游泳',
'广外',
'1',
'教学楼',
'世博',
'九点',
'C1',
'体育馆顶被卷走了',
'白色',
'华工和广工',
'东',
'东',
'东',
'22:00',
'一饭一楼',
'2分钟',
'3次',
'公共管理学院',
'可以',
'8888 ',
'1：1  ',
'滑稽',
'客村',
'雅乐轩酒店',
'招',
'有对象',
'去中心湖边看傻狗',
'一饭',
'大学城一卡通办理处',
'在宿舍大喊：给我电，我要电',
'D1',
'参加各种社团活动',
'坐专线2',
'华工一饭',
'半夜狂风暴雨',
'设计学院',
'中通',
'单层',
'番202',
'一点兔',
'初恋亭',
'酸菜鱼',
'500人以下',
'6.18',
'A1',
'瑜伽房',
'1',
'校学生会',
'一角',
'可以',
'百步梯',
'每天默念：宝宝我不会挂科',
'方便面',
'东北人家',
'社联办公室',
'生活区体育场',
'020-39381362',
'c1',
'理发店',
'别逗了，这种可能不存在',
'和田',
'傍晚六点',
'经贸',
'C1',
'2012',
'单叶双曲面',
'数学',
'电影交流会',
'麟鸿楼',
'Nike',
'从A5一楼门口进入',
'1',
'长得太帅的',
'4',
'夜深人静的时刻',
'生煎',
'9点半',
'教学楼B1、B2处 ',
'C11楼下 ',
'1',
'内环'
];

var b_s = ['a2',
'图书馆3楼',
'十点',
'周三',
'C1',
'7块5',
'10块',
'不下水不脱浴巾，清一色浴帽尼姑头加黑腿毛屌丝',
'拔粪宝',
'红薯',
'铁板扒类 ',
'图书馆附近',
'A4附近',
'3',
'深圳',
'12:00以后',
'排球场',
'20:00-24:00',
'a2',
'二饭二楼',
'C12',
'美女',
'自动化',
'华南工学院',
'从没见过蚊子',
'中心南大街',
'谈起恋爱问题时',
'C12',
'华南理工大学哪有什么原名',
'162万平方米',
'1964年',
'26个',
'直接被放在地上',
'A2和B10',
'有泳衣',
'新闻与传播学院',
'2',
'2',
'8',
'牛肉河粉',
'2',
'用蓝卡',
'翻墙',
'茶叶蛋 ',
'240',
'12',
'A5',
'法学院',
'华师',
'华工我查查',
'法学院',
'vb',
'大学化学',
'世博',
'www.scut.mooc.cn',
'9',
'跑内环',
'星海音乐学院',
'2',
'宿舍',
'饭堂',
'十点',
'C5',
'爆水管',
'绿色',
'华工和广药',
'南',
'南',
'南',
'22:30',
'二饭一楼',
'3分钟',
'4次',
'理学院 ',
'不可以',
'6666',
'2：1',
'木棉',
'万胜围',
'情缘酒店 ',
'不招',
'15张讲座票',
'去贝岗吃好吃的',
'二饭',
'一饭堂门口',
'跟宿管阿姨卖萌',
'D2',
'参加各种选修课',
'坐地铁',
'华工二饭',
'起床雾气弥漫',
'马克思主义学院',
'圆通',
'双层',
'专线一',
'精通餐厅',
'热恋亭',
'辣椒炒五仁月饼',
'700 - 800人',
'7.18',
'A2',
'乒乓球室',
'2',
'机器人协会',
'五角',
'不可以',
'校记者团',
'考前制定计划，认真复习',
'矿泉水',
'食为先',
'百步梯办公室',
'教学区体育场',
'020-33981362',
'c2',
'干洗店',
'我是基佬，我是基佬，我是基佬',
'禾田',
'傍晚七点',
'数学',
'C3',
'2013',
'双叶双曲面',
'材料',
'寻找新生dai',
'唯美楼',
'乔丹运动',
'从A4通道进入',
'2',
'长得太美的',
'5',
'清晨6点时分',
'炒饭',
'10点',
'图书馆到天桥路上',
'羽毛球场',
'2',
'中环'
];

var c_s = ['b1',
'图书馆5楼',
'十一点',
'周五',
'b11',
'6块',
'15块',
'宝宝会游泳，不需要上游泳课',
'猪兼强',
'山药',
'小炒类',
'B7附近',
'饭堂',
'4',
'惠州',
'17：00以后',
'铅球场',
'两个时段都对',
'a3',
'一饭一楼',
'C11',
'广东人',
'软件',
'华东理工大学',
'我懂了什么叫无数',
'内环东路',
'谈起宿舍生活时',
'C1',
'华南联合大学理工学院',
'960万平方米',
'1978年',
'27个',
'C1楼下理发店前的桌子上',
'A1和B12',
'有健康证',
'软件学院',
'3',
'3',
'10',
'手抓饼',
'3',
'靠颜值',
'地下室',
'馒头 ',
'250',
'13',
'B9',
'计算机学院',
'广工',
'华工校巴通',
'经贸',
'制图',
'计算机基础',
'三饭',
'www.scut.gaoxiaobang.com',
'10',
'骑外环',
'广工',
'3',
'饭堂',
'穗石村',
'十一点',
'C7',
'华工最高的树被吹倒了',
'红色',
'华工和广外',
'西',
'西',
'西',
'23:00',
'穗石',
'4分钟',
'5次',
'环境与能源学院',
'我还没有去过一饭',
'2333',
'1：2 ',
'王校长',
'昌岗',
'从不住低于五星级的酒店',
'预科生是什么？',
'30个志愿时 ',
'去穗石看电影',
'三饭 ',
'水电充值中心',
'去隔壁宿舍蹭电',
'D3',
'和别的班级别的学院联谊',
'爬过去',
'华工一饭和华工二饭',
'下午黄沙漫天',
'艺术学院',
'国通',
'每层都有',
'专线二',
'洋葱头',
'吵架亭',
'瓜炒土豆',
'900 - 1000人',
'8.18',
'A3',
'台球室',
'3',
'妇委',
'一块',
'不清楚',
'学生会',
'有舍友给我打助攻，我不会挂科',
'咖啡',
'洋葱头',
'学生会办公室',
'图书馆前广场',
'020-39382119',
'c15',
'打印店',
'妹纸，给个微信呗',
'何田',
'反正有课他就不开',
'工管',
'C7',
'2014',
'马鞍面',
'新传',
'电影对对碰',
'未雨楼',
'阿迪王',
'从天空降进入',
'3',
'老司机',
'6',
'新闻联播播放时间',
'麻辣烫',
'10点半',
'校医院处',
'生活区操场 ',
'3',
'外环'
];

var d_s = ['b2',
'图书馆7楼',
'十一点半',
'以上全部',
'世博',
'7块',
'20块',
'不知道',
'肯德基',
'芋头',
'大锅菜',
'天桥下',
'中心湖',
'5',
'韶关',
'20:00以后',
'羽毛球场',
'两个时段都不对',
'a4',
'一饭二楼',
'C8',
'东北人',
'土交',
'华南毕不了业停水停电爆屎渠断网一对情侣三对基幼儿园',
'几十只喽',
'省中医院大学城医院',
'两个人突然用粤语聊天时',
'C6',
'华南工学院',
'294万平方米',
'1952年',
'28个',
'小哥会一直等我的呀',
'A1和B10',
'会游泳',
'经济与贸易学院',
'4',
'4',
'12',
'麻辣烫',
'4',
'蓝卡绿卡都放行',
'一切皆有可能',
'以上均有',
'260',
'14',
'B10',
'电力学院',
'中大',
'专线二特讯',
'计算机',
'计算机基础',
'大学物理',
'不知道',
'www.scut.edu.cn/jw2003',
'12',
'去大学城的健身房',
'隔壁某重点高校',
'4',
'图书馆',
'贝岗',
'24小时营业，越夜越精彩',
'C10',
'停课',
'我只喝过华工酸奶',
'华工和广中医',
'北',
'北',
'北',
'23:30',
'三饭',
'5分钟',
'幸运到从没被锁过',
'外国语学院',
'清真食堂有什么吃的？',
'0000',
'3：1',
'华工原来还有校花啊',
'珠江新城',
'好孩子，不知道',
'我是隔壁名牌大学的，不知道',
'有游泳证',
'去比华工好吃的食堂蹭饭',
'SB',
'宿舍阿姨处',
'把电卡插到电表里还有10度电',
'D4',
'你一定是在逗我，在华工怎么可能有不可能的事！',
'那么远不去了，还是在寝室睡觉吧',
'憋说话，你告诉我华工哪个食堂不好吃？',
'晚上狂风大作',
'新闻与传播学院',
'申通',
'什么？教学楼有开水间？',
'专线三',
'张姐烤肉拌饭',
'分手亭',
'原只炸田蛙',
'没有大讲堂容不下的人数！',
'不放暑假了，好好学习',
'A4',
'什么都没有',
'4',
'校记者团',
'一块五',
'不知道',
'学工办',
'死猪不怕开水烫，越到考试我越浪',
'馍片',
'回头客',
'社协办公室',
'什么是升旗仪式？',
'020-33982119',
'c8',
'水果店',
'什么？你说啥？等下啊，诶快点中路团！',
'和日',
'不知道，我都在图书馆好好学习',
'土交',
'C8',
'2015',
'直纹面',
'马克思',
'光迹涂鸦',
'A4',
'卓越教育',
'爬进去',
'真的不都是山寨的吗？',
'楼管心情不好的时候进去的',
'7',
'中午吃饭时间',
'煎饺',
'咱们的操场通亮到天明',
'二饭处',
'精通餐厅',
'4',
'五环'
];
