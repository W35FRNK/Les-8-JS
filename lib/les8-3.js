$(document).ready(function () {
  const cellen = $('td');
    console.log('aantal cellen' + cellen.length);
  const rijen = $('#mijnTabel tr')
    console.log('aantal rijen' + rijen.length);
  $('#mijnTabel tr:odd').css('background-color', 'red');
  $('#mijnTabel tr:even').css('background-color', 'blue');



})