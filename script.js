let currentTextTopicSpec;
let blurDiv;
let chosenHat;
let neededContent;
let currentCharText;
let currentTr;
let hideThreatOptions1;
let hideThreatOptions2;
let ansThreatTable;
let correctThreatAns;
let clickedClouds;
let currentPage;
let currentPageOperations;
let topicStar;
let topicPageList = ['main-topic-page','pakar-jobs-clouds-page', 'emergency-page', 'civil-defense-page', 'page-test', 'emergency-sit-page', 'es-photos-page', 'es-sum-table', 'es-mini-pic-page', 'es-table-page', 'es-authority-page', 'page-test', 'es-teamwork-page', 'emergency-page', 'civil-defense-page-two', 'civil-defense-page-three', 'sum-page', 'citizen-inquiries', 'fin-page'];
const cloudColors = ["blue", "green", "orange"];
const threatOptionsDivTop = ["0%", "18%", "35%", "45%"];
const threatTableAnswers = ["כן", "לא", "כן", "כן ולא"];
let timeAns = ["", "", "", "", "", ""];
let opTableAns = ["", "", "", "", "", "", "", ""];
let esTableAns;
const correctEsTableAns = ["attack", "attack", "attack", "special", "attackspecial", "special", "attack"];
const operationPages = ["civil-defense-info-div-operations", "more-info-operations-div1", "more-info-operations-div2", "more-info-operations-div3"];
let timeAnsDefense;
let timeAnsCommands;
let answeredThreat;
let answeredTime;
let topicClicked;
let currentQuesCivil;
let finishedReadingExp;
let selectedAns;
let ansShort;
let currentQues;
let answeredOperations;
let megaphoneVisited;
let rocketVisited;
let currentTestTopic;
let back;
let cdTableVisited;
let cdAuthVisited;
let currentOpPage;
let currentTopic;
let opTwoAnswered;
let answeredTimeTwo;
let answeredThreatTwo;
let totalScore;
let currentTextTopicSpecTest;
const numQues = 13;
const scorePerAns = 100 / numQues;
let spAnswers = ["", "", "", "", "", ""];
const coText1 = [["בממד האיום נתמקד במילה התקפה, התקפה לפי חוק ההתגוננות האזרחית נחלקת לשתי הגדרות כפי שאתם רואים כאן. אחרי שקראתם את ההגדרה, בואו ניישם:", "none"], [`הממד הבא שנתמקד בו הוא ממד הזמן. ממד הזמן מתמקד במילים "מפני ולשם צמצום תוצאותיה של התקפה".`, "ממד זה מתחלק לשלוש קטגוריות: לפני ההתקפה, בזמן ההתקפה ואחרי ההתקפה. דוגמאות לפעולות כאלו אתם יכולים לראות כאן. התאימו את הדוגמאות לקטגוריה שמתאימה להם.", "none"], [`הממד האחרון שלנו בכל הנוגע להתגוננות האזרחית הוא ממד הפעולות המתמקד במילים "האמצעים הנקוטים לשם התגוננות". כפי שאתם רואים פיקוד העורף פועל בתחומים רבים ומגוונים.`, "none"]];
const specCoOp1 = [[" מחסה ציבורי הוא לא מקלט, אלא מקום שהוא ארעי באופיו. מקום שבו הרשות מחליטה להועיד מקום להיות מחסה ציבורי עליה להודיע על כך לאדם, לשאת בהוצאות לשינויים וכו. פיקוד העורף פועל להועדת מחסה ציבורי רק אם הרשות המקומית לא מממשת את אחריותה.", "none"], ["מקלט - סעיף 14 לחוק ההתגוננות האזרחית מטיל שלל חובות על בעלי נכסים ועל הרשות המקומית ביחס להקמת מקלטים ותחזוקתם. לפי סעיף זה בכל מבנה בישראל צריך להיות מקלט בו או בסמוך לו.", "רישיון דו תכליתי וגריעת מקלטים - שימוש במקלט לאו דווקא לצורכי התגוננות אזרחית מפני אזעקה אלא גם לשימושים נוספים. בנוסף, מדובר על אפשרות להרוס מקלט ודרישה לרישיון מאת הרשות המוסמכת.", "none"], [`חובות הרשות המקומית - סעיף 12 לחוק הג"א - נותן לפיקוד העורף סמכות לתת הוראות לרשות המקומית: התקנת מקלטים ציבוריים, וידוא שמותקנים מקלטים ושהם מתוחזקים בצורה ראויה.`, "none"]];
const coText2 = [[`ממד האיום: כל אירוע שאינו אירוע הג"א = אירוע חירום אזרחי, הקפצה של סעיף 90א לפקודת המשטרה.`, "none"], [`ממד הזמן - ב- 48 שעות הראשונות באירוע חירום אזרחי מדובר על מצב עובדתי. לאחר שחולפות 48 שעות, נדרשת הכרזה של דרג מדיני על מנת שבחלוף 48 שעות יוכלו לבצע פעולות מכוח פקודת המשטרה ולהפעיל סמכויות.`, "none"]]
const specCoOp2 = [[`ניתן לראות פה טבלה שמסכמת את הסמכות להכרזה ואת האחריות לפיקוד ושליטה בחלוקה לסוגי אירועים שונים. ניתן לראות כי האחריות מתחלקת בין צה"ל למ"י בהתאם לשטח האחריות לביטחון הפנים של גורמים אלו `, `וכי צה"ל גם אחראי לאירועי חירום אזרחיים במקרים בעלי זיקה למערכת הביטחון. בנוסף, פקודת המשטרה קובעת אפשרות של העברת האחריות בין הגורמים השונים.`, "none"], [`גם באירוע חירום אזרחי יש סמכויות לשוטר. נציין כי כשהאחריות לאירוע חירום אזרחי שייכת לצה"ל או עוברת אליו הסמכויות האלו מוקנות גם לחיילים.`, "none"]];
const cloudText = [["כדי להבין מה הוא שירות ההתגוננות האזרחית צריכים להבין, מה היא בכלל התגוננות אזרחית?", '"התגוננות אזרחית היא האמצעים הנקוטים לשם התגוננות מפני כל התקפה או סכנת התקפה על האוכלוסייה האזרחית או לשם צמצום תוצאותיה של התקפה כזאת".',"פיקוד העורף אחראי על ארגון וניהול של כל ההתגוננות האזרחית במדינה למעט במרחבים של פיקוד צפון, פיקוד דרום ופיקוד מרכז. בהמשך, נבין אילו פעולות פיקוד העורף יכול לבצע ובאיזה טווחי זמן.", "none"], ["פיקוד העורף משמש לפיקוד מרחבי. בתוך כך, פיקוד מרחבי אחראי על מרחב גיאוגרפי יבשתי מסויים. השטח עליו פיקוד העורף אחראי הוא השטח שלא בתחומי השטח של פיקוד הדרום, פיקוד הצפון ופיקוד המרכז.", "פיקוד העורף הוא פיקוד מרחבי ייחודי, כשלעומת פיקודים מרחביים אחרים הוא אינו לוקח חלק בהגנה על הגבולות החיצוניים של המדינה ובאחריות לביטחון האזרחים השוטף במרחבו.", "none"], ["הכובע האחרון של פיקוד העורף הוא קצין חיל ראשי בעל מומחית בתחומי ההתגוננות האזרחית, החילוץ וההצלה. פיקוד העורף משמש כגורם מנחה לפיקוד צפון, פיקוד מרכז ופיקוד דרום בפעולות בתחומים אלו.", "none"]];
const threatAns1Text = ["האיום: רקטה מג'נין, האם התקפה? כן! רקטה מג'נין היא הפצצה אווירית, הפגזה ארטילרית או רקטית וכל סוג אחר של ירי ארוך טווח מצד אויב.", "האיום: חדירת מחבלים מלבנון, האם התקפה? לא מדובר על התקפה. כשמדברים על חדירת מחבלים היא לא נכנסת תחת ההגדרה של ניסיון פגיעה מצד צבא של מדינת אויב.", "למה? כי לא מדובר על צבא מאורגן ורשמי של מדינה אלא על ארגון סורר.", "האיום: תמרון של הצבא הסורי ברמת הגולן, האם התקפה? כן! מדובר על ניסיון פגיעה של צבא של מדינת אויב ולכן מדובר בהתקפה.", 'האיום: כטמ"ם מרצועת עזה, האם התקפה? כן ולא! ישנן דעות חלוקות האם כטמ"ם מהווה הפצצה אווירית, הפגזה ארטילרית או רקטית וכל סוג אחר של ירי ארוך טווח של אויב.', "none"];
const correctTimeAns = ["before", "before", "before", "while", "while", "after"];
const operations1Text = [['הממד האחרון שלנו בכל הנוגע להתגוננות האזרחית הוא ממד הפעולות המתמקד במילים "האמצעים הנקוטים לשם התגוננות". כפי שאתם רואים פיקוד העורף פועל בתחומים רבים ומגוונים.'], ["מחסה ציבורי הוא לא מקלט, אלא מקום שהוא ארעי באופיו. מקום שבו הרשות מחליטה להועיד מקום להיות מחסה ציבורי עליה להודיע על כך לאדם, לשאת בהוצאות לשינויים וכו.", "none"], ["מקלט - סעיף 14 לחוק ההתגוננות האזרחית מטיל שלל חובות על בעלי נכסים ועל הרשות המקומית ביחס להקמת מקלטים ותחזוקתם. לפי סעיף זה בכל מבנה בישראל צריך להיות מקלט בו או בסמוך לו.", "רישיון דו תכליתי וגריעת מקלטים - שימוש במקלט לאו דווקא לצורכי התגוננות אזרחית מפני אזעקה אלא גם לשימושים נוספים. בנוסף, מדובר על אפשרות להרוס מקלט ודרישה לרישיון מאת הרשות המוסמכת. ", "none"], [`חובות הרשות המקומית - סעיף 12 לחוק הג"א - נותן לפיקוד העורף סמכות לתת הוראות לרשות המקומית: התקנת מקלטים ציבוריים, וידוא שמותקנים מקלטים ושהם מתוחזקים בצורה ראויה.`, "none"]];
const threat1Text = ["בממד האיום נתמקד במילה התקפה, התקפה לפי חוק ההתגוננות האזרחית נחלקת לשתי הגדרות כפי שאתם רואים כאן. אחרי שקראתם את ההגדרה, בואו ניישם:", "none"];
const time1Text = ["אחרי שתרגלנו הבנו מה היא התקפה. עכשיו נעבור הלאה. ", 'הממד הבא שנתמקד בו הוא ממד הזמן. ממד הזמן מתמקד במילים "מפני ולשם צמצום תוצאותיה של התקפה". ', "ממד זה מתחלק לשלוש קטגוריות: לפני ההתקפה, בזמן ההתקפה ואחרי ההתקפה. דוגמאות לפעולות כאלו אתם יכולים לראות כאן. התאימו את הדוגמאות לקטגוריה שמתאימה להם.", "none"];
const charText = [[],["לפיקוד העורף יש שלושה תפקידים מרכזיים שמוגדרים במקומות שונים", "עכשיו נצלול לכל אחד מהכובעים", "none"], ['נחלק את הדרך שלנו לשני חלקים מרכזיים. הראשון מביניהם יהיה חירום מלחמתי. כדי לפשט את הדברים נפתח בכך שתחת חירום מלחמתי נכנס לנו טיל וכי טיל שווה אירוע של התגוננות אזרחית.', "none"], ['בחלק הראשון שלנו של חירום מלחמתי, אנחנו נתמקד בחוק ההתגוננות האזרחית, התשי"א-1951. חוק זה הוא מרכזי ומאפשר לפיקוד העורף לפעול בתחומים שונים, בהמשך נראה איך.', 'בתחילת הדרך שלנו למדנו מה היא התגוננות אזרחית. עכשיו נחלק את ההתגוננות האזרחית לשלושה ממדים שונים: ממד האיום, ממד הזמן וממד הפעולות.', "none"], [], ["עכשיו נעבור לנושא הבא שלנו שעדיין נמצא תחת תחום ההתגוננות האזרחית ומצב חירום מלחמתי. יש לנו שני מצבי חירום באירוע ההתגוננות האזרחית שעליהם נדבר.", "שעת התקפה - אין צורך באף הכרזה, מצב שנוצר בעת הישמע אזעקה, ממד הזמן - מוגבל ל24 שעות מרגע ההתקפה הראשונה, גם אם יש עוד התקפות במהלך ה24 שעות. ", "תיחום המרחב - המרחב המותקף מצוי בשיקול דעת הגורמים המוסמכים. ריתוק משקי - לא מתקיים ריתוק משקי. כלומר אי אפשר לחייב עובדים להגיע לעבודתם.", "לעומת זאת, מצב מיוחד בעורף הוא מצב משפטי אשר מושפע מהחלטות הממשלה ושר הביטחון (ככל שהממשלה לא הכריזה). ", "על מנת שיהיה מצב מיוחד בעורף, נדרשת הכרזה של הדרג המדיני, מדובר על הנחיה רציפה בהתאם לאישור הדרג המדיני ביחס לפרק הזמן של ההכרזה והמרחב של מצב מיוחד בעורף נקבע גם הוא על ידי דרג מדיני.", "שוני נוסף משעת התקפה הוא האפשרות להורות על ריתוק עובדים ולחייב עובדים במפעל חיוני או במפעל למתן שירותים קיומיים לעבודה.",  "none"], ["כאן אפשר לראות דוגמא להכרזת שר הביטחון על מצב מיוחד בעורף ל48 שעות במבצע מגן וחץ.", "none"],[], ["אחרי שהבנו מה הם אירועי ההתגוננות האזרחית נצלול עוד יותר לסמכויות באירוע התגוננות אזרחית. כפי שרשום בסעיף 9ד לחוק ההתגוננות האזרחית:", `“במצב מיוחד בעורף או בשעת התקפה, הרמטכ”ל, סגנו, ראש אגף המטה הכללי בצבא הגנה לישראל, ראש הג”א, או קצין בדרגת אלוף בצבא הגנה לישראל שדראגתו אלוף המשמש כאלוף פיקוד, לגבי המרחב שהוא ממנה”. `, `סמכויות אלו נתונות לרמטכ"ל, לר' אמ"ץ, לר' ההתגוננות האזרחית שהוא אלוף פיקוד העורף ולאלופי פיקוד מרכז, פצ"ן, פד"ם.`, "none"], ['מלבד הסמכויות שנתונות לדרגות הבכירות, יש גם סמכויות הנתונות לחברי הג"א וקציני הג"א בעת מצב מיוחד בעורף או שעת התקפה.', 'חבר הג"א הוא חייל שמשרת בפיקוד העורף, כשקצין הג"א הוא קצין המשרת בפיקוד העורף.', 'ניתן לראות שלשתי הקבוצות האלו יש סמכויות מעט שונות אך שהתנאים להפעלת הסמכות זהים וכי ישנן הגבלות על השימוש בסמכויות.', `הזהות ואזהרה כחבר \ קצין הג"א, עדיפות להפעלת כוח ע"י משטרה כנגד אזרחים, על הפעולה להיות הכרחית להצלת נפש ורכוש ולהיות מידתית וסבירה בכל הנוגע להפעלת כוח ובחינת חלופות שפוגעות פחות באזרחים.`, "none"], [], [], ['שיתוף פעולה בין ארגוני חירום - צה"ל ופיקוד העורף אחראיים על הפיקוד והשליטה ועל הטיפול באירועי חירום מלחמתיים שקורים בעת שעת התקפה ומצב מיוחד בעורף.', 'פיקוד העורף יכול גם לשתף פעולה עם ארגוני חירום שונים שיעזרו לו בטיפול ובהשגת שליטה בעת מצבי חירום אלו - דוגמא לכך היא משטרת ישראל -', `נוהל שיתוף פעולה עם יחסי הגומלין בין פיקוד העורף למשטרת ישראל, מגן דוד אדום, הרשות הארצית לכבאות והצלה ויחידת הכבאים הכתומים.
בנוסף, פיקוד העורף פועל מול רשויות מקומיות בכל התחומים של הכנת הרשות לחירום והכשרת בעלי תפקידים.`, "none"], ['עברנו על כל התחום של מצבי חירום מלחמתיים, סקרנו את חוק הג"א ואת הפעולות שפיקוד העורף יכול לבצע לפני התקפה, בזמן התקפה ואחרי התקפה.', 'למדנו מה זה מצב מיוחד בעורף ושעת התקפה ואת ההבדלים ביניהם ולמדנו את הסמכויות שיש לחיילים וקצינים בפיקוד העורף.', 'בסיום הדברים, למדנו כי לצה"ל ופיקוד העורף יש גם אחריות כוללת לפיקוד ושליטה באירועי החירום המלחמתיים.', 'אחרי שעברנו על הנושא של אירועי חירום מלחמתיים ותחום ההתגוננות האזרחית נעבור לתחום החירום האזרחי. המקור החוקי בתחום זה הוא פקודת המשטרה.', 'none'], [`מהו אירוע חירום אזרחי? כמו שאתם רואים יש הבדל גדול בין אירועים בתחום ההתגוננות האזרחית שמדברים על היבטים מלחמתיים, טילים וחדירה של צבא אויב לבין אירועים אזרחיים שרובם הם אירועים שנוצרו כתוצאה מפגעי טבע, פנדמיות וכו'.`, 'none'], ["כמו שחילקנו את תחום ההתגוננות האזרחית לשלושה מימדים, כך נעשה גם עם אירוע חירום אזרחי ונחלק לממד האיום, הזמן והפעולות.", 'none'], [], [], ['אז מה למדנו היום?', 'התחלנו במצבי חירום מלחמתיים ולמדנו מהי התקפה, מה הם מצבי החירום המלחמתיים הקיימים, הסמכויות שיש לקצינים בכירים ולחיילים וקצינים בפיקוד העורף בשעת התקפה ומצב מיוחד בעורף ואת הסמכויות של חיילים וקצינים בפיקוד העורף.', 'לאחר מכן, עברנו להבין מה הם אירועי חירום אזרחיים - ראינו את השוני במתאר האירועים שיש כאן לעומת אירועי חירום מלחמתיים, למדנו על הפעולות שאפשר לבצע ועל הסמכויות שיש לצה"ל ולמ"י באירועי החירום האלו.', 'none']];
const quesCivilGen = ["פיקוד העורף הוא הגורם שאחראי על הועדת מחסה ציבורי?", "הרשות המקומית אחראית על תקינות המקלטים הציבוריים בתחומה?", "אי אפשר לעשות שימוש דו תכליתי במקלט שהוא לא למטרת מחסה לצורכי התגוננות אזרחית?", "לפיקוד העורף יש סמכות לתת הוראות לרשות המקומית בנושא מקלטים ציבוריים?"];
const ansCivilGen = ["לא נכון", "נכון", "לא נכון", "נכון"];
const quesEsGen = ["חנות המזון הקרובה לביתך סגורה, האם אפשר להיכנס לחנות רק כי אני חבר הג”א?", "יש אזעקה ברחוב לאחר תקופה ממושכת והאוכלוסייה בבהלה. האם ניתן להנחות את האזרחים להיכנס למרחבים המוגנים הקרובים?", "נדרש סיוע מארגון מד”א בעת שעת התקפה, האם קצין הג”א יכול להנחות את מד”א?", "יש עכשיו מצב מיוחד בעורף, ויש מקלט במרכז מסחרי שמלא בציוד ולא ניתן להיכנס אליו בעת אזעקה, האם חבר הג”א יכול להיכנס כדי לכפות ציות לדיני ההתגוננות האזרחית?"];
const ansEsGen = ["לא נכון", "נכון", "נכון", "נכון"];
const ansEsGenText = [['התשובה הנכונה: לא נכון! הכניסה לכל מקום יכולה להיות רק לשם הצלת הנפש או הרכוש', "none"], ['התשובה הנכונה: נכון! קצין הג"א יכול להנחות אוכלוסייה במצב של שעת התקפה', "none"], ['התשובה הנכונה: נכון! זאת תוך הזדהות מראש ובצורה סבירה. חשוב לציין שיש תורה פיקודית בתחום שיתוף פעולה עם ארגוני העזר, שמדא היא אחת מהם', "none"], ['התשובה הנכונה: נכון! זאת תוך הזדהות מראש וציון מטרת הכניסה', "none"]];
const ansCivilGenText = [["התשובה הנכונה: לא נכון! פיקוד העורף פועל להועדת מחסה ציבורי רק אם הרשות המקומית לא ממשת את אחריותה.", "none"], ["התשובה הנכונה: נכון! זאת לפי סעיף 14 לחוק ההתגוננות האזרחית", "none"], ["התשובה הנכונה: לא נכון! לפי סעיף 15 לחוק ההתגוננות האזרחית, ניתן לעשות", "none"], ["התשובה הנכונה: נכון! זאת לפי סעיף 12", "none"]];
window.addEventListener("load", () => { // Initializing the lomda
    blurDiv = document.getElementById("blur-div");
    document.getElementById("start-lomda-button").addEventListener('click', startLomda);
    back = false;
    answeredTimeTwo = false;
    answeredThreatTwo = false;
    currentCharText = 0;
    currentOpPage = 0;
    currentPage = 0;
    clickedClouds = [];
    ansThreatTable = 0;
    correctThreatAns = 0;
    currentPageOperations = 0;
    totalScore = 0;
    cdAuthVisited = false;
    opTwoAnswered = false;
    cdTableVisited = false;
    answeredThreat = false;
    answeredTime = false;
    rocketVisited = false;
    megaphoneVisited = false;
    finishedReadingExp = false;
    esTableAns = ["", "", "", "", "", "", ""];
    answeredOperations = false;
    timeAnsDefense = ["before"];
    timeAnsCommands = ["after"];
    currentQuesCivil = 0;
    currentQues = 1;
    document.getElementById("credits-div").addEventListener("click", creditsClicked);
});

const creditsClicked =() => {
    document.getElementById("credits-clicked").style.display = "block";
    document.getElementById("close-credits").addEventListener("click", () => {
        document.getElementById("credits-clicked").style.display = "none";
    });
};

const startLomda = () => {
    setTimeout(() => {
        document.getElementById("main-start-page").style.display = "none";
        document.getElementById("main-topic-page").style.display = "block";
    }, 600);
    let layers = document.querySelectorAll('.left-layer');
    for (const layer of layers) {
        layer.style.display = "block";
        setTimeout(() => {
                layer.classList.toggle("active");
        }, 1);
    };
    document.getElementById("start-lomda-button").removeEventListener('click', startLomda);
    document.getElementById("star-topic1").addEventListener('click', topicManager);
};

const topicManager = (event) => {
    if (event.target.id === "star-topic1") {
        currentPage = 1;
    } else if (event.target.id === "star-topic2") {
        currentPage = 3;
    } else if (event.target.id === "star-topic3") {
        currentPage = 5;
    } else {
        currentPage = 13;
    };
    topicStar = true;
    let starNum = event.target.id.slice(-1);
    for (let i = 1; i < 5; i++) {
        document.getElementById(`topic${i}-back-button-text`).style.display = "none";
    };
    document.getElementById(`topic${starNum}-back-button-text`).style.display = "block";
    topic1Manager();
};


const topic1Manager = () => {
    if (back) {
        currentPage--;
        setTimeout(() => {
            document.getElementById(topicPageList[currentPage+1]).style.display = "none";
            document.getElementById(topicPageList[currentPage]).style.display = "block";
            back = false;
        }, 1250);
    } else if (topicStar) {
        setTimeout(() => {
            document.getElementById(topicPageList[0]).style.display = "none";
            document.getElementById(topicPageList[currentPage]).style.display = "block";
            topicStar = false;
        }, 1250);
    } else {
        currentPage++;
        setTimeout(() => {
            document.getElementById(topicPageList[currentPage-1]).style.display = "none";
            document.getElementById(topicPageList[currentPage]).style.display = "block";
        }, 1250);
    };

    if (currentPage === 7) {
        let tableAnswers = document.querySelectorAll('.ques-time-ans');
        for (const tableAnswer of tableAnswers) {
            tableAnswer.addEventListener('mouseenter', esTableManager);
        };
    } else if (currentPage === 11) {
        document.getElementById("ques-text").innerText = quesEsGen[0];
        document.getElementById("ques-text").style.fontSize = "2vmax";
        document.getElementById("civil-ans-div").addEventListener("click", clickedAns);
    };
    if (topicPageList[currentPage] === "page-test") {
        document.getElementById("civil-ans-div").addEventListener("click", clickedAns);
        document.getElementById("back-div").style.display = "none";
    } else if (topicPageList[currentPage] === "main-topic-page"){
        document.getElementById("back-div").style.display = "none";
    } else {
        document.getElementById("back-div").style.display = "block";
    };

    if (topicPageList[currentPage -1] === "page-test") {
        if (currentTestTopic === 'civil') {
            topicPageList[currentPage - 1] = 'page-test-ans1';
            document.getElementById("page-test").style.display = "none";
        } else {
            topicPageList[currentPage - 1] = 'page-test-ans2';
            document.getElementById("page-test").style.display = "none";
        };
    };

    if (topicPageList[currentPage] === "fin-page") {
        scoreManager();
    };
    topicEffectManager();
};


const topicEffectManager = () => {
    if (currentPage === 1 || currentPage === 3 || currentPage === 5 || currentPage === 13) {
        for (let i = 1; i < 5; i++) {
            document.getElementById(`topic${i}-back-button-text`).style.display = "none";
        };

        switch(currentPage) {
            case 1:
                currentTopic = 1;
                break;
            case 3:
                currentTopic = 2;
                manageCivilDefense();
                break;
            case 5:
                currentTopic = 3;
                manageEmergencySit();
                break;
            default:
                currentTopic = 4;
                manageCivilDefenseTwo();
                spDragManager();
                break;
        };
        document.getElementById(`topic${currentTopic}-back-button-text`).style.display = "block";
        document.getElementById("move-topic-animation-text").innerText = `נושא ${currentTopic}`;
        document.getElementById(`star-topic${currentTopic}`).style.opacity = 1;
        document.getElementById(`star-topic${currentTopic}`).addEventListener("click", topicManager);

        let layers = document.querySelectorAll('.top-layer');
        let layerNum;
        let classList;
        for (const layer of layers) {
            layer.style.display = "block";
            setTimeout(() => {
                layerNum = layer.id.slice(-1);
                classList = layer.classList;
                classList.add(`top-layer${layerNum}-animation`);
            }, 1);
        };

        setTimeout(() => {
            for (const layer of layers) {
                layer.style.display = "none";
            }

            manageTextBox();
        }, 4000);
        
    } else {
        blurDiv.style.display = "block";
        blurDiv.style.animation = 'blur-transition 2.5s ease-in-out forwards';
        setTimeout(() => {
            blurDiv.style.display = "none";
            manageTextBox();
        }, 2500);
    };

    setTimeout(() => {
        if (charText[currentPage][0] !== undefined) {
            document.getElementById("black-shadow-div").style.display = "block";
        }
    }, 1250);
};


const manageBackButton = (event) => {
    if ((currentPage - 1) === 11) {
        for (let i = 1; i < 5; i++) {
            document.getElementById(`topic${i}-back-button-text`).style.display = "none";
        }
        document.getElementById("topic3-back-button-text").style.display = "block";
    } else if ((currentPage - 1) === 3) {
        for (let i = 1; i < 5; i++) {
            document.getElementById(`topic${i}-back-button-text`).style.display = "none";
        }
        document.getElementById("topic2-back-button-text").style.display = "block";
    } else if ((currentPage - 1) === 1) {
        for (let i = 1; i < 5; i++) {
            document.getElementById(`topic${i}-back-button-text`).style.display = "none";
        }
        document.getElementById("topic1-back-button-text").style.display = "block";
    } else if ((currentPage - 1) === 0) {
        document.getElementById("back-div").style.display = "none";
    };
    if (event.target.id === "back-button") {
        back = true;
        topic1Manager();
    } else {
        document.getElementById("back-div").style.display = "none";
        setTimeout(() => {
            document.getElementById(topicPageList[currentPage]).style.display = "none";
            document.getElementById(topicPageList[0]).style.display = "block";
            currentPage = 0;
        }, 1250);
        blurDiv.style.display = "block";
        blurDiv.style.animation = 'blur-transition 2.5s ease-in-out forwards';
        setTimeout(() => {
            blurDiv.style.display = "none";
        }, 2500);
    };
};

const cloudManager = (event) => {
    chosenHat = event.target.id;
    chosenHat = chosenHat.split("-");
    chosenHat = chosenHat[0];
    if (cloudColors.includes(chosenHat)) {
        document.getElementById(topicPageList[currentPage]).style.display = "none";
        document.getElementById("cloud-page1").style.display = "block";
        for (const color of cloudColors) {
            document.getElementById(`${color}-hat-info`).style.display = "none";
            document.getElementById(`${color}-char`).style.display = "none";
        }
        document.getElementById(`${chosenHat}-hat-info`).style.display = "block";
        document.getElementById(`${chosenHat}-char`).style.display = "block";
        clickedClouds.push(chosenHat);
        document.getElementById("back-button-cloud").addEventListener("click", backButtonManagerCloud);
    };

    if (clickedClouds.includes("blue") && clickedClouds.includes("green") && clickedClouds.includes("orange")) {
        document.getElementById("next-page-button").style.display = "block";
        document.getElementById("next-page-button").addEventListener("click", topic1Manager);
    };
    textSpecManager("cloudManager");
};

const backButtonManagerCloud = () => {
    document.getElementById(topicPageList[currentPage]).style.display = "block";
    for (const color of cloudColors) {
        document.getElementById(`${color}-cloud`).style.animation = `none`;
    }
    document.getElementById("cloud-page1").style.display = "none";
};

const manageTextBox = () => {
    if (charText[currentPage][currentCharText] !== undefined) {
        if (currentCharText === 0) {
            document.getElementById("black-shadow-div").style.display = "block";
            document.getElementById("soldier-pic-textbox").style.display = "block";
            document.getElementById("char-text-div").style.animation = "char-text-div-up 1.2s forwards";
            document.getElementById("left-arrow-text-box-div").addEventListener('click', pressedTextBox);
        }
        if (charText[currentPage][currentCharText] === "none") {
            document.getElementById("char-text-div").style.animation = "char-text-div-down 1.2s forwards";
            document.getElementById("soldier-pic-textbox").style.display = "none";
            document.getElementById("left-arrow-text-box-div").removeEventListener('click', pressedTextBox);
            setTimeout(() => {
                document.getElementById("black-shadow-div").style.display = "none";
                currentCharText = 0;
            }, `500`);
        } else {
            let num = Math.floor((Math.random() * 2) + 1);
            document.getElementById("soldier-pic-textbox").src = `assets/soldierChars/solider${num}.png`;
            document.getElementById("char-text").innerText = charText[currentPage][currentCharText];
        };
    
        if (currentCharText === 1 && currentPage === 1) {
            for (const color of cloudColors) {
                document.getElementById(`${color}-cloud`).style.display = "block";
                document.getElementById(`${color}-cloud`).style.animation = `blur-in 1.5s ${cloudColors.indexOf(color)}s`;
                setTimeout(() => {
                    document.getElementById(`${color}-cloud`).style.opacity = `1`;
                }, `${cloudColors.indexOf(color)}000`);
                setTimeout(() => {
                    document.getElementById("cloud-div").addEventListener("click", cloudManager);
                }, `3500`);
            };
        };
    }
};

const pressedTextBox = () => {
    currentCharText++;
    manageTextBox();
}


const manageCivilDefense = () => {
    finishedReadingExp = false;
    currentTestTopic = "civil";
    let topicButtons = document.querySelectorAll(".civil-defense-topic-button");
    
    for (const button of topicButtons) {
        button.addEventListener("click", (event) => {
            topicClicked = event.target.id;
            topicClicked = topicClicked.split("-");
            topicClicked = topicClicked[0];
            document.getElementById("civil-defense-info-div-main").style.display = "none";
            document.getElementById("civil-defense-info-div-topic").style.display = "block";
            document.getElementById(`civil-defense-info-div-${topicClicked}`).style.display = "block";
            document.getElementById("back-button-civil-defense").addEventListener("click", mangeBackCivil);
            window[`${topicClicked}TopicManager`]();
        });
    };
};

const mangeBackCivil = () => {
   document.getElementById("civil-defense-info-div-main").style.display = "block";
    document.getElementById("civil-defense-info-div-topic").style.display = "none";
    document.getElementById(`civil-defense-info-div-${topicClicked}`).style.display = "none";
    if(topicClicked === "operations") {
        for (let i = 1; i < operationPages.length; i++) {
            document.getElementById(operationPages[i]).style.display = "none";
        };
    };
    if (answeredThreat && answeredTime && answeredOperations) {
        document.getElementById("civil-defense-topic-div").style.top = "-2%";
        document.getElementById("topic2-ques-button").style.display = "block";
        document.getElementById("topic2-ques-button").addEventListener("click", () => {
            topic1Manager();
        })
    }
};

var threatTopicManager = () => {
    if (!answeredThreat) {
        let tableAnswers = document.querySelectorAll('.table-answer');
        for (const tableAnswer of tableAnswers) {
            tableAnswer.addEventListener('mouseenter', maangeThreatTable);
        };
    };
    textSpecManager("manageCivilDefense1");
};

const maangeThreatTable = (event) => {
    hideThreatOptions1 = false;
    document.getElementById("table-threat-options").addEventListener('mouseenter', () => {document.getElementById("table-threat-options").style.display = "flex";});
    document.getElementById("table-threat-options").addEventListener('mouseleave', () => {document.getElementById("table-threat-options").style.display = "none";});
    currentTr = event.target.id;
    currentTr =  currentTr.slice(-1);
    document.getElementById("table-threat-options").style.display = "flex";
    document.getElementById("table-threat-options").style.top = threatOptionsDivTop[currentTr-1];
    currentTr = event.target;
    document.getElementById("table-threat-options").addEventListener("click", (event) => {
        if (currentTr.innerText === "") {
            ansThreatTable++;
            if (ansThreatTable === 4) {
                document.getElementById("table-threat-button").style.opacity = 1;
                document.getElementById("table-threat-button").addEventListener('click', checkThreatAns);
            };
        };
        switch (event.target.id) {
            case "threat-option1":
                currentTr.innerText= "כן";
                break;
            case "threat-option2":
                currentTr.innerText= "לא";
                break;
            case "threat-option3":
                currentTr.innerText= "כן ולא";
                break;
        };
    });
    let tableAnswers = document.querySelectorAll('.table-answer');
    for (const tableAnswer of tableAnswers) {
        tableAnswer.addEventListener('mouseleave',(event) => {
            if (!document.getElementById("table-threat-options").contains(event.relatedTarget)) {
                document.getElementById("table-threat-options").style.display = 'none'; // Hide popup if mouse is outside
              };
        });
    };

};

const checkThreatAns = () => {
    let tableAnswers = document.querySelectorAll('.table-answer');
    for (const tableAnswer of tableAnswers) {
        tableAnswer.removeEventListener('mouseenter', maangeThreatTable);
    };
    let classList;
    for (let i = 1; i<= 4; i++) {
        classList = document.getElementById(`threat-answer${i}`).classList;
        if (document.getElementById(`threat-answer${i}`).innerText === threatTableAnswers[i-1]) {
            correctThreatAns++;
            classList.add("correct-ans");
            totalScore = totalScore + (scorePerAns / 4);
        } else {
            classList.add("incorrect-ans");
        };
    };
    answeredThreat = true;
    let threatButton = document.getElementById("threat-button");
    threatButton.classList.add("topic-done");
    document.getElementById("table-threat-button").innerText = "להסבר";
    document.getElementById("table-threat-button").removeEventListener('click', checkThreatAns);
    document.getElementById("table-threat-button").addEventListener('click', threatAnsText);
    document.getElementById("back-button-civil-defense").style.opacity = 1;
};

const threatAnsText = () => {
    if (threatAns1Text[currentCharText] !== undefined) {
        if (currentCharText === 0) {
            document.getElementById("black-shadow-div").style.display = "block";
            document.getElementById("char-text-div").style.animation = "char-text-div-up 1.2s forwards";
            document.getElementById("soldier-pic-textbox").style.display = "block";
            document.getElementById("left-arrow-text-box-div").addEventListener('click', threatAnsClickedArrowText);
        }
        if (threatAns1Text[currentCharText] === "none") {
            document.getElementById("char-text-div").style.animation = "char-text-div-down 1.2s forwards";
            document.getElementById("soldier-pic-textbox").style.display = "none";
            document.getElementById("left-arrow-text-box-div").removeEventListener('click', threatAnsClickedArrowText);
            setTimeout(() => {
                document.getElementById("black-shadow-div").style.display = "none";
                currentCharText = 0;
            }, `500`);
        } else {
            document.getElementById("char-text").innerText = threatAns1Text[currentCharText];
                    let num = Math.floor((Math.random() * 2) + 1);
            document.getElementById("soldier-pic-textbox").src = `assets/soldierChars/solider${num}.png`;
        };
    };
}

const threatAnsClickedArrowText = () => {
    currentCharText++;
    threatAnsText();
}

var timeTopicManager = () => {
    textSpecManager("manageCivilDefense1");
        let dragged;
        document.addEventListener("dragstart", (event) => {
          dragged = event.target;
        });
  
        document.addEventListener("dragover", function(event) {
          event.preventDefault();
        });
            document.addEventListener("drop", (event) => {
                if (dragged.id === "time-ques-ans1" || dragged.id === "time-ques-ans2" || dragged.id === "time-ques-ans3" || dragged.id === "time-ques-ans4" || dragged.id === "time-ques-ans5" || dragged.id === "time-ques-ans6") {
            event.preventDefault();
            let targetDiv = event.target;
            let targetDivAns = targetDiv.id.split("-");
            let ansNum = dragged.id.slice(-1);
            targetDivAns = targetDivAns[0];
            if (targetDiv.classList.contains('dropzone')) {
                dragged.parentNode.removeChild(dragged);
                if (targetDiv.id === "ques-time-ans-div") {
                    dragged.style.fontSize = "1.7vmax";
                    timeAns[ansNum -1] = "";
                } else {
                    dragged.style.fontSize = "0.9vmax";
                    timeAns[ansNum -1] = targetDivAns;
                };
                let answered = 0;
                for (let i = 0; i <= 5; i++) {
                    if (timeAns[i] != "") {
                        answered++;
                    };
                };
                event.target.appendChild(dragged);

                if (answered === 6) {
                    document.getElementById("ans-time-button").style.display = "block";
                    document.getElementById("ans-time-button").addEventListener("click", checkTimeAns);
                } else {
                    document.getElementById("ans-time-button").style.display = "none";
                };
            };
        };
    });
};

const checkTimeAns = () => {
    answeredTime = true;
    let timeButton = document.getElementById("time-button");
    timeButton.classList.add("topic-done");
    let classList;
    document.getElementById("invisible-div").style.display = "block";
    for (let i = 1; i <= 6; i++) {
        classList = document.getElementById(`time-ques-ans${i}`).classList;
        if (i === 1 || i === 3) {
            if (timeAns[i - 1] === correctTimeAns[i - 1]) {
                classList.add("correct-ans");
                document.getElementById(`time-ques-ans${i}`).style.backgroundColor = "#9ecf7a";
                totalScore = totalScore + (scorePerAns / 6);
            } else {
                classList.add("incorrect-ans");
                document.getElementById(`time-ques-ans${i}`).style.backgroundColor = "#eb958d";
            };
        } else {
            if ((i === 4 || i === 6) && timeAnsDefense.includes(timeAns[i - 1])) {
                classList.add("incorrect-ans");
                document.getElementById(`time-ques-ans${i}`).style.backgroundColor = "#eb958d";
            } else if (i === 4 || i === 6) {
                totalScore = totalScore + (scorePerAns / 6);
                timeAnsDefense.push(timeAns[i - 1]);
                classList.add("correct-ans");
                document.getElementById(`time-ques-ans${i}`).style.backgroundColor = "#9ecf7a";
            }
            if ((i === 2 || i === 5) && (timeAnsCommands.includes(timeAns[i - 1]))) {
                classList.add("incorrect-ans");
                document.getElementById(`time-ques-ans${i}`).style.backgroundColor = "#eb958d";
            } else if (i === 2 || i === 5) {
                timeAnsCommands.push(timeAns[i - 1]);
                totalScore = totalScore + (scorePerAns / 6);
                classList.add("correct-ans");
                document.getElementById(`time-ques-ans${i}`).style.backgroundColor = "#9ecf7a";
            };
        };
    };
    document.getElementById("ques-time-ans-div").style.display = "none";
    document.getElementById("ans-time-button").style.display = "none";
    document.getElementById("see-ans-button-time").style.display = "block";
};

var operationsTopicManager = () => {
    currentPageOperations = 0;
    for (let i = 1; i <= 3; i++) {
        document.getElementById(`next-extra-info-operations${i}`).addEventListener("click", moveTopicOperations);
        document.getElementById(`previous-extra-info-operations${i}`).addEventListener("click", moveTopicOperations);
    };
    textSpecManager("manageCivilDefense1");
};

const moveTopicOperations = (event) => {
    let id = event.target.id;
    id = id.split("-");
    id = id[0];
    document.getElementById(operationPages[currentPageOperations]).style.display = "none";
    if (id === "next") {
        currentPageOperations++;
    } else {
        currentPageOperations--;
    };
    document.getElementById(operationPages[currentPageOperations]).style.display = "block";
    textSpecManager(`op1Page${currentPageOperations}`);
    if (currentPageOperations === 3) {
        answeredOperations = true;
        let operationsButton = document.getElementById("operations-button");
        operationsButton.classList.add("topic-done");
    };
};

const manageQuesCivil = () => {
    let quesText = document.getElementById("ques-text");
    if (currentTestTopic === 'civil') {
        quesText.innerText = quesCivilGen[currentQuesCivil];
    } else {
        quesText.innerText = quesEsGen[currentQuesCivil];
    }
    document.getElementById("fake-back-button").src = `assets/quesPage/ques${currentQuesCivil + 1}Back.svg`;
    document.getElementById("ques-red-text").innerHTML = `שאלה <br> #${currentQuesCivil + 1}`;
    document.getElementById("civil-ans-div").addEventListener("click", clickedAns);

    if (selectedAns !== undefined) {
        document.getElementById(selectedAns).classList.remove("correct-selected-ans");
        document.getElementById(selectedAns).classList.remove("incorrect-selected-ans");
        selectedAns = "";
    }
    document.getElementById("ans-ques-button").style.display = "none";
};

const clickedAns = (event) => {
    document.getElementById("false-button-civil").classList.remove("selected-ans");
    document.getElementById("true-button-civil").classList.remove("selected-ans");
    ansShort = event.target.innerText;
    clickedAnsClass = event.target.classList;
    if (selectedAns === event.target.id) {
        selectedAns = event.target;
        selectedAns.classList.remove("selected-ans");
        document.getElementById("ans-ques-button").style.display = "none";
    } else {
        selectedAns = event.target;
        selectedAns.classList.add("selected-ans");
        selectedAns = event.target.id;
        document.getElementById("ans-ques-button").style.display = "block";
        if (currentQuesCivil > 3) {
            document.getElementById("ans-ques-button").innerText = "לפרק הבא";
            document.getElementById("ans-ques-button").addEventListener("click", topic1Manager);
        } else {
            document.getElementById("ans-ques-button").addEventListener("click", checkAns);
        }
    };
};

const checkAns = () => {
    console.log("inCheck")
    document.getElementById(selectedAns).classList.remove("selected-ans");
    document.getElementById("ans-ques-button").style.display = "none";
    let currentAns;
    if (currentTestTopic === 'civil') {
        currentAns = ansCivilGen[currentQuesCivil];
    } else {
        currentAns = ansEsGen[currentQuesCivil];
        document.getElementById("ques-text").style.fontSize = "2vmax"; 
    }
    if (ansShort === currentAns) {
        document.getElementById(selectedAns).classList.add("correct-selected-ans");
        totalScore = totalScore + scorePerAns;
        textSpecManagerTest("correct");
    } else {
        document.getElementById(selectedAns).classList.add("incorrect-selected-ans");
        textSpecManagerTest("incorrect");
    };
    document.getElementById("civil-ans-div").removeEventListener("click", clickedAns);
};

const manageEmergencySit = () => {
    finishedReadingExp = false;
    currentTestTopic = "es";
    currentQuesCivil = 0;
    document.getElementById("es-main-div").addEventListener("click", manageEmergencySitFirst);
};

const manageEmergencySitFirst = (event) => {
    let currentIdEs = event.target.id
    if (currentIdEs === "megaphone" || currentIdEs === "rocket") {
        document.getElementById("es-main-div").style.display = "none";
        document.getElementById(`es-${currentIdEs}-div`).style.display = "block";
        document.getElementById(`back-button-${currentIdEs}`).addEventListener("click", () => {
            document.getElementById(`es-${currentIdEs}-div`).style.display = "none";
            document.getElementById("es-main-div").style.display = "block";
        });
        event.target.src = `assets/emergencySitPage/${currentIdEs}SideGreen.svg`;
        if (currentIdEs === "megaphone") {
            megaphoneVisited = true;
        } else {
            rocketVisited = true;
        };

        if (rocketVisited && megaphoneVisited) {
            document.getElementById(`es-page1-next-button`).style.display = "block";
            document.getElementById(`es-page1-next-button`).addEventListener("click", topic1Manager)
        };
    };
};

var esTableManager = () => {
    let dragged;
    document.addEventListener("dragstart", (event) => {
      dragged = event.target;
    });

    document.addEventListener("dragover", function(event) {
      event.preventDefault();
    });

    document.addEventListener("drop", (event) => {
        if (dragged.id === "es-table-ques-ans1" || dragged.id === "es-table-ques-ans2" || dragged.id === "es-table-ques-ans3" || dragged.id === "es-table-ques-ans4" || dragged.id === "es-table-ques-ans5" || dragged.id === "es-table-ques-ans6" || dragged.id === "es-table-ques-ans7") {
            event.preventDefault();
            let targetDiv = event.target;
            let targetDivAns = targetDiv.id.split("-");
            let ansNum = dragged.id.slice(-1);
            targetDivAns = targetDivAns[0];
                
            if (targetDiv.classList.contains('dropzone')) {
                dragged.parentNode.removeChild(dragged);
                if (targetDiv.id === "es-table-ans-div") {
                    esTableAns[ansNum -1] = "";
                } else {
                    esTableAns[ansNum -1] = targetDivAns;
                };
                let answered = 0;
                for (let i = 0; i <= 6; i++) {
                    if (esTableAns[i] != "") {
                        answered++;
                    };
                };
                event.target.appendChild(dragged);
                if (answered === 7) {
                    document.getElementById("es-table-ans-button").style.display = "block";
                    document.getElementById("es-table-ans-button").addEventListener("click", checkEsTableAns);
                } else {
                    document.getElementById("es-table-ans-button").style.display = "none";
                };
            };
        };
    });
};

const checkEsTableAns = () => {
    document.getElementById("es-table-ans-button").removeEventListener("click", checkEsTableAns);
    document.getElementById("es-table-ans-div").style.display = "none";
    let classList;
    document.getElementById("invisible-div-es-table").style.display = "block";
    let correctAns = 0;
    for (let i = 0; i < correctEsTableAns.length; i++) {
        classList = document.getElementById(`es-table-ques-ans${i + 1}`).classList;
        if (esTableAns[i] === correctEsTableAns[i]) {
            totalScore = totalScore + (scorePerAns / correctEsTableAns.length);
            correctAns++;
            classList.add("correct-ans");
            document.getElementById(`es-table-ques-ans${i + 1}`).style.backgroundColor = "#9ecf7a";
        } else {
            classList.add("incorrect-ans");
            document.getElementById(`es-table-ques-ans${i + 1}`).style.backgroundColor = "#eb958d";
        };
    };
    document.getElementById(`es-table-ans-button`).innerText = "לדף הבא";
    document.getElementById("es-table-ans-button").addEventListener("click", topic1Manager);
};

const manageCivilDefenseTwo = () => {
    let topicButtons = document.querySelectorAll(".civil-defense-topic-button-two");
    
    for (const button of topicButtons) {
        button.addEventListener("click", (event) => {
            topicClicked = event.target.id;
            topicClicked = topicClicked.split("-");
            topicClicked = topicClicked[0];
            document.getElementById("civil-defense-info-div-main-two").style.display = "none";
            document.getElementById("civil-defense-info-div-topic-two").style.display = "block";
            document.getElementById(`civil-defense-info-div-${topicClicked}-two`).style.display = "block";
            document.getElementById("back-button-civil-defense-two").addEventListener("click", mangeBackCivilTwo);
            if (topicClicked === "operations") {
                operationsTopicManagerTwo();
            } else {
                event.target.classList.add("topic-done");
                if (topicClicked === "time") {
                    answeredTimeTwo = true;
                } else {
                    answeredThreatTwo = true;
                };
            };
            textSpecManager("manageCivilDefense2");
        });
    };
};

const mangeBackCivilTwo = () => {
    document.getElementById("civil-defense-info-div-main-two").style.display = "block";
    document.getElementById("civil-defense-info-div-topic-two").style.display = "none";
    document.getElementById(`civil-defense-info-div-${topicClicked}-two`).style.display = "none";
     if (answeredThreatTwo && answeredTimeTwo && opTwoAnswered) {
         document.getElementById("cd-three-button").style.display = "block";
         document.getElementById("cd-three-button").addEventListener("click", () => {
             topic1Manager();
         })
     };
 };

const operationsTopicManagerTwo = () => {
    document.getElementById("cd-two-table-page").style.display = "none";
    document.getElementById("cd-authority-page").style.display = "none";
    document.getElementById("cd-operations-main-div-two").style.display = "none";
    document.getElementById("first-op-div").style.display = "block";
};

const manageOpPages = (page) => {
    if (page === "first-op-div") {
        document.getElementById(page).style.display = "block";
        document.getElementById("cd-operations-main-div-two").style.display = "none";
    } else if (page === "before") {
        document.getElementById("cd-authority-page").style.display = "none";
        document.getElementById("cd-two-table-page").style.display = "none";
        document.getElementById("civil-defense-page-three").style.display = "block";
    } else {
        document.getElementById(page).style.display = "block";
        if (page === "cd-authority-page") {
            cdAuthVisited = true;
            document.getElementById("authority-button-move").classList.add("topic-done");
            textSpecManager("op2Page1");
        } else if (page === "cd-two-table-page") {
            cdTableVisited = true;
            document.getElementById("two-table-button-move").classList.add("topic-done");
            textSpecManager("op2Page2");
        };
        document.getElementById("civil-defense-page-three").style.display = "none";
    };
    if (cdAuthVisited && cdTableVisited) {
        document.getElementById("cd-op-main-button-move").style.opacity = 1;
        document.getElementById("cd-op-main-button-move").addEventListener("click", ()=> {
            document.getElementById("cd-operations-main-div-two").style.display = "block";
            document.getElementById("first-op-div").style.display = "none";
            if (opTwoAnswered === false) {
                opDragManager();
                document.getElementById("operations-right-div").style.display = "block";
                document.getElementById("cd-two-side-text").style.display = "none";
                document.getElementById("back-button-civil-defense-two").style.display = "none";
            };
        });
    };
};

const opDragManager = () => {
    let dragged;
    document.addEventListener("dragstart", (event) => {
      dragged = event.target;
    });

    document.addEventListener("dragover", function(event) {
      event.preventDefault();
    });

    document.addEventListener("drop", (event) => {
        if (dragged.id === "op-ans-ques-ans1" || dragged.id === "op-ans-ques-ans2" || dragged.id === "op-ans-ques-ans3" || dragged.id === "op-ans-ques-ans4" || dragged.id === "op-ans-ques-ans5" || dragged.id === "op-ans-ques-ans6" || dragged.id === "op-ans-ques-ans7" || dragged.id === "op-ans-ques-ans8") {
            event.preventDefault();
            let targetDiv = event.target;
            let targetDivAns = targetDiv.id.split("-");
            let ansNum = dragged.id.slice(-1);
            targetDivAns = targetDivAns[0];
                
            if (targetDiv.classList.contains('dropzone')) {
                dragged.parentNode.removeChild(dragged);
                if (targetDiv.id === "op-ans-div") {
                    opTableAns[ansNum -1] = "";
                } else {
                    opTableAns[ansNum -1] = targetDivAns;
                };
                let answered = 0;
                for (let i = 0; i <= 7; i++) {
                    if (opTableAns[i] != "") {
                        answered++;
                    };
                };
                event.target.appendChild(dragged);
                if (answered === 8) {
                    document.getElementById("op-button-test-cd-two").style.display = "block";
                    document.getElementById("op-button-test-cd-two").addEventListener("click", checkOpTableAns);
                } else {
                    document.getElementById("op-button-test-cd-two").style.display = "none";
                };
            };
        };
    });
};

const checkOpTableAns = () => {
    opTwoAnswered = true;
    document.getElementById("cd-op-main-button-move").classList.add("topic-done");
    document.getElementById("operations-button-two").classList.add("topic-done");

    document.getElementById("op-button-test-cd-two").removeEventListener("click", checkOpTableAns);
    document.getElementById("operations-right-div").style.display = "none";
    document.getElementById("cd-two-side-text").style.display = "block";
    document.getElementById("back-button-civil-defense-two").style.display = "block";
    let classList;
    document.getElementById("invisible-div-es-table").style.display = "block";
    let correctAns = 0;
    for (let i = 0; i < opTableAns.length; i++) {
        classList = document.getElementById(`op-ans-ques-ans${i + 1}`).classList;
        if ((i <= 3 && opTableAns[i] === "idf") || (i > 3 && opTableAns[i] === "police")) {
            correctAns++;
            classList.add("correct-ans");
            totalScore = totalScore + (scorePerAns / opTableAns.length);
            document.getElementById(`op-ans-ques-ans${i + 1}`).style.backgroundColor = "#9ecf7a";
            document.getElementById(`op-ans-ques-ans${i + 1}`).style.color = "#4c5744";
        } else {
            classList.add("incorrect-ans");
            document.getElementById(`op-ans-ques-ans${i + 1}`).style.backgroundColor = "#eb958d";
            document.getElementById(`op-ans-ques-ans${i + 1}`).style.color = "#9d1c1c";
        };
    };
};

const spDragManager = () => {
    let dragged;
    document.addEventListener("dragstart", (event) => {
      dragged = event.target;
    });

    document.addEventListener("dragover", function(event) {
      event.preventDefault();
    });

    document.addEventListener("drop", (event) => {
        if (dragged.id === "sp-ans1" || dragged.id === "sp-ans2" || dragged.id === "sp-ans3" || dragged.id === "sp-ans4" || dragged.id === "sp-ans5" || dragged.id === "sp-ans6") {
            event.preventDefault();
            let targetDiv = event.target;
            let targetDivAns = targetDiv.id.slice(-1);
            let ansNum = dragged.id.slice(-1);
                
            if (targetDiv.classList.contains('dropzone')) {
                if (targetDiv.id === "drag-sp") {
                    dragged.parentNode.removeChild(dragged);
                    event.target.appendChild(dragged);
                    spAnswers[ansNum -1] = "";
                } else if (targetDiv.innerHTML === "") {
                    dragged.parentNode.removeChild(dragged);
                    event.target.appendChild(dragged);
                    spAnswers[ansNum -1] = targetDivAns;
                } else{
                    window.alert("ריבוע יכול להכיל רק אופציה אחת, אם ברצונך לשנות את התשובה נא לגרור את מה שכבר קיים בריבוע למחסן המילים");
                }
                let answered = 0;
                for (let i = 0; i <= 5; i++) {
                    if (spAnswers[i] != "") {
                        answered++;
                    };
                };
                if (answered === 6) {
                    document.getElementById("sp-button").style.display = "block";
                    document.getElementById("sp-button").addEventListener("click", spCheckAns);
                } else {
                    document.getElementById("sp-button").style.display = "none";
                };
            };
        };
    });
};

const spCheckAns = () => {
    document.getElementById("sp-button").removeEventListener("click", spCheckAns);
    let classList;
    document.getElementById("invisible-div-sp").style.display = "block";
    let correctAns = 0;
    for (let i = 0; i < spAnswers.length; i++) {
        classList = document.getElementById(`sp-ans${i + 1}`).classList;
        if (i + 1 == spAnswers[i] || ((i + 1 === 1) && spAnswers[i] == 2) || ((i + 1 === 2) && spAnswers[i] == 1) || ((i + 1 === 4) && spAnswers[i] == 5) || ((i + 1 === 5) && spAnswers[i] == 4)) {
            correctAns++;
            totalScore = totalScore + (scorePerAns / spAnswers.length);
            classList.add("correct-ans");
            document.getElementById(`sp-ans${i + 1}`).style.backgroundColor = "#9ecf7a";
            document.getElementById(`sp-ans${i + 1}`).style.color = "#4c5744";
        } else {
            classList.add("incorrect-ans");
            document.getElementById(`sp-ans${i + 1}`).style.backgroundColor = "#eb958d";
            document.getElementById(`sp-ans${i + 1}`).style.color = "#9d1c1c";
        };
    };
    document.getElementById("sp-button").innerText = "לדף הבא";
    document.getElementById("sp-button").addEventListener("click", topic1Manager)
};

const timelineManager = (event) => {
    clickedSquare = event.target.id;
    if (clickedSquare === "back-arrow-timeline") {
        document.getElementById("card-container-timeline").style.display = "none";
    } else if (clickedSquare === "timeline-button-exit") {
        setTimeout(() => {
            document.getElementById("timeline-page").style.display = "none";
            document.getElementById(topicPageList[0]).style.display = "block";
            currentPage = 0;
        }, 1250);
        blurDiv.style.display = "block";
        blurDiv.style.animation = 'blur-transition 2.5s ease-in-out forwards';
        setTimeout(() => {
            blurDiv.style.display = "none";
        }, 2500);
    } else if (clickedSquare === "timeline-button-enter") {
        document.getElementById("back-div").style.display = "none";
        setTimeout(() => {
            document.getElementById(topicPageList[0]).style.display = "none";
            document.getElementById("timeline-page").style.display = "block";
        }, 1250);
        blurDiv.style.display = "block";
        blurDiv.style.animation = 'blur-transition 2.5s ease-in-out forwards';
        setTimeout(() => {
            blurDiv.style.display = "none";
        }, 2500);
    } else {
        clickedSquare = clickedSquare.split("e");
        clickedSquare = clickedSquare[1];
        document.getElementById("card-timeline").src = `assets/timeline/card${clickedSquare}.svg`;
        document.getElementById("card-container-timeline").style.display = "block";
    };
}

const textSpecManager = (currentTextTopic) => {
    let currentTextSpec;
    currentTextTopicSpec = currentTextTopic;
    if (currentTextTopic === "cloudManager") {
        if (chosenHat === "blue") {
            currentTextSpec = cloudText[0][currentCharText];
        } else if (chosenHat === "green") {
            currentTextSpec = cloudText[1][currentCharText];
        } else if (chosenHat === "orange") {
            currentTextSpec = cloudText[2][currentCharText];
        }
    } else if (currentTextTopic === "manageCivilDefense1") {
        if (topicClicked === "threat") {
            currentTextSpec = coText1[0][currentCharText];
        } else if (topicClicked === "time") {
            currentTextSpec = coText1[1][currentCharText];
        } else if (topicClicked === "operations") {
            currentTextSpec = coText1[2][currentCharText];
        }
    } else if (currentTextTopic === "manageCivilDefense2") {
        if (topicClicked === "threat") {
            currentTextSpec = coText2[0][currentCharText];
        } else if (topicClicked === "time") {
            currentTextSpec = coText2[1][currentCharText];
        } else if (topicClicked === "operations") {
            currentTextSpec = coText2[2][currentCharText];
        }
    } else if (currentTextTopic === "op1Page1") {
        currentTextSpec = specCoOp1[0][currentCharText];
    } else if (currentTextTopic === "op1Page2") {
        currentTextSpec = specCoOp1[1][currentCharText];
    } else if (currentTextTopic === "op1Page3") {
        currentTextSpec = specCoOp1[2][currentCharText];
    } else if (currentTextTopic === "op2Page1") {
        currentTextSpec = specCoOp2[1][currentCharText];
    } else if (currentTextTopic === "op2Page2") {
        currentTextSpec = specCoOp2[0][currentCharText];
    };

    if (currentTextSpec !== undefined) {
        if (currentCharText === 0) {
            document.getElementById("black-shadow-div").style.display = "block";
            document.getElementById("soldier-pic-textbox").style.display = "block";
            document.getElementById("char-text-div").style.animation = "char-text-div-up 1.2s forwards";
            document.getElementById("left-arrow-text-box-div").addEventListener('click', pressedTextSpecBox);
        }
        if (currentTextSpec === "none") {
            document.getElementById("char-text-div").style.animation = "char-text-div-down 1.2s forwards";
            document.getElementById("soldier-pic-textbox").style.display = "none";
            document.getElementById("left-arrow-text-box-div").removeEventListener('click', pressedTextSpecBox);
            setTimeout(() => {
                document.getElementById("black-shadow-div").style.display = "none";
                currentCharText = 0;
            }, `500`);
        } else {
            let num = Math.floor((Math.random() * 2) + 1);
            document.getElementById("soldier-pic-textbox").src = `assets/soldierChars/solider${num}.png`;
            document.getElementById("char-text").innerText = currentTextSpec;
        };
    }
};


const pressedTextSpecBox = () => {
    currentCharText++;
    textSpecManager(currentTextTopicSpec);
}

const scoreManager = () => {
    let scoreMessage;
    if (totalScore < 70) {
        scoreMessage = "כדאי לך לעבור על הלומדה שוב"
    } else {
        scoreMessage = "כל הכבוד!"
    }
    document.getElementById("fin-page-text").innerHTML = `ציונך הסופי הוא ${Math.ceil(totalScore)} <br> ${scoreMessage}`;
};

const textSpecManagerTest = (ans) => {
    let currentTextSpec;
    currentTextTopicSpecTest = ans;
    if (currentTestTopic === "civil") {
        currentTextSpec = ansCivilGenText[currentQuesCivil][currentCharText];
    } else {
        currentTextSpec = ansEsGenText[currentQuesCivil][currentCharText];
    }
    
    if (ans === "incorrect") {
        document.getElementById("soldier-pic-textbox").src = `assets/soldierChars/soliderIncorrect.svg`;
    } else if (ans === "correct") {
        document.getElementById("soldier-pic-textbox").src = `assets/soldierChars/soliderCorrect.svg`;
    }

    if (currentTextSpec !== undefined) {
        if (currentCharText === 0) {
            document.getElementById("black-shadow-div").style.display = "block";
            document.getElementById("soldier-pic-textbox").style.display = "block";
            document.getElementById("char-text-div").style.animation = "char-text-div-up 1.2s forwards";
            document.getElementById("left-arrow-text-box-div").addEventListener('click', pressedTextSpecBoxTest);
        }
        if (currentTextSpec === "none") {
            document.getElementById("char-text-div").style.animation = "char-text-div-down 1.2s forwards";
            document.getElementById("soldier-pic-textbox").style.display = "none";
            document.getElementById("left-arrow-text-box-div").removeEventListener('click', pressedTextSpecBoxTest);
            setTimeout(() => {
                document.getElementById("black-shadow-div").style.display = "none";
                currentCharText = 0;
            }, `500`);
        } else {
            document.getElementById("char-text").innerText = currentTextSpec;
        };
    };
    console.log("sdsjkdsjdksdk2");
    console.log(currentTextSpec);
    console.log(currentQuesCivil);
};


const pressedTextSpecBoxTest = () => {
    currentCharText++;
    currentQuesCivil++;
    if (currentQuesCivil < 4) {
        setTimeout(() => {
            manageQuesCivil();
        }, 500);
        textSpecManagerTest(currentTextTopicSpecTest);
    } else {
        document.getElementById("char-text-div").style.animation = "char-text-div-down 1.2s forwards";
        document.getElementById("soldier-pic-textbox").style.display = "none";
        document.getElementById("left-arrow-text-box-div").removeEventListener('click', pressedTextSpecBoxTest);
        setTimeout(() => {
            document.getElementById("black-shadow-div").style.display = "none";
            currentCharText = 0;
        }, `500`);
        setTimeout(() => {
            currentQuesCivil = 0;
            document.getElementById("fake-back-button").src = `assets/quesPage/ques${currentQuesCivil + 1}Back.svg`;
            document.getElementById("ques-red-text").innerHTML = `שאלה <br> #${currentQuesCivil + 1}`;
            document.getElementById(selectedAns).classList.remove("correct-selected-ans");
            document.getElementById(selectedAns).classList.remove("incorrect-selected-ans");
        }, 1500);
        topic1Manager();
    };
}
