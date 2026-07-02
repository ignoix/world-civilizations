// 英國歷史時間線資料
// 年份均為近似學術估計，負數為西元前

const UK_ROW_LABELS = ['主要時期', '歷代君主'];

const UK_GROUPS = [

  // ══ Row 0 主要時期（連續）══════════════════════════════════════════
  { name:'羅馬不列顛',      en:'Roman Britain',                          start:   43, end:  410, color:'#7c2d12', row:0, dim:true, wikiEn:'Roman_Britain' },
  { name:'盎格魯撒克遜時期', en:'Anglo-Saxon England',                    start:  410, end: 1066, color:'#78350f', row:0, wikiEn:'Anglo-Saxon_England' },
  { name:'諾曼王朝',        en:'Norman England',                         start: 1066, end: 1154, color:'#991b1b', row:0, wikiEn:'Norman_conquest_of_England' },
  { name:'金雀花王朝',      en:'Plantagenet England',                    start: 1154, end: 1485, color:'#b91c1c', row:0, wikiEn:'House_of_Plantagenet' },
  { name:'都铎王朝',        en:'Tudor England',                          start: 1485, end: 1603, color:'#dc2626', row:0, wikiEn:'House_of_Tudor' },
  { name:'斯圖亞特王朝',    en:'Stuart Britain',                         start: 1603, end: 1714, color:'#ef4444', row:0, wikiEn:'House_of_Stuart' },
  { name:'大不列顛王國',    en:'Kingdom of Great Britain',               start: 1707, end: 1801, color:'#f87171', row:0, wikiEn:'Kingdom_of_Great_Britain' },
  { name:'大英帝國',        en:'British Empire',                         start: 1801, end: 1945, color:'#dc2626', row:0, wikiEn:'British_Empire' },
  { name:'現代英國',        en:'Modern United Kingdom',                  start: 1945, end: 2026, color:'#7f1d1d', row:0, dim:true },

  // ══ Row 1 歷代君主════════════════════════════════════════════════
  // ── 諾曼王朝（循環色：#dc2626,#ef4444,#f87171,#fca5a5）─────────────
  { name:'威廉一世', en:'William I "the Conqueror" – Norman Conquest of England',
    start: 1066, end: 1087, color:'#dc2626', row:1, personal:'征服者威廉', wikiEn:'William_the_Conqueror' },
  { name:'威廉二世', en:'William II "Rufus" – died in mysterious hunting accident',
    start: 1087, end: 1100, color:'#ef4444', row:1, personal:'威廉·魯弗斯' },
  { name:'亨利一世', en:'Henry I "Lion of Justice" – White Ship disaster killed his heir',
    start: 1100, end: 1135, color:'#f87171', row:1 },
  { name:'史蒂芬',   en:'Stephen – "The Anarchy", civil war with Empress Matilda',
    start: 1135, end: 1154, color:'#fca5a5', row:1, dim:true },

  // ── 金雀花王朝（循環色：#f97316,#fb923c,#fdba74,#fed7aa）────────────
  { name:'亨利二世', en:'Henry II – built Angevin Empire; Becket\'s murder',
    start: 1154, end: 1189, color:'#f97316', row:1 },
  { name:'理查一世', en:'Richard I "the Lionheart" – Third Crusade',
    start: 1189, end: 1199, color:'#fb923c', row:1, wikiEn:'Richard_I_of_England' },
  { name:'約翰王',   en:'John – lost Normandy; forced to sign Magna Carta (1215)',
    start: 1199, end: 1216, color:'#fdba74', row:1, wikiEn:'John,_King_of_England' },
  { name:'亨利三世', en:'Henry III – long minority reign; built Westminster Abbey',
    start: 1216, end: 1272, color:'#fed7aa', row:1, dim:true },
  { name:'愛德華一世', en:'Edward I "Longshanks" – conquered Wales, "Hammer of the Scots"',
    start: 1272, end: 1307, color:'#f97316', row:1, wikiEn:'Edward_I_of_England' },
  { name:'愛德華二世', en:'Edward II – defeated at Bannockburn; deposed and murdered',
    start: 1307, end: 1327, color:'#fb923c', row:1, dim:true },
  { name:'愛德華三世', en:'Edward III – started Hundred Years\' War',
    start: 1327, end: 1377, color:'#fdba74', row:1, wikiEn:'Edward_III_of_England' },
  { name:'理查二世', en:'Richard II – deposed by Henry Bolingbroke',
    start: 1377, end: 1399, color:'#fed7aa', row:1, dim:true },

  // ── 蘭開斯特王朝（循環色：#fb923c,#fdba74）───────────────────────
  { name:'亨利四世', en:'Henry IV – usurped throne from Richard II',
    start: 1399, end: 1413, color:'#fb923c', row:1, dim:true },
  { name:'亨利五世', en:'Henry V – victory at Agincourt (1415)',
    start: 1413, end: 1422, color:'#fdba74', row:1, wikiEn:'Henry_V_of_England' },
  { name:'亨利六世', en:'Henry VI – lost France; Wars of the Roses began',
    start: 1422, end: 1461, color:'#fb923c', row:1, dim:true },

  // ── 約克王朝（循環色：#fdba74,#fed7aa）────────────────────────────
  { name:'愛德華四世', en:'Edward IV – won Wars of the Roses battles',
    start: 1461, end: 1483, color:'#fdba74', row:1, dim:true },
  { name:'理查三世', en:'Richard III – killed at Bosworth Field, ended Plantagenet rule',
    start: 1483, end: 1485, color:'#fed7aa', row:1, dim:true, wikiEn:'Richard_III_of_England' },

  // ── 都铎王朝（循環色：#fbbf24,#fcd34d,#fde68a,#fef3c7）──────────────
  { name:'亨利七世', en:'Henry VII – won at Bosworth, founded Tudor dynasty',
    start: 1485, end: 1509, color:'#fbbf24', row:1 },
  { name:'亨利八世', en:'Henry VIII – broke with Rome, six wives',
    start: 1509, end: 1547, color:'#fcd34d', row:1, wikiEn:'Henry_VIII' },
  { name:'愛德華六世', en:'Edward VI – boy king, staunch Protestant reforms',
    start: 1547, end: 1553, color:'#fde68a', row:1, dim:true },
  { name:'瑪麗一世', en:'Mary I "Bloody Mary" – restored Catholicism',
    start: 1553, end: 1558, color:'#fef3c7', row:1, dim:true },
  { name:'伊莉莎白一世', en:'Elizabeth I – Golden Age, defeated Spanish Armada',
    start: 1558, end: 1603, color:'#fbbf24', row:1, wikiEn:'Elizabeth_I' },

  // ── 斯圖亞特王朝（循環色：#a78bfa,#c4b5fd）───────────────────────
  { name:'詹姆士一世', en:'James I (VI of Scotland) – Union of Crowns, King James Bible',
    start: 1603, end: 1625, color:'#a78bfa', row:1 },
  { name:'查理一世', en:'Charles I – executed after English Civil War',
    start: 1625, end: 1649, color:'#c4b5fd', row:1, wikiEn:'Charles_I_of_England' },
  { name:'克倫威爾', en:'Oliver Cromwell – Lord Protector of the Commonwealth',
    start: 1653, end: 1658, color:'#6b7280', row:1, dim:true, wikiEn:'Oliver_Cromwell' },
  { name:'查理二世', en:'Charles II – Restoration of the monarchy',
    start: 1660, end: 1685, color:'#a78bfa', row:1 },
  { name:'詹姆士二世', en:'James II – deposed in the Glorious Revolution',
    start: 1685, end: 1688, color:'#c4b5fd', row:1, dim:true },
  { name:'威廉三世/瑪麗二世', en:'William III & Mary II – joint monarchs, Bill of Rights',
    start: 1689, end: 1702, color:'#a78bfa', row:1 },
  { name:'安妮女王', en:'Anne – last Stuart; Acts of Union 1707 created Great Britain',
    start: 1702, end: 1714, color:'#c4b5fd', row:1 },

  // ── 漢諾威王朝（循環色：#3b82f6,#60a5fa,#93c5fd）───────────────────
  { name:'喬治一世', en:'George I – first Hanoverian, spoke little English',
    start: 1714, end: 1727, color:'#3b82f6', row:1, dim:true },
  { name:'喬治二世', en:'George II – last king to lead troops in battle',
    start: 1727, end: 1760, color:'#60a5fa', row:1, dim:true },
  { name:'喬治三世', en:'George III – lost American colonies, later mental illness',
    start: 1760, end: 1820, color:'#93c5fd', row:1, wikiEn:'George_III' },
  { name:'喬治四世', en:'George IV – Regency era extravagance',
    start: 1820, end: 1830, color:'#3b82f6', row:1, dim:true },
  { name:'威廉四世', en:'William IV "Sailor King" – Reform Act 1832',
    start: 1830, end: 1837, color:'#60a5fa', row:1, dim:true },
  { name:'維多利亞女王', en:'Victoria – Victorian Era, British Empire\'s zenith',
    start: 1837, end: 1901, color:'#93c5fd', row:1, wikiEn:'Queen_Victoria' },

  // ── 薩克森-科堡-哥達／溫莎王朝（循環色：#a78bfa,#c4b5fd,#ddd6fe）────
  { name:'愛德華七世', en:'Edward VII – Edwardian era, peacemaker diplomat',
    start: 1901, end: 1910, color:'#a78bfa', row:1, dim:true },
  { name:'喬治五世', en:'George V – WWI; renamed dynasty "Windsor" in 1917',
    start: 1910, end: 1936, color:'#c4b5fd', row:1 },
  { name:'愛德華八世', en:'Edward VIII – abdicated to marry Wallis Simpson',
    start: 1936, end: 1936, color:'#ddd6fe', row:1, dim:true },
  { name:'喬治六世', en:'George VI – led Britain through WWII',
    start: 1936, end: 1952, color:'#c4b5fd', row:1, wikiEn:'George_VI' },
  { name:'伊莉莎白二世', en:'Elizabeth II – longest-reigning British monarch',
    start: 1952, end: 2022, color:'#a78bfa', row:1, wikiEn:'Elizabeth_II' },
  { name:'查爾斯三世', en:'Charles III – current King',
    start: 2022, end: 2026, color:'#ddd6fe', row:1, wikiEn:'Charles_III' },
];

const UK_EVENTS = [
  // ── 羅馬與盎格魯撒克遜 ─────────────────────────────────────────────
  { year:    43, text: '羅馬皇帝克勞狄一世入侵不列顛，開始近四百年的羅馬統治時期' },
  { year:   410, text: '羅馬軍團撤離不列顛，本土進入「黑暗時代」，盎格魯、撒克遜、朱特人相繼入侵定居' },
  { year:   597, text: '聖奧古斯丁抵達肯特，基督教傳教開始在英格蘭紮根' },
  { year:   793, text: '維京人襲擊林迪斯法恩修道院，北歐海盜時代對不列顛的侵擾開始' },
  { year:   871, text: '阿爾弗雷德大帝即位威塞克斯國王，力抗維京人，被視為「英格蘭統一」奠基者' },
  { year:  1016, text: '丹麥克努特大帝征服英格蘭，建立北海帝國（英格蘭、丹麥、挪威）' },

  // ── 諾曼與金雀花王朝 ───────────────────────────────────────────────
  { year:  1066, text: '黑斯廷斯戰役：諾曼第公爵威廉征服英格蘭，加冕為威廉一世，諾曼王朝開始' },
  { year:  1086, text: '《末日審判書》（Domesday Book）編成，全面調查英格蘭土地與財產' },
  { year:  1170, text: '坎特伯雷大主教托馬斯·貝克特遭亨利二世部下謀殺，震驚基督教世界' },
  { year:  1215, text: '約翰王被貴族逼迫簽署《大憲章》（Magna Carta），限制王權，奠定英國憲政基礎' },
  { year:  1295, text: '愛德華一世召開「模範議會」，奠定英國議會制度雛形' },
  { year:  1337, text: '英法百年戰爭爆發（1337–1453），爭奪法國王位與領土' },
  { year:  1348, text: '黑死病肆虐英格蘭，奪走近三分之一人口' },
  { year:  1381, text: '瓦特·泰勒領導農民大起義，抗議人頭稅與封建壓迫' },
  { year:  1415, text: '阿金庫爾戰役：亨利五世以寡擊眾大敗法軍' },

  // ── 玫瑰戰爭與都铎王朝 ─────────────────────────────────────────────
  { year:  1455, text: '玫瑰戰爭爆發（1455–1487），蘭開斯特與約克兩家族爭奪王位' },
  { year:  1485, text: '博斯沃斯原野戰役：亨利·都铎擊敗理查三世，建立都铎王朝，結束玫瑰戰爭' },
  { year:  1534, text: '亨利八世頒布《至尊法案》，與羅馬教廷決裂，建立英國國教會（聖公會）' },
  { year:  1558, text: '伊莉莎白一世即位，開啟英格蘭黃金時代，莎士比亞戲劇興盛' },
  { year:  1588, text: '英國海軍擊敗西班牙無敵艦隊，確立海上強權地位' },
  { year:  1600, text: '英國東印度公司成立，開啟殖民與全球貿易擴張' },

  // ── 斯圖亞特王朝與內戰 ─────────────────────────────────────────────
  { year:  1603, text: '蘇格蘭國王詹姆士六世兼任英格蘭國王詹姆士一世，兩國共主聯合' },
  { year:  1620, text: '五月花號載清教徒移民抵達北美，建立普利茅斯殖民地' },
  { year:  1642, text: '英國內戰爆發（1642–1651），國會派與保皇派衝突' },
  { year:  1649, text: '查理一世被國會處決，克倫威爾建立共和國（Commonwealth）' },
  { year:  1660, text: '查理二世復辟，斯圖亞特王朝重掌王位' },
  { year:  1666, text: '倫敦大火燒毀城市大部分地區，促成城市重建與防火建築規範' },
  { year:  1688, text: '光榮革命：威廉三世與瑪麗二世取代詹姆士二世，確立君主立憲' },
  { year:  1689, text: '《權利法案》頒布，確立議會主權高於王權的憲政原則' },

  // ── 大不列顛王國與大英帝國 ─────────────────────────────────────────
  { year:  1707, text: '《聯合法案》生效，英格蘭與蘇格蘭合併為大不列顛王國' },
  { year:  1721, text: '羅伯特·沃波爾成為事實上首位「首相」，內閣制逐漸成形' },
  { year:  1760, text: '工業革命在英國起步，蒸汽機與紡織機械改變世界生產方式' },
  { year:  1776, text: '北美十三殖民地宣布獨立，美國獨立戰爭爆發，英國最終戰敗承認獨立（1783）' },
  { year:  1801, text: '《聯合法案》將愛爾蘭併入，成立「大不列顛及愛爾蘭聯合王國」' },
  { year:  1805, text: '特拉法加海戰：納爾遜將軍擊敗法西聯合艦隊，確立英國海上霸權' },
  { year:  1815, text: '滑鐵盧戰役：威靈頓公爵聯軍擊敗拿破崙，終結拿破崙戰爭' },
  { year:  1833, text: '英國國會通過《廢奴法案》，廢除大英帝國境內奴隸制' },
  { year:  1837, text: '維多利亞女王即位，開啟長達64年的維多利亞時代，大英帝國達到鼎盛' },
  { year:  1851, text: '倫敦舉辦首屆世界博覽會（萬國工業博覽會），展示工業革命成果' },
  { year:  1876, text: '維多利亞女王受封為印度女皇，大英帝國「日不落」達到頂峰' },

  // ── 二十世紀與現代英國 ─────────────────────────────────────────────
  { year:  1914, text: '第一次世界大戰爆發，英國動員全國投入戰爭，帝國體系開始鬆動' },
  { year:  1917, text: '因反德情緒，王室將姓氏改為「溫莎」，溫莎王朝開始' },
  { year:  1922, text: '愛爾蘭自由邦成立，愛爾蘭大部分脫離英國統治' },
  { year:  1928, text: '國會通過《人民代表法》，實現21歲以上男女平等普選權' },
  { year:  1940, text: '不列顛戰役：英國皇家空軍擊退德國空軍進攻，邱吉爾發表著名演說鼓舞士氣' },
  { year:  1945, text: '二戰結束，英國雖為戰勝國但國力大衰，帝國解體進程加速' },
  { year:  1947, text: '印度獨立，大英帝國最重要殖民地脫離統治，「日不落帝國」開始瓦解' },
  { year:  1948, text: '國民保健署（NHS）成立，建立全民免費醫療體系' },
  { year:  1973, text: '英國加入歐洲共同體（歐盟前身）' },
  { year:  1979, text: '柴契爾夫人就任首相，推行新自由主義經濟改革' },
  { year:  1997, text: '香港主權移交中國，英國結束對香港150多年的殖民統治' },
  { year:  2016, text: '英國公投決定脫離歐盟（Brexit），引發長期政治與經濟震盪' },
  { year:  2020, text: '英國正式脫離歐盟，結束47年的歐盟成員身份' },
  { year:  2022, text: '伊莉莎白二世逝世，在位70年為英國史上在位最久君主，查爾斯三世繼位' },
];
