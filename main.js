const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const refs = {
  btnStart: document.querySelector('.btn-start'),
  btnStop: document.querySelector('.btn-stop'),
  body: document.querySelector('body')
}

 
refs.btnStart.addEventListener('click', onClickStart)
function onClickStart(event) {
  
  const setIntervalId = setInterval(callBackForsetInterval, 1000)
   console.log(event.target.disabled);
   
  refs.btnStop.addEventListener('click', onClickStop)
function onClickStop(event) {
  clearTimeout(setIntervalId)
   console.log(event.target.disabled);
}

}
function callBackForsetInterval() {
  
  const numberOfColor = randomIntegerFromInterval(colors.indexOf(colors[0]), colors.indexOf(colors[5]));
  return refs.body.style.backgroundColor = colors.find((color, index) => index === numberOfColor)
  
}

