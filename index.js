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
    let textResult= text.replace(/XXX/gi, "***");
        textResult= text.replace(/viagra/gi, "***");
    document.querySelector('#result').value = textResult;

}