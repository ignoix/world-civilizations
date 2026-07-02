// 中國歷史：朝代資料
const ZH_ROW_LABELS = [
  '主要朝代',    // 0
  '北方/競爭',   // 1
  '其他政權',    // 2
  '十六國/南方', // 3
  '其他小國',    // 4
  '帝王',        // 5
  '齊國',        // 6
  '晉國',        // 7
  '宋國',        // 8
  '秦（諸侯）',  // 9
  '楚國',        // 10
  '韓國',        // 11
  '趙國',        // 12
  '魏國',        // 13
  '燕國',        // 14
  '鄭國',        // 15
  '衛國',        // 16
  '魯國',        // 17
  '吳國',        // 18
  '越國',        // 19
  '蔡國',        // 20
  '陳國',        // 21
];

const ZH_DYNASTIES = [
  // ── ROW 0 主要朝代 ────────────────────────────────────────────────────────
  { name:'夏',             en:'Xia Dynasty',              start:-2070, end:-1600, color:'#92400e', row:0, wikiEn:'Xia_dynasty' },
  { name:'商',             en:'Shang Dynasty',             start:-1600, end:-1046, color:'#b45309', row:0, wikiEn:'Shang_dynasty' },
  { name:'西周',           en:'Western Zhou',              start:-1046, end:-771,  color:'#d97706', row:0, wikiEn:'Western_Zhou' },
  { name:'東周',           en:'Eastern Zhou（春秋/戰國）', start:-770,  end:-221,  color:'#92400e', row:0, wikiEn:'Eastern_Zhou' },
  { name:'秦',             en:'Qin Dynasty',               start:-221,  end:-206,  color:'#374151', row:0, wikiEn:'Qin_dynasty' },
  { name:'西漢',           en:'Western Han',               start:-206,  end:9,     color:'#b91c1c', row:0, wikiEn:'Han_dynasty' },
  { name:'新',             en:'Xin（王莽）',               start:9,     end:23,    color:'#f97316', row:0, wikiEn:'Xin_dynasty' },
  { name:'東漢',           en:'Eastern Han',               start:25,    end:220,   color:'#ef4444', row:0, wikiEn:'Han_dynasty' },
  { name:'曹魏',           en:'Cao Wei（三國）',           start:220,   end:265,   color:'#2563eb', row:0, wikiEn:'Cao_Wei' },
  { name:'西晉',           en:'Western Jin',               start:265,   end:316,   color:'#7c3aed', row:0, wikiEn:'Western_Jin_dynasty' },
  { name:'東晉',           en:'Eastern Jin',               start:317,   end:420,   color:'#9333ea', row:0, wikiEn:'Eastern_Jin_dynasty' },
  { name:'劉宋',           en:'Liu Song（南朝）',          start:420,   end:479,   color:'#db2777', row:0, wikiEn:'Liu_Song_dynasty' },
  { name:'南齊',           en:'Southern Qi',               start:479,   end:502,   color:'#be185d', row:0 },
  { name:'南梁',           en:'Southern Liang',            start:502,   end:557,   color:'#9d174d', row:0 },
  { name:'南陳',           en:'Southern Chen',             start:557,   end:589,   color:'#831843', row:0 },
  { name:'隋',             en:'Sui Dynasty',               start:581,   end:618,   color:'#d97706', row:0, wikiEn:'Sui_dynasty' },
  { name:'唐',             en:'Tang Dynasty',              start:618,   end:907,   color:'#f59e0b', row:0, wikiEn:'Tang_dynasty' },
  { name:'後梁',           en:'Later Liang（五代）',       start:907,   end:923,   color:'#ea580c', row:0, wikiEn:'Later_Liang_(Five_Dynasties)' },
  { name:'後唐',           en:'Later Tang',                start:923,   end:936,   color:'#dc2626', row:0 },
  { name:'後晉',           en:'Later Jin',                 start:936,   end:947,   color:'#b91c1c', row:0 },
  { name:'後漢',           en:'Later Han',                 start:947,   end:950,   color:'#991b1b', row:0 },
  { name:'後周',           en:'Later Zhou',                start:951,   end:960,   color:'#7f1d1d', row:0 },
  { name:'北宋',           en:'Northern Song',             start:960,   end:1127,  color:'#c2410c', row:0, wikiEn:'Song_dynasty' },
  { name:'南宋',           en:'Southern Song',             start:1127,  end:1279,  color:'#9a3412', row:0, wikiEn:'Song_dynasty' },
  { name:'元',             en:'Yuan Dynasty',              start:1271,  end:1368,  color:'#1e3a8a', row:0, wikiEn:'Yuan_dynasty' },
  { name:'明',             en:'Ming Dynasty',              start:1368,  end:1644,  color:'#dc2626', row:0, wikiEn:'Ming_dynasty' },
  { name:'清',             en:'Qing Dynasty',              start:1644,  end:1912,  color:'#ca8a04', row:0, wikiEn:'Qing_dynasty' },
  { name:'中華民國',       en:'Republic of China',         start:1912,  end:1949,  color:'#0284c7', row:0, wikiEn:'Republic_of_China_(1912–1949)' },
  { name:'中華人民共和國', en:"People's Republic of China",start:1949,  end:2026,  color:'#dc2626', row:0, wikiEn:"People's_Republic_of_China" },

  // ── ROW 1 北方/競爭政權 ───────────────────────────────────────────────────
  { name:'蜀漢',   en:'Shu Han（三國）',    start:221,  end:263,  color:'#15803d', row:1 },
  { name:'北魏',   en:'Northern Wei',       start:386,  end:534,  color:'#1d4ed8', row:1 },
  { name:'東魏',   en:'Eastern Wei',        start:534,  end:550,  color:'#1e40af', row:1 },
  { name:'北齊',   en:'Northern Qi',        start:550,  end:577,  color:'#1e3a8a', row:1 },
  { name:'遼',     en:'Liao Dynasty',       start:916,  end:1125, color:'#475569', row:1 },

  // ── ROW 2 其他政權 ────────────────────────────────────────────────────────
  { name:'孫吳',   en:'Sun Wu（三國）',     start:222,  end:280,  color:'#0d9488', row:2 },
  { name:'西魏',   en:'Western Wei',        start:535,  end:557,  color:'#4338ca', row:2 },
  { name:'北周',   en:'Northern Zhou',      start:557,  end:581,  color:'#3730a3', row:2 },
  { name:'吳越',   en:'Wuyue（十國）',      start:907,  end:978,  color:'#92400e', row:2 },
  { name:'西夏',   en:'Western Xia',        start:1038, end:1227, color:'#4d7c0f', row:2 },

  // ── ROW 3 十六國/南方小國 ─────────────────────────────────────────────────
  { name:'十六國', en:'Sixteen Kingdoms',   start:304,  end:439,  color:'#4b5563', row:3 },
  { name:'南唐',   en:'Southern Tang（十國）',start:937, end:975,  color:'#6d28d9', row:3 },
  { name:'金',     en:'Jin Dynasty',        start:1115, end:1234, color:'#65a30d', row:3 },

  // ── ROW 4 其他小國 ────────────────────────────────────────────────────────
  { name:'大理',   en:'Dali Kingdom',       start:937,  end:1253, color:'#5b21b6', row:4 },

];
