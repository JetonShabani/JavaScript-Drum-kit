
function playSound(e) {

    const audio = document.querySelector(`audio[data-key ="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    
    if(!audio) return;//stop the function to work all together;
    
    audio.currentTime = 0; //rewind to the start
    audio.play();
    key.classList.add('playing');

}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //in that way will skip if is not a transform
    
    this.classList.remove('playing'); //this is the key
    
}



const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitioned', removeTransition));
window.addEventListener('keydown',playSound);
