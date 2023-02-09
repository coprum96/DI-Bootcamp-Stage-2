function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
  }
  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }
  let keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);
  
  
  function beatBox(){
  
    function simulateKey(key){
      let event = new Event('keydown', {
        bubbles:true
      });
      event.keyCode = key;
      document.dispatchEvent(event)
    }
    
    function playBeat(keycode, time){
      console.log(keycode)
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          resolve(simulateKey(keycode));
        }, time);
      })
    }
    
    
     playBeat(65, 0).then(function(){
      return playBeat(83, 0);
    }).then(function(){
      return playBeat(65, 700);
    }).then(function(){
      return playBeat(83, 0);
    }).then(function(){
      return playBeat(65, 700);
    }).then(function(){
      return playBeat(83, 0);
    })
}

