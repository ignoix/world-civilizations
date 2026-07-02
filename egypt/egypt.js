// 埃及歷史時間線資料
// 年份均為近似學術估計，負數為西元前

const EG_ROW_LABELS = ['主要時期', '細分王朝'];

const EG_GROUPS = [

  // ══ Row 0 主要時期（連續）═══════════════════════════════════════════
  // 古埃及法老時代（核心時期：古、中、新王國）
  // 法老埃及建立到滅亡（-2500 ~ -332）：全色顯示
  { name:'古王國',        en:'Old Kingdom (Dyn. 3–6)',              start:-2500, end:-2181, color:'#92400e', row:0, wikiEn:'Old_Kingdom_of_Egypt' },
  { name:'第一中間期',    en:'First Intermediate Period',           start:-2181, end:-2055, color:'#78350f', row:0, wikiEn:'First_Intermediate_Period_of_Egypt' },
  { name:'中王國',        en:'Middle Kingdom (Dyn. 11–12)',         start:-2055, end:-1650, color:'#b45309', row:0, wikiEn:'Middle_Kingdom_of_Egypt' },
  { name:'第二中間期',    en:'Second Intermediate (Hyksos)',        start:-1650, end:-1550, color:'#7c2d12', row:0, wikiEn:'Second_Intermediate_Period_of_Egypt' },
  { name:'新王國',        en:'New Kingdom (Dyn. 18–20)',            start:-1550, end:-1069, color:'#d97706', row:0, wikiEn:'New_Kingdom_of_Egypt' },
  { name:'第三中間期',    en:'Third Intermediate Period',           start:-1069, end: -664, color:'#a16207', row:0, wikiEn:'Third_Intermediate_Period_of_Egypt' },
  { name:'晚期王朝',      en:'Late Period (Dyn. 26–31)',            start: -664, end: -332, color:'#854d0e', row:0, wikiEn:'Late_Period_of_ancient_Egypt' },
  // 亞歷山大征服後——外族統治（淡化）
  { name:'托勒密王朝',    en:'Ptolemaic Kingdom (Macedonian)',      start: -332, end:  -30, color:'#1e40af', row:0, dim:true, wikiEn:'Ptolemaic_Kingdom' },
  { name:'羅馬行省',      en:'Roman Province of Egypt',             start:  -30, end:  395, color:'#ef4444', row:0, dim:true, wikiEn:'Roman_Egypt' },
  { name:'拜占庭統治',    en:'Byzantine Egypt',                     start:  395, end:  642, color:'#7c3aed', row:0, dim:true, wikiEn:'Byzantine_Egypt' },
  // 伊斯蘭時代
  { name:'阿拉伯哈里發',  en:'Arab Caliphate (Rashidun/Umayyad/Abbasid)', start:642, end:969, color:'#14532d', row:0, dim:true, wikiEn:'Rashidun_Caliphate' },
  { name:'法蒂瑪哈里發',  en:'Fatimid Caliphate',                   start:  969, end: 1171, color:'#166534', row:0, dim:true, wikiEn:'Fatimid_Caliphate' },
  { name:'阿尤布王朝',    en:'Ayyubid Sultanate (Saladin)',         start: 1171, end: 1250, color:'#15803d', row:0, dim:true, wikiEn:'Ayyubid_dynasty' },
  { name:'馬穆魯克蘇丹國', en:'Mamluk Sultanate',                   start: 1250, end: 1517, color:'#16a34a', row:0, dim:true, wikiEn:'Mamluk_Sultanate_(Cairo)' },
  // 近現代
  { name:'奧斯曼帝國',    en:'Ottoman Empire',                      start: 1517, end: 1805, color:'#14b8a6', row:0, dim:true },
  { name:'穆罕默德阿里王朝', en:'Muhammad Ali Dynasty',             start: 1805, end: 1882, color:'#2563eb', row:0, dim:true },
  { name:'英國佔領時期',  en:'British Occupation & Protectorate',  start: 1882, end: 1952, color:'#0369a1', row:0, dim:true },
  { name:'現代共和國',    en:'Arab Republic of Egypt',              start: 1952, end: 2026, color:'#dc2626', row:0, dim:true },

  // ══ Row 1 細分王朝（法老時代詳細分期）═════════════════════════════
  // 古王國各王朝（核心時期）
  { name:'第五王朝',          en:'Dynasty 5',                         start:-2494, end:-2345, color:'#b45309', row:1 },
  { name:'第六王朝',          en:'Dynasty 6 (OK decline)',            start:-2345, end:-2181, color:'#d97706', row:1 },
  // 中王國（核心時期）
  { name:'第十一王朝',        en:'Dynasty 11 (MK reunification)',     start:-2055, end:-1985, color:'#ca8a04', row:1 },
  { name:'第十二王朝',        en:'Dynasty 12 (MK golden age)',        start:-1985, end:-1795, color:'#eab308', row:1 },
  // 第二中間期
  { name:'希克索斯（十五王朝）', en:'Hyksos Dynasty 15',              start:-1650, end:-1550, color:'#dc2626', row:1, dim:true },
  // 新王國（核心時期）
  { name:'第十八王朝',        en:'Dynasty 18 (Hatshepsut·Akhenaten·Tut)', start:-1550, end:-1292, color:'#f59e0b', row:1 },
  { name:'第十九王朝',        en:'Dynasty 19 (Ramesses II)',          start:-1292, end:-1189, color:'#fbbf24', row:1 },
  { name:'第二十王朝',        en:'Dynasty 20 (Ramesses III)',         start:-1189, end:-1069, color:'#fde68a', row:1 },
  // 晚期（淡化）
  { name:'第二十六王朝',      en:'Dynasty 26 – Saite Renaissance',   start: -664, end: -525, color:'#854d0e', row:1, dim:true },
  { name:'波斯第一次統治',    en:'Dynasty 27 – Persian I',           start: -525, end: -404, color:'#991b1b', row:1, dim:true },
  { name:'本土復興（28–30朝）', en:'Dynasties 28–30 (native revival)', start:-404, end: -343, color:'#b45309', row:1, dim:true },
  { name:'波斯第二次統治',    en:'Dynasty 31 – Persian II',          start: -343, end: -332, color:'#7f1d1d', row:1, dim:true },
  // 近代插曲
  { name:'法國短暫佔領',      en:'French Occupation (Napoleon)',      start: 1798, end: 1801, color:'#1e40af', row:1, dim:true },
  { name:'英國保護國',        en:'British Protectorate (formal)',     start: 1914, end: 1922, color:'#0284c7', row:1, dim:true },
];

const EG_EVENTS = [
  // ── 古王國 ─────────────────────────────────────────────────────────
  { year: -2560, text: '胡夫（Khufu）建成吉薩大金字塔，為古代世界七大奇蹟之一' },
  { year: -2530, text: '卡夫拉（Khafre）建造獅身人面像（斯芬克斯）' },

  // ── 中王國 ─────────────────────────────────────────────────────────
  { year: -2055, text: '門圖霍特普二世統一埃及，結束第一中間期，建立中王國' },
  { year: -1985, text: '阿蒙內姆哈特一世建立第十二王朝，中王國進入黃金時代' },

  // ── 新王國 ─────────────────────────────────────────────────────────
  { year: -1550, text: '阿赫莫斯一世驅逐希克索斯人，統一埃及，新王國開始' },
  { year: -1479, text: '哈特謝普蘇特（Hatshepsut）成為法老，埃及首位女性統治者之一，擴大貿易' },
  { year: -1353, text: '阿肯那頓（Akhenaten）推行阿頓太陽神宗教改革，史上最早一神崇拜嘗試' },
  { year: -1336, text: '圖坦卡蒙（Tutankhamun）即位，廢除前任父親改革，恢復多神信仰' },
  { year: -1279, text: '拉美西斯二世（Ramesses II）開始六十六年統治，埃及最偉大的建設法老' },
  { year: -1274, text: '卡迭石戰役：拉美西斯二世對抗赫梯人，簽訂史上最早和平條約' },
  { year: -1208, text: '海上民族（Sea Peoples）大規模入侵，埃及勉強擊退，但損耗國力' },

  // ── 晚期 ───────────────────────────────────────────────────────────
  { year: -671,  text: '亞述帝國入侵佔領埃及' },
  { year: -664,  text: '普薩美提克一世驅逐亞述，建立薩伊特（第二十六）王朝，埃及文藝復興' },
  { year: -525,  text: '波斯王岡比西斯二世征服埃及，建立波斯第二十七王朝' },

  // ── 托勒密與羅馬 ───────────────────────────────────────────────────
  { year: -332,  text: '亞歷山大大帝征服埃及，在尼羅河三角洲建立亞歷山大城' },
  { year: -305,  text: '托勒密一世稱法老，建立馬其頓裔王朝，創辦亞歷山大圖書館' },
  { year: -196,  text: '羅塞塔石碑刻立（多語聖旨），成為後世解讀象形文字的關鍵' },
  { year:  -48,  text: '凱撒抵達埃及，與克麗奧帕特拉七世相遇，政治與愛情交織' },
  { year:  -30,  text: '克麗奧帕特拉七世自盡，托勒密王朝終結，埃及成為羅馬行省' },

  // ── 基督教與拜占庭 ─────────────────────────────────────────────────
  { year:   42,  text: '使徒馬可來亞歷山大城傳教，科普特教會創立' },
  { year:  391,  text: '狄奧多西一世詔令關閉異教神廟，亞歷山大圖書館最終毀毀' },

  // ── 阿拉伯征服與伊斯蘭 ─────────────────────────────────────────────
  { year:  642,  text: '阿拉伯將領阿慕爾·本·阿斯征服埃及，伊斯蘭化開始，建城福斯塔特' },
  { year:  969,  text: '法蒂瑪哈里發征服埃及，建立開羅城（Misr al-Qahira，意為「征服者」）' },
  { year: 1171,  text: '薩拉丁（Saladin）廢法蒂瑪哈里發，建立阿尤布王朝，後率十字軍東征反擊' },
  { year: 1187,  text: '薩拉丁在哈丁戰役大敗十字軍，光復耶路撒冷' },
  { year: 1250,  text: '馬穆魯克奴隸兵廢阿尤布末代蘇丹，建立馬穆魯克蘇丹國' },
  { year: 1260,  text: '艾因賈魯特戰役：馬穆魯克擊敗蒙古軍，阻止西征，為伊斯蘭世界重要轉折' },

  // ── 奧斯曼與近代 ───────────────────────────────────────────────────
  { year: 1517,  text: '奧斯曼蘇丹塞利姆一世征服埃及，馬穆魯克蘇丹國滅亡' },
  { year: 1798,  text: '拿破崙率法軍入侵埃及，帶來西方科學技術，埃及近代化的起點' },
  { year: 1799,  text: '法軍士兵在羅塞塔發現羅塞塔石碑，後成為解開象形文字謎題的鑰匙' },
  { year: 1805,  text: '穆罕默德·阿里奪得埃及控制權，推行軍事與行政現代化改革' },
  { year: 1869,  text: '蘇伊士運河開通，連通紅海與地中海，縮短歐亞航程' },
  { year: 1882,  text: '英軍佔領埃及，開始長達七十年的英國控制時代' },
  { year: 1922,  text: '英國宣布埃及名義獨立，建立埃及王國（仍受英國影響）' },
  { year: 1952,  text: '納賽爾領導「自由軍官」政變，推翻法魯克王，建立共和國' },
  { year: 1956,  text: '納賽爾宣布國有化蘇伊士運河，引發英法以三國入侵（蘇伊士危機）' },
  { year: 1967,  text: '六日戰爭：以色列閃擊埃及、約旦、敘利亞，佔領西奈半島' },
  { year: 1973,  text: '贖罪日戰爭：埃及越過蘇伊士運河反攻，收復部分西奈' },
  { year: 1978,  text: '薩達特與以色列總理貝京簽署《大衛營協議》，埃及成首個承認以色列的阿拉伯國' },
  { year: 1981,  text: '薩達特總統遇刺，穆巴拉克繼任，執政三十年' },
  { year: 2011,  text: '阿拉伯之春：開羅解放廣場百萬人抗議，穆巴拉克辭職' },
];
