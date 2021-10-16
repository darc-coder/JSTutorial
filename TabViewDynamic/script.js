var i, tabcontent, tablinks;

function openCity(evt, cityName) {

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";

    evt.currentTarget.className += " active";
}


// Check browser support
if (typeof (Storage) !== "undefined") {

    // Retrieve
    var data = JSON.parse(localStorage.getItem("data"));
    console.log(data);
}

var tab = document.getElementById("tab");
let content = document.getElementById("content");

for (const key in data) {
    tab.innerHTML += `<button class="tablinks" onclick="openCity(event, '${key}')">${key}</button>`;
    div = document.createElement('div');
    div.className = "tabcontent";
    div.id = key;
    for (const item in data[key])
        div.innerHTML += `<a href="${data[key][item]}">${item}</a>`;

    content.appendChild(div);

}

// For the right side Tab. //Remove IF not Required.
tab.innerHTML += `<button class="tablinks" onclick="openCity(event, 'Login')" style="float: right">Login</button>`;
content.innerHTML += `<div class="tabcontent" id="Login">There is no Login Page.</div>`

let dark = document.getElementById('dark');
let darkModeon = false;
let btns = document.querySelectorAll("#tab > button")
let alinks = document.querySelectorAll('a');

function toggler() {
    if (darkModeon) {
        document.body.style.background = "white";
        document.body.style.color = "rgb(0,0,0)";
        tab.style.backgroundColor = "#f1f1f1";
        btns.forEach(element => {
            element.style.color = "rgb(31,31,31)";
        });
        alinks.forEach(element => { element.style.color = " rgb(11, 13, 133)" });
        darkModeon = false;
    }
    else {
        document.body.style.background = "rgb(31, 31, 31)";
        document.body.style.color = "white";
        tab.style.backgroundColor = "rgb(31,31,31)";
        btns.forEach(element => {
            element.style.color = "white";
        });
        alinks.forEach(element => { element.style.color = "white" });
        darkModeon = true;
    }
}

function DarkMode() {
    if (darkModeon)
        dark.classList.replace("fa-toggle-on", "fa-toggle-off");
    else
        dark.classList.replace("fa-toggle-off", "fa-toggle-on");
    toggler();
}
