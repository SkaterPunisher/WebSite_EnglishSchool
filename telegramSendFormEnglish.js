const TOKEN = "5649030951:AAG-FKF_jtI0DuXoA7WL_ITJ1znXTm5PIpk";
const CHAT_ID = "550809095";
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const formTelegram = document.querySelectorAll(".telegramForm");

formTelegram.forEach((element) => {
  element.addEventListener("submit", function (e) {
    e.preventDefault();

    let message = `<b>Заявка с English School</b> \n`;
    message += `<b>Имя :</b> ${this.firstName.value} \n`;
    message += `<b>Фамилия :</b> ${this.lastName.value} \n`;
    message += `<b>Город :</b> ${this.city.value} \n`;
    message += `<b>Программа :</b> ${this.program.value} \n`;
    message += `<b>Телефон :</b> ${this.phone.value} \n`;

    axios
      .post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
      })
      .then((res) => {
        this.firstName.value = "";
        this.lastName.value = "";
        this.city.value = "";
        this.phone.value = "";
        alert(
          "Спасибо! Заявка отправлена. Мы свяжемся с Вами в ближайшие 15 минут!"
        );
      })
      .catch((err) => {
        alert('Произошла ошибка. Попробуйте позже.');
        console.log(err);
      });

  });
});

// Всплывающая форма управление
const button = document.querySelectorAll(".popup-btn");
const forma = document.querySelector(".popUpForm1");

const closeForm = document.querySelector(".popUpCancel");


button.forEach((element) => {
  element.addEventListener("click", () => {
    forma.classList.remove("popUpForm__close");
  });
});

closeForm.addEventListener("click", () => {
  forma.classList.add("popUpForm__close");
});
