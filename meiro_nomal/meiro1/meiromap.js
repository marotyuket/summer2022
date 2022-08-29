let showMap = () =>{
  let elem = document.querySelector('div');
  let chip = map[y][x];
  elem.innerHTML = '<img src="./img/' + images[chip] + '.jpg">';
  window.addEventListener('load', function() {
    const modalArea = document.getElementById('modalArea3');
      modalArea.classList.add('is-show3');
  });
  if (chip === 'K') {
    const modalArea = document.getElementById('modalArea');
    modalArea.classList.add('is-show');
    keyflag = true;
  } else if(chip === 'D') {
    if(keyflag === true) {
      map[y][x] = 'DD';
      elem.innerHTML = '<img src="./img/door.jpg">';
      window.setTimeout(function() {
        map[y][x] = 'G';
        elem.innerHTML = '<img src="./img/goal.jpg">';
        const modalArea2 = document.getElementById('modalArea2');
        modalArea2.classList.add('is-show2');
        document.getElementById('d').innerHTML = '次の階へ進みます'
      }, 1500);
      window.setTimeout(function() {
        const modalClose2 = document.getElementById('modalArea2');
        modalClose2.classList.remove('is-show2');
      }, 3000);
      window.setTimeout(function() {
        location.href='../meiro2/meiro.html'
      }, 4000);
    }
    if(keyflag === false) {
      const modalArea2 = document.getElementById('modalArea2');
      modalArea2.classList.add('is-show2');
      document.getElementById('d').innerHTML = '鍵がありません！取ってきてください';
    }
    document.addEventListener('keyup', function(e) {
      const a = e.key;
      if(a === 'ArrowDown') {
        const modalClose2 = document.getElementById('modalArea2');
        modalClose2.classList.remove('is-show2');
      }
    });
  }
};
showMap(); 







document.addEventListener('keyup', (event) => {
  let keyname = event.key;
  let fname = images[map[y][x]];
  let chip = map[y][x];
  if(keyname === 'ArrowLeft') {
    if(fname.indexOf('left') > -1) {
      x -= 1;
    }
  } else if(keyname === 'ArrowRight') {
    if(fname.indexOf('right') > -1){
    x += 1;
  }
  } else if(keyname === 'ArrowUp') {
    if(fname.indexOf('up') > -1) {
    y -= 1;
    }
  } else if(keyname === 'ArrowDown') {
    if(fname.indexOf('down') > -1) {
    y += 1;
    }
  }
  showMap();
});
modalClose = () => {
const modalClose = document.getElementById('modalArea');
modalClose.classList.remove('is-show');
let elem = document.querySelector('div');
map[y][x] = 'K2';
elem.innerHTML='<img src="./img/key2.jpg">';
const i2 = document.getElementById('i2');
i2.classList.remove('show');
const i = document.getElementById('i1');
i.classList.add('show');
window.setTimeout(function(){
  map[y][x] = 'K3';
  elem.innerHTML='<img src="./img/up_key3.jpg">';
}, 1000);
};


modalClose2 = () => {
  const modalClose2 = document.getElementById('modalArea2');
  modalClose2.classList.remove('is-show2');
  
  };
  modalClose3 = () => {
    const modalClose3 = document.getElementById('modalArea3');
    modalClose3.classList.remove('is-show3');
    
    };


