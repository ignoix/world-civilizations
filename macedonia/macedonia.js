// 馬其頓王國歷史時間線資料
// 年份均為近似學術估計，負數為西元前

const MK_ROW_LABELS = ['主要時期', '國王／細分'];

const MK_GROUPS = [

  // ══ Row 0 主要時期（連續）══════════════════════════════════════════
  // 馬其頓建立到滅亡（-808 ~ -148）：全色顯示
  { name:'早期馬其頓王國',  en:'Early Macedonian Kingdom (Argead Dynasty)', start:-808, end:-359, color:'#1e3a8a', row:0, wikiEn:'Kingdom_of_Macedon' },
  { name:'腓力二世統一希臘', en:'Philip II – Unification of Greece',        start:-359, end:-336, color:'#1d4ed8', row:0, wikiEn:'Philip_II_of_Macedon' },
  { name:'亞歷山大帝國',    en:'Alexander the Great – World Conquest',      start:-336, end:-323, color:'#d97706', row:0, wikiEn:'Alexander_the_Great' },
  { name:'繼業者戰爭',      en:'Wars of the Diadochi (Successor Wars)',     start:-323, end:-276, color:'#92400e', row:0, wikiEn:'Wars_of_the_Diadochi' },
  { name:'安提柯王朝',      en:'Antigonid Dynasty',                         start:-276, end:-148, color:'#1e40af', row:0, wikiEn:'Antigonid_dynasty' },
  // 馬其頓滅亡後——外族統治（淡化）
  { name:'羅馬行省',        en:'Roman Province of Macedonia',               start:-148, end: 330, color:'#ef4444', row:0, dim:true, wikiEn:'Macedonia_(Roman_province)' },
  { name:'拜占庭帝國',      en:'Byzantine Empire',                          start: 330, end:1453, color:'#7c3aed', row:0, dim:true, wikiEn:'Byzantine_Empire' },
  { name:'奧斯曼帝國',      en:'Ottoman Empire',                            start:1453, end:1821, color:'#14b8a6', row:0, dim:true, wikiEn:'Ottoman_Empire' },
  { name:'現代希臘',        en:'Modern Greece',                             start:1821, end:2026, color:'#1e40af', row:0, dim:true, wikiEn:'Greece' },

  // ══ Row 1 重要國王細分════════════════════════════════════════════
  // 早期重要國王
  { name:'阿基里烏斯一世',  en:'Archelaus I – Modernization of Macedonia', start:-413, end:-399, color:'#3b82f6', row:1 },
  // 馬其頓鼎盛期
  { name:'腓力二世',        en:'Philip II – sarissa phalanx, united Greece', start:-359, end:-336, color:'#2563eb', row:1 },
  { name:'亞歷山大三世（大帝）', en:'Alexander III the Great',             start:-336, end:-323, color:'#d97706', row:1 },
  // 繼業者
  { name:'卡山德',          en:'Cassander – regent/king of Macedon',       start:-316, end:-297, color:'#b45309', row:1 },
  { name:'安提柯二世',      en:'Antigonus II Gonatas – stabilized Antigonid rule', start:-276, end:-239, color:'#1d4ed8', row:1 },
  // 安提柯末期
  { name:'腓力五世',        en:'Philip V – fought Rome (First & Second Macedonian Wars)', start:-221, end:-179, color:'#1e40af', row:1 },
  { name:'珀爾修斯',        en:'Perseus – last king, defeated at Pydna',   start:-179, end:-168, color:'#374151', row:1, dim:true },
];

const MK_EVENTS = [
  // ── 早期王國 ───────────────────────────────────────────────────────
  { year:  -808, text: '阿爾格亞德王朝始祖珀爾狄卡斯一世（Perdiccas I）傳說建立馬其頓王國，位於希臘北方' },
  { year:  -413, text: '阿基里烏斯一世（Archelaus I）即位，改革軍制、修建道路，引進希臘文化，吸引歐里庇得斯等名家入宮' },

  // ── 腓力二世 ───────────────────────────────────────────────────────
  { year:  -359, text: '腓力二世（Philip II）即位，整頓軍隊，發明馬其頓長矛方陣（sarissa phalanx），徹底改變希臘戰爭形態' },
  { year:  -356, text: '亞歷山大誕生；同日傳說腓力在奧林匹克勝出、愛將帕曼紐打勝仗——三喜臨門，亞里士多德後來成為亞歷山大的老師' },
  { year:  -348, text: '腓力二世摧毀奧林索斯（Olynthus），控制整個色雷斯與北希臘' },
  { year:  -338, text: '喀羅尼亞戰役（Battle of Chaeronea）：腓力二世與18歲的亞歷山大聯手，擊敗雅典-底比斯聯軍，確立對全希臘的霸權' },
  { year:  -337, text: '科林斯同盟（League of Corinth）成立，腓力二世出任統帥，宣布以希臘聯軍征討波斯' },
  { year:  -336, text: '腓力二世在女兒婚禮上遭刺殺，20歲的亞歷山大臨危繼位' },

  // ── 亞歷山大大帝 ───────────────────────────────────────────────────
  { year:  -335, text: '亞歷山大迅速平定色雷斯與底比斯叛亂，摧毀底比斯以儆效尤（唯保留詩人品達的故居）' },
  { year:  -334, text: '亞歷山大率三萬五千人渡過赫勒斯滂，向波斯帝國宣戰；在格拉尼庫斯河首勝波斯軍' },
  { year:  -333, text: '伊蘇斯戰役（Battle of Issus）：亞歷山大大敗大流士三世，俘虜波斯王族，卻拒絕豐厚的求和條件' },
  { year:  -332, text: '亞歷山大征服腓尼基、埃及，在尼羅河三角洲建立亞歷山大城，埃及祭司擁戴他為法老' },
  { year:  -331, text: '高加米拉戰役（Battle of Gaugamela）：亞歷山大決定性大敗大流士三世，波斯帝國覆滅' },
  { year:  -330, text: '亞歷山大焚燒波斯波利斯，報復波希戰爭中波斯焚燒雅典；大流士三世遭部將殺害' },
  { year:  -327, text: '亞歷山大越過興都庫什山脈入侵印度，娶巴克特里亞貴族女羅克珊娜（Roxana）' },
  { year:  -326, text: '海達斯佩斯河戰役（Battle of the Hydaspes）：擊敗印度象軍；士兵拒絕繼續東進，亞歷山大被迫回師' },
  { year:  -323, text: '亞歷山大大帝在巴比倫宮中病逝，年僅三十二歲；臨終被問「帝國留給誰」，答「留給最強者」，帝國隨即分裂' },

  // ── 繼業者戰爭 ─────────────────────────────────────────────────────
  { year:  -322, text: '拉米亞戰爭（Lamian War）：雅典領導希臘反抗馬其頓，失敗後雅典民主徹底終結，德摩斯梯尼服毒自盡' },
  { year:  -321, text: '繼業者（Diadochi）大戰爆發：安提帕特、帕迪卡斯、托勒密、塞琉古、安提柯等將領互相征伐' },
  { year:  -301, text: '伊普蘇斯戰役（Battle of Ipsus）：繼業者大決戰，安提柯一世陣亡，帝國正式三分——塞琉古（亞洲）、托勒密（埃及）、馬其頓本土' },

  // ── 安提柯王朝 ─────────────────────────────────────────────────────
  { year:  -276, text: '安提柯二世（岡那塔斯）擊退入侵的高盧人，確立安提柯王朝對馬其頓的穩定統治' },
  { year:  -215, text: '腓力五世（Philip V）與迦太基漢尼拔締結同盟，引發羅馬介入希臘事務' },
  { year:  -197, text: '庫諾斯克法萊戰役（Battle of Cynoscephalae）：羅馬軍團擊敗腓力五世，馬其頓勢力衰退' },
  { year:  -168, text: '皮德納戰役（Battle of Pydna）：羅馬執政官保盧斯擊潰末代馬其頓王珀爾修斯，馬其頓王國滅亡' },
  { year:  -148, text: '馬其頓正式成為羅馬行省，希臘化世界的政治中心完全轉移至羅馬' },

  // ── 後繼時代 ───────────────────────────────────────────────────────
  { year:  1821, text: '希臘獨立戰爭爆發，歐洲列強支持下希臘脫離奧斯曼帝國獨立，現代希臘建國' },
  { year:  1913, text: '第二次巴爾幹戰爭後，希臘取得馬其頓大部分地區，馬其頓的名稱爭議延續至今' },
];
