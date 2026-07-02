// 羅馬帝國歷史時間線資料
// 年份均為近似學術估計，負數為西元前

const RM_ROW_LABELS = ['主要時期', '王朝／皇帝'];

const RM_GROUPS = [

  // ══ Row 0 主要時期（連續）══════════════════════════════════════════
  // 羅馬建立到滅亡（-753 ~ 1453）：全色顯示
  { name:'羅馬王政',        en:'Roman Kingdom (Regal Period)',           start: -753, end: -509, color:'#7c2d12', row:0, wikiEn:'Roman_Kingdom' },
  { name:'羅馬共和國',      en:'Roman Republic (SPQR)',                  start: -509, end:  -27, color:'#991b1b', row:0, wikiEn:'Roman_Republic' },
  { name:'元首制帝國',      en:'Principate – Early Roman Empire',        start:  -27, end:  284, color:'#dc2626', row:0, wikiEn:'Roman_Empire' },
  { name:'晚期帝國',        en:'Dominate – Late Roman Empire',           start:  284, end:  476, color:'#b91c1c', row:0, wikiEn:'Dominate' },
  // 東羅馬是西羅馬的直接延續，自稱羅馬帝國
  { name:'東羅馬/拜占庭',   en:'Eastern Roman / Byzantine Empire',       start:  476, end: 1453, color:'#7c3aed', row:0, wikiEn:'Byzantine_Empire' },
  // 羅馬滅亡後的後繼統治（淡化）
  { name:'奧斯曼征服',      en:'Ottoman Conquest (successor state)',     start: 1453, end: 1923, color:'#0f766e', row:0, dim:true, wikiEn:'Ottoman_Empire' },
  { name:'現代（土耳其/希臘/義大利）', en:'Modern Turkey / Greece / Italy', start: 1923, end: 2026, color:'#374151', row:0, dim:true },

  // ══ Row 1 重要王朝與皇帝════════════════════════════════════════════
  // 共和末期
  { name:'蘇拉獨裁',        en:'Sulla\'s Dictatorship',                  start:  -82, end:  -78, color:'#dc2626', row:1, dim:true },
  { name:'前三頭同盟',      en:'First Triumvirate (Caesar·Pompey·Crassus)', start:-60, end: -53, color:'#ef4444', row:1, dim:true },
  { name:'凱撒獨裁',        en:'Julius Caesar – Dictator perpetuo',      start:  -49, end:  -44, color:'#b91c1c', row:1 },
  { name:'後三頭同盟',      en:'Second Triumvirate (Octavian·Antony·Lepidus)', start:-43, end:-27, color:'#ef4444', row:1, dim:true },
  // 帝國黃金諸王朝
  { name:'朱里亞-克勞狄王朝', en:'Julio-Claudian Dynasty (Augustus–Nero)', start:-27, end:  68, color:'#f97316', row:1 },
  { name:'弗拉維王朝',      en:'Flavian Dynasty (Vespasian–Domitian)',   start:   69, end:  96, color:'#fb923c', row:1 },
  { name:'五賢帝時代',      en:'Five Good Emperors – Nerva-Antonine (Pax Romana peak)', start:96, end:180, color:'#fbbf24', row:1 },
  // 帝國中後期
  { name:'塞維魯王朝',      en:'Severan Dynasty',                        start:  193, end:  235, color:'#fde68a', row:1, dim:true },
  { name:'三世紀危機',      en:'Crisis of the Third Century',            start:  235, end:  284, color:'#6b7280', row:1, dim:true },
  { name:'戴克里先/四帝共治', en:'Tetrarchy (Diocletian)',               start:  284, end:  306, color:'#8b5cf6', row:1, dim:true },
  { name:'君士坦丁王朝',    en:'Constantinian Dynasty',                  start:  306, end:  363, color:'#3b82f6', row:1 },
  { name:'狄奧多西王朝',    en:'Theodosian Dynasty',                     start:  379, end:  457, color:'#60a5fa', row:1, dim:true },
  // 拜占庭重要時期
  { name:'查士丁尼一世',    en:'Justinian I – Byzantine golden age',     start:  527, end:  565, color:'#a78bfa', row:1 },
  { name:'馬其頓王朝',      en:'Macedonian Dynasty (Byzantine peak)',    start:  867, end: 1056, color:'#8b5cf6', row:1 },
  { name:'科穆寧王朝',      en:'Komnenian Dynasty',                      start: 1081, end: 1185, color:'#7c3aed', row:1, dim:true },
  { name:'巴列奧略王朝',    en:'Palaiologos Dynasty (last dynasty)',     start: 1261, end: 1453, color:'#6d28d9', row:1, dim:true },
];

const RM_EVENTS = [
  // ── 羅馬王政 ───────────────────────────────────────────────────────
  { year:  -753, text: '羅慕路斯（Romulus）建立羅馬城（傳說），成為首任國王，羅馬王政時代開始' },
  { year:  -509, text: '羅馬人驅逐暴君塔克文二世（Tarquin），建立羅馬共和國，設執政官雙頭制防止獨裁' },

  // ── 羅馬共和國 ─────────────────────────────────────────────────────
  { year:  -390, text: '高盧人（Gauls）洗劫羅馬，史稱「羅馬之難」；據說唯有卡皮托利姆山頭鵝鳴警報救了城市' },
  { year:  -264, text: '第一次布匿戰爭開始（-264至-241），羅馬對抗迦太基爭奪西西里，羅馬建立海軍' },
  { year:  -218, text: '漢尼拔（Hannibal）率大象軍團越越阿爾卑斯山入侵義大利，開始第二次布匿戰爭' },
  { year:  -216, text: '坎尼戰役（Battle of Cannae）：漢尼拔以包圍戰殲滅羅馬主力，史上最經典殲滅戰之一' },
  { year:  -202, text: '扎馬戰役：大西庇阿（Scipio Africanus）擊敗漢尼拔，第二次布匿戰爭結束' },
  { year:  -146, text: '羅馬摧毀迦太基與科林斯，征服北非與希臘，成為地中海霸主' },
  { year:  -133, text: '提貝里烏斯·格拉古（Tiberius Gracchus）推行土地改革，遭元老院派系殺害，共和國政治動盪開始' },
  { year:   -73, text: '斯巴達克斯（Spartacus）率奴隸大起義，兩年間縱橫義大利，最終被克拉蘇鎮壓' },
  { year:   -60, text: '凱撒、龐培、克拉蘇組成前三頭同盟，私分共和國政治權力' },
  { year:   -58, text: '凱撒征服高盧（今法國）歷時八年，將羅馬版圖擴至萊茵河' },
  { year:   -49, text: '凱撒率軍渡過盧比孔河（Rubicon），宣布「骰子已投」，內戰爆發' },
  { year:   -44, text: '凱撒在元老院被布魯圖斯等人刺殺（3月15日），終結獨裁但引發更大內戰' },
  { year:   -31, text: '亞克興海戰：屋大維艦隊大敗安東尼與克麗奧帕特拉，成為羅馬世界唯一主宰' },

  // ── 帝國元首制（奧古斯都—五賢帝：Pax Romana）─────────────────────
  { year:   -27, text: '屋大維被元老院授予「奧古斯都（Augustus）」稱號，羅馬帝國正式開始，Pax Romana（羅馬和平）開端' },
  { year:     9, text: '條頓堡森林戰役（Battle of Teutoburg Forest）：日耳曼人伏擊全殲羅馬三個軍團，奧古斯都大叫「瓦魯斯，還我的軍團！」' },
  { year:    64, text: '羅馬大火：尼祿在位期間半個羅馬被焚，基督徒遭嫁禍成為第一次官方迫害' },
  { year:    70, text: '提圖斯（Titus）攻陷並摧毀耶路撒冷聖殿，猶太人大流散（Diaspora）開始' },
  { year:    79, text: '維蘇威火山爆發，龐貝（Pompeii）與赫庫蘭尼姆城在一日內被火山灰掩埋' },
  { year:    80, text: '羅馬競技場（Colosseum）落成，可容納五萬觀眾觀看角鬥士格鬥' },
  { year:   117, text: '圖拉真（Trajan）去世——羅馬帝國版圖達到有史以來最大，西至不列顛、東至美索不達米亞' },
  { year:   122, text: '哈德良（Hadrian）在英格蘭北部建造哈德良長城，抵禦皮克特人' },
  { year:   165, text: '安東尼瘟疫（Antonine Plague）爆發，數百萬人死亡，帝國盛世開始蒙上陰影' },
  { year:   212, text: '卡拉卡拉詔令（Constitutio Antoniniana）：帝國內所有自由民一律授予羅馬公民資格' },

  // ── 晚期帝國 ───────────────────────────────────────────────────────
  { year:   235, text: '三世紀危機開始：五十年內換了約五十位皇帝，軍事政變不斷，帝國瀕臨崩潰' },
  { year:   284, text: '戴克里先（Diocletian）即位，建立四帝共治制（Tetrarchy），將帝國分東西兩部分治理' },
  { year:   303, text: '戴克里先發動大迫害（Great Persecution），基督徒遭最嚴酷的帝國迫害' },
  { year:   313, text: '米蘭敕令（Edict of Milan）：君士坦丁一世宣布宗教寬容，基督教獲合法地位' },
  { year:   325, text: '尼西亞公會議（Council of Nicaea）：確立基督教三位一體教義，定《尼西亞信經》' },
  { year:   330, text: '君士坦丁大帝（Constantine I）遷都至拜占庭，改名君士坦丁堡，開啟東羅馬中心' },
  { year:   380, text: '狄奧多西一世頒令基督教為唯一合法國教，古羅馬多神信仰被正式廢止' },
  { year:   395, text: '狄奧多西一世去世，帝國正式分裂為西羅馬（米蘭/拉文納）與東羅馬（君士坦丁堡），此後永久分治' },
  { year:   410, text: '西哥特王阿拉里克（Alaric）率軍洗劫羅馬城，「永恆之城」八百年來首遭外族劫掠，震驚古代世界' },
  { year:   455, text: '汪達爾人（Vandals）洗劫羅馬，「vandalism（故意破壞）」一詞由此而來' },
  { year:   476, text: '西羅馬末代皇帝羅慕路斯·奧古斯都盧斯（Romulus Augustulus）被日耳曼首領奧多亞克廢黜，西羅馬帝國滅亡' },

  // ── 東羅馬（拜占庭）帝國 ───────────────────────────────────────────
  { year:   527, text: '查士丁尼一世（Justinian I）即位，頒布《查士丁尼法典》，重新征服北非與義大利' },
  { year:   532, text: '尼卡暴動（Nika Riots）：君士坦丁堡半城被燒，查士丁尼幾乎逃亡，皇后狄奧多拉說服他留下' },
  { year:   537, text: '聖索菲亞大教堂（Hagia Sophia）落成，巨型穹頂為當時建築奇蹟，查士丁尼感嘆「所羅門，我已超越你！」' },
  { year:  1054, text: '基督教大分裂（East–West Schism）：羅馬天主教與君士坦丁堡東正教正式決裂' },
  { year:  1071, text: '曼齊刻爾特戰役（Battle of Manzikert）：拜占庭軍大敗於塞爾柱突厥，安納托利亞逐漸失守' },
  { year:  1204, text: '第四次十字軍轉向攻陷並洗劫君士坦丁堡，建立拉丁帝國，拜占庭精華遭劫' },
  { year:  1261, text: '米海爾八世巴列奧略（Michael VIII Palaiologos）光復君士坦丁堡，拜占庭帝國復辟' },
  { year:  1453, text: '奧斯曼蘇丹穆罕默德二世（Mehmed II）以大炮攻陷君士坦丁堡，末代皇帝君士坦丁十一世陣亡，東羅馬帝國覆滅，中世紀結束' },

  // ── 後繼與現代 ─────────────────────────────────────────────────────
  { year:  1870, text: '義大利統一完成，羅馬成為義大利王國首都，千年後重新成為統一國家的中心' },
  { year:  1929, text: '拉特蘭條約（Lateran Treaty）：墨索里尼與梵蒂岡簽約，確立教皇國領土，解決「羅馬問題」' },
];
