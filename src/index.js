import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
let clickCount = 0;

$(document).ready(function() {
  $('button').click(function () {
    clickCount++;
    $('#click-count').text(clickCount);
  });
});
