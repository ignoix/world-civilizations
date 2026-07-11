// 日本歷史時間線資料
// 年份均為近似學術估計，負數為西元前

const JP_ROW_LABELS = ['主要時期', '天皇／幕府將軍'];

const JP_GROUPS = [

  // ══ Row 0 主要時期══════════════════════════════════════════════════
  { name:'大和時代',        en:'Yamato Period – clan-based unification of Japan', start:  300, end:  538, color:'#78350f', row:0, dim:true, wikiEn:'Yamato_period' },
  { name:'飛鳥時代',        en:'Asuka Period – Buddhism introduced, Taika Reform', start:  538, end:  710, color:'#92400e', row:0, wikiEn:'Asuka_period' },
  { name:'奈良時代',        en:'Nara Period – first permanent capital at Nara', start:  710, end:  794, color:'#b45309', row:0, wikiEn:'Nara_period' },
  { name:'平安時代',        en:'Heian Period – aristocratic culture, rise of samurai', start: 794, end: 1185, color:'#a16207', row:0, wikiEn:'Heian_period' },
  { name:'鎌倉幕府',        en:'Kamakura Shogunate – first warrior government',  start: 1185, end: 1333, color:'#991b1b', row:0, wikiEn:'Kamakura_shogunate' },
  { name:'室町幕府',        en:'Muromachi/Ashikaga Shogunate',                   start: 1336, end: 1573, color:'#b91c1c', row:0, wikiEn:'Muromachi_shogunate' },
  { name:'戰國時代',        en:'Sengoku Period – civil wars among daimyo',       start: 1467, end: 1615, color:'#dc2626', row:0, dim:true, wikiEn:'Sengoku_period' },
  { name:'安土桃山時代',    en:'Azuchi–Momoyama Period – Nobunaga & Hideyoshi unify Japan', start: 1573, end: 1603, color:'#ea580c', row:0, wikiEn:'Azuchi%E2%80%93Momoyama_period' },
  { name:'江戶幕府',        en:'Edo/Tokugawa Shogunate – sakoku isolation',      start: 1603, end: 1868, color:'#f97316', row:0, wikiEn:'Edo_period' },
  { name:'明治時代',        en:'Meiji Era – modernization and industrialization', start: 1868, end: 1912, color:'#3b82f6', row:0, wikiEn:'Meiji_era' },
  { name:'大正時代',        en:'Taisho Era – brief liberalization ("Taisho Democracy")', start: 1912, end: 1926, color:'#60a5fa', row:0, dim:true, wikiEn:'Taish%C5%8D_era' },
  { name:'昭和時代',        en:'Showa Era – militarism, WWII, postwar economic miracle', start: 1926, end: 1989, color:'#1d4ed8', row:0, wikiEn:'Sh%C5%8Dwa_era' },
  { name:'平成時代',        en:'Heisei Era – economic stagnation ("Lost Decades")', start: 1989, end: 2019, color:'#818cf8', row:0, dim:true, wikiEn:'Heisei' },
  { name:'令和時代',        en:'Reiwa Era – current era under Emperor Naruhito', start: 2019, end: 2026, color:'#6366f1', row:0 },

  // ══ Row 1 天皇與幕府將軍════════════════════════════════════════════
  // ── 早期天皇（循環色：#a16207,#ca8a04,#d97706）───────────────────
  { name:'天武天皇', en:'Emperor Tenmu – consolidated imperial authority, sponsored the Kojiki',
    start:  673, end:  686, color:'#a16207', row:1, dim:true, wikiEn:'Emperor_Tenmu' },
  { name:'聖武天皇', en:'Emperor Shomu – built Todai-ji, spread state Buddhism',
    start:  724, end:  749, color:'#ca8a04', row:1, dim:true },
  { name:'桓武天皇', en:'Emperor Kanmu – moved the capital to Heian-kyo (Kyoto)',
    start:  781, end:  806, color:'#d97706', row:1, wikiEn:'Emperor_Kanmu' },
  { name:'白河天皇', en:'Emperor Shirakawa – began "cloistered rule" (insei) system',
    start: 1073, end: 1087, color:'#a16207', row:1, dim:true },
  { name:'安德天皇', en:'Emperor Antoku – child emperor, died at the Battle of Dan-no-ura',
    start: 1180, end: 1185, color:'#ca8a04', row:1, dim:true },
  { name:'後鳥羽天皇', en:'Emperor Go-Toba – led the failed Jokyu War against the Kamakura shogunate',
    start: 1183, end: 1198, color:'#d97706', row:1, dim:true },
  { name:'後醍醐天皇', en:'Emperor Go-Daigo – briefly restored imperial rule (Kenmu Restoration)',
    start: 1318, end: 1339, color:'#a16207', row:1, wikiEn:'Emperor_Go-Daigo' },
  { name:'後小松天皇', en:'Emperor Go-Komatsu – reunified the Northern and Southern Courts',
    start: 1382, end: 1412, color:'#ca8a04', row:1, dim:true },

  // ── 鎌倉幕府將軍（循環色：#991b1b,#b91c1c）───────────────────────
  { name:'源賴朝', en:'Minamoto no Yoritomo – founder of the Kamakura Shogunate',
    start: 1192, end: 1199, color:'#991b1b', row:1, wikiEn:'Minamoto_no_Yoritomo' },
  { name:'北條時宗', en:'Hojo Tokimune – regent who repelled the Mongol invasions',
    start: 1268, end: 1284, color:'#b91c1c', row:1, wikiEn:'H%C5%8Dj%C5%8D_Tokimune' },

  // ── 室町幕府將軍（循環色：#dc2626,#ef4444,#f87171）───────────────
  { name:'足利尊氏', en:'Ashikaga Takauji – founder of the Muromachi Shogunate',
    start: 1338, end: 1358, color:'#dc2626', row:1, wikiEn:'Ashikaga_Takauji' },
  { name:'足利義滿', en:'Ashikaga Yoshimitsu – built the Golden Pavilion, height of Muromachi power',
    start: 1368, end: 1394, color:'#ef4444', row:1, wikiEn:'Ashikaga_Yoshimitsu' },
  { name:'足利義政', en:'Ashikaga Yoshimasa – decline of his rule sparked the Onin War',
    start: 1449, end: 1473, color:'#f87171', row:1, dim:true },

  // ── 戰國統一者（循環色：#ea580c,#f97316）─────────────────────────
  { name:'織田信長', en:'Oda Nobunaga – began unification of Japan; died in the Honno-ji Incident',
    start: 1568, end: 1582, color:'#ea580c', row:1, wikiEn:'Oda_Nobunaga' },
  { name:'豐臣秀吉', en:'Toyotomi Hideyoshi – completed the unification of Japan, invaded Korea',
    start: 1582, end: 1598, color:'#f97316', row:1, wikiEn:'Toyotomi_Hideyoshi' },

  // ── 江戶幕府將軍（循環色：#3b82f6,#60a5fa,#93c5fd,#bfdbfe）───────
  { name:'德川家康', en:'Tokugawa Ieyasu – founder of the Edo Shogunate, victor at Sekigahara',
    start: 1603, end: 1605, color:'#3b82f6', row:1, wikiEn:'Tokugawa_Ieyasu' },
  { name:'德川秀忠', en:'Tokugawa Hidetada – consolidated Tokugawa rule',
    start: 1605, end: 1623, color:'#60a5fa', row:1, dim:true },
  { name:'德川家光', en:'Tokugawa Iemitsu – implemented the sakoku isolation policy',
    start: 1623, end: 1651, color:'#93c5fd', row:1, wikiEn:'Tokugawa_Iemitsu' },
  { name:'德川綱吉', en:'Tokugawa Tsunayoshi "the Dog Shogun" – eccentric animal protection edicts',
    start: 1680, end: 1709, color:'#bfdbfe', row:1, dim:true },
  { name:'德川吉宗', en:'Tokugawa Yoshimune – Kyoho Reforms, fiscal stabilization',
    start: 1716, end: 1745, color:'#3b82f6', row:1, wikiEn:'Tokugawa_Yoshimune' },
  { name:'德川家齊', en:'Tokugawa Ienari – longest-serving shogun, era of cultural flourishing',
    start: 1787, end: 1837, color:'#60a5fa', row:1, dim:true },
  { name:'德川家定', en:'Tokugawa Iesada – shogun when Perry\'s Black Ships arrived',
    start: 1853, end: 1858, color:'#93c5fd', row:1, dim:true },
  { name:'德川慶喜', en:'Tokugawa Yoshinobu – last shogun, surrendered power in the Meiji Restoration',
    start: 1866, end: 1867, color:'#bfdbfe', row:1, wikiEn:'Tokugawa_Yoshinobu' },

  // ── 近現代天皇（循環色：#6366f1,#818cf8,#a5b4fc）─────────────────
  { name:'孝明天皇', en:'Emperor Komei – opposed the opening of Japan to foreigners',
    start: 1846, end: 1867, color:'#6366f1', row:1, dim:true },
  { name:'明治天皇', en:'Emperor Meiji – presided over modernization and the Meiji Restoration',
    start: 1867, end: 1912, color:'#818cf8', row:1, wikiEn:'Emperor_Meiji' },
  { name:'大正天皇', en:'Emperor Taisho – reign marked by ill health, growth of party government',
    start: 1912, end: 1926, color:'#a5b4fc', row:1, dim:true },
  { name:'昭和天皇', en:'Emperor Showa (Hirohito) – longest reign; WWII and postwar recovery',
    start: 1926, end: 1989, color:'#6366f1', row:1, wikiEn:'Hirohito' },
  { name:'明仁天皇', en:'Emperor Heisei (Akihito) – first to abdicate in the modern era',
    start: 1989, end: 2019, color:'#818cf8', row:1, wikiEn:'Akihito' },
  { name:'德仁天皇', en:'Emperor Reiwa (Naruhito) – current emperor',
    start: 2019, end: 2026, color:'#a5b4fc', row:1, wikiEn:'Naruhito' },
];

const JP_EVENTS = [
  // ── 大和至平安時代 ─────────────────────────────────────────────────
  { year:   300, text: '大和王權開始統一日本各部族' },
  { year:   538, text: '佛教經百濟傳入日本（另一說552年）' },
  { year:   604, text: '聖德太子頒布《十七條憲法》，確立以儒佛思想為基礎的施政原則' },
  { year:   645, text: '大化革新開始，仿效唐朝推行中央集權制改革' },
  { year:   710, text: '奈良（平城京）建都，奈良時代開始' },
  { year:   794, text: '遷都平安京（京都），平安時代開始' },
  { year:   900, text: '武士階層自9世紀起逐漸崛起，成為地方軍事力量核心' },

  // ── 鎌倉幕府 ───────────────────────────────────────────────────────
  { year:  1180, text: '源平合戰爆發（1180–1185），源氏與平氏爭奪權力' },
  { year:  1185, text: '壇之浦海戰：源氏擊敗平氏，安德天皇隨平氏滅亡' },
  { year:  1192, text: '源賴朝受封征夷大將軍，鎌倉幕府正式確立，武家政權時代開始' },
  { year:  1274, text: '文永之役：日本首次擊退元朝蒙古入侵' },
  { year:  1281, text: '弘安之役：「神風」摧毀元軍艦隊，第二次蒙古入侵被擊退' },
  { year:  1333, text: '鎌倉幕府滅亡' },

  // ── 室町幕府與戰國時代 ─────────────────────────────────────────────
  { year:  1336, text: '足利尊氏建立室町幕府' },
  { year:  1467, text: '應仁之亂爆發（1467–1477），戰國時代由此開始' },
  { year:  1543, text: '葡萄牙人抵達種子島，火繩槍傳入日本' },
  { year:  1549, text: '方濟各·沙勿略將天主教傳入日本' },
  { year:  1560, text: '織田信長於桶狹間之戰擊敗今川義元，開始統一天下的征程' },
  { year:  1573, text: '織田信長放逐末代室町將軍足利義昭，室町幕府名存實亡' },
  { year:  1582, text: '本能寺之變：織田信長遭明智光秀叛變自殺身亡，豐臣秀吉繼承其霸業' },
  { year:  1590, text: '豐臣秀吉完成日本統一' },
  { year:  1592, text: '文祿之役：豐臣秀吉發動第一次侵略朝鮮戰爭' },
  { year:  1597, text: '慶長之役：豐臣秀吉發動第二次侵略朝鮮戰爭' },

  // ── 江戶幕府 ───────────────────────────────────────────────────────
  { year:  1600, text: '關原之戰：德川家康擊敗西軍，奠定天下霸權基礎' },
  { year:  1603, text: '德川家康受封征夷大將軍，江戶幕府（德川幕府）建立' },
  { year:  1615, text: '大坂夏之陣：豐臣家滅亡，戰國時代終結' },
  { year:  1635, text: '幕府頒布鎖國令，開始長達兩百餘年的鎖國政策' },
  { year:  1637, text: '島原之亂爆發，天主教徒與農民大規模起義遭幕府鎮壓' },

  // ── 幕末與明治維新 ─────────────────────────────────────────────────
  { year:  1853, text: '培理准將率美國「黑船」艦隊抵達浦賀，要求日本開國' },
  { year:  1854, text: '《神奈川條約》簽署，日本結束鎖國政策' },
  { year:  1868, text: '明治維新：德川慶喜大政奉還，明治天皇親政，展開全面西化改革' },
  { year:  1869, text: '首都遷至東京' },
  { year:  1889, text: '《大日本帝國憲法》（明治憲法）頒布，確立君主立憲體制' },
  { year:  1894, text: '甲午戰爭爆發（1894–1895），日本擊敗清朝，取得台灣及朝鮮影響力' },
  { year:  1904, text: '日俄戰爭爆發（1904–1905），日本首次戰勝西方列強' },
  { year:  1910, text: '日本正式併吞朝鮮半島' },

  // ── 大正、昭和與二戰 ───────────────────────────────────────────────
  { year:  1923, text: '關東大地震重創東京與橫濱，死傷逾十萬人' },
  { year:  1931, text: '九一八事變：日本關東軍入侵滿洲，開始大陸擴張政策' },
  { year:  1937, text: '中日戰爭全面爆發（第二次中日戰爭）' },
  { year:  1941, text: '日本偷襲珍珠港，太平洋戰爭爆發' },
  { year:  1945, text: '美國於廣島（8月6日）與長崎（8月9日）投下原子彈，日本宣布無條件投降' },
  { year:  1947, text: '戰後新憲法（《日本國憲法》）施行，確立和平主義與象徵天皇制' },
  { year:  1952, text: '《舊金山和約》生效，盟軍結束對日本的軍事占領' },

  // ── 戰後至現代 ─────────────────────────────────────────────────────
  { year:  1964, text: '東京舉辦夏季奧運會，象徵戰後經濟復興成果' },
  { year:  1989, text: '昭和天皇駕崩，平成時代開始' },
  { year:  1995, text: '阪神大地震重創神戶地區' },
  { year:  2011, text: '東日本大地震及海嘯引發福島核災' },
  { year:  2019, text: '明仁天皇退位，德仁天皇即位，令和時代開始' },
];
