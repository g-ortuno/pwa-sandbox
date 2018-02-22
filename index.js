window.addEventListener('load', async () => {
    let reg = await navigator.serviceWorker.register('sw.js');
    console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n', reg);
});

function openWindow() {
    let t = window.open('https://example.com');
    t.location.href = 'https://pokedex.org';
}

document.onactivate = function() { console.log(arguments); }
