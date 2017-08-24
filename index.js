window.addEventListener('load', async () => {
    let reg = await navigator.serviceWorker.register('sw.js');
    console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n', reg);
});
