'use strict';
// let currentscore = 0;
// let players = 0;
// document.querySelector('.btn--roll').addEventListener('click', function () {
//   let randomNumber = Math.trunc(Math.random() * 6) + 1;

//   document.querySelector('.dice').src = `dice-${randomNumber}.png`;
//   if (randomNumber !== 1) {
//     document.querySelector(`#current--${players}`).textContent = currentscore =
//       currentscore + randomNumber;
//   } else {
//     currentscore = 0;
//     players = players === 0 ? 1 : 0;
//     if(players===0){
//         document.querySelector(`.player--0`).classList.add('player--active');
//     document.querySelector('.player--1').classList.remove('player--active');
//     }
//     document.querySelector('#current--0').textContent = currentscore;
//     document.querySelector(`.player--0`).classList.remove('player--active');
//     document.querySelector('.player--1').classList.add('player--active');
//   }
// });
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const player1Score = document.querySelector('#score--0');
const player2Score = document.querySelector('#score--1');
const player1Current = document.getElementById('current--0');
const player2Current = document.getElementById('current--1');

let currentScore = 0;
let playerScore = [0, 0];
let player = 0;
let games = true;
const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${player}`).textContent = currentScore;
  player = player === 0 ? 1 : 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};
document.querySelector('.dice').classList.add('hidden');
btnroll.addEventListener('click', function () {
  if (games) {
    let randomNumber = Math.trunc(Math.random() * 6) + 1;
    document.querySelector('.dice').src = `dice-${randomNumber}.png`;
    document.querySelector('.dice').classList.remove('hidden');

    if (randomNumber !== 1) {
      document.getElementById(`current--${player}`).textContent = currentScore =
        currentScore + randomNumber;
    } else {
      switchPlayer();
    }
  }
});
btnhold.addEventListener('click', function () {
  if (games) {
    playerScore[player] += currentScore;
    //   playerScore[player]= playerScore[player]+currentScore
    document.getElementById(`score--${player}`).textContent =
      playerScore[player];
    if (playerScore[player] >= 10) {
      games = false;
      document.querySelector('.dice').classList.add('hidden');
      document
        .querySelector(`.player--${player}`)
        .classList.toggle('player--winner');
      document
        .querySelector(`.player--${player}`)
        .classList.toggle('player--active');
    }
    switchPlayer();
  }
});
document.querySelector('.btn--new').addEventListener('click', function () {
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
  player2.classList.remove('player--active');
  player1.classList.add('player--active');
  player1Current.textContent = 0;
  player2Current.textContent = 0;
  player1Score.textContent = 0;
  player2Score.textContent = 0;
  playerScore = [0, 0];
  games = true;
  player = 0;
});
