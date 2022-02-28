// window.onLoad = () => {
//   'use strict';
console.log('1');
function regSW(){
  console.log('2');
  if('serviceWorker' in navigator) {
    console.log('3');
    navigator.serviceWorker.register('sw.js');
  }
}
