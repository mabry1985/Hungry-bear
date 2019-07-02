import './css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { bear } from './game.js';

$(document).ready(function () {
  $("#new-game").click(function(){
    clearInterval(bear.hungerInterval);
    clearInterval(bear.sleepInterval);
    clearInterval(bear.moodInterval);
    bear.foodLevel = 15;
    bear.sleepLevel = 120;
    bear.moodLevel = 0;
    bear.setHunger();
    bear.setSleep();
  });

  $("#feed").click(function() {
    bear.eatBerry();
  })

  $("#poke").click(function() {
    bear.pokeBear();
  })

});
