"use strict";
// объект с цветами
const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

// выбираю кнопки и само тело сайта что бы на него кидать цвет
const refs = {
  butStart: document.querySelector('button[data-action="start"]'),
  butStop: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector("body")
};

// создаю объект бодиКолор с состоянием переключателя и методом переключения цвета
const bodyColor = {
  colorList: false, // флаг фключен ли переключатель цвета

  // метод переключения цвета
  startListcolor(colors) {
    //проверяю или ключен уже переключатель
    if (this.colorList) {
      return;
    }
    // если переключатель не включен то
    this.colorList = true; //переключаю переключатель в режим "труэ"
    // и создаю сетИнтервал и посылаю в него функцию переключения цветов и массив цветов
    this.colorId = setInterval(colorChange, 1000, colors);
  },

  // это метод который переключает выключатель на фолс и удаляет сетИнтервал
  stopListColor() {
    this.colorList = false;
    clearInterval(this.colorId);
  }
};

//функция рандомайза в выбранном диапазоне
function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// функция для выбора цвета из массива и присвоиения его бекграунду боди (ее буду вызывать в сетИнтервале)
function colorChange(colors) {
  // выбираю цвет с индексом = рандомайз (от 0 до длины массива цветов)  
  const randomColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  // вешаю этот цвет на боди
  refs.body.bgColor = randomColor;
}

//вешаю вызов метода объекта для смены цвета на клик по кнопке старт
refs.butStart.addEventListener("click", () => {
  bodyColor.startListcolor(colors);
});

//вешаю вызов метода объекта для отключения смены цвета на клик по кнопке стоп
refs.butStop.addEventListener("click", () => {
  bodyColor.stopListColor();
});
