async function translate(langPair) {
    const text = document.getElementById("inputText").value.trim();
    if (!text) return alert("Zəhmət olmasa mətn daxil et!");

    try {
        const res = await fetch(`/translate?q=${encodeURIComponent(text)}&lang=${langPair}`);
        const data = await res.json();
        if (data.responseData) {
            document.getElementById("outputText").value = data.responseData.translatedText;
        } else {
            alert("Xəta: API cavabı düzgün gəlmədi!");
            console.log(data);
        }
    } catch (err) {
        console.error(err);
        alert("Xəta baş verdi! Server işləyir?");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // DÜZGÜN FUNKSİYALAR:
    document.getElementById("enBtn").addEventListener("click", () => translate("az|en")); // AZ → EN
    document.getElementById("azBtn").addEventListener("click", () => translate("en|az")); // EN → AZ
});