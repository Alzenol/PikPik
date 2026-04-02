const practiceWords = [
    {en:"Apple", az:"Alma"},
    {en:"Book", az:"Kitab"},
    {en:"Car", az:"Maşın"},
    {en:"House", az:"Ev"},
    {en:"Dog", az:"İt"},
    {en:"Cat", az:"Pişik"},
    {en:"Water", az:"Su"},
    {en:"School", az:"Məktəb"},
    {en:"Sun", az:"Günəş"},
    {en:"Moon", az:"Ay"},
    {en:"Star", az:"Ulduz"},
    {en:"Tree", az:"Ağac"},
    {en:"Chair", az:"Stul"},
    {en:"Table", az:"Masa"},
    {en:"Pen", az:"Qələm"},
    {en:"Paper", az:"Kağız"},
    {en:"Window", az:"Pəncərə"},
    {en:"Door", az:"Qapı"},
    {en:"Computer", az:"Kompüter"},
    {en:"Phone", az:"Telefon"},
    {en:"Bag", az:"Çanta"},
    {en:"Shoes", az:"Ayaqqabı"},
    {en:"Hat", az:"Papaq"},
    {en:"Clothes", az:"Paltar"},
    {en:"Food", az:"Qida"},
    {en:"Milk", az:"Süd"},
    {en:"Bread", az:"Çörək"},
    {en:"Coffee", az:"Qəhvə"},
    {en:"Tea", az:"Çay"},
    {en:"Sugar", az:"Şəkər"},
    {en:"Salt", az:"Duz"},
    {en:"Butter", az:"Kərə yağı"},
    {en:"Egg", az:"Yumurta"},
    {en:"Fish", az:"Balıq"},
    {en:"Meat", az:"Ət"},
    {en:"Chicken", az:"Toyuq"},
    {en:"Rice", az:"Düyü"},
    {en:"Fruit", az:"Meyvə"},
    {en:"Vegetable", az:"Tərəvəz"},
    {en:"Bagel", az:"Biqel"},
    {en:"Soup", az:"Şorba"},
    {en:"Juice", az:"Şirə"},
    {en:"Chair", az:"Stul"},
    {en:"Road", az:"Yol"},
    {en:"City", az:"Şəhər"},
    {en:"Village", az:"Kənd"},
    {en:"River", az:"Çay"},
    {en:"Mountain", az:"Dağ"},
    {en:"Sea", az:"Dəniz"},
    {en:"Lake", az:"Göl"},
    {en:"Beach", az:"Çimərlik"},
    {en:"Rain", az:"Yağış"},
    {en:"Snow", az:"Qar"},
    {en:"Wind", az:"Külək"},
    {en:"Cloud", az:"Bulud"},
    {en:"Sky", az:"Səmavi"},
    {en:"Flower", az:"Gül"},
    {en:"Grass", az:"Ot"},
    {en:"Forest", az:"Meşə"},
    {en:"Animal", az:"Heyvan"},
    {en:"Bird", az:"Quş"},
    {en:"Fish", az:"Balıq"},
    {en:"Love", az:"Sevgi"},
    {en:"Friend", az:"Dost"},
    {en:"Family", az:"Ailə"},
    {en:"Work", az:"İş"},
    {en:"Play", az:"Oyun"},
    {en:"Sleep", az:"Yuxu"},
    {en:"Run", az:"Qaç"},
    {en:"Walk", az:"Gəz"},
    {en:"Read", az:"Oxu"},
    {en:"Write", az:"Yaz"},
    {en:"Listen", az:"Dinlə"},
    {en:"Speak", az:"Danış"},
    {en:"Sing", az:"Oxu"},
    {en:"Dance", az:"Rəqs"},
    {en:"Happy", az:"Xoşbəxt"},
    {en:"Sad", az:"Kədərli"},
    {en:"Angry", az:"Əsəbi"},
    {en:"Tired", az:"Yorğun"},
    {en:"Excited", az:"Həyəcanlı"},
    {en:"Hot", az:"İsti"},
    {en:"Cold", az:"Soyuq"},
    {en:"Fast", az:"Sürətli"},
    {en:"Slow", az:"Yavaş"},
    {en:"Big", az:"Böyük"},
    {en:"Small", az:"Kiçik"},
    {en:"New", az:"Yeni"},
    {en:"Old", az:"Köhnə"},
    {en:"Good", az:"Yaxşı"},
    {en:"Bad", az:"Pis"},
    {en:"Beautiful", az:"Gözəl"},
    {en:"Ugly", az:"Çirkin"},
    {en:"Easy", az:"Asan"},
    {en:"Difficult", az:"Çətin"},
    {en:"Right", az:"Düz"},
    {en:"Left", az:"Sol"},
    {en:"Up", az:"Yuxarı"},
    {en:"Down", az:"Aşağı"},
    {en:"Inside", az:"İçəri"},
    {en:"Outside", az:"Çöldə"},
    {en:"Morning", az:"Səhər"},
    {en:"Evening", az:"Axşam"},
    {en:"Night", az:"Gecə"},
    {en:"Today", az:"Bu gün"},
    {en:"Tomorrow", az:"Sabah"},
    {en:"Yesterday", az:"Dünən"}
];

let currentWord = 0;

function nextWord() {
    currentWord = Math.floor(Math.random() * practiceWords.length);
    document.getElementById("practiceWord").innerText = practiceWords[currentWord].en;
    document.getElementById("userAnswer").value = "";
    document.getElementById("feedback").innerText = "";
}

function checkAnswer() {
    const userInput = document.getElementById("userAnswer").value.trim().toLowerCase();
    const correctAnswer = practiceWords[currentWord].az.toLowerCase();
    const feedback = document.getElementById("feedback");
    if(userInput === correctAnswer) {
        feedback.style.color = "#00ffcc";
        feedback.innerText = "Correct ✅";
    } else {
        feedback.style.color = "#ff5555";
        feedback.innerText = `Wrong ❌, correct answer: ${practiceWords[currentWord].az}`;
    }
}

// İlk söz göstərilsin
nextWord();