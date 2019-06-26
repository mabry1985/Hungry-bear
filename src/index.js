import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $('button').click(function () {
    $('body').append(`<p>blue button clicked</p>`);

  });
});
