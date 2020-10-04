 let button =document.querySelector('.message-button');
 limit.oninput = limit.onkeyp = limit.onchange = function() {
  var len = this.value.length;
  if (len > this.max) {
    this.value = this.value.substr(10, this.max);
    return false;
  }
  else if (len<10){
    button.disabled = true;
    ('Короткое сообщение');
  }
  else{
    button.disabled = false;
  }
  document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('max-' + this.id).innerHTML = 'Осталось: ' + (+this.max - len) + ' символов';
  }, false);
};

