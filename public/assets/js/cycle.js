var cycleText = [
  'SOFTWARE ENGINEER',
  'FRONT-END DEVELOPER',
  'BACK-END DEVELOPER',
  'FRONT END ENGINEER',
  'BACK END ENGINEER'
];

for(var i = 0; i < cycleText.length; i++) {
  $('<div>').text(cycleText[i]).addClass('item').appendTo('.text .cycle');
}

var cycleLength = 0;
$('.text .cycle .item').each(function(index) {
  $(this).data('cycle-num', index + 1);
  cycleLength++;
});

setInterval(function() {
  var $current = $('.text .cycle .item.current');
  var currentNum = $current.data('cycle-num');
  
  $('.text .cycle .item.last').removeClass('last');
  $current.removeClass('current');
  $current.addClass('last');
  
  var next = 1;
  if(currentNum !== cycleLength) next = currentNum + 1;
  
  $('.text .cycle .item').filter(function() {
    return $(this).data('cycle-num') == next;
  }).addClass('current');
  
  //console.log(next);
}, 2000);