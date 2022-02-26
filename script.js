let field = document.querySelector('.game');
let text = "0";
let arr = [];
alert("сыграем)?\nПравила игры:\nИгроки поочередно нажимают левой кнопкой мыши в поле игры, повляется символ");

for (let i = 0; i < 9; i++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    field.appendChild(cell);
    cell.addEventListener('click', insertCharacter); // работает
    cell.addEventListener("click", function() {
        console.log(this.innerHTML);
    })
  };


function insertCharacter() { // заполнение ячеек "0" или "X" поочередно
    this.textContent = text;
    if (text == '0') {
        text = 'X';
    } else {
        text = '0'
    }
  assignment();
}


function assignment() { // присвоение тектового контента ячейки в массив
  let elements = document.querySelectorAll('.cell'); // - находим "все" ячейки (div с классом cell) получается список в виде "маасива" (но это не массив!)
  for (let elem of elements) { // пробегаемся по этому списку
    arr.push(elem.textContent); // поочередно присваиваем текстовое содержимое этих ячеек в наш массив arr[]
  }
  console.log(arr);
  winning(0,1,2);
  winning(3,4,5);
  winning(6,7,8);
  winning(0,3,6);
  winning(1,4,7);
  winning(2,5,8);
  winning(0,4,8);
  winning(2,4,6);
  arr.splice(0, 9); // удаляет ранее присвоенные 9 элементов при клики игрока, следующие 9 будут уже с учетом этого клика
} 

function winning(a, b, c) { // проверка выигрышных комбинаций
  
  if (arr[a] !=="" && arr[a] == arr[b] && arr[b] == arr[c]) {
    changingColor(a, b, c);
    setTimeout(()=>{
      alert("Выигрыш");
      zeroingOut();
    }, 500);
  } else if (arr.every(n => n !== "")) 
    { 
      setTimeout(()=>{
      alert("НИЧЬЯ!")
      zeroingOut();
    }, 500);
    }
}

function zeroingOut() { // функция обнуления контента в ячеках.
  let elements = document.querySelectorAll('.cell'); //нашли ВСЕ элементы
  for (let elem of elements) { // прохоим по всем эелементам
    elem.textContent = ""; // стираем текстовые данные в ячейке
    elem.classList.remove('cell-changing-color');
  }
}

let button = document.querySelector('.btn'); // находим кнопку
button.addEventListener('click', zeroingOut); // при клике повесили функцию удаления контента в ячеках, обнуление.

function changingColor(a, b, c) {
  let elem = document.querySelectorAll('.cell');
  elem[a].classList.toggle('cell-changing-color');
  elem[b].classList.toggle('cell-changing-color');
  elem[c].classList.toggle('cell-changing-color');
}