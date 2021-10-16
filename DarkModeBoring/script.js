let dark = document.getElementById('dark');
let darkModeon = true;

function toggler() {
    if (darkModeon) {
        document.body.style.background = "white";
        document.body.style.color = "rgb(31, 31, 31)";
        darkModeon = false;
    }
    else {
        document.body.style.background = "rgb(31, 31, 31)";
        document.body.style.color = "white";
        darkModeon = true;
    }
}
function DarkMode() {

    dark.classList.toggle("fa-toggle-on");
    toggler();
}

