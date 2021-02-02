let name = document.getElementById("name");
let phone = document.getElementById("phone");

function setWithExpiry(key, value, ttl) {
  const now = new Date();
  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
}

$("#order_form").on("submit", function (e) {
  let formData = {
    name: name.value,
    phone: phone.value,
  };

  setWithExpiry("myKey", formData, 20000);
});

$(document).ready(function () {
  $(".reviews__content").slick({
    arrows: true,
    centerMode: true,
    centerPadding: "40px",
    prevArrow:
      '<button type="button" class="slick-prev"><img src="../img/arrow_left.png"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="../img/arrow_right.png"></button>',
  });

  $("a[href^='#']").click(function () {
    var _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    return false;
  });
});

function openModalView() {
  Swal.fire({
    title: "Оставьте отзыв",
    html:
      '<div > <input type="text" id="username" class="swal2-input" placeholder="Введите имя"></input>' +
      '<input  class="swal2-input" placeholder="Введите сообщение"></input> <p>Выберите фото</p> <input type="file" ></input></div>',
    confirmButtonText: "Отправить отзыв",
  }).then(() => {
    Swal.fire("Спасибо!", "Ваш отзыв был отправлен.", "success");
  });
}
