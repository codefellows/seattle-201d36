'use strict';

// audio element
var seinfeld = document.getElementById('seinfeld');
// button element
var randomizer = document.getElementById('randomizer');

randomizer.addEventListener('click', function() {
  seinfeld.volume = Math.random();
});

// audio {
//   src: seinfeld.mp3,
//   autoplay: true,
//   controls: true,
//   volume: 0-1,
// }