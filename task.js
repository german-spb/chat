const chatOpen = document.querySelector('.chat-widget')
chatOpen.addEventListener('click', () => {
    chatOpen.classList.add('chat-widget_active')
})

const botText = ["Здравствуйте", "Как Вас зовут?", "Какой у вас вопрос?", "Может сегодня не стоит заниматься этим.." ]
let i = 0

const text = document.getElementById('chat-widget__input')
const messages = document.getElementById( 'chat-widget__messages')
text.addEventListener('keydown', (e) => {
    if (e.key == 'Enter' && text.value.length != 0) {
        messages.innerHTML += `
        <div class="message message_client">
          <div class="message__time">${new Date().toLocaleTimeString('en-US', { hour12: false, 
            hour: "numeric", 
            minute: "numeric"})}</div>
          <div class="message__text">
            ${text.value}
          </div>
        </div>
        `
        text.value = null
        messages.innerHTML += `
        <div class="message">
          <div class="message__time">${new Date().toLocaleTimeString('en-US', { hour12: false, 
            hour: "numeric", 
            minute: "numeric"})}</div>
          <div class="message__text">
           ${botText[i]}
          </div>
        </div>
        ` ;
      if (i < botText.length-1) {
         i++
      }
      else{
        i = 0
      }
    }
})

 