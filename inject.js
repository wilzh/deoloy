console.log("loaded");

document.addEventListener('DOMContentLoaded', () => {
    // Change time
    document.getElementById('lastCheckInValue').innerHTML = moment().format('MMMM DD, YYYY hh:mm A');

    // Change name
    let name = new URLSearchParams(window.location.search).get('name')
    if (name == null) {
        name = prompt('Input your name')
    }
    document.getElementById('status-0-0').innerHTML = name
    document.getElementById('initials').innerHTML = name.split(" ").map((n) => n[0]).join(".")
}, false)