const TOKEN = "5649030951:AAG-FKF_jtI0DuXoA7WL_ITJ1znXTm5PIpk";
const CHAT_ID = "550809095";
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const formTelegram = document.querySelectorAll(".telegramForm");

formTelegram.forEach((element) => {
  element.addEventListener("submit", function (e) {
    e.preventDefault();

    let message = `<b>Заявка с ВсеЗнайка</b> \n`;
    message += `<b>Имя :</b> ${this.name.value} \n`;
    message += `<b>Почта :</b> ${this.program.value} \n`;
    message += `<b>Телефон :</b> ${this.phone.value} \n`;
 
    axios
      .post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
      })
      .then((res) => {
        this.name.value = "";
        this.phone.value = "";
        alert(
          "Спасибо! Заявка отправлена. Мы свяжемся с Вами в ближайшие 15 минут!"
        );
      })
      .catch((err) => {
        alert(err);
      });
  });
});

// В php делать запрос на апи телеграм (протестить его). В JS уже сделать запрос на свой php файл.