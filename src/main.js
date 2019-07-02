import './css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { bear } from './game.js';

$(document).ready(function () {
  let fuzzy = bear;

  $("#new-game").click(function(){
    
    fuzzy.setHunger();
    fuzzy.setSleep();
  });

  $("#feed").click(function() {
    fuzzy.eatBerry();
  })


});
