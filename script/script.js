const button = document.getElementsByClassName('change')[0];
const button2 = document.getElementsByClassName('change')[1];
const corpo = document.getElementsByTagName('body')[0];
const titulo = document.getElementsByTagName('h1')[0];

function mudar_tema() {
    titulo.classList.toggle('dark-mode');
    button.classList.toggle('dark-mode');
    button2.classList.toggle('dark-mode');
    corpo.classList.toggle('dark-mode');
}

function mudar_tema2() {
    corpo.classList.toggle('pink-mode');
    button.classList.toggle('pink-mode');
    button2.classList.toggle('pink-mode');
    titulo.classList.toggle('pink-mode');
}

button.addEventListener(click,mudar_tema);