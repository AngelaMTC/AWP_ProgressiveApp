//Service Worker:
if('serviceWorker' in navigator){
    console.log('Puede usar los SW en tu navegador');
    navigator.serviceWorker.register('sw.js').then(res => console.log('ServiceWorker está cargado correctamente.'), res)
    .catch(err => console.log('ServiceWorker no se ha podido registrar.'));
}else{
    console.log('No puede usar el SW en tu navegador.');
}