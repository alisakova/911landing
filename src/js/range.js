var $price = $("._price");
var $value = $("._value");

$("#range").ionRangeSlider({
  hide_min_max: true,
  min: 5,
  onChange: function(data) {
    var value = data.from;
    if (value >= 10) {
      $value[0].textContent = "~ 5 кг в месяц";
      $price[0].textContent = "7800 руб.";
    }
    if (value >= 16) {
      $value[0].textContent = "~ от 8 кг";
      $price[0].textContent = "по договорённости";
    }
    if (value < 10) {
      $value[0].textContent = "~ 3 кг в месяц";
      $price[0].textContent = "6000 руб.";
    }
  }
});
