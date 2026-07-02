// 古希臘歷史時間線資料
// 年份均為近似學術估計，負數為西元前

const GR_ROW_LABELS = ['主要時期', '城邦／細分'];

const GR_GROUPS = [

  // ══ Row 0 主要時期（連續）══════════════════════════════════════════
  // 希臘文明建立到滅亡（-2500 ~ -146）：全色顯示
  { name:'青銅時代希臘',    en:'Bronze Age Greece (Minoan & Mycenaean)', start:-2500, end:-1100, color:'#1e3a8a', row:0, wikiEn:'Bronze_Age_Greece' },
  { name:'希臘黑暗時代',    en:'Greek Dark Ages',                        start:-1100, end: -800, color:'#374151', row:0, wikiEn:'Greek_Dark_Ages' },
  { name:'古風時代',        en:'Archaic Period (city-states, colonization)', start:-800, end:-480, color:'#1d4ed8', row:0, wikiEn:'Archaic_Greece' },
  { name:'古典時代',        en:'Classical Period – Golden Age of Greece', start:-480, end:-323, color:'#2563eb', row:0, wikiEn:'Classical_Greece' },
  { name:'希臘化時代',      en:'Hellenistic Period (after Alexander)',    start:-323, end:-146, color:'#3b82f6', row:0, wikiEn:'Hellenistic_period' },
  // 羅馬征服後——外族統治（淡化）
  { name:'羅馬統治',        en:'Roman Greece (provincia Achaea)',         start:-146, end: 330, color:'#ef4444', row:0, dim:true, wikiEn:'Roman_Greece' },
  { name:'拜占庭帝國',      en:'Byzantine Empire (Greek-speaking Rome)',  start: 330, end:1453, color:'#7c3aed', row:0, dim:true, wikiEn:'Byzantine_Empire' },
  { name:'奧斯曼統治',      en:'Ottoman Rule',                           start:1453, end:1821, color:'#14b8a6', row:0, dim:true, wikiEn:'Ottoman_Greece' },
  { name:'現代希臘',        en:'Modern Greece (independent state)',       start:1821, end:2026, color:'#1d4ed8', row:0, wikiEn:'Greece' },

  // ══ Row 1 城邦與細分時期════════════════════════════════════════════
  // 青銅時代文明
  { name:'米諾斯文明',      en:'Minoan Civilization (Crete)',            start:-2500, end:-1450, color:'#0f172a', row:1, wikiEn:'Minoan_civilization' },
  { name:'邁錫尼文明',      en:'Mycenaean Civilization',                 start:-1450, end:-1100, color:'#1e3a8a', row:1, wikiEn:'Mycenaean_Greece' },
  // 古典時代城邦競爭
  { name:'雅典民主奠基',    en:'Athenian Democracy (Solon→Cleisthenes)', start: -594, end: -490, color:'#1d4ed8', row:1 },
  { name:'雅典黃金時代',    en:'Periclean Athens – peak of Greek culture', start:-461, end:-404, color:'#60a5fa', row:1 },
  { name:'斯巴達霸權',      en:'Spartan Hegemony (post-Athens)',         start: -404, end: -371, color:'#6b7280', row:1 },
  { name:'底比斯霸權',      en:'Theban Hegemony (Epaminondas)',          start: -371, end: -338, color:'#7c3aed', row:1 },
];

const GR_EVENTS = [
  // ── 青銅時代 ───────────────────────────────────────────────────────
  { year: -2500, text: '米諾斯文明（Minoan）在克里特島鼎盛，克諾索斯宮殿為當時愛琴海最壯麗的建築，壁畫生動，已有初步文字（線形文字A）' },
  { year: -1600, text: '邁錫尼文明（Mycenaean）在希臘大陸興起，黃金面具、宮牆城堡，荷馬史詩所描述的英雄時代背景' },
  { year: -1450, text: '米諾斯文明突然崩潰（可能因火山爆發或邁錫尼入侵），邁錫尼人佔據克里特島' },
  { year: -1250, text: '特洛伊戰爭（傳說）：邁錫尼諸王聯合遠征特洛伊，史詩《伊利亞特》與《奧德賽》的歷史核心' },
  { year: -1200, text: '「青銅時代崩潰」：邁錫尼文明瓦解，海上民族入侵，希臘進入黑暗時代，文字失傳，城市廢棄' },

  // ── 古風時代 ───────────────────────────────────────────────────────
  { year:  -776, text: '第一屆奧林匹克運動會（Olympic Games）在奧林匹亞舉行，四年一度成為全希臘文化統一的象徵' },
  { year:  -750, text: '荷馬（Homer）史詩《伊利亞特》《奧德賽》定型，成為希臘文明的精神根基' },
  { year:  -621, text: '德拉古（Draco）制定雅典第一部成文法律，以嚴苛著稱（「嚴酷如德拉古」的語源）' },
  { year:  -594, text: '梭倫（Solon）改革：廢除債務奴隸制，按財產分等級享有政治權利，雅典民主的起點' },
  { year:  -585, text: '米利都的泰勒斯（Thales）預測日食，以自然而非神話解釋世界——西方哲學與科學之父' },
  { year:  -546, text: '居魯士大帝征服利底亞，波斯帝國進逼小亞細亞希臘城邦（伊奧尼亞），埋下波希戰爭的導火索' },
  { year:  -508, text: '克里斯提尼（Cleisthenes）改革：以地域取代血緣劃分部族，雅典直接民主制度正式確立，為人類歷史首創' },

  // ── 波希戰爭 ───────────────────────────────────────────────────────
  { year:  -499, text: '伊奧尼亞起義（Ionian Revolt）：小亞細亞希臘城邦反抗波斯，雅典出兵援助，引爆波希戰爭' },
  { year:  -490, text: '馬拉松戰役（Battle of Marathon）：雅典軍以少勝多擊退波斯，傳令士兵費里庇德斯奔跑四十二公里報捷後倒地而死——「馬拉松」由此而來' },
  { year:  -480, text: '波斯薛西斯大軍入侵：斯巴達王李奧尼達（Leonidas）率三百壯士守溫泉關（Thermopylae）壯烈戰死；薩拉米斯海戰雅典以少勝多大敗波斯艦隊' },
  { year:  -479, text: '普拉提亞戰役（Battle of Plataea）：希臘聯軍決定性擊敗波斯陸軍，波希戰爭終結，希臘文明得以延續' },

  // ── 古典時代 ───────────────────────────────────────────────────────
  { year:  -477, text: '提洛同盟（Delian League）建立，雅典以防禦波斯為名主導希臘各城邦，逐步形成雅典帝國' },
  { year:  -461, text: '伯里克利（Pericles）執政，雅典進入黃金時代：帕特農神廟、悲劇戲劇、哲學全面繁榮' },
  { year:  -447, text: '帕特農神廟（Parthenon）開始興建，雕刻家菲狄亞斯主持，供奉雅典娜女神，為古代最偉大建築之一' },
  { year:  -431, text: '伯羅奔尼撒戰爭（Peloponnesian War）爆發：雅典對斯巴達，希臘城邦世界陷入長達二十七年的自相殘殺' },
  { year:  -429, text: '伯里克利死於瘟疫，雅典失去最偉大的政治家；同年哲學家柏拉圖誕生' },
  { year:  -404, text: '雅典向斯巴達投降，伯羅奔尼撒戰爭結束，雅典帝國瓦解，希臘城邦元氣大傷' },
  { year:  -399, text: '蘇格拉底（Socrates）被雅典法庭以「腐化青年、褻瀆神明」定罪，從容服毒而死——西方哲學最著名的殉道' },
  { year:  -387, text: '柏拉圖（Plato）在雅典創立學院（Academy），西方最古老的高等教育機構' },
  { year:  -371, text: '留克特拉戰役（Battle of Leuctra）：底比斯名將伊帕米農達（Epaminondas）以斜線陣型大敗斯巴達，結束斯巴達百年霸權' },
  { year:  -335, text: '亞里士多德（Aristotle）在雅典創立呂克昂學院（Lyceum），系統整理邏輯、物理、生物、倫理、政治學' },
  { year:  -338, text: '喀羅尼亞戰役（Battle of Chaeronea）：腓力二世與亞歷山大聯手，擊敗雅典-底比斯聯軍，希臘城邦獨立時代終結' },

  // ── 希臘化時代 ─────────────────────────────────────────────────────
  { year:  -323, text: '亞歷山大大帝去世，希臘化時代（Hellenistic Age）開始——希臘文化隨帝國擴散至埃及、波斯、印度' },
  { year:  -322, text: '亞里士多德去世（同年拉米亞戰爭中雅典再敗馬其頓）；德摩斯梯尼服毒自盡，古典雅典精神畫上句點' },
  { year:  -287, text: '阿基米德（Archimedes）誕生於西西里，後發現浮力定律、槓桿原理、計算π' },
  { year:  -146, text: '羅馬攻陷並摧毀科林斯（Corinth），希臘成為羅馬行省「阿凱亞」，政治獨立徹底終結；但希臘文化征服了羅馬' },

  // ── 現代 ───────────────────────────────────────────────────────────
  { year:  1821, text: '希臘獨立戰爭（Greek War of Independence）爆發，拜倫勳爵等歐洲志士支援，1829年希臘正式獨立' },
  { year:  1896, text: '雅典舉辦第一屆現代奧林匹克運動會，向古希臘傳統致敬，奧運重生' },
];
