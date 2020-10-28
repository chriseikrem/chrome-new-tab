document.getElementById('buttonOpenNews').addEventListener('click', clickOpenNews);

function clickOpenNews() {
    const links = [
        'https://www.vg.no',
        'https://www.tk.no',
        'https://www.tv2.no',
        'https://www.gamer.no',
        'https://www.tek.no',
        'https://www.kode24.no',
        'https://www.medium.com',
    ];
    for (const link of links) {
        window.open(link);
    }
}