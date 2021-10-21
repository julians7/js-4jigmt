import './style.scss';
import CurrentTime from './CurrentTime';

const newP = document.createElement('p');
newP.textContent = 'Hi something happend...';
document.querySelector('header').appendChild(newP);
/*
const newDiv = document.createElement('div');
document.querySelector('footer').appendChild(newDiv);

const p = document.createElement('p');
p.textContent = 'here is me message';
newDiv.appendChild(p);

const p2 = document.createElement('p');
p2.textContent = 'P2 ....';
p.appendChild(p2);

p2.append('Novy text');
p2.prepend('last paragraph');
*/
/*
const ulEle = document.createElement('ul');
let iText = '';
['Item 1', 'Item 2', 'Item 3', 'Item 4'].forEach((item) => {
  iText += `<li>${item}</li>`;
});
ulEle.innerHTML = iText;

document.querySelector('footer').appendChild(ulEle);

//set interval
setInterval(() => {
  document.querySelector(
    'body .rene#julius ul:first-child'
  ).innerHTML += `<li>${new Date()}</li>`;
  rene();
}, 1000);

function rene() {
  const arr = document.querySelectorAll('footer>ul>li');
  console.log(arr);
}
*/

CurrentTime.init('#current-time');

CurrentTime.init('#current-time2');

function rene() {
  //encapsulation
  let _age = 0; // privatna premenna - private

  return {
    // setter
    setAge: function (age) {
      // public
      if (age < 0 && age > 150) {
        throw new Error('Chyba v zadani veku!');
      }
      _age = age;
    },
    // getter
    getAge: function () {
      //public
      return _age;
    },
    resetAge: function () {
      _age = 0;
    },
  };
}

let rrene = rene();

function julius() {
  let _options = {
    color: 'red',
    background: 'blue',
  };

  // XY
  function sum() {
    return result.a + result.b;
  }

  function _init(element, options = null) {
    if (options) _options = { ..._options, options };
  }

  let result = {
    a: 0,
    b: 0,
    scitaj: sum,
    sum: sum,
    init: _init,
    _init: _init,
  };

  function rene() {
    //fokjsdopfsjosdg
    let s = sum();
  }

  return result;
}

/*----------------------------------*/

let x = julius();

x.a = 5;
x.b = 2;
let c = x.scitaj();
//console.log(c, x.sum(), x.scitaj());
x.init('sodfsod');
