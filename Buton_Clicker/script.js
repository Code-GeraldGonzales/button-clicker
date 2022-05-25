function alertNinjaLikes() {
    alert("Ninja Was Liked!");
}


function remove(elem){
    elem.parentNode.removeChild(elem);
}

document.getElementById('login').onclick = function() {
    this.textContent = 'Log Out';
}