function changeImg() {
    let avatar= document.querySelector('.avatar');
    avatar.src= document.getElementById('avatar').value;
}

function nameMy() {
    let MyName = document.getElementById('name').value;
    let small = MyName.toLowerCase();
    document.querySelector('#result').value = small;
}
function Com(){
    let text = document.getElementById('comment').value;
    text = text.replace
}