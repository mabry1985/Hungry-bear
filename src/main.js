import './css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { bear } from './game.js';

$(document).ready(function () {
  let fuzzy = bear;

  $("#new-game").click(function(){
    this.foodLevel= 15,
    this.sleepLevel= 10,
    this.moodLevel= 0,
    clearInterval(fuzzy.setHunger);
    clearInterval(fuzzy.setSleep);
    clearInterval(fuzzy.setMood);
    fuzzy.setHunger();
    fuzzy.setSleep();
  });

  $("#feed").click(function() {
    fuzzy.eatBerry();
  })

  $("#poke").click(function() {
    fuzzy.pokeBear();
  })

});
