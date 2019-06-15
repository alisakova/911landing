$(document).on("click", ".video__btn", function(e) {
  //отменяем стандартное действие button
  e.preventDefault();
  var poster = $(this);
  // ищем родителя ближайшего по классу
  var wrapper = poster.closest(".video__container");
  videoPlay(wrapper);
});

//вопроизводим видео, при этом скрывая постер
function videoPlay(wrapper) {
  var iframe = wrapper.find(".video__frame");
  // Берем ссылку видео из data
  var src = iframe.data("src");
  // скрываем постер
  wrapper.addClass("active");
  // подставляем в src параметр из data
  iframe.attr("src", src);
}

document.querySelector('.video__frame').contentWindow.document.body.onclick = function() {
  $(".video__container").addClass('active');
  var src = $(".video__frame").data("src");
  $(".video__frame").attr("src", src);
}
