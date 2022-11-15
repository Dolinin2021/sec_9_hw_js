const chatWidget = document.querySelector('.chat-widget');
const messages = document.querySelector( '.chat-widget__messages' );
const input = document.querySelector('.chat-widget__input');

let date = new Date();
let timeDate = date.toLocaleString();

function resetValue(elem)
{
  elem.value = "";
}

function keyCheck(event){
  if (this.value.length === 0) {
    return;
  }
  if (event.keyCode == 13) {
    messages.innerHTML += `
    <div class="message message_client">
      <div class="message__time">`+ timeDate +`</div>
      <div class="message__text">`+ this.value +`</div>
    </div>`;
    resetValue(input);
    robotResponse();
  }
};

function robotResponse() {
  const response = [
    'Вы не купили ни одного товара, чтобы так с нами разговаривать!',
    'Кто тут?',
    'Где ваша совесть?',
    'К сожалению, все операторы сейчас заняты. Не пишите нам больше.',
    'Добрый день. До свидания!',
    'Мы ничего не будем вам продавать!',
  ],
  index = Math.floor(Math.random() * response.length);

  messages.innerHTML += `
  <div class="message">
    <div class="message__time">`+ timeDate +`</div>
    <div class="message__text">
    ` + response[index] +`
    </div>
  </div>
  `;
  }

chatWidget.addEventListener('click', () => {
  chatWidget.classList.add('chat-widget_active');
});

input.addEventListener('keyup',keyCheck);