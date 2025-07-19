let count = 0;

function increase() {
    count++;
    document.getElementById("counter").textContent = count;
}

function decrease() {
    count--;
    document.getElementById("counter").textContent = count;
}

function reset() {
    count = 0;
    document.getElementById("counter").textContent = count;
}




// nav menu

function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('show');
}


// preloader
window.addEventListener('load', function() {
    this.setTimeout(function() {
        document.getElementById('omini-loader').style.display = 'none'
    }, 2000);
});


// darkmode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}