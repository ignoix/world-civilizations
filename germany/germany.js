// 德國歷史時間線資料
// 年份均為近似學術估計，負數為西元前

const DE_ROW_LABELS = ['主要時期', '歷代君主'];

const DE_GROUPS = [

  // ══ Row 0 主要時期（連續）══════════════════════════════════════════
  { name:'日耳曼部落時期',  en:'Germanic Tribes (pre-state)',            start: -100, end:  843, color:'#7c2d12', row:0, dim:true, wikiEn:'Germanic_peoples' },
  { name:'東法蘭克王國',    en:'East Francia',                           start:  843, end:  962, color:'#78350f', row:0, wikiEn:'East_Francia' },
  { name:'神聖羅馬帝國',    en:'Holy Roman Empire',                      start:  962, end: 1806, color:'#991b1b', row:0, wikiEn:'Holy_Roman_Empire' },
  { name:'德意志邦聯',      en:'German Confederation',                   start: 1815, end: 1866, color:'#b45309', row:0, dim:true, wikiEn:'German_Confederation' },
  { name:'德意志帝國',      en:'German Empire (Kaiserreich)',            start: 1871, end: 1918, color:'#dc2626', row:0, wikiEn:'German_Empire' },
  { name:'威瑪共和國',      en:'Weimar Republic',                        start: 1919, end: 1933, color:'#3b82f6', row:0, wikiEn:'Weimar_Republic' },
  { name:'納粹德國（第三帝國）', en:'Nazi Germany (Third Reich)',        start: 1933, end: 1945, color:'#4b5563', row:0, wikiEn:'Nazi_Germany' },
  { name:'東西德分裂',      en:'Divided Germany (East/West)',            start: 1949, end: 1990, color:'#7c3aed', row:0, wikiEn:'German_reunification' },
  { name:'統一德國',        en:'Reunified Germany',                      start: 1990, end: 2026, color:'#eab308', row:0, wikiEn:'Germany' },

  // ══ Row 1 歷代君主（神聖羅馬皇帝／普魯士國王／德意志皇帝）══════════
  // ── 奧托／薩利安王朝（循環色：#a16207,#ca8a04,#d97706）──────────────
  { name:'奧托一世', en:'Otto I "the Great" – founded the Holy Roman Empire',
    start:  962, end:  973, color:'#a16207', row:1, wikiEn:'Otto_I,_Holy_Roman_Emperor' },
  { name:'奧托三世', en:'Otto III – "Renovatio imperii Romanorum" vision',
    start:  996, end: 1002, color:'#ca8a04', row:1, dim:true },
  { name:'亨利二世', en:'Henry II – last Ottonian emperor, later canonized',
    start: 1014, end: 1024, color:'#d97706', row:1, dim:true },
  { name:'康拉德二世', en:'Conrad II – founded the Salian dynasty',
    start: 1027, end: 1039, color:'#a16207', row:1, dim:true },
  { name:'亨利三世', en:'Henry III – peak of Salian imperial power',
    start: 1046, end: 1056, color:'#ca8a04', row:1, dim:true },
  { name:'亨利四世', en:'Henry IV – "Walk to Canossa", Investiture Controversy',
    start: 1084, end: 1105, color:'#d97706', row:1, wikiEn:'Henry_IV,_Holy_Roman_Emperor' },
  { name:'亨利五世', en:'Henry V – ended Investiture Controversy (Concordat of Worms)',
    start: 1111, end: 1125, color:'#a16207', row:1, dim:true },

  // ── 霍亨斯陶芬王朝（循環色：#f97316,#fb923c,#fdba74）────────────────
  { name:'腓特烈一世', en:'Frederick I "Barbarossa" – legendary crusader emperor',
    start: 1155, end: 1190, color:'#f97316', row:1, wikiEn:'Frederick_Barbarossa' },
  { name:'亨利六世', en:'Henry VI – conquered Sicily',
    start: 1191, end: 1197, color:'#fb923c', row:1, dim:true },
  { name:'腓特烈二世', en:'Frederick II "Stupor Mundi" – clashed with the Papacy',
    start: 1220, end: 1250, color:'#fdba74', row:1, wikiEn:'Frederick_II,_Holy_Roman_Emperor' },

  // ── 中後期神聖羅馬皇帝（循環色：#fbbf24,#fcd34d,#fde68a）────────────
  { name:'查理四世', en:'Charles IV – issued the Golden Bull of 1356',
    start: 1355, end: 1378, color:'#fbbf24', row:1, dim:true },
  { name:'西吉斯蒙德', en:'Sigismund – Council of Constance, executed Jan Hus',
    start: 1433, end: 1437, color:'#fcd34d', row:1, dim:true },
  { name:'腓特烈三世', en:'Frederick III – founded Habsburg imperial tradition',
    start: 1452, end: 1493, color:'#fde68a', row:1, dim:true },
  { name:'馬克西米連一世', en:'Maximilian I "the Last Knight" – expanded Habsburg power via marriage',
    start: 1508, end: 1519, color:'#fbbf24', row:1 },
  { name:'查理五世', en:'Charles V – empire "on which the sun never set", faced the Reformation',
    start: 1519, end: 1556, color:'#fcd34d', row:1, wikiEn:'Charles_V,_Holy_Roman_Emperor' },
  { name:'斐迪南一世', en:'Ferdinand I – split Habsburg lands, faced Ottoman threat',
    start: 1556, end: 1564, color:'#fde68a', row:1, dim:true },
  { name:'魯道夫二世', en:'Rudolf II – Prague court, patron of science and mysticism',
    start: 1576, end: 1612, color:'#fbbf24', row:1, dim:true },
  { name:'斐迪南二世', en:'Ferdinand II – triggered the Thirty Years\' War',
    start: 1619, end: 1637, color:'#fcd34d', row:1, dim:true },
  { name:'利奧波德一世', en:'Leopold I – long reign, wars vs. Louis XIV and the Ottomans',
    start: 1658, end: 1705, color:'#fde68a', row:1, dim:true },
  { name:'查理六世', en:'Charles VI – Pragmatic Sanction for Maria Theresa\'s succession',
    start: 1711, end: 1740, color:'#fbbf24', row:1, dim:true },
  { name:'法蘭茲一世', en:'Francis I – husband of Maria Theresa',
    start: 1745, end: 1765, color:'#fcd34d', row:1, dim:true },
  { name:'約瑟夫二世', en:'Joseph II – enlightened absolutist reformer',
    start: 1765, end: 1790, color:'#fde68a', row:1 },
  { name:'法蘭茲二世', en:'Francis II – last Holy Roman Emperor, dissolved Empire under Napoleon',
    start: 1792, end: 1806, color:'#fbbf24', row:1, dim:true },

  // ── 普魯士國王（循環色：#3b82f6,#60a5fa,#93c5fd）────────────────────
  { name:'腓特烈一世', en:'Frederick I – first King in Prussia',
    start: 1701, end: 1713, color:'#3b82f6', row:1, dim:true },
  { name:'腓特烈·威廉一世', en:'Frederick William I "Soldier King" – built the Prussian army',
    start: 1713, end: 1740, color:'#60a5fa', row:1, dim:true },
  { name:'腓特烈二世', en:'Frederick II "the Great" – military genius, enlightened despot',
    start: 1740, end: 1786, color:'#93c5fd', row:1, wikiEn:'Frederick_the_Great' },
  { name:'腓特烈·威廉二世', en:'Frederick William II – expanded territory via Poland partitions',
    start: 1786, end: 1797, color:'#3b82f6', row:1, dim:true },
  { name:'腓特烈·威廉三世', en:'Frederick William III – Napoleonic Wars, Congress of Vienna',
    start: 1797, end: 1840, color:'#60a5fa', row:1, dim:true },
  { name:'腓特烈·威廉四世', en:'Frederick William IV – declined the imperial crown in 1848',
    start: 1840, end: 1861, color:'#93c5fd', row:1, dim:true },

  // ── 德意志皇帝（循環色：#dc2626,#ef4444,#f87171）────────────────────
  { name:'威廉一世', en:'Wilhelm I – first German Emperor, unified Germany with Bismarck',
    start: 1871, end: 1888, color:'#dc2626', row:1, wikiEn:'Wilhelm_I,_German_Emperor' },
  { name:'腓特烈三世', en:'Friedrich III – "99 Days Emperor", died of throat cancer',
    start: 1888, end: 1888, color:'#ef4444', row:1, dim:true },
  { name:'威廉二世', en:'Wilhelm II – led Germany into WWI, abdicated ending the monarchy',
    start: 1888, end: 1918, color:'#f87171', row:1, wikiEn:'Wilhelm_II,_German_Emperor' },
];

const DE_EVENTS = [
  // ── 日耳曼部落與法蘭克時期 ─────────────────────────────────────────
  { year:     9, text: '條頓堡森林戰役：日耳曼部落聯軍全殲羅馬三個軍團，阻止羅馬將萊茵河以東納入版圖' },
  { year:   486, text: '法蘭克國王克洛維一世建立法蘭克王國，日耳曼部族逐步統一於法蘭克統治之下' },
  { year:   800, text: '查理曼加冕為「羅馬人的皇帝」，奠定日後神聖羅馬帝國的理念基礎' },
  { year:   843, text: '《凡爾登條約》三分法蘭克帝國，東法蘭克王國成為德意志國家的雛形' },

  // ── 神聖羅馬帝國 ───────────────────────────────────────────────────
  { year:   919, text: '薩克森公爵亨利一世當選東法蘭克國王，奧托王朝開始，德意志王國成形' },
  { year:   962, text: '奧托一世由教皇加冕為皇帝，神聖羅馬帝國正式建立，德意志成為其核心' },
  { year:  1077, text: '卡諾莎之行：亨利四世向教皇格里高利七世懺悔，「主教敘任權之爭」達到高潮' },
  { year:  1152, text: '腓特烈一世「巴巴羅薩」（紅鬍子）即位，霍亨斯陶芬王朝進入極盛時期' },
  { year:  1356, text: '查理四世頒布《黃金詔書》，確立七大選帝侯選舉皇帝的制度' },
  { year:  1438, text: '哈布斯堡家族開始長期壟斷神聖羅馬帝國皇位，直至帝國滅亡' },

  // ── 宗教改革與三十年戰爭 ───────────────────────────────────────────
  { year:  1440, text: '古騰堡在美因茲發明活字印刷術，為日後宗教改革與知識傳播奠定基礎' },
  { year:  1517, text: '馬丁·路德在維滕貝格教堂張貼《九十五條論綱》，宗教改革運動爆發' },
  { year:  1555, text: '《奧格斯堡和約》確立「教隨國定」原則，暫時緩解天主教與新教衝突' },
  { year:  1618, text: '三十年戰爭爆發（1618–1648），神聖羅馬帝國境內大部分地區淪為戰場' },
  { year:  1648, text: '《威斯特伐利亞和約》結束三十年戰爭，德意志人口銳減近三分之一，帝國權力進一步分散' },

  // ── 普魯士崛起與德意志統一 ─────────────────────────────────────────
  { year:  1701, text: '勃蘭登堡選帝侯腓特烈一世加冕為「普魯士國王」，普魯士王國建立' },
  { year:  1740, text: '腓特烈大帝即位，通過改革與戰爭使普魯士躋身歐洲列強' },
  { year:  1806, text: '拿破崙擊敗神聖羅馬帝國，法蘭茲二世退位，千年帝國正式終結' },
  { year:  1815, text: '維也納會議後成立德意志邦聯，奧地利與普魯士並列為兩大主導力量' },
  { year:  1834, text: '德意志關稅同盟成立，為經濟統一奠定基礎' },
  { year:  1848, text: '德意志各邦爆發革命浪潮，法蘭克福國民議會嘗試建立統一憲政國家但最終失敗' },
  { year:  1862, text: '俾斯麥出任普魯士首相，推行「鐵血政策」，展開統一德意志的進程' },
  { year:  1866, text: '普奧戰爭：普魯士擊敗奧地利，將奧地利排除在德意志統一進程之外' },
  { year:  1870, text: '普法戰爭爆發，普魯士大敗法國，民族主義情緒推動德意志最終統一' },
  { year:  1871, text: '威廉一世在凡爾賽宮鏡廳加冕為德意志皇帝，德意志帝國正式成立' },

  // ── 德意志帝國與第一次世界大戰 ─────────────────────────────────────
  { year:  1888, text: '威廉二世即位，逐步罷黜俾斯麥，推行更具擴張性的對外政策' },
  { year:  1914, text: '第一次世界大戰爆發，德國作為同盟國核心參與全面戰爭' },
  { year:  1918, text: '德國戰敗，威廉二世退位流亡荷蘭，德意志帝國崩潰' },

  // ── 威瑪共和國與納粹德國 ───────────────────────────────────────────
  { year:  1919, text: '《凡爾賽條約》簽署，德國承擔戰爭責任並割地賠款；同年威瑪共和國憲法頒布' },
  { year:  1923, text: '惡性通貨膨脹達到頂峰，馬克幾乎完全崩潰，民眾生活陷入困境' },
  { year:  1929, text: '全球經濟大蕭條重創德國經濟，失業率飆升，為極端政黨崛起提供土壤' },
  { year:  1933, text: '希特勒被任命為總理，隨後通過《授權法》建立獨裁統治，第三帝國開始' },
  { year:  1935, text: '《紐倫堡法案》頒布，系統性剝奪猶太人公民權利，種族迫害制度化' },
  { year:  1938, text: '「水晶之夜」爆發，納粹全國性迫害猶太人，猶太商店與會堂遭大規模破壞' },
  { year:  1939, text: '德國入侵波蘭，第二次世界大戰在歐洲爆發' },
  { year:  1941, text: '德國入侵蘇聯（「巴巴羅薩行動」），東線戰場成為二戰最慘烈戰區' },
  { year:  1942, text: '萬湖會議確立「最終解決方案」，猶太人大屠殺（Holocaust）系統化執行' },
  { year:  1945, text: '柏林戰役後希特勒自殺，德國無條件投降，納粹政權覆滅，二戰歐洲戰場結束' },

  // ── 冷戰分裂與統一 ─────────────────────────────────────────────────
  { year:  1949, text: '德國正式分裂為聯邦德國（西德）與民主德國（東德），冷戰對峙格局形成' },
  { year:  1953, text: '東柏林爆發工人起義，遭蘇聯坦克鎮壓' },
  { year:  1961, text: '柏林圍牆建立，東西柏林被徹底隔絕，成為冷戰分裂的象徵' },
  { year:  1963, text: '甘迺迪訪問西柏林，發表「我是柏林人」演說聲援自由世界' },
  { year:  1989, text: '11月9日柏林圍牆倒塌，東歐劇變加速，德國統一進程開啟' },
  { year:  1990, text: '10月3日東西德正式統一，成為統一的德意志聯邦共和國' },
  { year:  1999, text: '德國聯邦議會遷回柏林國會大廈，柏林重新成為統一德國首都' },
  { year:  2005, text: '梅克爾就任總理，成為德國史上首位女性總理，執政長達16年' },
  { year:  2015, text: '梅克爾政府開放邊境接納逾百萬難民，成為歐洲難民危機焦點政策' },
];
