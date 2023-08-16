export default function form() {
   function clearInput() {
      try {
         document.getElementById("name").value = "";
         document.getElementById("email").value = "";
         document.getElementById("massage").value = "";
   
         const send = document.getElementById("submit");
   
         if (send.getAttribute('data-show') === "true") {
            send.innerText = "Отправить";
            send.setAttribute('data-show', "false");    
         }
      } catch (error) {
         console.log(error);
      }
   }
   
   document.querySelector("#submit").onclick = function() {
      const isCanBeSended =  document.getElementById("name").value == ""
      && document.getElementById("email").value == ""
      && document.getElementById("massage").value == "";

      const name = document.querySelector('#name');
      const email = document.querySelector('#email');
      const formMessageText = document.querySelector('.form__message-text');

      if(isCanBeSended) {
         name.classList.add('form-wrong');
         email.classList.add('form-wrong');
         formMessageText.classList.add('form-wrong');
      } else if (document.getElementById("name").value == "") {
         name.classList.add('form-wrong');
      } else if (document.getElementById("email").value == "") {
         email.classList.add('form-wrong');
      } else if (document.getElementById("massage").value == "") {
         formMessageText.classList.add('form-wrong');
      } else {
         name.classList.remove('form-wrong');
         email.classList.remove('form-wrong');
         formMessageText.classList.remove('form-wrong');
      }
   }

   document.forms.publish.onsubmit = function() {
      const send = document.getElementById("submit");
   
      if (send.getAttribute('data-show') === "false") {
         const name = this.name.value;
         const email = this.email.value;
         const massage =this.massage.value;
      
         const obj = {name, email, massage};
         const json = JSON.stringify(obj);
         
         console.log(json);   
         clearInput();
      } else {
         console.log("Данные уже отправлены");
      }
      
      return false;
    };
}


