 let button =document.querySelector('.message-button');
 let commentWrite = document.querySelector('.comment-write');
 limit.oninput = limit.onkeyp = limit.onchange = function() {
  var len = this.value.length;
  if (len > this.max) {
    this.value = this.value.substr(10, this.max);
    return false;
  }
  else if (len<10){
    button.disabled = true;
    commentWrite.classList.add('warning');
    ('Короткое сообщение');
  }
  else if (len>200){
    button.disabled = true;
    commentWrite.classList.add('warning');
  }
  else{
    button.disabled = false;
    commentWrite.classList.remove('warning');
  }
  document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('max-' + this.id).innerHTML = 'Осталось: ' + (+this.max - len) + ' символов';
  }, false);
};

