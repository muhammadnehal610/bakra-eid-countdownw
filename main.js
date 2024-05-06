var days_html = document.getElementById("days");
var hours_html = document.getElementById("hours");
var min_html = document.getElementById("min");
var sec_html = document.getElementById("seconds");

var now = new Date();
var bakraEid = new Date("6/17/2024");
var diff = bakraEid.getTime() - now.getTime();
var interval = setInterval(function () {
  diff = diff - 1000;
  var curruntTime = new Date();
  var days = diff / 1000/ 60 / 60 / 24;
  var hours = 24 - curruntTime.getHours();
  var min = 60 - curruntTime.getMinutes();
  var second = 60 - curruntTime.getSeconds();
  days_html.innerText = Math.floor(days);
  hours_html.innerText = Math.floor(hours);
  min_html.innerText = Math.floor(min);
  sec_html.innerText = Math.floor(second);
}, 1000);
