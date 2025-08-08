'use strict';

function showMessage() {
  console.log('ロゴがクリックされました！'); 
}

const logo = document.querySelector('header .logo');

logo.addEventListener('click', showMessage);