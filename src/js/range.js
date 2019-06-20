var $price = $("._price");
var $value = $("._value");

$("#range").ionRangeSlider({
  hide_min_max: true,
  min: 3,
  onChange: function(data) {
    var value = data.from;
    if (value >= 5) {
      $value[0].textContent = "~ " + value + " кг в месяц";
      $price[0].textContent = "6500 руб.";
    }
    if (value >= 10) {
      $value[0].textContent = "~ от 10 кг в месяц";
      $price[0].textContent = "12500 руб.";
    }
    if (value < 5) {
      $value[0].textContent = "~ " + value + " кг в месяц";
      $price[0].textContent = "5000 руб.";
    }
  }
});
