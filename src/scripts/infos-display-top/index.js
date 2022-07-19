function getPos(pos) {    
    document.getElementById('display-info-latitude').innerText = `latitude: ${pos.coords.latitude}`
    document.getElementById('display-info-longitude').innerText = `longitude: ${pos.coords.longitude}`
}

navigator.geolocation.getCurrentPosition(getPos)

let dataAtual = new Date();
let dia = dataAtual.getDate();
let mes = (dataAtual.getMonth() + 1);
let ano = dataAtual.getFullYear();

document.getElementById('display-info-mouse-x-y').innerText = `x: ${0} / y: ${0}`
document.getElementById('display-info-plataforma').innerText = `platform: ${navigator.platform}`
document.getElementById('display-info-navegador').innerText = `navigator: ${navigator.appCodeName}`
document.getElementById('display-info-data').innerText = `date: ${dia}/${mes}/${ano}`
document.getElementById('display-info-cookie').innerText = `cookie: ${navigator.cookieEnabled}`

window.addEventListener('mousemove', (e) => {   

    let x = e.clientX
    let y = e.clientY
    
    document.getElementById('display-info-mouse-x-y').innerText = `x: ${x} / y: ${y}`
})

fetch('https://meuip.herokuapp.com/api/json')
    .then(e => e.json())
    .then(e => {
        document.getElementById('display-info-ip').innerText = `ip: ${e.ip}`
})
