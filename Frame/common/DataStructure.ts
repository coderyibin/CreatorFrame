/**
 * 全局的一些数据结构
 */

 //商品的数据结构
 interface inter_Product {
    sName ?: string//商品名称
    nPrice ?: number//商品基础价格
    nMax ?: number//商品最大的波动价格比例
    nMin ?: number//商品最小的波动价格比例
    sNamePath ?: string//商品图片路径
    nLastPrice ?: number//商品上次价格
 }

 //房价数据结构
 interface inter_House {
    id ?: number        //房子id
    sDetails ?: string  //房子描述
    sName ?: string     //房子名称
    sPrice ?: number    //房子价格
    sPath ?: number    //房子图片路径
 }

 //英雄的数据结构
 interface inter_Hero {
    id ?: number;//英雄表id
    Uid ?: number;//玩家英雄id
    Occupation ?: number //职业
    OccupationName ?: string //职业名称
    Name ?: string//名称
    Icon ?: string//头像
    Level ?: number//等级
    Hp ?: number//血量生命
    UpHp ?: number//升级增加血量生命值
    Strength ?: number//力量
    UpStrength ?: number//升级增加力量
    Intuition ?: number//直觉-影响攻击速度
    UpIntuition ?: number//升级增加直觉-影响攻击速度
    Intelligence ?: number//智力-影响法术攻击
    UpIntelligence ?: number//升级增加智力-影响法术攻击
    Perception ?: number//感知-影响法术防御
    UpPerception ?: number//升级增加感知-影响法术防御
    Attack ?: number//攻击力
    FightAttack ?: number//战斗时候的攻击力
    Defenses ?: number//防御力
    FightDefenses ?: number//战斗时候的防御力
    Resistance ?: number//抵抗力
    FightResistance ?: number//战斗时候的抵抗力
    Meditation ?: number//冥想-影响生命恢复
    HeartRate ?: number//会心率-暴击
    HeatPlus ?: number//会心加成-暴击效果
    Hit ?: number//命中率
    Sleep ?: number//速度-每次恢复的行动值
    ActionValue ?: number//速度-行动值
    Hurt ?: number//伤害浮动值
    Luck ?: number//幸运值
    Exp ?: number//经验
    NextLevel ?: number//升级所需经验
    Skill ?: any//技能
    ActiveSkill ?: any//激活的技能
    FightSkill ?: any//战斗中的技能
    Equipment ?: any//装备
    Fight ?: boolean//英雄是否上阵
    Status ?: any//英雄战斗附带效果
    StatusTime ?: number//英雄附带效果的时间回合
    Goods ?: number//英雄品质
 }
 
 //装备的数据结构
 interface inter_Equipment {
    // index ?: number;//装备表id
    id ?: number;//装备表id
    Uid ?: number;//装备Uid
    Name ?: number;//装备名称
    Property ?: number;//装备加成的主属性
    MainPercent ?: number;//属性加成的值
    Level ?: number;//穿戴最低等级
    AddProperty ?: any;//装备附加属性
    AddPropertyPercent ?: any;//附加属性的数值
    Buy ?: number;//购买价格
    Icon ?: string;//装备Icon
    Desc ?: string;//装备描述
    EquipmentPos ?: number;//装备描述
    Occupation ?: number;//装备适用职业
    OccupationName ?: string;//装备适用职业名称
    SellOut ?: number;//装备i卖出价格
    StandardMoney ?: number;//装备实际价格
    Already ?: boolean;//是否已经装备
    Goods ?: string;//装备品阶
 }

 //技能的数据结构
 interface inter_Skill {
     id ?: string;//id
     Name ?: string;//名称
     Weight ?: number;//权重
     ActiveLevel ?: number;//学习的等级
     Range ?: number;//技能释放范围 
     AbsValue ?: number;//技能加权绝对值
     Percent ?: number;//技能加权百分比
     SkillTarget ?: number;//技能释放对象
     Cool ?: number;//冷却时间
     AddStatus ?: any;//附加效果
     AddValue ?: any;//附加数值
     Round ?: number;//附加持续
     Icon ?: string;//技能图标
     Dan ?: number;//攻击段数
     UpLevelGold ?: number;//升级所需要金钱
     Desc ?: string;//技能描述
 }

//  //职业的数据结构
//  interface inter_Occupation {
//     All : number,//所有职业
//     JianKe : 1,//剑客
//     Tidu : 2,//提督、火枪手
//     ZhanBuShi : 3,//占卜士
//     ChuanJiaoShi : 4,//传教士
//  }

 //游戏的一些初始配置
 interface inter_Init {
    Gold ?: any;//金币
    Diamond ?: any;//钻石
    Player ?: any;//玩家第一只英雄id
    Level ?: any;//玩家初始等级
    ActionValue ?: any;//战斗行动值
    BagCount ?: number;//战斗行动值
    EquipmentType ?: number;//装备类型
 }

 //资源结构
 interface inter_Res {
    Common ?: Array<string>//公共
    StartGame ?: Array<string>//开始游戏
 }

//游戏玩家数据结构
 interface inter_User {
     Account ?: string;//账号
     Password ?: string;//密码
     Gold ?: number;//金币
     Diamond ?: number;//钻石
     Exp ?: number;//经验
     Name ?: string;//名称
     ShipId ?: number;//玩家上阵船只id
}

//游戏玩家船只数据结构
interface inter_Ship {
    id ?: number;//船只id 
}

//玩家战斗阵容单体数据--类似于卡牌数据
interface inter_Fight {
    nId ?: number           //id
    sName ?: string         //名称
    nLevel ?: number        //等级
    nProduct ?: number      //等阶
    nAtt ?: number          //攻击力
    nAttBonus ?: number     //攻击加成
    nDef ?: number          //防御力
    nDefThrough ?: number   //防御穿透
}

//游戏的配置
 interface inter_Config {
     mode ?: number;//游戏模式
     Speed ?: number;//游戏速度
     challenge ?: boolean//是否挑战成功
     PanelCount ?: number//方块数量--经典模式
     ProductList ?: number//商品列表数量限制
     PlayerMoney ?: number//玩家初始金币
     PlayerHealth ?: number//玩家初始健康
     PlayerReputation ?: number//玩家初始名声
     GameTime ?: number//游戏时间
     RepositoryPrice ?: number//背包空间单价
     BaseHealth ?: number//健康基数
     MinHealth ?: number//最低健康
     s_end ?: string//超时描述
     d_end ?: string//健康结束游戏
     sBuyHouse ?: string//买到房子
 }

 //剧情事件
 interface inter_Event {
    sDetails ?: string//剧情详情
    nPrice ?: number//产品价格
    nProductID ?: number//产品id
    nMoney ?: number//现金事件
    nDeposit ?: number//存款事件
    nHuose ?: number//房价事件
    nHealth ?: number//健康事件
 }