// 波斯帝國／伊朗歷史時間線資料
// 年份均為近似學術估計，負數為西元前

const PS_ROW_LABELS = ['主要時期', '細分王朝'];

const PS_GROUPS = [

  // ══ Row 0 主要時期（連續）══════════════════════════════════════════
  // 前波斯伊朗高原文明
  { name:'埃蘭文明',        en:'Elamite Civilization (proto-Iranian)', start:-2500, end: -700, color:'#44403c', row:0, dim:true },
  { name:'米底帝國',        en:'Median Empire (first Iranian empire)',  start: -700, end: -550, color:'#78350f', row:0, dim:true },
  // 阿契美尼德波斯帝國——古代史上最大帝國之一（核心時期）
  { name:'阿契美尼德帝國',  en:'Achaemenid Persian Empire',            start: -550, end: -330, color:'#d97706', row:0, wikiEn:'Achaemenid_Empire' },
  // 外族統治
  { name:'馬其頓/塞琉古',   en:'Macedonian & Seleucid Rule',           start: -330, end: -247, color:'#1e40af', row:0, dim:true, wikiEn:'Seleucid_Empire' },
  // 帕提亞（安息）
  { name:'帕提亞帝國',      en:'Parthian (Arsacid) Empire',            start: -247, end:  224, color:'#15803d', row:0, dim:true, wikiEn:'Parthian_Empire' },
  // 薩珊帝國——古代波斯最後輝煌
  { name:'薩珊帝國',        en:'Sasanian Persian Empire',              start:  224, end:  651, color:'#dc2626', row:0, dim:true, wikiEn:'Sasanian_Empire' },
  // 伊斯蘭時代
  { name:'阿拉伯征服/倭馬亞', en:'Arab Conquest & Umayyad Caliphate', start:  651, end:  750, color:'#14532d', row:0, dim:true },
  { name:'阿拔斯/波斯復興',  en:'Abbasid Era & Persian Renaissance',   start:  750, end: 1037, color:'#166534', row:0, dim:true },
  { name:'塞爾柱蘇丹國',    en:'Seljuk Sultanate',                     start: 1037, end: 1219, color:'#0d9488', row:0, dim:true },
  { name:'蒙古/伊爾汗',     en:'Mongol Invasion & Ilkhanate',          start: 1219, end: 1370, color:'#374151', row:0, dim:true },
  { name:'帖木兒帝國',      en:'Timurid Empire',                       start: 1370, end: 1501, color:'#4b5563', row:0, dim:true },
  // 薩法維——確立現代伊朗疆域與什葉派認同
  { name:'薩法維王朝',      en:'Safavid Dynasty (Shia Islam state)',   start: 1501, end: 1736, color:'#7c3aed', row:0, dim:true, wikiEn:'Safavid_dynasty' },
  { name:'阿夫沙爾/贊德',   en:'Afsharid & Zand Dynasties',           start: 1736, end: 1796, color:'#6d28d9', row:0, dim:true },
  { name:'卡加爾王朝',      en:'Qajar Dynasty',                        start: 1796, end: 1925, color:'#4c1d95', row:0, dim:true },
  { name:'巴列維王朝',      en:'Pahlavi Dynasty',                      start: 1925, end: 1979, color:'#1d4ed8', row:0, dim:true },
  { name:'伊斯蘭共和國',    en:'Islamic Republic of Iran',             start: 1979, end: 2026, color:'#16a34a', row:0, dim:true },

  // ══ Row 1 細分王朝（重要時代詳細分段）════════════════════════════
  // 阿契美尼德著名君王（屬核心時期，保持全色）
  { name:'居魯士大帝',      en:'Cyrus the Great (founder)',            start: -559, end: -530, color:'#f59e0b', row:1, wikiEn:'Cyrus_the_Great' },
  { name:'岡比西斯二世',    en:'Cambyses II (conquered Egypt)',        start: -530, end: -522, color:'#fbbf24', row:1, wikiEn:'Cambyses_II' },
  { name:'大流士一世',      en:'Darius I the Great (reformed empire)', start: -522, end: -486, color:'#fcd34d', row:1, wikiEn:'Darius_the_Great' },
  { name:'薛西斯一世',      en:'Xerxes I (invaded Greece)',            start: -486, end: -465, color:'#fde68a', row:1, wikiEn:'Xerxes_I' },
  { name:'阿爾塔薛西斯一世', en:'Artaxerxes I (Ezra·Nehemiah era)',   start: -465, end: -424, color:'#fef3c7', row:1 },
  // 薩珊強盛期
  { name:'霍斯勞一世（公正王）', en:'Khosrow I Anushirvan – Sassanid golden age', start:531, end:579, color:'#fca5a5', row:1, dim:true },
  { name:'霍斯勞二世',      en:'Khosrow II – peak expansion',         start:  590, end:  628, color:'#f87171', row:1, dim:true },
  // 薩法維黃金時代
  { name:'沙阿巴斯一世',    en:'Shah Abbas I – Safavid golden age (Isfahan)', start:1587, end:1629, color:'#c084fc', row:1, dim:true },
  // 巴列維時代
  { name:'穆罕默德·禮薩沙',  en:'Mohammad Reza Shah – White Revolution', start:1941, end:1979, color:'#93c5fd', row:1, dim:true },
];

const PS_EVENTS = [
  // ── 埃蘭/前波斯 ────────────────────────────────────────────────────
  { year: -2500, text: '埃蘭文明（今伊朗西南部）與蘇美爾並列，發展早期文字（原始埃蘭文字）' },
  { year: -1150, text: '埃蘭王蘇特魯克-那洪特洗劫巴比倫，劫走漢謨拉比法典石碑至蘇薩' },

  // ── 米底帝國 ────────────────────────────────────────────────────────
  { year:  -700, text: '迪奧塞斯（Deioces）統一米底各部族，建立伊朗高原上第一個帝國' },
  { year:  -612, text: '米底與新巴比倫聯軍攻陷尼尼微，亞述帝國覆滅，米底勢力達頂峰' },

  // ── 阿契美尼德帝國 ──────────────────────────────────────────────────
  { year:  -559, text: '居魯士大帝（Cyrus the Great）成為波斯王，開始以小邦起家的統一大業' },
  { year:  -550, text: '居魯士征服米底帝國，阿契美尼德波斯帝國正式建立' },
  { year:  -547, text: '居魯士擊敗以富可敵國聞名的利底亞王克羅伊斯（Croesus），征服西亞細亞' },
  { year:  -539, text: '居魯士和平入主巴比倫；頒布居魯士圓柱（Cyrus Cylinder）——允許被擄民族歸回家鄉，被稱史上最早人權宣言' },
  { year:  -525, text: '岡比西斯二世（Cambyses II）征服埃及，波斯帝國橫跨三大洲' },
  { year:  -519, text: '大流士一世在貝希斯敦山壁刻下多語銘文，記錄波斯帝國的正統與征服' },
  { year:  -518, text: '大流士一世在波斯波利斯（Persepolis）大規模建設，萬國宮成為帝國象徵' },
  { year:  -513, text: '大流士一世遠征斯基泰人（今烏克蘭），帝國版圖達到極盛——西至希臘、東至印度' },
  { year:  -490, text: '馬拉松戰役：波斯遠征軍登陸阿提卡，被雅典軍以少勝多擊退，「馬拉松」長跑由此而來' },
  { year:  -480, text: '薛西斯一世率數十萬大軍入侵希臘：斯巴達三百壯士守溫泉關；薩拉米斯海戰波斯艦隊潰敗' },
  { year:  -479, text: '普拉提亞戰役：波斯陸軍被希臘聯軍決定性擊敗，波希戰爭告終' },
  { year:  -457, text: '阿爾塔薛西斯一世允許以斯拉率猶太人回歸耶路撒冷，推行律法改革' },
  { year:  -445, text: '阿爾塔薛西斯一世授權尼希米重建耶路撒冷城牆' },
  { year:  -334, text: '亞歷山大大帝橫渡赫勒斯滂海峽，入侵波斯帝國' },
  { year:  -331, text: '高加米拉戰役（Battle of Gaugamela）：亞歷山大大敗大流士三世，阿契美尼德帝國覆滅' },
  { year:  -330, text: '亞歷山大焚燒波斯波利斯，報復波希戰爭時波斯焚燒雅典衛城之仇' },

  // ── 帕提亞 ──────────────────────────────────────────────────────────
  { year:  -247, text: '阿爾薩克一世建立帕提亞王國，伊朗高原重歸伊朗人統治' },
  { year:   53,  text: '卡萊戰役：帕提亞軍隊全殲羅馬三執政之一克拉蘇的七個軍團，為羅馬史上最慘敗仗之一' },

  // ── 薩珊帝國 ────────────────────────────────────────────────────────
  { year:  224,  text: '阿爾達希爾一世推翻帕提亞，建立薩珊王朝，宣稱恢復阿契美尼德波斯的榮光' },
  { year:  260,  text: '沙普爾一世在埃德薩戰役中生擒羅馬皇帝瓦勒里安（Valerian）——波斯君主生俘羅馬皇帝，空前絕後' },
  { year:  529,  text: '貢德沙普爾學院（Academy of Gondishapur）盛極一時，融合希臘、印度、波斯醫學，為當時世界頂尖學術中心' },
  { year:  531,  text: '霍斯勞一世「公正王」（Khosrow I Anushirvan）即位，整頓稅制、保護農民，薩珊帝國黃金時代' },
  { year:  602,  text: '霍斯勞二世發動大規模戰爭，佔領敘利亞、巴勒斯坦、埃及，一度幾乎征服拜占庭帝國全境' },
  { year:  628,  text: '拜占庭皇帝希拉克略反攻，薩珊帝國因長年戰爭元氣大傷，隨後迅速崩潰' },

  // ── 阿拉伯征服 ──────────────────────────────────────────────────────
  { year:  637,  text: '卡迪西亞戰役（Battle of al-Qadisiyyah）：阿拉伯軍隊擊潰薩珊主力' },
  { year:  651,  text: '末代薩珊王雅茲德格德三世（Yazdegerd III）遭刺殺，薩珊帝國正式終結，伊斯蘭化開始' },

  // ── 波斯文藝復興 ────────────────────────────────────────────────────
  { year:  874,  text: '薩曼王朝（Samanid）在呼羅珊建立波斯文化復興基地，波斯語文學重新崛起' },
  { year: 1010,  text: '詩人菲爾多西（Ferdowsi）完成《列王紀》（Shahnameh）——波斯民族史詩，六萬行詩歌' },

  // ── 蒙古與帖木兒 ────────────────────────────────────────────────────
  { year: 1219,  text: '成吉思汗入侵花剌子模帝國（今伊朗/中亞），屠城無數，波斯大量人口與文化遺產毀於一旦' },
  { year: 1381,  text: '帖木兒（Timur）攻陷伊斯法罕，壘起七萬人頭骨塔，波斯再度遭受毀滅性打擊' },

  // ── 薩法維王朝 ──────────────────────────────────────────────────────
  { year: 1501,  text: '伊斯瑪儀一世建立薩法維王朝，宣布十二伊瑪目什葉派為國教，奠定現代伊朗的宗教認同' },
  { year: 1514,  text: '查爾迪蘭戰役（Battle of Chaldiran）：薩法維軍被奧斯曼火器所敗，形成伊斯蘭世界遜/什兩派長期對峙格局' },
  { year: 1587,  text: '沙阿巴斯一世（Shah Abbas I）即位，以伊斯法罕為都建設曠世宮殿，薩法維進入黃金時代' },

  // ── 近現代 ──────────────────────────────────────────────────────────
  { year: 1739,  text: '納迪爾沙（Nader Shah）入侵印度，洗劫德里，奪走孔雀王座與光之山鑽石（Koh-i-Noor）' },
  { year: 1813,  text: '《古利斯坦條約》：伊朗被迫將高加索地區割讓俄羅斯，喪失大片領土' },
  { year: 1906,  text: '伊朗立憲革命：民眾迫使卡加爾王朝接受憲法，建立首屆伊朗議會（馬吉利斯）' },
  { year: 1908,  text: '胡齊斯坦發現石油，英波石油公司成立，中東石油時代開啟' },
  { year: 1925,  text: '禮薩汗建立巴列維王朝，推行世俗化現代化改革，仿效土耳其凱末爾' },
  { year: 1951,  text: '摩薩台（Mossadegh）宣布石油國有化，1953年遭美英中情局政變推翻（阿賈克斯行動）' },
  { year: 1979,  text: '伊斯蘭革命：霍梅尼領導民眾推翻巴列維王朝，建立政教合一的伊斯蘭共和國' },
  { year: 1980,  text: '兩伊戰爭爆發，薩達姆入侵伊朗，歷時八年，雙方逾百萬人死傷' },
  { year: 2015,  text: '伊核協議（JCPOA）簽署，伊朗同意限制核計劃以換取制裁解除' },
];
