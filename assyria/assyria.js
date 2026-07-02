// 亞述帝國歷史時間線資料
// 年份均為近似學術估計，負數為西元前

const AS_ROW_LABELS = ['主要時期', '新亞述細分'];

const AS_GROUPS = [

  // ══ Row 0 主要時期（連續）══════════════════════════════════════════
  // 古代亞述（以亞述城為中心）
  // 亞述文明建立到滅亡（-2500 ~ -609）：全色顯示
  { name:'亞述城邦初期',    en:'Early Assyrian City-State (Ashur)',      start:-2500, end:-2025, color:'#1e3a5f', row:0, wikiEn:'Assyria' },
  { name:'古亞述時期',      en:'Old Assyrian Period (merchant colonies)', start:-2025, end:-1392, color:'#1e40af', row:0, wikiEn:'Old_Assyrian_period' },
  { name:'中亞述王國',      en:'Middle Assyrian Kingdom',                start:-1392, end: -912, color:'#1d4ed8', row:0, wikiEn:'Middle_Assyrian_Empire' },
  { name:'新亞述帝國',      en:'Neo-Assyrian Empire (world\'s first superpower)', start:-912, end:-609, color:'#3b82f6', row:0, wikiEn:'Neo-Assyrian_Empire' },
  // 亞述滅亡後——地區轉入外族統治
  { name:'新巴比倫/波斯統治', en:'Neo-Babylonian & Persian Rule',        start: -609, end: -330, color:'#7c2d12', row:0, dim:true },
  { name:'希臘/塞琉古/帕提亞', en:'Hellenistic & Parthian Period',       start: -330, end:  224, color:'#4338ca', row:0, dim:true },
  { name:'薩珊帝國',        en:'Sasanian Persian Empire',                start:  224, end:  637, color:'#6d28d9', row:0, dim:true },
  { name:'阿拉伯哈里發',    en:'Arab Islamic Caliphate',                 start:  637, end: 1258, color:'#15803d', row:0, dim:true },
  { name:'蒙古/帖木兒',     en:'Mongol & Timurid Domination',            start: 1258, end: 1534, color:'#374151', row:0, dim:true },
  { name:'奧斯曼帝國',      en:'Ottoman Empire',                         start: 1534, end: 1918, color:'#0f766e', row:0, dim:true },
  { name:'英法委任/近現代', en:'Mandate Period & Modern Syria/Iraq',     start: 1918, end: 2026, color:'#0369a1', row:0, dim:true },

  // ══ Row 1 新亞述帝國細分（按強弱分段，均屬核心時期）════════════════
  { name:'初期擴張',        en:'Early Expansion (Adad-nirari II–Ashurnasirpal II)', start:-912, end:-858, color:'#2563eb', row:1 },
  { name:'巔峰征伐',        en:'Peak Conquest (Shalmaneser III)',        start: -858, end: -745, color:'#1d4ed8', row:1 },
  { name:'帝國重建',        en:'Imperial Reform (Tiglath-Pileser III)',  start: -745, end: -722, color:'#1e40af', row:1 },
  { name:'撒珥根王朝',      en:'Sargonid Dynasty (Sargon II–Ashurbanipal)', start:-722, end:-627, color:'#60a5fa', row:1 },
  { name:'亞述衰亡',        en:'Assyrian Collapse',                      start: -627, end: -609, color:'#93c5fd', row:1 },
  // 安納托利亞商業殖民（古亞述的重要活動期）
  { name:'安納托利亞商業殖民', en:'Assyrian Trading Colonies in Anatolia (kārum)', start:-1950, end:-1750, color:'#bfdbfe', row:1 },
  // 中亞述強盛期
  { name:'中亞述強盛',      en:'Middle Assyrian Peak (Tukulti-Ninurta I)', start:-1244, end:-1208, color:'#3b82f6', row:1 },
];

const AS_EVENTS = [
  // ── 城邦初期 ──────────────────────────────────────────────────────
  { year: -2500, text: '亞述城（Ashur）已是底格里斯河畔重要宗教與貿易中心，供奉城市守護神亞述（Ashur）' },

  // ── 古亞述時期 ─────────────────────────────────────────────────────
  { year: -2025, text: '普祖爾-亞述一世（Puzur-Ashur I）確立亞述獨立城邦，開創古亞述王列' },
  { year: -1950, text: '亞述商人在安納托利亞（今土耳其）建立商業殖民地「卡魯姆」，發展跨境貿易網絡' },
  { year: -1813, text: '沙姆希-阿達德一世建立首個亞述帝國，統治美索不達米亞北部，與漢謨拉比同時代' },

  // ── 中亞述王國 ─────────────────────────────────────────────────────
  { year: -1365, text: '阿舒爾-烏巴利特一世（Ashur-uballit I）打破米坦尼控制，使亞述成為大國' },
  { year: -1244, text: '圖庫爾蒂-尼努爾塔一世（Tukulti-Ninurta I）征服巴比倫，首次以亞述人身份統治巴比倫' },
  { year: -1115, text: '提格拉特-帕拉薩一世（Tiglath-Pileser I）遠征地中海沿岸，中亞述擴張達到最遠' },

  // ── 新亞述帝國 ─────────────────────────────────────────────────────
  { year:  -912, text: '阿達德-尼拉里二世（Adad-nirari II）即位，新亞述帝國正式開始，確立軍國主義路線' },
  { year:  -883, text: '亞述納西爾帕二世（Ashurnasirpal II）以極端殘酷聞名，遷都尼姆魯德，大規模浮雕藝術興起' },
  { year:  -853, text: '卡爾卡爾戰役：撒縵以色三世（Shalmaneser III）對抗十二國聯軍，其中包括以色列王亞哈' },
  { year:  -745, text: '提格拉特-帕拉薩三世（Tiglath-Pileser III）改革——建立世界第一支職業常備軍，推行系統性人口遷移政策' },
  { year:  -740, text: '提格拉特-帕拉薩三世征服敘利亞、腓尼基，以色列北國淪為藩屬，大批貴族被擄' },
  { year:  -722, text: '撒珥根二世（Sargon II）攻陷撒瑪利亞，北國以色列滅亡，二萬七千二百九十名以色列人遭強制遷移' },
  { year:  -714, text: '撒珥根二世遠征烏拉爾圖（今亞美尼亞），戰役記錄在世界最長的楔形文字信件中' },
  { year:  -705, text: '西拿基立（Sennacherib）即位，在尼尼微建造「世界奇觀」宮殿，城市面積為當時世界最大' },
  { year:  -701, text: '西拿基立大規模入侵猶大，攻陷四十六座城市，圍困耶路撒冷，最終因不明原因撤退' },
  { year:  -689, text: '西拿基立徹底摧毀巴比倫城（報復巴比倫人叛亂），此舉震驚古代世界' },
  { year:  -671, text: '以撒哈頓（Esarhaddon）征服埃及——亞述帝國版圖達到最大，首次跨越三大洲' },
  { year:  -668, text: '亞述巴尼拔（Ashurbanipal）即位，在尼尼微建立世界首個有系統的圖書館，收藏三萬餘塊楔形文字泥板' },
  { year:  -648, text: '亞述巴尼拔摧毀以攔（Elam）首都蘇薩，將其化為廢墟，詩文記功浮雕至今完整保存' },
  { year:  -627, text: '亞述巴尼拔去世，帝國隨即爆發繼承危機與內戰，各附庸省趁機叛離' },
  { year:  -614, text: '米底人攻陷亞述的宗教聖城阿舒爾，新巴比倫人和米底人結成反亞述同盟' },
  { year:  -612, text: '尼尼微淪陷：新巴比倫＋米底聯軍圍攻尼尼微，城市徹底被毀，亞述帝國實際終結' },
  { year:  -609, text: '哈蘭戰役：亞述殘部最後抵抗被埃及援軍未能挽救，亞述作為政治實體永久消亡' },

  // ── 後亞述時代 ─────────────────────────────────────────────────────
  { year:   750, text: '亞述地區成為阿拔斯哈里發重要行省，大量亞述基督徒（景教）活躍於伊斯蘭宮廷，翻譯希臘科學著作' },
  { year:  1258, text: '蒙古軍隊對美索不達米亞亞述基督徒社區造成毀滅性打擊，大批人口遷往山區' },
  { year:  1914, text: '亞述種族大屠殺（Seyfo）：一戰期間鄂圖曼土耳其對亞述基督徒實施種族滅絕，估計十五至三十萬人罹難' },
  { year:  1933, text: '西美勒大屠殺：伊拉克軍隊屠殺亞述基督徒村莊，逾六百人遇難，亞述民族問題引發國際關注' },
  { year:  2014, text: 'ISIS佔領尼尼微平原，大批亞述基督徒被迫逃離世代居住的故鄉，古代文物遭人為破壞' },
];
