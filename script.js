let capturandoBotao = document.getElementById("techs");
let capturandoLi1 = document.getElementById("first-li");
let capturandoLi2 = document.getElementById("second-li");
let capturandoLi3 = document.getElementById("third-li");
function revelar() {
    capturandoLi1.style.backgroundImage = "url('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg')";
    capturandoLi2.style.backgroundImage = "url('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg')";
    capturandoLi3.style.backgroundImage = "url('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg')";
}

capturandoBotao.addEventListener("click", revelar);