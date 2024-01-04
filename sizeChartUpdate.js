var checkOut = document.querySelectorAll(".out-of-stock")[0].innerHTML;
var chekbv = "Out";

$(function() {
   if (checkOut !== chekbv){
      document.getElementById("thanksMasseg").setAttribute("style", "display:block;");
      document.getElementById("thanksMasseg").innerHTML = "Unfortunately This Item Is out Of Stock"+"<br/><br/><span class='mybb' onclick='history.back()'>Go Back</span><br/>" ;
      document.querySelectorAll("#OutofStk")[0].style.display= "none";
      document.querySelectorAll("#size-display-new")[0].innerHTML ="00";

      var labelElements = document.querySelectorAll('.sizes label');
      for (var i = 0; i < labelElements.length; i++) {
         labelElements[i].classList.remove('size');
         labelElements[i].classList.add('size1');
      }

      var inputs = document.getElementsByName('Sizes');
      for (var i = 0; i < inputs.length; i++) {
         inputs[i].disabled = true;
      }
   }
});
