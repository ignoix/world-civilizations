// 赫梯帝國歷史時間線資料
// 年份均為近似學術估計，負數為西元前

const HT_ROW_LABELS = ['主要時期', '國王／細分'];

const HT_GROUPS = [

  // ══ Row 0 主要時期（連續）══════════════════════════════════════════
  // 赫梯之前的安納托利亞（淡化——前身背景）
  { name:'前赫梯安納托利亞', en:'Pre-Hittite Anatolia (Hatti, Assyrian colonies)', start:-2500, end:-1700, color:'#44403c', row:0, dim:true },
  // 赫梯文明建立到新赫梯諸國滅亡（全色）
  { name:'赫梯古王國',      en:'Old Hittite Kingdom',                    start:-1700, end:-1450, color:'#78350f', row:0, wikiEn:'Old_Hittite_Kingdom' },
  { name:'赫梯帝國（新王國）', en:'Hittite Empire / New Kingdom – peak power', start:-1450, end:-1180, color:'#92400e', row:0, wikiEn:'Hittites' },
  // 青銅時代崩潰後，新赫梯諸國在敘利亞延續赫梯文化
  { name:'新赫梯諸國',      en:'Neo-Hittite States (Syria & SE Anatolia)', start:-1180, end: -700, color:'#a16207', row:0, wikiEn:'Neo-Hittite_kingdoms' },
  // 赫梯滅亡後——亞述及後繼外族統治（淡化）
  { name:'亞述/波斯/馬其頓', en:'Assyrian, Persian & Macedonian Rule',    start: -700, end:  395, color:'#374151', row:0, dim:true },
  { name:'拜占庭/奧斯曼',   en:'Byzantine & Ottoman Rule',               start:  395, end: 1923, color:'#4b5563', row:0, dim:true },
  { name:'現代土耳其',      en:'Modern Turkey',                          start: 1923, end: 2026, color:'#6b7280', row:0, dim:true },

  // ══ Row 1 重要國王細分════════════════════════════════════════════
  // 古王國奠基
  { name:'哈圖西里一世',    en:'Hattusili I – founder, established Hattusa', start:-1650, end:-1620, color:'#b45309', row:1 },
  { name:'穆爾西里一世',    en:'Mursili I – sacked Babylon, ended Old Babylonian', start:-1620, end:-1590, color:'#ca8a04', row:1 },
  // 帝國中衰（內亂期）
  { name:'中王國混亂期',    en:'Middle Kingdom – internal struggles',    start:-1500, end:-1380, color:'#92400e', row:1, dim:true },
  // 帝國鼎盛期
  { name:'蘇皮魯利烏馬一世', en:'Suppiluliuma I – rebuilt empire, destroyed Mitanni', start:-1380, end:-1322, color:'#d97706', row:1 },
  { name:'穆爾西里二世',    en:'Mursili II – consolidated empire',       start:-1321, end:-1295, color:'#f59e0b', row:1 },
  { name:'穆瓦塔利二世',    en:'Muwatalli II – Battle of Kadesh vs Ramesses II', start:-1295, end:-1272, color:'#fbbf24', row:1 },
  { name:'哈圖西里三世',    en:'Hattusili III – signed world\'s first peace treaty', start:-1267, end:-1237, color:'#fcd34d', row:1 },
  { name:'圖徹里亞四世',    en:'Tudhaliya IV – last major king',         start:-1237, end:-1209, color:'#fde68a', row:1 },
  // 新赫梯重要城邦
  { name:'卡爾赫米什城邦',  en:'Carchemish – most powerful Neo-Hittite state', start:-1180, end: -717, color:'#a16207', row:1 },
];

const HT_EVENTS = [
  // ── 前赫梯時代 ─────────────────────────────────────────────────────
  { year: -2500, text: '哈梯人（Hatti）已在安納托利亞中部建立城邦，哈圖薩（Hattusa）地區已有人類聚落' },
  { year: -1950, text: '亞述商人在安納托利亞建立商業殖民地「卡魯姆」（Karum），其中卡尼什（Kanesh）最為重要，留下大量泥板商業文書' },
  { year: -1800, text: '庫薩拉城邦（Kussara）的皮塔那（Pithana）與其子安尼塔斯（Anitta）征服周邊城邦，成為赫梯統一的先驅' },

  // ── 赫梯古王國 ─────────────────────────────────────────────────────
  { year: -1650, text: '哈圖西里一世（Hattusili I）建都哈圖薩（Hattusa，今波阿茲柯伊），正式建立赫梯古王國，遠征敘利亞' },
  { year: -1620, text: '穆爾西里一世（Mursili I）遠征美索不達米亞，突襲並洗劫巴比倫城，古巴比倫時代終結——赫梯帝國最早展示的遠程打擊能力' },
  { year: -1590, text: '穆爾西里一世班師途中遭宮廷政變謀殺，赫梯王位繼承危機開始，古王國陷入百年內亂' },

  // ── 赫梯帝國（新王國）──────────────────────────────────────────────
  { year: -1380, text: '蘇皮魯利烏馬一世（Suppiluliuma I）即位，進行憲法改革、重組軍隊，將赫梯重塑為超級大國' },
  { year: -1350, text: '蘇皮魯利烏馬一世摧毀米坦尼帝國（Mitanni），奪取敘利亞，赫梯成為與埃及並列的近東兩大強權之一' },
  { year: -1323, text: '埃及圖坦卡蒙王后阿赫桑那摩（Ankhesenamun）密信蘇皮魯利烏馬，請求派一位赫梯王子嫁給她；王子途中遭埃及人謀殺，引發兩國緊張' },
  { year: -1295, text: '穆瓦塔利二世（Muwatalli II）即位，遷都庫瑪尼（Kumani），為對抗埃及做準備' },
  { year: -1274, text: '卡迭石戰役（Battle of Kadesh）：穆瓦塔利二世對陣埃及拉美西斯二世——史上最早有詳細文字記載的大規模會戰，雙方各宣稱勝利，實為平局' },
  { year: -1258, text: '《卡迭石和平條約》（Treaty of Kadesh）簽訂：赫梯王哈圖西里三世與拉美西斯二世互換銀版盟約——史上最早的國際和平條約，複製品今日陳列於聯合國總部' },
  { year: -1237, text: '圖徹里亞四世（Tudhaliya IV）在位，建造亞茲勒卡亞（Yazılıkaya）岩壁神廟，雕刻七十多位神祇——赫梯宗教藝術的巔峰' },
  { year: -1209, text: '蘇皮魯利烏馬二世（最後一任大王）在位，帝國開始出現饑荒與內憂外患的跡象' },

  // ── 青銅時代崩潰 ───────────────────────────────────────────────────
  { year: -1200, text: '「青銅時代大崩潰」：海上民族（Sea Peoples）大規模入侵，赫梯帝國各城市相繼被毀，糧食供應中斷，帝國在數十年間迅速瓦解' },
  { year: -1180, text: '赫梯首都哈圖薩被徹底焚毀廢棄，赫梯帝國覆滅；但在敘利亞與東南安納托利亞，新赫梯城邦繼續延續赫梯語言與文化' },

  // ── 新赫梯諸國 ─────────────────────────────────────────────────────
  { year: -1000, text: '新赫梯諸國（卡爾赫米什、阿爾帕德、薩馬阿爾等）在北敘利亞繁盛，延續赫梯象形文字與藝術傳統' },
  { year:  -853, text: '卡爾赫米什（Carchemish）參與對抗亞述的十二國聯軍（卡爾卡爾戰役），顯示新赫梯城邦仍是不可忽視的力量' },
  { year:  -717, text: '亞述王薩珥根二世征服卡爾赫米什——最後一個主要新赫梯城邦滅亡，赫梯文明正式終結' },

  // ── 近現代考古 ─────────────────────────────────────────────────────
  { year:  1906, text: '德國考古學家在波阿茲柯伊（今土耳其中部）發掘哈圖薩遺址，出土三萬餘塊楔形文字泥板，揭開赫梯歷史的面紗' },
  { year:  1915, text: '捷克學者貝德里奇·흐羅茲尼（Bedřich Hrozný）破譯赫梯語，證明其為印歐語系——人類對古代語言認識的重大突破' },
];
