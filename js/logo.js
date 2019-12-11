/*
var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;
console.log('width:' + w + ' height:' + h);
*/

var barra = document.getElementById('barra');
var globo = document.getElementById('globo');
var retina = document.getElementById('retina');
var iris = document.getElementById('iris');
var rotated = false;

var elmnt = document.getElementById("outer-wrapper");


function scrolling() {
  var scroll = elmnt.scrollTop/2;
  //console.log("Scrolling: " + scroll + "px");

  /*-----BARRA-----*/
  var bWidth= barra.clientWidth;
  barra.style.webkitTransform = 'rotate(' + scroll + 'deg)';
  barra.style.transform = 'rotate(' + scroll + 'deg)';

  /*-----GLOBO-----*/
  var gWidth= globo.clientWidth;
  globo.style.webkitTransform = 'rotate(' + scroll + 'deg)';
  globo.style.transform = 'rotate(' + scroll + 'deg)';



  /*-----RETINA-----*/
  var rWidth= retina.clientWidth;
  retina.style.width = (rWidth + (scroll/500)) + "px";



  /*-----IRIS-----*/
  var iWidth= iris.clientWidth;
  iris.style.width = (iWidth + (scroll/300)) + "px";



  rotated = !rotated;
}
