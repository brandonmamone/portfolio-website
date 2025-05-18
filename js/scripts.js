console.log("Hello, welcome to my portfolio website!");

function menuToggle() {
    var x = document.getElementById ("mynavtoggle");
    x.className += ' responsive';
    if (x.className === 'navtoggle') {
        x.className += ' responsive';
} else {
        x.className = 'navtoggle';
    }
}