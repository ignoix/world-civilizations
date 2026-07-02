// 巴比倫／美索不達米亞歷史時間線資料
// 年份均為近似學術估計，負數為西元前

const BB_ROW_LABELS = ['主要時期', '細分王朝'];

const BB_GROUPS = [

  // ══ Row 0 主要時期（連續）══════════════════════════════════════════
  // 古代美索不達米亞
  // 美索不達米亞文明建立到波斯征服（-2500 ~ -539）：全色顯示
  { name:'蘇美爾早王朝',    en:'Sumerian Early Dynastic Period',      start:-2500, end:-2334, color:'#78350f', row:0, wikiEn:'Early_Dynastic_Period_(Mesopotamia)' },
  { name:'阿卡德帝國',      en:'Akkadian Empire (Sargon)',            start:-2334, end:-2154, color:'#92400e', row:0, wikiEn:'Akkadian_Empire' },
  { name:'古底亞過渡期',    en:'Gutian Dynasty / Transitional',       start:-2154, end:-2112, color:'#a16207', row:0, wikiEn:'Gutian_dynasty_of_Sumer' },
  { name:'烏爾第三王朝',    en:'Third Dynasty of Ur (Ur III)',        start:-2112, end:-2004, color:'#b45309', row:0, wikiEn:'Third_Dynasty_of_Ur' },
  { name:'古巴比倫時代',    en:'Old Babylonian Period (Isin·Larsa·Hammurabi)', start:-2004, end:-1595, color:'#d97706', row:0, wikiEn:'Old_Babylonian_Empire' },
  { name:'卡西特時代',      en:'Kassite Dynasty',                     start:-1595, end:-1155, color:'#854d0e', row:0, wikiEn:'Kassites' },
  { name:'亞述主導時期',    en:'Assyrian Domination Period',          start:-1155, end: -626, color:'#dc2626', row:0, wikiEn:'Neo-Assyrian_Empire' },
  { name:'新巴比倫帝國',    en:'Neo-Babylonian (Chaldean) Empire',    start: -626, end: -539, color:'#f59e0b', row:0, wikiEn:'Neo-Babylonian_Empire' },
  // 波斯征服後——外族統治（淡化）
  { name:'波斯阿契美尼德',  en:'Persian Achaemenid Empire',           start: -539, end: -330, color:'#c2410c', row:0, dim:true },
  { name:'希臘/塞琉古',     en:'Macedonian / Seleucid Rule',          start: -330, end: -141, color:'#1e40af', row:0, dim:true },
  { name:'帕提亞帝國',      en:'Parthian (Arsacid) Empire',           start: -141, end:  224, color:'#4338ca', row:0, dim:true },
  { name:'薩珊帝國',        en:'Sasanian Persian Empire',             start:  224, end:  637, color:'#6d28d9', row:0, dim:true },
  // 伊斯蘭時代
  { name:'阿拉伯哈里發',    en:'Arab Caliphate (Rashidun / Umayyad)', start:  637, end:  750, color:'#14532d', row:0, dim:true },
  { name:'阿拔斯哈里發',    en:'Abbasid Caliphate (Baghdad)',         start:  750, end: 1258, color:'#15803d', row:0 },
  // 蒙古及後繼
  { name:'蒙古/伊爾汗國',   en:'Mongol Ilkhanate',                    start: 1258, end: 1335, color:'#374151', row:0, dim:true },
  { name:'帖木兒/土庫曼',   en:'Timurid & Turkmen Dynasties',         start: 1335, end: 1534, color:'#4b5563', row:0, dim:true },
  // 近現代
  { name:'奧斯曼帝國',      en:'Ottoman Empire',                      start: 1534, end: 1920, color:'#0f766e', row:0, dim:true },
  { name:'英國託管/伊拉克王國', en:'British Mandate & Kingdom of Iraq', start:1920, end: 1958, color:'#0369a1', row:0, dim:true },
  { name:'現代伊拉克',      en:'Republic of Iraq',                    start: 1958, end: 2026, color:'#dc2626', row:0, dim:true },

  // ══ Row 1 細分王朝（重點時期詳細分段）══════════════════════════════
  // 阿卡德帝國盛衰
  { name:'薩爾貢王朝',      en:'Dynasty of Sargon of Akkad',          start:-2334, end:-2218, color:'#92400e', row:1 },
  { name:'阿卡德衰落',      en:'Akkadian Decline',                    start:-2218, end:-2154, color:'#b45309', row:1, dim:true },
  // 古巴比倫第一王朝
  { name:'巴比倫第一王朝',  en:'First Dynasty of Babylon',            start:-1894, end:-1595, color:'#d97706', row:1 },
  // 新亞述帝國對巴比倫的控制（外族）
  { name:'新亞述帝國',      en:'Neo-Assyrian Empire (controls Babylon)', start:-745, end: -626, color:'#b91c1c', row:1, dim:true },
  // 新巴比倫盛世
  { name:'尼布甲尼撒二世',  en:'Nebuchadnezzar II (peak of Neo-Babylon)', start:-605, end:-562, color:'#f59e0b', row:1 },
  // 阿拔斯黃金時代（核心時期）
  { name:'阿拔斯黃金時代',  en:'Abbasid Golden Age',                  start:  786, end: 1000, color:'#22c55e', row:1 },
  // 近代重要政權
  { name:'薩達姆政權',      en:'Saddam Hussein Regime',               start: 1979, end: 2003, color:'#7f1d1d', row:1, dim:true },
];

const BB_EVENTS = [
  // ── 蘇美爾/阿卡德 ──────────────────────────────────────────────────
  { year: -2500, text: '蘇美爾城邦烏爾、烏魯克、拉格什繁盛；楔形文字已成熟，為人類最早書寫系統之一' },
  { year: -2334, text: '薩爾貢一世征服蘇美爾，建立阿卡德帝國——人類歷史上第一個多民族帝國' },
  { year: -2254, text: '納拉辛（Naram-Sin）自稱「四方之王」，阿卡德帝國達到極盛，設立行省制度' },
  { year: -2112, text: '烏爾南姆建立烏爾第三王朝，頒布史上最早成文法典（早於漢謨拉比五百年）' },

  // ── 古巴比倫/漢謨拉比 ──────────────────────────────────────────────
  { year: -1894, text: '蘇穆阿布姆建立巴比倫第一王朝，巴比倫城開始崛起' },
  { year: -1792, text: '漢謨拉比（Hammurabi）繼位，征服美索不達米亞全境，建立統一帝國' },
  { year: -1754, text: '漢謨拉比頒布《漢謨拉比法典》：約二百八十二條法律，「以眼還眼、以牙還牙」' },
  { year: -1595, text: '赫梯王穆爾西里一世突襲洗劫巴比倫，古巴比倫時代終結' },

  // ── 亞述帝國 ───────────────────────────────────────────────────────
  { year:  -689, text: '亞述王西拿基立（Sennacherib）徹底摧毀巴比倫城，掠奪馬杜克神像' },
  { year:  -668, text: '亞述巴尼拔（Ashurbanipal）在尼尼微建立世界首個系統性圖書館，收藏三萬塊泥板' },

  // ── 新巴比倫帝國 ───────────────────────────────────────────────────
  { year:  -626, text: '那波帕拉薩爾趁亞述衰弱脫離控制，建立新巴比倫（迦勒底）帝國' },
  { year:  -612, text: '新巴比倫聯合米底人攻陷尼尼微，亞述帝國徹底滅亡' },
  { year:  -605, text: '尼布甲尼撒二世在迦基米施大敗埃及法老尼哥二世，成為近東霸主' },
  { year:  -597, text: '尼布甲尼撒二世首次攻陷耶路撒冷，擄走約雅斤王和一萬貴族工匠' },
  { year:  -586, text: '尼布甲尼撒二世再攻耶路撒冷，焚毀聖殿，猶大亡國，巴比倫之囚開始' },
  { year:  -575, text: '巴比倫空中花園（傳說）建成，城門伊絲塔爾門以琉璃磚砌成，壯麗無比' },

  // ── 波斯征服 ───────────────────────────────────────────────────────
  { year:  -539, text: '波斯居魯士大帝「和平」入主巴比倫；頒布居魯士圓柱——史上最早人權宣言，允許被擄民族歸回' },
  { year:  -331, text: '亞歷山大大帝佔領巴比倫，視之為帝國新都，在此主持祭祀與規劃' },
  { year:  -323, text: '亞歷山大大帝在巴比倫宮中病逝，年僅三十二歲，帝國隨即分裂' },

  // ── 伊斯蘭黃金時代 ────────────────────────────────────────────────
  { year:   637, text: '阿拉伯將領薩阿德·本·阿比瓦卡斯攻佔泰西封（薩珊首都），征服美索不達米亞' },
  { year:   762, text: '阿拔斯哈里發曼蘇爾在底格里斯河畔建立圓形城市巴格達，成為伊斯蘭帝國都城' },
  { year:   786, text: '哈倫·拉希德（Harun al-Rashid）即位，巴格達成為當時世界最大、最繁榮的城市' },
  { year:   830, text: '智慧宮（Bayt al-Hikma）大規模翻譯希臘、波斯、印度典籍，開創伊斯蘭科學黃金時代' },

  // ── 蒙古入侵 ──────────────────────────────────────────────────────
  { year:  1258, text: '旭烈兀率蒙古鐵騎圍攻巴格達，哈里發穆斯塔辛被殺，圖書館藏書投入底格里斯河，文明重創' },
  { year:  1401, text: '帖木兒（Timur）攻陷巴格達，大屠殺後再次燒毀城市' },

  // ── 近現代 ────────────────────────────────────────────────────────
  { year:  1534, text: '奧斯曼蘇丹蘇萊曼大帝征服巴格達，美索不達米亞進入奧斯曼時代' },
  { year:  1869, text: '蘇伊士運河開通，美索不達米亞在大英帝國中東戰略中的地位上升' },
  { year:  1908, text: '鄂圖曼帝國境內發現石油（巴庫），預示中東能源時代' },
  { year:  1920, text: '英國委任統治伊拉克，同年爆發大起義，英軍傷亡慘重' },
  { year:  1932, text: '伊拉克宣布獨立，成為國際聯盟首個正式獨立的阿拉伯國家' },
  { year:  1958, text: '卡塞姆將軍發動革命，推翻費薩爾二世，建立伊拉克共和國' },
  { year:  1980, text: '兩伊戰爭爆發，歷時八年，雙方逾百萬人死亡，無明確勝負' },
  { year:  1990, text: '薩達姆入侵科威特，波斯灣戰爭爆發，美軍主導多國聯軍驅逐伊軍' },
  { year:  2003, text: '美英聯軍入侵伊拉克，薩達姆政權崩潰，此後陷入長期動盪' },
  { year:  2014, text: '伊斯蘭國（ISIS）佔領摩蘇爾及大片土地，宣布「哈里發國」' },
];
