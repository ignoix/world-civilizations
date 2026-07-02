// 古印度／印度歷史時間線資料
// 年份均為近似學術估計，負數為西元前

const IN_ROW_LABELS = ['主要時期', '王朝／細分'];

const IN_GROUPS = [

  // ══ Row 0 主要時期（連續）══════════════════════════════════════════
  // 印度文明建立到近代（全色顯示）
  { name:'印度河文明',      en:'Indus Valley (Harappan) Civilization',   start:-2500, end:-1500, color:'#78350f', row:0, wikiEn:'Indus_Valley_civilisation' },
  { name:'吠陀時代',        en:'Vedic Period (Rigveda, early kingdoms)',  start:-1500, end: -600, color:'#92400e', row:0, wikiEn:'Vedic_period' },
  { name:'列國時代',        en:'Mahajanapadas (16 great kingdoms)',       start: -600, end: -322, color:'#a16207', row:0, wikiEn:'Mahajanapadas' },
  { name:'孔雀帝國',        en:'Maurya Empire (first unified India)',     start: -322, end: -185, color:'#b45309', row:0, wikiEn:'Maurya_Empire' },
  { name:'後孔雀時代',      en:'Post-Mauryan (Shunga / Kushan / Satavahana)', start:-185, end: 320, color:'#ca8a04', row:0, wikiEn:'Kushan_Empire' },
  { name:'笈多帝國',        en:'Gupta Empire – India\'s Golden Age',     start:  320, end:  550, color:'#d97706', row:0, wikiEn:'Gupta_Empire' },
  { name:'後笈多/地方王朝', en:'Post-Gupta & Regional Kingdoms (Rajput, Chola, Pala)', start:550, end:1206, color:'#b45309', row:0, wikiEn:'Chola_dynasty' },
  { name:'德里蘇丹國',      en:'Delhi Sultanate',                        start: 1206, end: 1526, color:'#1d4ed8', row:0, wikiEn:'Delhi_Sultanate' },
  { name:'蒙兀兒帝國',      en:'Mughal Empire',                          start: 1526, end: 1757, color:'#7c3aed', row:0, wikiEn:'Mughal_Empire' },
  // 英國殖民——外族統治（淡化）
  { name:'英屬印度',        en:'British India (East India Company + Raj)', start:1757, end:1947, color:'#0369a1', row:0, dim:true, wikiEn:'British_Raj' },
  // 獨立後
  { name:'現代印度',        en:'Republic of India',                      start: 1947, end: 2026, color:'#15803d', row:0, wikiEn:'India' },

  // ══ Row 1 重要王朝細分════════════════════════════════════════════
  // 印度河文明鼎盛期
  { name:'哈拉帕成熟期',    en:'Mature Harappan Phase (Mohenjo-daro peak)', start:-2500, end:-1900, color:'#92400e', row:1 },
  // 孔雀帝國
  { name:'旃陀羅笈多（月護王）', en:'Chandragupta Maurya – founder',    start: -322, end: -298, color:'#ea580c', row:1 },
  { name:'阿育王時代',      en:'Ashoka the Great – spread of Buddhism',  start: -268, end: -232, color:'#f97316', row:1 },
  // 後孔雀
  { name:'貴霜帝國',        en:'Kushan Empire – Silk Road hub',          start:   30, end:  375, color:'#ca8a04', row:1 },
  // 笈多黃金時代
  { name:'笈多黃金時代',    en:'Gupta Golden Age (Chandragupta II)',      start:  375, end:  467, color:'#d97706', row:1 },
  { name:'戒日王朝',        en:'Harsha\'s Empire',                       start:  606, end:  647, color:'#a16207', row:1 },
  // 蒙兀兒三代盛主
  { name:'阿克巴大帝',      en:'Akbar the Great – Mughal golden age',    start: 1556, end: 1605, color:'#8b5cf6', row:1 },
  { name:'沙賈漢（泰姬陵）', en:'Shah Jahan – builder of Taj Mahal',    start: 1628, end: 1658, color:'#7c3aed', row:1 },
  // 印度教抵抗力量
  { name:'馬拉地帝國',      en:'Maratha Empire – Hindu revival',         start: 1674, end: 1818, color:'#ea580c', row:1 },
];

const IN_EVENTS = [
  // ── 印度河文明 ─────────────────────────────────────────────────────
  { year: -2500, text: '印度河文明鼎盛——摩亨佐達羅（Mohenjo-daro）、哈拉帕為當時世界最大城市，擁有完善下水道系統與標準化磚塊' },
  { year: -1900, text: '印度河文明開始衰落，城市被廢棄，可能因氣候變化或薩拉斯瓦蒂河乾涸所致' },

  // ── 吠陀時代 ───────────────────────────────────────────────────────
  { year: -1500, text: '雅利安人（Aryans）進入印度河平原，帶來梵語與吠陀宗教，《梨俱吠陀》（Rigveda）逐漸形成' },
  { year: -1000, text: '鐵器時代到來，恆河平原農業開墾，早期印度城邦興起，種姓制度逐漸確立' },

  // ── 列國時代 ───────────────────────────────────────────────────────
  { year:  -563, text: '悉達多·喬達摩（釋迦牟尼，Siddhartha Gautama）誕生於今尼泊爾藍毗尼（傳統說法）' },
  { year:  -528, text: '釋迦牟尼在菩提迦耶菩提樹下悟道，創立佛教，初轉法輪於鹿野苑' },
  { year:  -500, text: '大雄（Mahavira）確立耆那教（Jainism）教義，非暴力（Ahimsa）思想影響深遠' },
  { year:  -326, text: '亞歷山大大帝入侵旁遮普，在海達斯佩斯河擊敗波魯斯大象軍，後因士兵拒絕東進被迫撤兵' },

  // ── 孔雀帝國 ───────────────────────────────────────────────────────
  { year:  -322, text: '旃陀羅笈多（Chandragupta Maurya）驅逐馬其頓駐軍，建立孔雀帝國——印度次大陸首個統一帝國' },
  { year:  -305, text: '旃陀羅笈多擊敗塞琉古一世，以五百頭戰象換取阿富汗諸省，鞏固西北邊疆' },
  { year:  -268, text: '阿育王（Ashoka）即位；卡林伽戰役後目睹十五萬人傷亡，深受觸動，皈依佛教' },
  { year:  -250, text: '阿育王在全國岩壁與石柱刻下詔令（Edicts of Ashoka），推廣非暴力、宗教寬容；派遣使者至斯里蘭卡、緬甸傳播佛教' },

  // ── 後孔雀/貴霜 ────────────────────────────────────────────────────
  { year:   100, text: '貴霜帝國（Kushan Empire）鼎盛，控制絲綢之路要衝，犍陀羅藝術融合希臘與佛教風格，佛教東傳中國' },

  // ── 笈多帝國 ───────────────────────────────────────────────────────
  { year:   320, text: '旃陀羅笈多一世建立笈多帝國，印度黃金時代（Golden Age）開始' },
  { year:   380, text: '超日王（Chandragupta II）統治——梵文文學（迦梨陀娑《沙恭達羅》）、數學、天文、醫學全面繁榮' },
  { year:   499, text: '數學家阿耶波多（Aryabhata）計算出π≈3.14159，提出地球自轉理論，為當時世界最先進天文數學' },

  // ── 後笈多 ─────────────────────────────────────────────────────────
  { year:   606, text: '戒日王（Harsha）統一北印度，唐玄奘抵達那爛陀大學（Nalanda）取經，帶回六百五十七部佛經' },
  { year:   712, text: '阿拉伯將領穆罕默德·本·卡西姆征服信德（今巴基斯坦），伊斯蘭文化正式進入印度' },
  { year:  1000, text: '伽色尼王朝馬哈茂德十七次入侵北印度，大規模劫掠廟宇財富，索姆納特神廟首度被毀' },

  // ── 德里蘇丹國 ─────────────────────────────────────────────────────
  { year:  1192, text: '第二次塔瑞戰役（Battle of Tarain）：穆罕默德·古里擊敗拉傑普特諸王，北印度伊斯蘭化加速' },
  { year:  1206, text: '顧特布丁·艾伊拜克建立德里蘇丹國，印度首個伊斯蘭蘇丹政權' },
  { year:  1398, text: '帖木兒洗劫德里，據說九萬俘虜遭屠殺，德里蘇丹國從此一蹶不振' },

  // ── 蒙兀兒帝國 ─────────────────────────────────────────────────────
  { year:  1498, text: '葡萄牙人達伽馬（Vasco da Gama）抵達卡利卡特，歐洲直達印度的海上貿易航線開通' },
  { year:  1526, text: '巴布爾（Babur，帖木兒後裔）在第一次帕尼帕特戰役勝出，以火器擊敗象軍，建立蒙兀兒帝國' },
  { year:  1556, text: '阿克巴大帝（Akbar）即位，推行宗教寬容、廢除人頭稅、統一行政，蒙兀兒帝國進入鼎盛' },
  { year:  1632, text: '沙賈漢（Shah Jahan）為亡妻慕塔芝·瑪哈建造泰姬陵（Taj Mahal），歷時二十二年，為世界最美建築之一' },
  { year:  1674, text: '希瓦吉（Shivaji Maharaj）建立馬拉地帝國，印度教勢力重新崛起，逐步蠶食蒙兀兒帝國' },

  // ── 英屬印度 ───────────────────────────────────────────────────────
  { year:  1757, text: '普拉西戰役（Battle of Plassey）：英國東印度公司擊敗孟加拉納瓦布，奠定英國殖民印度的基礎' },
  { year:  1857, text: '印度民族起義（Sepoy Mutiny）：士兵與民眾大規模反英，最終被鎮壓，直接導致英國解散東印度公司' },
  { year:  1858, text: '英屬印度（British Raj）正式建立，維多利亞女王成為印度女皇' },
  { year:  1885, text: '印度國民大會黨（Indian National Congress）成立，民族獨立運動開始組織化' },
  { year:  1919, text: '阿姆利則慘案（Jallianwala Bagh Massacre）：英軍向和平集會民眾開槍，數百人遇難，激化獨立運動' },
  { year:  1930, text: '甘地（Mahatma Gandhi）發起鹽務遊行（Salt March），非暴力不合作運動達到全球關注的高潮' },

  // ── 現代印度 ───────────────────────────────────────────────────────
  { year:  1947, text: '印度獨立，同時發生印巴分治（Partition）；數百萬人被迫遷徙，宗教暴力中逾百萬人遇難' },
  { year:  1948, text: '甘地遭印度教極端分子刺殺，舉世哀悼' },
  { year:  1974, text: '印度進行首次核試驗（微笑的佛陀行動），成為核武國家' },
  { year:  1991, text: '印度推行經濟自由化改革，開放外資，啟動二十年高速增長' },
];
