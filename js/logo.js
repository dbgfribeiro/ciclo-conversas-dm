var rotated = false;

function myFunction() {
  var elmnt = document.getElementById("outer-wrapper");
  var scroll = elmnt.scrollTop/2;
  console.log("Scrolling: " + scroll + "px");

  /*-----BARRA-----*/
  var barra = document.getElementById('barra');
  barra.style.webkitTransform = 'rotate(' + scroll + 'deg)' + 'scaleY(' + scroll / 100 + ')' + 'scaleX(' + scroll / 100 + ')';
  barra.style.transform = 'rotate(' + scroll + 'deg)' + 'scaleY(' + scroll / 100 + ')' + 'scaleX(' + scroll / 100 + ')';

  /*-----GLOBO-----*/
  var globo = document.getElementById('globo');
  globo.style.webkitTransform = 'rotate(' + scroll + 'deg)' + 'scaleY(' + scroll / 100 + ')' + 'scaleX(' + scroll / 100 + ')';
  globo.style.transform = 'rotate(' + scroll + 'deg)' + 'scaleY(' + scroll / 100 + ')' + 'scaleX(' + scroll / 100 + ')';

  /*-----RETINA-----*/
  var retina = document.getElementById('retina');
  retina.style.webkitTransform = 'scaleY(' + scroll / 100 + ')' + 'scaleX(' + scroll / 100 + ')';
  retina.style.transform = 'scaleY(' + scroll / 100 + ')' + 'scaleX(' + scroll / 100 + ')';

  /*-----IRIS-----*/
  var iris = document.getElementById('iris');
  iris.style.webkitTransform = 'scaleY(' + scroll / 100 + ')' + 'scaleX(' + scroll / 100 + ')';
  iris.style.transform = 'scaleY(' + scroll / 100 + ')' + 'scaleX(' + scroll / 100 + ')';

  rotated = !rotated;
}
