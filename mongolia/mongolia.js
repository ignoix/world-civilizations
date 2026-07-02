// 蒙古帝國歷史時間線資料
// 年份均為近似學術估計，負數為西元前

const MG_ROW_LABELS = ['主要時期', '大汗／汗國'];

const MG_GROUPS = [

  // ══ Row 0 主要時期（連續）══════════════════════════════════════════
  // 蒙古帝國之前的草原先民（淡化——前身背景）
  { name:'草原先民',        en:'Early Steppe Peoples (proto-Mongol)',    start:-2500, end: -300, color:'#374151', row:0, dim:true },
  { name:'匈奴帝國',        en:'Xiongnu Empire',                         start: -300, end:  150, color:'#4b5563', row:0, dim:true },
  { name:'草原諸汗（鮮卑→突厥→契丹）', en:'Steppe Khanates (Xianbei → Turks → Khitan)', start:150, end:1206, color:'#6b7280', row:0, dim:true },
  // 蒙古帝國建立到衰亡（全色顯示）
  { name:'蒙古帝國',        en:'Mongol Empire – Genghis Khan & successors', start:1206, end:1259, color:'#92400e', row:0, wikiEn:'Mongol_Empire' },
  { name:'四大汗國時期',    en:'Four Khanates (Yuan / Ilkhanate / Golden Horde / Chagatai)', start:1259, end:1368, color:'#b45309', row:0, wikiEn:'Division_of_the_Mongol_Empire' },
  { name:'北元及後繼',      en:'Northern Yuan & Successor States',       start:1368, end:1502, color:'#ca8a04', row:0, wikiEn:'Northern_Yuan_dynasty' },
  // 喪失獨立（淡化）
  { name:'清朝統治',        en:'Qing Dynasty Rule (Manchu conquest)',    start:1502, end:1911, color:'#ca8a04', row:0, dim:true },
  // 現代蒙古（全色）
  { name:'現代蒙古',        en:'Modern Mongolia (independent state)',    start:1911, end:2026, color:'#15803d', row:0 },

  // ══ Row 1 大汗與汗國細分════════════════════════════════════════════
  // 前蒙古草原強權（淡化）
  { name:'匈奴冒頓單于',    en:'Xiongnu – Modu Chanyu (peak power)',     start: -209, end:  -60, color:'#4b5563', row:1, dim:true },
  { name:'突厥第一汗國',    en:'First Turkic Khaganate',                 start:  552, end:  630, color:'#6b7280', row:1, dim:true },
  { name:'契丹/遼帝國',     en:'Khitan / Liao Empire',                   start:  907, end: 1125, color:'#6b7280', row:1, dim:true },
  // 蒙古興起與鼎盛（全色）
  { name:'鐵木真統一蒙古',  en:'Temüjin unites Mongol tribes',           start: 1189, end: 1206, color:'#dc2626', row:1 },
  { name:'成吉思汗征服',    en:'Genghis Khan – conquest of Asia',        start: 1206, end: 1227, color:'#b91c1c', row:1, wikiEn:'Genghis_Khan' },
  { name:'西征歐亞（窩闊台-蒙哥）', en:'Western Campaigns (Ögedei–Möngke)', start:1229, end:1259, color:'#ef4444', row:1, wikiEn:'Mongol_invasions_and_conquests' },
  { name:'忽必烈/元朝',     en:'Kublai Khan / Yuan Dynasty (China)',     start: 1260, end: 1368, color:'#d97706', row:1, wikiEn:'Yuan_dynasty' },
  { name:'伊爾汗國（波斯）', en:'Ilkhanate (Persia & Middle East)',      start: 1256, end: 1335, color:'#f97316', row:1, wikiEn:'Ilkhanate' },
  { name:'金帳汗國（俄羅斯）', en:'Golden Horde (Russia & Eastern Europe)', start:1242, end:1502, color:'#ca8a04', row:1, wikiEn:'Golden_Horde' },
  // 蒙古後繼（淡化）
  { name:'帖木兒帝國',      en:'Timurid Empire (Mongol descendant)',     start: 1370, end: 1507, color:'#78350f', row:1, dim:true },
];

const MG_EVENTS = [
  // ── 草原先民 ───────────────────────────────────────────────────────
  { year:  -300, text: '匈奴在蒙古草原崛起，建立第一個草原帝國，長期威脅中原——中國修建長城的主要原因之一' },
  { year:  -209, text: '冒頓單于（Modu Chanyu）即位，建立強大匈奴帝國，北起貝加爾湖、南至長城，迫使漢朝和親納貢' },
  { year:   552, text: '突厥（Göktürk）在蒙古高原建立第一突厥汗國，取代柔然，控制絲綢之路北路' },
  { year:   907, text: '契丹首領耶律阿保機建立契丹（遼）帝國，統治蒙古與中國北方長達二百年' },

  // ── 成吉思汗崛起 ───────────────────────────────────────────────────
  { year:  1162, text: '鐵木真（後稱成吉思汗）誕生於蒙古草原斡難河畔，幼年父親遭塔塔兒人毒殺，歷盡艱辛' },
  { year:  1189, text: '鐵木真被擁立為蒙古部落首領，開始統一蒙古各部的漫長征程' },
  { year:  1206, text: '鐵木真統一蒙古所有部落，忽里勒台大會（Kurultai）尊稱他為「成吉思汗」（宇宙之主），蒙古帝國正式建立' },

  // ── 成吉思汗征服 ───────────────────────────────────────────────────
  { year:  1211, text: '成吉思汗率軍南下攻打金朝，突破長城，開啟對中國北方的征伐' },
  { year:  1215, text: '蒙古軍攻陷金朝中都（今北京），掠奪後焚城，金朝遷都開封' },
  { year:  1219, text: '成吉思汗西征花剌子模帝國（今伊朗/中亞）——報復商隊被殺事件，展開史上最具破壞性的征伐，撒馬爾罕、布哈拉等古城化為廢墟' },
  { year:  1221, text: '蒙古軍橫掃呼羅珊（波斯東北部），梅爾夫、尼沙普爾等百萬人口大城遭屠城，中亞文明遭到毀滅性打擊' },
  { year:  1227, text: '成吉思汗在征西夏途中去世，臨終命秘不發喪以保持士氣；帝國版圖已從太平洋延伸至裏海，史上最大陸地帝國雛形已成' },

  // ── 繼續擴張（窩闊台、蒙哥）───────────────────────────────────────
  { year:  1234, text: '蒙古聯合南宋滅金朝，北方中國全入版圖' },
  { year:  1237, text: '拔都（Batu Khan）率大軍西征，蒙古鐵騎橫掃俄羅斯諸公國，基輔（Kiev）被夷為平地' },
  { year:  1241, text: '列格尼卡戰役（Battle of Legnica）：蒙古軍大敗波蘭/德國聯軍；穆希戰役擊潰匈牙利，西歐陷入恐慌；窩闊台猝死，西征被迫停止，歐洲幸免' },
  { year:  1258, text: '旭烈兀（Hulagu Khan）攻陷巴格達，末代阿拔斯哈里發被毯卷踩死（避免流血），圖書館藏書投入底格里斯河，伊斯蘭黃金時代終結' },
  { year:  1260, text: '艾因賈魯特戰役（Battle of Ain Jalut）：馬穆魯克埃及擊敗蒙古軍——蒙古帝國第一次在野戰中被擊敗，西征就此停止' },

  // ── 忽必烈與帝國分裂 ───────────────────────────────────────────────
  { year:  1260, text: '忽必烈（Kublai Khan）即大汗位，帝國實際分裂為四大汗國，各自為政' },
  { year:  1271, text: '忽必烈建立元朝，定都大都（今北京）；馬可·波羅（Marco Polo）後來在此居住十七年' },
  { year:  1274, text: '忽必烈第一次東征日本，颱風（「神風」Kamikaze）摧毀艦隊，日本幸免' },
  { year:  1279, text: '蒙古滅南宋，完成統一中國；崖山海戰末代宋臣陸秀夫抱帝跳海，數萬人隨之投海' },
  { year:  1281, text: '忽必烈第二次征日，更大颱風再度摧毀十萬大軍，日本人視之為神佑' },
  { year:  1294, text: '忽必烈去世，元朝走向衰落；帝國版圖在其統治下已達歷史最大——3300萬平方公里' },

  // ── 帝國解體 ───────────────────────────────────────────────────────
  { year:  1368, text: '朱元璋建立明朝，驅逐元朝，蒙古人退回草原建立「北元」；一個世紀的蒙古對中國統治結束' },
  { year:  1370, text: '帖木兒（Timur，自稱成吉思汗後裔）在撒馬爾罕崛起，建立帖木兒帝國，繼承蒙古征服傳統' },
  { year:  1398, text: '帖木兒洗劫德里，印度德里蘇丹國一蹶不振' },
  { year:  1402, text: '帖木兒在安卡拉戰役（Battle of Ankara）生擒奧斯曼蘇丹巴耶濟德一世，奧斯曼帝國幾近崩潰' },
  { year:  1405, text: '帖木兒在準備進攻中國途中病逝，其帝國隨後分裂' },
  { year:  1502, text: '金帳汗國瓦解，蒙古對俄羅斯長達二百四十年的統治（「韃靼枷鎖」）徹底終結' },

  // ── 現代蒙古 ───────────────────────────────────────────────────────
  { year:  1691, text: '喀爾喀蒙古歸附清朝，外蒙古正式納入大清版圖' },
  { year:  1911, text: '辛亥革命爆發，外蒙古趁機宣布獨立，哲布尊丹巴呼圖克圖被推為君主' },
  { year:  1924, text: '蒙古人民共和國成立，成為繼蘇聯後世界第二個共產主義國家' },
  { year:  1990, text: '蒙古推行民主化改革，放棄一黨制，舉行多黨選舉' },
];
