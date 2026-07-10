// 阿拉伯帝國（伊斯蘭哈里發）歷史時間線資料
// 年份均為近似學術估計，負數為西元前

const AR_ROW_LABELS = ['主要時期', '歷代哈里發'];

const AR_GROUPS = [

  // ══ Row 0 主要時期══════════════════════════════════════════════════
  { name:'穆罕默德時代',    en:'Muhammad Era – rise of Islam in Arabia',  start:  570, end:  632, color:'#78350f', row:0, dim:true, wikiEn:'Muhammad' },
  { name:'正統哈里發時期',  en:'Rashidun Caliphate – the Four Rightly Guided Caliphs', start: 632, end:  661, color:'#166534', row:0, wikiEn:'Rashidun_Caliphate' },
  { name:'倭馬亞王朝',      en:'Umayyad Caliphate (Damascus)',           start:  661, end:  750, color:'#15803d', row:0, wikiEn:'Umayyad_Caliphate' },
  { name:'阿拔斯王朝',      en:'Abbasid Caliphate (Baghdad) – Islamic Golden Age', start: 750, end: 1258, color:'#166534', row:0, wikiEn:'Abbasid_Caliphate' },
  { name:'科爾多瓦哈里發',  en:'Caliphate of Córdoba (Al-Andalus, rival state)', start: 756, end: 1031, color:'#0d9488', row:0, dim:true, wikiEn:'Caliphate_of_C%C3%B3rdoba' },
  { name:'法蒂瑪王朝',      en:'Fatimid Caliphate (Cairo, rival Shia state)', start:  909, end: 1171, color:'#0f766e', row:0, dim:true, wikiEn:'Fatimid_Caliphate' },
  { name:'蒙古入侵/巴格達陷落', en:'Mongol Conquest / Fall of Baghdad',  start: 1206, end: 1258, color:'#4b5563', row:0, dim:true, wikiEn:'Siege_of_Baghdad_(1258)' },
  { name:'馬木路克蘇丹國',  en:'Mamluk Sultanate (shadow Abbasid caliphs in Cairo)', start: 1250, end: 1517, color:'#a16207', row:0, wikiEn:'Mamluk_Sultanate_(Cairo)' },
  { name:'奧斯曼哈里發',    en:'Ottoman Caliphate – title absorbed by Ottoman sultans', start: 1517, end: 1924, color:'#0369a1', row:0, wikiEn:'Ottoman_Caliphate' },

  // ══ Row 1 歷代哈里發════════════════════════════════════════════════
  // ── 正統哈里發（循環色：#22c55e,#4ade80,#86efac,#bbf7d0）────────────
  { name:'阿布·巴克爾', en:'Abu Bakr – first caliph, suppressed the Ridda apostasy wars',
    start:  632, end:  634, color:'#22c55e', row:1, wikiEn:'Abu_Bakr' },
  { name:'歐麥爾一世', en:'Umar ibn al-Khattab – conquered Persia, the Levant and Egypt',
    start:  634, end:  644, color:'#4ade80', row:1, wikiEn:'Umar' },
  { name:'奧斯曼', en:'Uthman ibn Affan – standardized the Quran text; killed in rebellion',
    start:  644, end:  656, color:'#86efac', row:1, wikiEn:'Uthman_ibn_Affan' },
  { name:'阿里', en:'Ali ibn Abi Talib – first Shia Imam; First Fitna civil war; assassinated',
    start:  656, end:  661, color:'#bbf7d0', row:1, wikiEn:'Ali' },

  // ── 倭馬亞王朝（循環色：#15803d,#16a34a,#22c55e,#4ade80）────────────
  { name:'穆阿維葉一世', en:'Muawiyah I – founder, made the caliphate hereditary, capital to Damascus',
    start:  661, end:  680, color:'#15803d', row:1, wikiEn:'Muawiyah_I' },
  { name:'葉齊德一世', en:'Yazid I – Battle of Karbala, death of Husayn (680)',
    start:  680, end:  683, color:'#16a34a', row:1, dim:true, wikiEn:'Yazid_I' },
  { name:'馬爾萬一世', en:'Marwan I – restored Umayyad control after the Second Fitna',
    start:  684, end:  685, color:'#22c55e', row:1, dim:true },
  { name:'阿卜杜勒-馬利克', en:'Abd al-Malik – Arabized administration/coinage; built the Dome of the Rock (691)',
    start:  685, end:  705, color:'#4ade80', row:1, wikiEn:'Abd_al-Malik_ibn_Marwan' },
  { name:'瓦利德一世', en:'Al-Walid I – peak territorial expansion: Iberia (711), Sindh, Transoxiana',
    start:  705, end:  715, color:'#15803d', row:1, wikiEn:'Al-Walid_I' },
  { name:'蘇萊曼', en:'Sulayman ibn Abd al-Malik – launched failed siege of Constantinople (717–718)',
    start:  715, end:  717, color:'#16a34a', row:1, dim:true },
  { name:'歐麥爾二世', en:'Umar II – pious reformer; eased tax burdens on non-Arab Muslims',
    start:  717, end:  720, color:'#22c55e', row:1, wikiEn:'Umar_II' },
  { name:'希沙姆', en:'Hisham ibn Abd al-Malik – long stable reign; halted at the Battle of Tours (732)',
    start:  724, end:  743, color:'#4ade80', row:1, wikiEn:'Hisham_ibn_Abd_al-Malik' },
  { name:'馬爾萬二世', en:'Marwan II – last Umayyad caliph; defeated at the Battle of the Zab',
    start:  744, end:  750, color:'#15803d', row:1, dim:true, wikiEn:'Marwan_II' },

  // ── 阿拔斯王朝（循環色：#166534,#15803d,#16a34a,#22c55e）────────────
  { name:'薩法赫', en:'As-Saffah "the Blood-shedder" – founder, massacred the Umayyad family',
    start:  750, end:  754, color:'#166534', row:1, dim:true, wikiEn:'As-Saffah' },
  { name:'曼蘇爾', en:'Al-Mansur – founded Baghdad (762) as the new capital',
    start:  754, end:  775, color:'#15803d', row:1, wikiEn:'Al-Mansur' },
  { name:'馬赫迪', en:'Al-Mahdi – economic prosperity, religious orthodoxy campaigns',
    start:  775, end:  785, color:'#16a34a', row:1, dim:true },
  { name:'哈倫·拉希德', en:'Harun al-Rashid – height of the Abbasid Golden Age; Arabian Nights lore',
    start:  786, end:  809, color:'#22c55e', row:1, wikiEn:'Harun_al-Rashid' },
  { name:'艾敏', en:'Al-Amin – civil war with brother Al-Ma\'mun (Fourth Fitna)',
    start:  809, end:  813, color:'#166534', row:1, dim:true },
  { name:'馬蒙', en:'Al-Ma\'mun – founded the House of Wisdom, patron of the translation movement',
    start:  813, end:  833, color:'#15803d', row:1, wikiEn:'Al-Ma%27mun' },
  { name:'穆塔西姆', en:'Al-Mu\'tasim – built Samarra; relied on Turkic slave-soldiers (ghilman)',
    start:  833, end:  842, color:'#16a34a', row:1, dim:true },
  { name:'瓦西克', en:'Al-Wathiq – continued the Mu\'tazilite mihna inquisition policy',
    start:  842, end:  847, color:'#22c55e', row:1, dim:true },
  { name:'穆塔瓦基勒', en:'Al-Mutawakkil – ended the mihna, restored Sunni orthodoxy; assassinated',
    start:  847, end:  861, color:'#166534', row:1, wikiEn:'Al-Mutawakkil' },
  { name:'穆爾台迪德', en:'Al-Mu\'tadid – briefly restored central authority amid decline',
    start:  892, end:  902, color:'#15803d', row:1, dim:true },
  { name:'穆克塔迪爾', en:'Al-Muqtadir – long troubled reign; rise of regional dynasties (Fatimids emerge)',
    start:  908, end:  932, color:'#16a34a', row:1, dim:true },
  { name:'拉迪', en:'Ar-Radi – last caliph with real independent power before Buyid takeover',
    start:  934, end:  940, color:'#22c55e', row:1, dim:true },
  { name:'穆提（布伊王朝攝政）', en:'Al-Muti (under Buyids) – reduced to figurehead under Shia Buyid emirs',
    start:  946, end:  974, color:'#166534', row:1, dim:true },
  { name:'卡伊姆（塞爾柱攝政）', en:'Al-Qa\'im (under Seljuks) – invited the Seljuk Turks to Baghdad (1055)',
    start: 1031, end: 1075, color:'#15803d', row:1, dim:true },
  { name:'穆斯塔爾希德', en:'Al-Mustarshid – attempted to reassert caliphal military power vs. the Seljuks',
    start: 1118, end: 1135, color:'#16a34a', row:1, dim:true },
  { name:'納賽爾', en:'An-Nasir – revived Abbasid political and territorial power in Iraq',
    start: 1180, end: 1225, color:'#22c55e', row:1, wikiEn:'An-Nasir' },
  { name:'穆斯坦綏爾', en:'Al-Mustansir – founded the Mustansiriya madrasa in Baghdad',
    start: 1226, end: 1242, color:'#166534', row:1, dim:true },
  { name:'穆斯塔西姆', en:'Al-Musta\'sim – last Baghdad caliph; executed when the Mongols sacked Baghdad (1258)',
    start: 1242, end: 1258, color:'#15803d', row:1, wikiEn:'Al-Musta%27sim' },
];

const AR_EVENTS = [
  // ── 伊斯蘭興起 ─────────────────────────────────────────────────────
  { year:   570, text: '穆罕默德誕生於麥加（傳統紀年）' },
  { year:   610, text: '穆罕默德在希拉山洞獲得首次啟示，伊斯蘭教開始傳播' },
  { year:   622, text: '徙志（Hijra）：穆罕默德率信徒從麥加遷往麥地那，伊斯蘭曆元年開始' },
  { year:   630, text: '穆罕默德征服麥加，摧毀克爾白神殿內的偶像' },
  { year:   632, text: '穆罕默德逝世，阿布·巴克爾被推舉為首任哈里發，正統哈里發時期開始' },
  { year:   632, text: '「叛教戰爭」（Ridda Wars）爆發，鎮壓阿拉伯半島各部落的叛教與分離運動' },

  // ── 大征服時代 ─────────────────────────────────────────────────────
  { year:   636, text: '雅爾穆克戰役：穆斯林大軍擊敗拜占庭帝國，敘利亞與黎凡特門戶洞開' },
  { year:   637, text: '卡迪西亞戰役：穆斯林擊敗薩珊波斯，開啟征服波斯之路' },
  { year:   638, text: '穆斯林軍隊征服耶路撒冷' },
  { year:   642, text: '納哈萬德戰役：薩珊波斯帝國實質滅亡；同年埃及全境併入哈里發版圖' },
  { year:   656, text: '駱駝之戰爆發，第一次伊斯蘭內戰（第一次費特納）開始' },
  { year:   661, text: '阿里遇刺身亡，穆阿維葉一世建立倭馬亞王朝，定都大馬士革' },

  // ── 倭馬亞王朝 ─────────────────────────────────────────────────────
  { year:   680, text: '卡爾巴拉戰役：先知外孫侯賽因遇害，成為遜尼與什葉派分裂的根源事件' },
  { year:   691, text: '耶路撒冷圓頂清真寺（Dome of the Rock）落成' },
  { year:   711, text: '塔里克·伊本·齊亞德率軍渡過直布羅陀海峽，開始征服伊比利半島' },
  { year:   717, text: '第二次阿拉伯圍攻君士坦丁堡（717–718），最終失敗撤退' },
  { year:   732, text: '圖爾戰役（普瓦提埃戰役）：法蘭克軍隊擊退倭馬亞軍隊，阻止伊斯蘭勢力深入西歐' },
  { year:   750, text: '阿拔斯革命：札布河戰役推翻倭馬亞王朝，倭馬亞皇室幾遭滅門' },

  // ── 阿拔斯王朝與伊斯蘭黃金時代 ───────────────────────────────────
  { year:   751, text: '怛羅斯戰役：阿拔斯軍隊擊敗唐朝軍隊，造紙術隨戰俘西傳歐亞' },
  { year:   756, text: '阿卜杜勒-拉赫曼一世在科爾多瓦建立倭馬亞流亡政權，即後來的科爾多瓦哈里發' },
  { year:   762, text: '巴格達建城，成為阿拔斯王朝新首都' },
  { year:   786, text: '哈倫·拉希德即位，阿拔斯王朝進入鼎盛繁榮時期' },
  { year:   813, text: '馬蒙在第四次費特納內戰後即位為哈里發' },
  { year:   830, text: '巴格達「智慧宮」（Bayt al-Hikma）正式設立，成為翻譯運動與科學研究中心' },
  { year:   909, text: '什葉派伊斯瑪儀派在北非建立法蒂瑪王朝，與阿拔斯王朝分庭抗禮' },
  { year:   929, text: '阿卜杜勒-拉赫曼三世自立為哈里發，科爾多瓦哈里發正式建立，與阿拔斯、法蒂瑪三足鼎立' },
  { year:   945, text: '布伊王朝攻占巴格達，阿拔斯哈里發淪為政治傀儡' },
  { year:   969, text: '法蒂瑪王朝征服埃及，建立開羅為新首都' },

  // ── 塞爾柱、十字軍與衰落 ───────────────────────────────────────────
  { year:  1031, text: '科爾多瓦哈里發崩解，分裂為眾多泰法（taifa）小王國' },
  { year:  1055, text: '塞爾柱突厥人攻占巴格達，恢復遜尼派哈里發的名義權威' },
  { year:  1071, text: '曼齊刻爾特戰役：塞爾柱擊敗拜占庭，安納托利亞門戶大開，突厥人開始大量遷入' },
  { year:  1091, text: '諾曼人完成征服穆斯林統治的西西里島' },
  { year:  1099, text: '第一次十字軍攻陷耶路撒冷' },
  { year:  1171, text: '薩拉丁廢黜法蒂瑪王朝末代哈里發，建立阿尤布王朝' },
  { year:  1187, text: '哈丁戰役：薩拉丁大敗十字軍，收復耶路撒冷' },

  // ── 蒙古入侵與馬木路克時代 ─────────────────────────────────────────
  { year:  1206, text: '成吉思汗統一蒙古諸部，開啟蒙古帝國大規模擴張時代' },
  { year:  1258, text: '旭烈兀率蒙古大軍攻陷巴格達，處死末代哈里發穆斯塔西姆，阿拔斯王朝滅亡' },
  { year:  1260, text: '艾因·賈魯戰役：馬木路克軍隊擊敗蒙古軍，阻止蒙古人進一步南下' },
  { year:  1261, text: '馬木路克蘇丹在開羅擁立阿拔斯宗室為「影子哈里發」，僅存宗教象徵意義' },
  { year:  1291, text: '阿卡陷落，十字軍在黎凡特的最後據點覆滅' },

  // ── 帝國餘暉與奧斯曼哈里發 ─────────────────────────────────────────
  { year:  1402, text: '安卡拉戰役：帖木兒大敗奧斯曼軍隊，一度延緩奧斯曼帝國擴張' },
  { year:  1453, text: '奧斯曼蘇丹穆罕默德二世攻陷君士坦丁堡，拜占庭帝國滅亡' },
  { year:  1492, text: '格拉納達陷落，伊斯蘭在伊比利半島的最後政權覆滅，收復失地運動完成' },
  { year:  1517, text: '奧斯曼帝國征服馬木路克埃及，蘇丹賽利姆一世取得哈里發稱號' },
  { year:  1924, text: '土耳其大國民議會正式廢除哈里發制度，延續千餘年的哈里發頭銜走入歷史' },
];
