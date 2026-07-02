// 奧斯曼帝國歷史時間線資料
// 年份均為近似學術估計，負數為西元前

const OT_ROW_LABELS = ['主要時期', '蘇丹／細分'];

const OT_GROUPS = [

  // ══ Row 0 主要時期（連續）══════════════════════════════════════════
  // 奧斯曼建立之前的安納托利亞（淡化——前身背景）
  { name:'安納托利亞遠古',  en:'Ancient Anatolia (Hittites & early peoples)', start:-2500, end:-1200, color:'#78350f', row:0, dim:true },
  { name:'後赫梯/波斯/希臘', en:'Post-Hittite, Persian & Hellenistic Rule', start:-1200, end:  395, color:'#4338ca', row:0, dim:true },
  { name:'拜占庭帝國',      en:'Byzantine Empire (Eastern Rome)',           start:  395, end: 1071, color:'#7c3aed', row:0, dim:true },
  { name:'塞爾柱突厥',      en:'Seljuk Turks (Sultanate of Rum)',           start: 1071, end: 1299, color:'#0f766e', row:0, dim:true },
  // 奧斯曼帝國建立到滅亡（全色顯示）
  { name:'奧斯曼帝國崛起',  en:'Ottoman Rise (Osman I → Mehmed II)',       start: 1299, end: 1453, color:'#9f1239', row:0, wikiEn:'Ottoman_Empire' },
  { name:'奧斯曼帝國鼎盛',  en:'Ottoman Golden Age (Constantinople → Vienna)', start:1453, end:1683, color:'#e11d48', row:0, wikiEn:'Ottoman_Empire' },
  { name:'奧斯曼帝國衰落',  en:'Ottoman Decline (Karlowitz → Dissolution)', start:1683, end:1922, color:'#be123c', row:0, wikiEn:'Ottoman_Empire' },
  // 現代土耳其（全色）
  { name:'土耳其共和國',    en:'Republic of Turkey',                        start: 1923, end: 2026, color:'#dc2626', row:0, wikiEn:'Turkey' },

  // ══ Row 1 重要蘇丹與時代════════════════════════════════════════════
  // 赫梯帝國（前身，值得標注）
  { name:'赫梯帝國',        en:'Hittite Empire (Anatolia\'s first great power)', start:-1650, end:-1180, color:'#92400e', row:1, dim:true },
  // 奧斯曼歷代重要蘇丹
  { name:'鄂圖曼一世（建國）', en:'Osman I – founder of the dynasty',      start: 1299, end: 1326, color:'#9f1239', row:1 },
  { name:'穆拉德一世',      en:'Murad I – conquest of Balkans, Kosovo',    start: 1362, end: 1389, color:'#be123c', row:1 },
  { name:'拜耶濟德一世',    en:'Bayezid I – besieged Constantinople, defeated by Timur', start:1389, end:1402, color:'#9f1239', row:1 },
  { name:'穆罕默德二世（征服者）', en:'Mehmed II – conquered Constantinople', start:1444, end:1481, color:'#f43f5e', row:1, wikiEn:'Mehmed_II' },
  { name:'謝利姆一世',      en:'Selim I – conquered Egypt & Syria, claimed Caliphate', start:1512, end:1520, color:'#fb7185', row:1, wikiEn:'Selim_I' },
  { name:'蘇萊曼一世（大帝）', en:'Suleiman the Magnificent – empire at peak', start:1520, end:1566, color:'#f43f5e', row:1, wikiEn:'Suleiman_the_Magnificent' },
  { name:'坦志麥特改革',    en:'Tanzimat Reforms – Westernization',        start: 1839, end: 1876, color:'#fb923c', row:1, dim:true },
  { name:'青年土耳其黨統治', en:'Young Turks (Committee of Union & Progress)', start:1908, end:1922, color:'#fbbf24', row:1, dim:true },
  // 現代土耳其
  { name:'凱末爾時代',      en:'Atatürk – founder of modern Turkey',       start: 1923, end: 1938, color:'#dc2626', row:1 },
];

const OT_EVENTS = [
  // ── 赫梯/安納托利亞遠古 ───────────────────────────────────────────
  { year: -1650, text: '赫梯帝國（Hittite Empire）在安納托利亞（今土耳其）興起，是古近東最強大的帝國之一，精通鐵器冶煉' },
  { year: -1274, text: '卡迭石戰役（Battle of Kadesh）：赫梯王穆瓦塔利二世與埃及拉美西斯二世大戰，雙方皆宣稱勝利，最終簽訂史上最早和平條約' },
  { year: -1200, text: '「青銅時代崩潰」：赫梯帝國被海上民族和外患摧毀，安納托利亞進入分裂時代' },

  // ── 波斯/希臘/羅馬時代 ────────────────────────────────────────────
  { year:  -547, text: '波斯居魯士大帝征服利底亞王克羅伊斯（Croesus），安納托利亞納入波斯帝國' },
  { year:  -334, text: '亞歷山大大帝攻入安納托利亞，傳說以劍斬「戈爾丁之結」，象徵統治亞洲的命運' },
  { year:   330, text: '君士坦丁大帝遷都拜占庭，改名君士坦丁堡，安納托利亞成為拜占庭帝國核心' },

  // ── 塞爾柱突厥 ─────────────────────────────────────────────────────
  { year:  1071, text: '曼齊刻爾特戰役（Battle of Manzikert）：塞爾柱突厥擊敗拜占庭皇帝，俘虜羅曼努斯四世，安納托利亞門戶洞開，土耳其化開始' },

  // ── 奧斯曼建國與崛起 ───────────────────────────────────────────────
  { year:  1299, text: '鄂圖曼一世（Osman I）在西安納托利亞宣布獨立，建立奧斯曼王朝，以游牧戰士（加齊）為核心向外擴張' },
  { year:  1326, text: '穆拉德一世之父奧爾汗攻陷布爾薩（Bursa），成為奧斯曼帝國首都' },
  { year:  1354, text: '奧斯曼軍渡過達達尼爾海峽，在歐洲取得立足點（加利波利），開始征服巴爾幹' },
  { year:  1389, text: '科索沃戰役（Battle of Kosovo）：穆拉德一世擊敗塞爾維亞-巴爾幹聯軍，奧斯曼控制巴爾幹，但穆拉德一世戰後被刺殺' },
  { year:  1396, text: '尼科波利斯戰役（Battle of Nicopolis）：奧斯曼大敗匈牙利國王率領的歐洲十字軍聯合艦隊' },
  { year:  1402, text: '安卡拉戰役（Battle of Ankara）：帖木兒大敗並俘虜蘇丹拜耶濟德一世，奧斯曼帝國瀕臨崩潰，後在十年內奇蹟般復元' },
  { year:  1444, text: '瓦爾納戰役（Battle of Varna）：年僅十二歲的穆罕默德二世（攝政）指揮，擊敗匈牙利/波蘭聯軍，封鎖歐洲對君士坦丁堡的援助' },

  // ── 征服君士坦丁堡 ─────────────────────────────────────────────────
  { year:  1453, text: '穆罕默德二世（Mehmed II，征服者）以巨型火炮（烏爾班大炮）轟開城牆，攻陷君士坦丁堡——東羅馬帝國千年帝都陷落，中世紀終結' },
  { year:  1456, text: '貝爾格勒圍攻失敗——約翰·匈雅提（John Hunyadi）擊退奧斯曼，暫時阻止了向中歐的進攻' },

  // ── 鼎盛時代 ───────────────────────────────────────────────────────
  { year:  1514, text: '查爾迪蘭戰役（Battle of Chaldiran）：謝利姆一世以火器大敗薩法維波斯，確立奧斯曼對安納托利亞東部的控制，遜什兩派對立格局確立' },
  { year:  1517, text: '謝利姆一世征服埃及，馬穆魯克蘇丹國滅亡，哈里發頭銜轉移至奧斯曼蘇丹，奧斯曼正式成為伊斯蘭世界領袖' },
  { year:  1520, text: '蘇萊曼一世（Suleiman the Magnificent，大帝）即位，帝國進入黃金時代，西方人尊稱「宏大的」' },
  { year:  1521, text: '蘇萊曼攻陷貝爾格勒，打開中歐門戶' },
  { year:  1526, text: '莫哈奇戰役（Battle of Mohács）：奧斯曼大敗匈牙利，匈牙利王國滅亡，歐洲震驚' },
  { year:  1529, text: '第一次圍攻維也納（Siege of Vienna）：兵抵哈布斯堡帝國首都，最終因補給不足撤退，奧斯曼西進達到最遠點' },
  { year:  1538, text: '普雷韋扎海戰（Battle of Preveza）：奧斯曼艦隊大敗神聖聯盟，稱霸地中海近三十年' },
  { year:  1566, text: '蘇萊曼大帝在第十三次遠征途中去世，享年七十一歲，帝國版圖橫跨三大洲，為奧斯曼最大疆域' },
  { year:  1571, text: '勒班托海戰（Battle of Lepanto）：西班牙/威尼斯/教皇聯合艦隊擊敗奧斯曼，奧斯曼地中海霸權首度受挫' },

  // ── 帝國衰落 ───────────────────────────────────────────────────────
  { year:  1683, text: '第二次圍攻維也納（Battle of Vienna）：波蘭國王索別斯基率翼騎兵解圍，奧斯曼軍大潰敗——帝國開始長達兩百年的退潮' },
  { year:  1699, text: '卡爾洛維茨條約（Treaty of Karlowitz）：奧斯曼被迫割讓匈牙利、特蘭西瓦尼亞，首次在談判桌上接受重大領土損失' },
  { year:  1798, text: '拿破崙入侵埃及（奧斯曼領土），震驚帝國，加速了西化改革的迫切感' },
  { year:  1839, text: '坦志麥特改革（Tanzimat Reforms）宣布，推行法律平等、現代行政，西化改革正式啟動' },
  { year:  1853, text: '克里米亞戰爭：奧斯曼聯合英法抵抗俄羅斯南下，戰勝但財政大傷，被稱「歐洲病夫」' },
  { year:  1908, text: '青年土耳其黨（Young Turks）革命，迫使蘇丹恢復憲法，奧斯曼進入憲政時代' },
  { year:  1912, text: '第一次巴爾幹戰爭：奧斯曼幾乎喪失所有歐洲領土，歐洲部分只剩東色雷斯' },
  { year:  1915, text: '亞美尼亞種族大屠殺（Armenian Genocide）：估計一百至一百五十萬亞美尼亞基督徒遇難，成為二十世紀首場種族滅絕' },
  { year:  1918, text: '第一次世界大戰奧斯曼戰敗，協約國分割帝國，殘破帝國瀕臨解體' },

  // ── 現代土耳其 ─────────────────────────────────────────────────────
  { year:  1919, text: '凱末爾（Mustafa Kemal Atatürk）領導土耳其獨立戰爭，抵抗希臘、法國、英國瓜分' },
  { year:  1922, text: '蘇丹制廢除，奧斯曼帝國正式終結，橫跨六百年的帝國落幕' },
  { year:  1923, text: '土耳其共和國建立，凱末爾任首任總統，遷都安卡拉；洛桑條約確定現代土耳其邊界' },
  { year:  1924, text: '哈里發制廢除——伊斯蘭世界最後一個政教合一的最高宗教職位消亡' },
  { year:  1928, text: '凱末爾改革：廢除阿拉伯字母，採用拉丁字母；政教分離、女性獲選舉權' },
];
