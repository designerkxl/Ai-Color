// function updateColor() {
//     var day = document.getElementById("day").value;
//     var month = document.getElementById("month").value;
//     var year = document.getElementById("year").value;
  
//     var color = generateColor(day, month, year);
//     document.getElementById("colorResult").style.backgroundColor = color;
//   }
  
//   function generateColor(day, month, year) {
//     var red = (day % 255).toString(16).padStart(2, '0');
//     var green = (month % 255).toString(16).padStart(2, '0');
//     var blue = (year % 255).toString(16).padStart(2, '0');
  
//     return "#" + red + green + blue + "80"; // Son iki hane opaklığı belirler (80 = %50 opak)
//   }
  
//! yeniden düzeltme istedim.

// function updateColor() {
//     var day = parseInt(document.getElementById("day").value);
//     var month = parseInt(document.getElementById("month").value);
//     var year = parseInt(document.getElementById("year").value);
  
//     var color = generateColor(day, month, year);
//     document.getElementById("colorResult").style.backgroundColor = color;
//   }
  
//   function generateColor(day, month, year) {
//     var red = ((day + month) % 255).toString(16).padStart(2, '0');
//     var green = ((month + year) % 255).toString(16).padStart(2, '0');
//     var blue = ((year + day) % 255).toString(16).padStart(2, '0');
  
//     return "#" + red + green + blue + "80"; // Son iki hane opaklığı belirler (80 = %50 opak)
//   }
  

//! HSL renk modunda yeniden düzenlettim.

function updateColor() {
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);
  
    var color = generateColor(day, month, year);
    document.getElementById("colorResult").style.backgroundColor = color;
  }
  
  function generateColor(day, month, year) {
    var hue = ((day * 2) % 360).toString();
    var saturation = ((month * 100) / 12).toString() + "%";
    var lightness = ((year * 100) / 2023).toString() + "%";
  
    return "hsl(" + hue + ", " + saturation + ", " + lightness + ")";
  }
  