let slidernumber = 1;
let maxsliders = 5;

let output = document.getElementById("slider-img");

function previous() {
    slidernumber -= 1;
    if (slidernumber < 1) {
        slidernumber = maxsliders;
    }
    output.src = "images/room" + slidernumber + ".jpg";
}

function next() {
    slidernumber += 1;
    if (slidernumber > maxsliders) {
        slidernumber = 1;
    }
    output.src = "images/room" + slidernumber + ".jpg";
}


//this code is for lobby image slider


let slider = 1;
let max_sliders = 3;

let lobby = document.getElementById("slider-lobby-img");

function previouslobby() {
    slider -= 1;
    if (slider < 1) {
        slider = max_sliders;
    }
    lobby.src = "lobbyimg/lobby"+slider+".jpeg";
}

function nextlobby() {
    slider += 1;
    if (slider > max_sliders) {
        slider = 1;
    }
    lobby.src = "lobbyimg/lobby"+slider+".jpeg";
}







//side bar script

let menu = document.querySelector('.menu');

function myOpen() {
    if (menu.style.display === '' || menu.style.display === 'none') {
    menu.style.display = 'flex';
} else {
    menu.style.display ='none';
}

}

function myClose() {
    menu.style.display = "none";
}