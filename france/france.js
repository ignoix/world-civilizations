// 法國歷史時間線資料
// 年份均為近似學術估計，負數為西元前

const FR_ROW_LABELS = ['主要時期', '歷代君主'];

const FR_GROUPS = [

  // ══ Row 0 主要時期（連續）══════════════════════════════════════════
  { name:'高盧羅馬時期',    en:'Roman Gaul',                             start:  -58, end:  486, color:'#7c2d12', row:0, dim:true, wikiEn:'Roman_Gaul' },
  { name:'法蘭克王國',      en:'Frankish Kingdom',                       start:  486, end:  987, color:'#78350f', row:0, wikiEn:'Francia' },
  { name:'卡佩王朝法蘭西',  en:'Capetian France',                        start:  987, end: 1328, color:'#991b1b', row:0, wikiEn:'Capetian_dynasty' },
  { name:'瓦盧瓦王朝',      en:'Valois France',                          start: 1328, end: 1589, color:'#b91c1c', row:0, wikiEn:'House_of_Valois' },
  { name:'波旁王朝（舊制度）', en:'Bourbon France (Ancien Régime)',       start: 1589, end: 1792, color:'#dc2626', row:0, wikiEn:'House_of_Bourbon' },
  { name:'法國大革命',      en:'French Revolution',                      start: 1789, end: 1799, color:'#ef4444', row:0, wikiEn:'French_Revolution' },
  { name:'第一帝國',        en:'First French Empire (Napoleon)',         start: 1804, end: 1815, color:'#f59e0b', row:0, wikiEn:'First_French_Empire' },
  { name:'復辟與七月王朝',  en:'Bourbon Restoration / July Monarchy',    start: 1815, end: 1848, color:'#fbbf24', row:0, dim:true, wikiEn:'Bourbon_Restoration' },
  { name:'第二共和/第二帝國', en:'Second Republic / Second Empire',      start: 1848, end: 1870, color:'#a16207', row:0, dim:true },
  { name:'第三共和',        en:'Third Republic',                         start: 1870, end: 1940, color:'#7c3aed', row:0, wikiEn:'French_Third_Republic' },
  { name:'維希法國',        en:'Vichy France (occupation)',              start: 1940, end: 1944, color:'#4b5563', row:0, dim:true, wikiEn:'Vichy_France' },
  { name:'第四／第五共和',  en:'Fourth / Fifth Republic',                start: 1944, end: 2026, color:'#2563eb', row:0, wikiEn:'Fifth_French_Republic' },

  // ══ Row 1 歷代君主════════════════════════════════════════════════
  // ── 卡佩王朝（循環色：#f97316,#fb923c,#fdba74,#fed7aa）──────────────
  { name:'雨果·卡佩', en:'Hugh Capet – founded the Capetian dynasty',
    start:  987, end:  996, color:'#f97316', row:1, wikiEn:'Hugh_Capet' },
  { name:'羅貝爾二世', en:'Robert II "the Pious" – consolidated royal authority',
    start:  996, end: 1031, color:'#fb923c', row:1, dim:true },
  { name:'亨利一世', en:'Henry I – weak central power, strong feudal lords',
    start: 1031, end: 1060, color:'#fdba74', row:1, dim:true },
  { name:'腓力一世', en:'Philip I – excommunicated over bigamy',
    start: 1060, end: 1108, color:'#fed7aa', row:1, dim:true },
  { name:'路易六世', en:'Louis VI "the Fat" – strengthened monarchy vs. nobles',
    start: 1108, end: 1137, color:'#f97316', row:1, dim:true },
  { name:'路易七世', en:'Louis VII – Second Crusade; divorced Eleanor of Aquitaine',
    start: 1137, end: 1180, color:'#fb923c', row:1, dim:true },
  { name:'腓力二世', en:'Philip II "Augustus" – expanded royal domain, defeated King John',
    start: 1180, end: 1223, color:'#fdba74', row:1, wikiEn:'Philip_II_of_France' },
  { name:'路易八世', en:'Louis VIII "the Lion" – brief reign, Albigensian Crusade',
    start: 1223, end: 1226, color:'#fed7aa', row:1, dim:true },
  { name:'路易九世', en:'Louis IX (Saint Louis) – canonized saint-king, Crusades',
    start: 1226, end: 1270, color:'#f97316', row:1, wikiEn:'Louis_IX_of_France' },
  { name:'腓力三世', en:'Philip III "the Bold" – failed Aragonese Crusade',
    start: 1270, end: 1285, color:'#fb923c', row:1, dim:true },
  { name:'腓力四世', en:'Philip IV "the Fair" – suppressed Knights Templar, Avignon Papacy',
    start: 1285, end: 1314, color:'#fdba74', row:1, wikiEn:'Philip_IV_of_France' },
  { name:'路易十世', en:'Louis X – brief, chaotic reign',
    start: 1314, end: 1316, color:'#fed7aa', row:1, dim:true },
  { name:'腓力五世', en:'Philip V – established Salic Law precedent',
    start: 1316, end: 1322, color:'#f97316', row:1, dim:true },
  { name:'查理四世', en:'Charles IV "the Fair" – last direct Capetian, no male heir',
    start: 1322, end: 1328, color:'#fb923c', row:1, dim:true },

  // ── 瓦盧瓦王朝（循環色：#fbbf24,#fcd34d,#fde68a,#fef3c7）────────────
  { name:'腓力六世', en:'Philip VI – start of Hundred Years\' War',
    start: 1328, end: 1350, color:'#fbbf24', row:1, dim:true },
  { name:'約翰二世', en:'John II "the Good" – captured at Poitiers by English',
    start: 1350, end: 1364, color:'#fcd34d', row:1, dim:true },
  { name:'查理五世', en:'Charles V "the Wise" – reconquered much lost territory',
    start: 1364, end: 1380, color:'#fde68a', row:1 },
  { name:'查理六世', en:'Charles VI "the Mad" – mental illness, Treaty of Troyes',
    start: 1380, end: 1422, color:'#fef3c7', row:1, dim:true },
  { name:'查理七世', en:'Charles VII "the Victorious" – aided by Joan of Arc, won Hundred Years\' War',
    start: 1422, end: 1461, color:'#fbbf24', row:1, wikiEn:'Charles_VII_of_France' },
  { name:'路易十一世', en:'Louis XI "the Spider" – cunning centralizer of royal power',
    start: 1461, end: 1483, color:'#fcd34d', row:1, dim:true },
  { name:'查理八世', en:'Charles VIII – invaded Italy, started Italian Wars',
    start: 1483, end: 1498, color:'#fde68a', row:1, dim:true },
  { name:'路易十二世', en:'Louis XII – "Father of the People"',
    start: 1498, end: 1515, color:'#fef3c7', row:1, dim:true },
  { name:'弗朗索瓦一世', en:'Francis I – Renaissance patron, rival of Charles V',
    start: 1515, end: 1547, color:'#fbbf24', row:1, wikiEn:'Francis_I_of_France' },
  { name:'亨利二世', en:'Henry II – died in jousting accident',
    start: 1547, end: 1559, color:'#fcd34d', row:1, dim:true },
  { name:'弗朗索瓦二世', en:'Francis II – brief reign, married Mary Queen of Scots',
    start: 1559, end: 1560, color:'#fde68a', row:1, dim:true },
  { name:'查理九世', en:'Charles IX – St. Bartholomew\'s Day Massacre',
    start: 1560, end: 1574, color:'#fef3c7', row:1, dim:true },
  { name:'亨利三世', en:'Henry III – last Valois king, assassinated',
    start: 1574, end: 1589, color:'#fbbf24', row:1, dim:true },

  // ── 波旁王朝（循環色：#a78bfa,#c4b5fd,#ddd6fe）─────────────────────
  { name:'亨利四世', en:'Henry IV – Edict of Nantes, "Paris is worth a Mass"',
    start: 1589, end: 1610, color:'#a78bfa', row:1, wikiEn:'Henry_IV_of_France' },
  { name:'路易十三世', en:'Louis XIII – ruled with Cardinal Richelieu',
    start: 1610, end: 1643, color:'#c4b5fd', row:1, dim:true },
  { name:'路易十四世', en:'Louis XIV – the Sun King, absolute monarchy peak',
    start: 1643, end: 1715, color:'#ddd6fe', row:1, wikiEn:'Louis_XIV' },
  { name:'路易十五世', en:'Louis XV – lost Seven Years\' War colonies',
    start: 1715, end: 1774, color:'#a78bfa', row:1, dim:true },
  { name:'路易十六世', en:'Louis XVI – executed in the French Revolution',
    start: 1774, end: 1792, color:'#c4b5fd', row:1, wikiEn:'Louis_XVI' },

  // ── 革命、帝制與復辟（循環色：#dc2626,#f59e0b,#fde68a）─────────────
  { name:'拿破崙一世', en:'Napoleon I – Emperor of the French, conquered much of Europe',
    start: 1804, end: 1815, color:'#f59e0b', row:1, wikiEn:'Napoleon' },
  { name:'路易十八世', en:'Louis XVIII – Bourbon Restoration after Napoleon',
    start: 1815, end: 1824, color:'#fde68a', row:1, dim:true },
  { name:'查理十世', en:'Charles X – overthrown in the July Revolution',
    start: 1824, end: 1830, color:'#fef3c7', row:1, dim:true },
  { name:'路易-腓力一世', en:'Louis-Philippe I "Citizen King" – overthrown in 1848 Revolution',
    start: 1830, end: 1848, color:'#fde68a', row:1, dim:true },
  { name:'拿破崙三世', en:'Napoleon III – Second Empire, defeated in Franco-Prussian War',
    start: 1852, end: 1870, color:'#f59e0b', row:1, wikiEn:'Napoleon_III' },

  // ── 現代法國元首────────────────────────────────────────────────────
  { name:'戴高樂', en:'Charles de Gaulle – founded the Fifth Republic',
    start: 1958, end: 1969, color:'#3b82f6', row:1, wikiEn:'Charles_de_Gaulle' },
];

const FR_EVENTS = [
  // ── 高盧羅馬與法蘭克王國 ───────────────────────────────────────────
  { year:   -58, text: '凱撒發動高盧戰爭（-58至-50），征服今日法國全境，納入羅馬版圖' },
  { year:   486, text: '法蘭克國王克洛維一世擊敗羅馬末代將領，建立法蘭克王國，墨洛溫王朝開始' },
  { year:   496, text: '克洛維一世皈依天主教，法蘭克成為西歐最早信奉天主教的日耳曼王國' },
  { year:   732, text: '圖爾戰役：查理·馬特擊退倭馬亞入侵軍，阻止伊斯蘭勢力深入西歐' },
  { year:   768, text: '查理曼即位法蘭克國王，開始大規模擴張與文化復興（加洛林文藝復興）' },
  { year:   800, text: '教皇利奧三世為查理曼加冕「羅馬人的皇帝」，神聖羅馬帝國理念誕生' },
  { year:   843, text: '《凡爾登條約》三分加洛林帝國，西法蘭克王國奠定日後法國雛形' },

  // ── 卡佩王朝與中世紀 ───────────────────────────────────────────────
  { year:   987, text: '雨果·卡佩當選法蘭克國王，建立卡佩王朝，法蘭西王國正式開端' },
  { year:  1066, text: '諾曼第公爵威廉征服英格蘭，法國諾曼第與英格蘭王室關係密切糾纏數百年' },
  { year:  1163, text: '巴黎聖母院開始興建，哥德式建築代表作歷時近兩百年完工' },
  { year:  1309, text: '教皇克萊孟五世遷居亞維儂，開始「亞維儂教廷」（教皇的巴比倫之囚）時期' },
  { year:  1337, text: '英法百年戰爭爆發（1337–1453），爭奪法國王位與領土控制權' },
  { year:  1347, text: '黑死病經由地中海港口傳入法國，奪走近三分之一人口' },
  { year:  1429, text: '聖女貞德解奧爾良之圍，扭轉百年戰爭局勢，後於1431年被處以火刑' },
  { year:  1453, text: '百年戰爭結束，法國收復除加萊外幾乎全部領土' },

  // ── 文藝復興與宗教戰爭 ─────────────────────────────────────────────
  { year:  1515, text: '弗朗索瓦一世即位，將文藝復興藝術與思想引入法國宮廷' },
  { year:  1572, text: '聖巴托羅繆大屠殺：天主教徒血洗新教胡格諾派，宗教戰爭達到高峰' },
  { year:  1598, text: '亨利四世頒布《南特敕令》，賦予新教徒宗教寬容權利，結束宗教戰爭' },

  // ── 波旁王朝與絕對君主制 ───────────────────────────────────────────
  { year:  1624, text: '黎希留樞機主教出任首席大臣，強化中央集權，奠定法國絕對君主制基礎' },
  { year:  1643, text: '路易十四即位（實際親政1661年），開創「太陽王」時代，法國成為歐洲最強國' },
  { year:  1682, text: '凡爾賽宮成為法國正式宮廷所在地，象徵絕對王權與奢華文化巔峰' },
  { year:  1685, text: '路易十四廢除《南特敕令》，大批胡格諾新教徒被迫流亡海外' },
  { year:  1751, text: '狄德羅等啟蒙思想家出版《百科全書》，理性主義思潮席捲法國社會' },
  { year:  1778, text: '法國援助美國獨立戰爭，同時加重王室財政危機' },

  // ── 法國大革命與拿破崙時代 ─────────────────────────────────────────
  { year:  1789, text: '7月14日巴黎民眾攻陷巴士底監獄，法國大革命爆發；《人權宣言》隨後發布' },
  { year:  1791, text: '法國頒布首部憲法，確立君主立憲制' },
  { year:  1793, text: '路易十六被送上斷頭台處決，法國宣布為共和國；隨後進入羅伯斯庇爾恐怖統治時期' },
  { year:  1799, text: '拿破崙發動霧月政變，建立執政府，實際掌握法國最高權力' },
  { year:  1804, text: '拿破崙加冕為法蘭西人的皇帝，建立第一帝國；同年頒布《拿破崙法典》影響全球法律體系' },
  { year:  1805, text: '奧斯特里茨戰役「三皇會戰」：拿破崙擊敗俄奧聯軍，聲望達到頂峰' },
  { year:  1812, text: '拿破崙遠征俄國慘敗，六十萬大軍幾乎全軍覆沒，帝國由盛轉衰' },
  { year:  1815, text: '滑鐵盧戰役：拿破崙徹底戰敗，被流放至聖赫勒拿島，帝國覆滅' },

  // ── 十九世紀：共和與帝制反覆 ───────────────────────────────────────
  { year:  1830, text: '七月革命推翻波旁復辟王朝，建立奧爾良王朝「七月王朝」' },
  { year:  1848, text: '二月革命爆發，七月王朝垮台，建立法蘭西第二共和國' },
  { year:  1852, text: '路易·拿破崙（拿破崙三世）稱帝，建立法蘭西第二帝國' },
  { year:  1870, text: '普法戰爭爆發，法國慘敗，拿破崙三世被俘，第二帝國垮台，第三共和成立' },
  { year:  1871, text: '巴黎公社成立，短暫的工人政權僅維持兩個多月即遭血腥鎮壓' },
  { year:  1889, text: '艾菲爾鐵塔為世界博覽會而建成，成為法國與巴黎的標誌性建築' },
  { year:  1894, text: '德雷福斯事件爆發，猶太裔軍官遭誣陷叛國，撕裂法國社會近十年' },

  // ── 二十世紀：戰爭與現代法國 ───────────────────────────────────────
  { year:  1914, text: '第一次世界大戰爆發，法國成為西線主戰場，凡爾登戰役等造成慘重傷亡' },
  { year:  1918, text: '一戰結束，法國雖為戰勝國但滿目瘡痍，青壯人口損失慘重' },
  { year:  1940, text: '納粹德國閃電戰擊潰法軍，巴黎淪陷，貝當元帥建立親德的維希政權' },
  { year:  1944, text: '諾曼第登陸後盟軍解放巴黎，戴高樂領導自由法國政府重建法蘭西' },
  { year:  1946, text: '法蘭西第四共和國成立，但政局動盪、內閣更迭頻繁' },
  { year:  1954, text: '奠邊府戰役慘敗，法國撤出印度支那；同年阿爾及利亞獨立戰爭爆發' },
  { year:  1958, text: '戴高樂主導修憲，建立總統制為核心的第五共和國，政局趨於穩定' },
  { year:  1968, text: '五月風暴：學生工人大規模抗議運動震撼法國社會與文化' },
  { year:  1993, text: '《馬斯垂克條約》生效，法國成為歐洲聯盟創始核心成員' },
  { year:  2015, text: '巴黎發生連環恐怖攻擊事件，造成130人死亡，震驚全球' },
];
