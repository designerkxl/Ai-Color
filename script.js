function updateColor() {
  var day = document.getElementById('day').selectedIndex + 1; // Gün değeri 1'den başlar
  var month = document.getElementById('month').selectedIndex + 1; // Ay değeri 1'den başlar
  var yearSelect = document.getElementById('year');
  var year = parseInt(yearSelect.options[yearSelect.selectedIndex].text); // Yıl değerini metin olarak al ve tam sayıya dönüştür

  // HUE, Saturation ve Lightness değerlerini belirleme
  var hue = (day / 31) * 360; // Gün değerini 0-360 aralığına ölçekle
  var saturation = (month / 12) * 100; // Ay değerini 0-100 aralığına ölçekle
  var lightness = ((year - 1923) / (2023 - 1923)) * 100; // Yıl değerini 0-100 aralığına ölçekle

  // HSL renk formatını kullanarak arka plan rengini güncelleme
  var color = 'hsl(' + hue + ', ' + saturation + '%, ' + lightness + '%)';
  document.getElementById('colorResult').style.backgroundColor = color;
}
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});
document.addEventListener('copy', function(e) {
  e.preventDefault();
});